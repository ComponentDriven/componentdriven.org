import React from 'react';
import styled from 'styled-components';
import { styles } from '@storybook/design-system';
import { Stack } from '../../components/Stack';
import { sectionPadding } from '../../styles';
import { Heading, HeadingProps } from '../../components/Heading';
import { SubHeading } from '../../components/SubHeading';
import { LogoGrid } from '../../components/LogoGrid';
import { developmentTools } from '../../development-tools';
import { Measure } from '../../components/Measure';
import { designTools } from '../../design-tools';
import { CSF } from './CSF';

const { pageMargins } = styles;

const ToolsContainer = styled.div`
  ${pageMargins}
  ${sectionPadding}
`;

const ToolsSectionTitle = styled(Heading).attrs({
  level: '2',
  as: 'h2',
})<HeadingProps>`
  margin-bottom: 32px;
`;

const ToolsSubTitle = styled(SubHeading).attrs({ as: 'h3' })`
  margin-bottom: 24px;
`;

export const Tools = () => (
  <ToolsContainer id="tools">
    <Measure variant="xwide">
      <ToolsSectionTitle>Tools</ToolsSectionTitle>
      <Stack axis="vertical" space="medium">
        <div>
          <ToolsSubTitle>Standards</ToolsSubTitle>
          <CSF />
        </div>
        <div>
          <ToolsSubTitle>Development</ToolsSubTitle>
          <LogoGrid items={developmentTools} />
        </div>
        <div>
          <ToolsSubTitle>Design</ToolsSubTitle>
          <LogoGrid items={designTools} />
        </div>
      </Stack>
    </Measure>
  </ToolsContainer>
);
