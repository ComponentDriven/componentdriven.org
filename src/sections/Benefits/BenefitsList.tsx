import React from 'react';
import { Heading } from '../../components/Heading';
import { CheckList, CheckListItem } from '../../components/CheckList';
import { Measure } from '../../components/Measure';

export const BenefitsList = () => (
  <Measure variant="regular">
    <Heading level="3" as="h2">
      Benefits
    </Heading>
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
  </Measure>
);
