import React from 'react';
import { Heading } from '../../components/Heading';
import { CheckList, CheckListItem } from '../../components/CheckList';
import { Measure } from '../../components/Measure';

export const NotComponentDriven = () => (
  <Measure variant="regular">
    <Heading level="3" as="h3">
      What UIs are not Component Driven?
    </Heading>
    <CheckList>
      <CheckListItem type="cross">
        <b>Website builders:</b> UIs built with drag and drop tools like
        Squarespace, Wix, Weebly, or Wordpress.
      </CheckListItem>
      <CheckListItem type="cross">
        <b>Monoliths:</b> UIs powered by classic frameworks like Rails, Django,
        PHP where the appearance isn’t separated from the business logic.
      </CheckListItem>
    </CheckList>
  </Measure>
);
