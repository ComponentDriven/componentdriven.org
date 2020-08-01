import React from 'react';
import styled from 'styled-components';
import { Link, styles } from '@storybook/design-system';
import { Card, CardMedia, CardBody } from '../../components/Card';
import { Text } from '../../components/Text';
import { CheckList, CheckListItem } from '../../components/CheckList';
import { Stack } from '../../components/Stack';

const CSFLogo = styled(CardMedia)`
  background-color: ${styles.color.green};
`;

const CSFDescription = styled(CardBody)`
  padding-top: 40px;
  padding-right: 20px;
  padding-bottom: 40px;
  padding-left: 20px;

  @media (min-width: ${styles.breakpoint * 1}px) {
    padding-right: 40px;
    padding-left: 40px;
  }

  @media (min-width: ${styles.breakpoint * 1.75}px) {
    padding-top: 52px;
    padding-right: 24px;
    padding-bottom: 60px;
    padding-left: 70px;
  }
`;

export const CSF = () => (
  <Card>
    <CSFLogo>
      <img src="/logos/logo-csf.svg" style={{}} />
    </CSFLogo>
    <CSFDescription>
      <Stack axis="vertical" space="small">
        <Text>
          The{' '}
          <Link href="https://github.com/ComponentDriven/csf">
            Component Story Format
          </Link>{' '}
          is an open standard for component examples based on JavaScript ES6
          modules. This enables interoperation between development, testing, and
          design tools.
        </Text>
        <CheckList>
          <CheckListItem type="check">
            <b>Simple:</b> Writing component “stories” is as easy as exporting
            ES6 functions using a clean, widely-used format.
          </CheckListItem>
          <CheckListItem type="check">
            <b>Non-proprietary:</b> CSF doesn’t require any vendor-specific
            libraries.
          </CheckListItem>
          <CheckListItem type="check">
            <b>Declarative:</b> The declarative syntax is isomorphic to
            higher-level formats like MDX, enabling clean, verifiable
            transformations.
          </CheckListItem>
        </CheckList>
      </Stack>
    </CSFDescription>
  </Card>
);
