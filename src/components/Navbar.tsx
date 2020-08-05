import styled from 'styled-components';
import GitHubButton from 'react-github-button';
import {
  styles,
  Link,
  Icon,
  TooltipLinkList,
  WithTooltip,
} from '@storybook/design-system';
import { Stack } from './Stack';
import { margin } from '../styles';

const { color, typography, breakpoint } = styles;

const LogoLink = styled(Link)`
  display: block;

  img {
    display: block;
  }
`;

const GitHubLink = styled(GitHubButton)`
  transition: transform 150ms ease-out;
  transform: translate3d(0, 0, 0) scale(0.84);

  &:hover {
    transform: translate3d(0, -1px, 0) scale(0.84);
  }
  &:active {
    transform: translate3d(0, 0, 0) scale(0.84);
  }

  .github-btn {
    font: bold 14px/14px 'Helvetica Neue', Helvetica, Arial, sans-serif;
    height: auto;
    .gh-btn,
    .gh-count {
      padding: 4px 8px;
    }
  }
`;

const NavLink = styled(Link)`
  font-size: ${typography.size.s2}px;
  font-weight: ${typography.weight.extrabold};
  line-height: 19px;
  && {
    color: ${color.lightest};
  }
`;

type link = { title: string; href: string };
type NavGroupProps = {
  links: link[];
};

const Nav = styled.nav`
  display: none;

  @media (min-width: ${breakpoint}px) {
    display: block;
  }
`;

const NavGroup = ({ links }: NavGroupProps) => (
  <Nav>
    <Stack space={25} alignment="center">
      {links.map((link) => (
        <NavLink tertiary key={link.title} href={link.href}>
          {link.title}
        </NavLink>
      ))}
    </Stack>
  </Nav>
);

const CollapsedNav = styled(WithTooltip).attrs({
  'aria-label': 'Open the main nav',
})`
  display: inline;
  margin-left: ${margin.xsmall}px;

  @media (min-width: ${breakpoint}px) {
    display: none;
  }
`;

const NavItem = styled.div`
  min-width: 82px;
`;

export type NavbarProps = {
  links: link[];
  githubLink: { namespace: string; repo: string };
};

export const Navbar = ({ links, githubLink }: NavbarProps) => (
  <Stack space="evenly" alignment="center">
    <NavItem>
      <LogoLink href="/">
        <img src="/logo-componentdriven.svg" alt="Component Driven" />
      </LogoLink>
    </NavItem>
    <NavGroup links={links} />
    <Stack axis="horizontal" space="0">
      <NavItem data-chromatic="ignore">
        <GitHubLink
          type="stargazers"
          namespace={githubLink.namespace}
          repo={githubLink.repo}
        />
      </NavItem>
      <CollapsedNav
        tagName="span"
        placement="top"
        trigger="click"
        tooltip={<TooltipLinkList links={links} />}
        closeOnClick
      >
        <Link tertiary inverse>
          <Icon icon="menu" />
        </Link>
      </CollapsedNav>
    </Stack>
  </Stack>
);
