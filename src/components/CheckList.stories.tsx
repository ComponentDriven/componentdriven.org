import React from 'react';
import styled from 'styled-components';
import { CheckListItem, CheckList } from './CheckList';

export default {
  component: CheckList,
  title: 'Components/CheckList',
};

export const Check = () => (
  <CheckList>
    <CheckListItem type="check">
      <b>Quality:</b> Verify that UIs work in different scenarios by building
      components in isolation and defining their relevant states.
    </CheckListItem>
    <CheckListItem type="check">
      <b>Durability:</b> Pinpoint bugs down to the detail by testing at the
      component level. It’s less work and more precise than testing screens.
    </CheckListItem>
    <CheckListItem type="check">
      <b>Speed:</b> Assemble UIs faster by reusing existing components from a
      component library or design system.
    </CheckListItem>
    <CheckListItem type="check">
      <b>Efficiency:</b> Parallelize development and design by decomposing UI
      into discrete components then sharing the load between different team
      members.
    </CheckListItem>
  </CheckList>
);

export const Cross = () => (
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
);
