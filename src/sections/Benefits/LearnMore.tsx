import React from 'react';
import { Link, styles } from '@storybook/design-system';
import { Heading, HeadingProps } from '../../components/Heading';
import { Stack } from '../../components/Stack';
import { Text, TextProps } from '../../components/Text';
import { Measure } from '../../components/Measure';
import styled from 'styled-components';

const ResourceTitle = styled(Heading).attrs({ level: '4', as: 'dt' })<
  HeadingProps
>`
  font-weight: ${styles.typography.weight.black};
  line-height: 28px;
`;

const ResourceDescription = styled(Text).attrs({ as: 'dd' })<TextProps>`
  margin-left: 0;
`;

type ResourceProps = { title: string; link: string; description: string };

const Resource = ({ title, link, description }: ResourceProps) => (
  <div>
    <ResourceTitle>
      <Link href={link} target="_blank" rel="noopener">
        {title}
      </Link>
    </ResourceTitle>
    <ResourceDescription>{description}</ResourceDescription>
  </div>
);

export const LearnMore = () => (
  <Measure variant="regular">
    <Heading level="3" as="h3">
      Learn More
    </Heading>
    <Stack axis="vertical" space="xsmall" as="dl">
      <Resource
        link="https://blog.hichroma.com/component-driven-development-ce1109d56c8e"
        title="Component Driven Development"
        description="A development methodology that anchors the build process around components. It is a process that builds UIs from the “bottom up” by starting at the level of components and ending at the level of pages or screens."
      />
      <Resource
        link="https://bradfrost.com/blog/post/atomic-web-design/"
        title="Atomic Design"
        description="Atomic Design is atoms, molecules, organisms, templates, and pages concurrently working together to create effective interface design systems. It is a mental model to help us think of our user interfaces as both a cohesive whole and a collection of parts at the same time."
      />
      <Resource
        link="https://www.designbetter.co/design-systems-handbook"
        title="Design Systems Handbook"
        description="This book guides readers through best practices around planning, designing, building, and implementing a design system, with insights and first-hand experiences from experts who have gone through the journey."
      />
    </Stack>
  </Measure>
);
