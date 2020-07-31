import React from 'react';
import { Heading } from '../../components/Heading';
import { Stack } from '../../components/Stack';
import { Text } from '../../components/Text';
import { Measure } from '../../components/Measure';

export const ComplementaryTrends = () => (
  <Measure variant="regular">
    <Heading level="3" as="h3">
      Complementary trends
    </Heading>
    <Stack axis="vertical" space="xsmall">
      <Text>
        <b>Design systems:</b> A holistic approach to user interface design that
        documents all UI patterns in a centralized system that includes assets
        (Sketch, Figma, etc.), design principles, governance, and a component
        library.
      </Text>
      <Text>
        <b>JAMStack:</b> A methodology for building websites that pre-renders
        static files and serves them directly from a CDN (as opposed to a
        server). The UIs of JAMStack sites rely on componentized JavaScript
        frameworks.
      </Text>
      <Text>
        <b>Agile:</b> A method of software development that promotes short
        feedback loops and rapid iteration. Components help teams ship faster by
        reusing readymade building blocks. That allows agile teams to focus more
        on adapting to user requirements.
      </Text>
    </Stack>
  </Measure>
);
