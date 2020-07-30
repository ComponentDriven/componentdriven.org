import React from 'react';
import { ExplainerCard } from '../../components/ExplainerCard';
import styled from 'styled-components';
import { margin } from '../../styles';
import { Stack, StackProps } from '../../components/Stack';

const DescriptionListContainer = styled(Stack)<StackProps>`
  margin-top: ${margin.large}px;
`;

export const DescriptionList = () => (
  <DescriptionListContainer axis="vertical" space="80px">
    <ExplainerCard
      illustration={<img src="/component.svg" />}
      term="Build one component at a time"
      definition="Build each component in isolation and define its relevant states. Start small."
      examples={['Avatar', 'Button', 'Input', 'Tooltip']}
    />
    <ExplainerCard
      illustration={<img src="/composition.svg" />}
      term="Combine components"
      definition="Compose small components together to unlock new features while gradually increasing complexity."
      examples={['Forms', 'Header', 'List', 'Table']}
    />
    <ExplainerCard
      illustration={<img src="/page.svg" />}
      term="Assemble pages"
      definition="Build pages by combining composite components. Use mock data to simulate pages in hard-to-reach states and edge cases."
      examples={['Home page', 'Settings page', 'Profile page']}
    />
    <ExplainerCard
      illustration={<img src="/integrate.svg" />}
      term="Integrate pages into your project"
      definition="Add pages to your app by connecting data and hooking up business logic. This is when your UI meets your backend APIs and services."
      examples={['Web app', 'Marketing site', 'Docs site']}
      hideArrow
    />
  </DescriptionListContainer>
);
