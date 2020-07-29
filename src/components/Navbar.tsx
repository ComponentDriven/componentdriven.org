import styled from 'styled-components';
import GitHubButton from 'react-github-button';
import { styles, Link } from '@storybook/design-system';
import { IconLearnStorybook } from './IconLearnStorybook';
import { Stack } from './Stack';

const { color, pageMargins, typography, breakpoint } = styles;

const Logo = styled(IconLearnStorybook)`
  && {
    height: 32px;
    width: auto;
    display: block;
    transition: transform 150ms ease-out;
    transform: translate3d(0, 0, 0);

    &:hover {
      transform: translate3d(0, -1px, 0);
    }
    &:active {
      transform: translate3d(0, 0, 0);
    }
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

type link = { title; href };
type NavGroupProps = {
  links: link[];
};

const NavGroup = ({ links }: NavGroupProps) => (
  <nav>
    <Stack space={25} align="center">
      {links.map((link) => (
        <NavLink tertiary key={link.title} href={link.href}>
          {link.title}
        </NavLink>
      ))}
    </Stack>
  </nav>
);

const NavWrapper = styled.div`
  ${pageMargins}
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
      <Logo />
    </NavItem>
    <NavGroup links={links} />
    <NavItem>
      <GitHubLink
        type="stargazers"
        namespace={githubLink.namespace}
        repo={githubLink.repo}
      />
    </NavItem>
  </Stack>
);
