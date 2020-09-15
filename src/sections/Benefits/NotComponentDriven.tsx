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
        <b>Page-based:</b> Development and design processes that treats a
        website as a collection of pages. Not much effort is made to reuse
        common elements across pages.
      </CheckListItem>
      <CheckListItem type="cross">
        <b>Tools designed for pages:</b> Tools that focus on displaying
        documents like Wordpress and Drupal. Backend frameworks such as Rails,
        Django and PHP that treat UI reuse as an afterthought and discourage
        widespread component reuse.
      </CheckListItem>
    </CheckList>
  </Measure>
);
