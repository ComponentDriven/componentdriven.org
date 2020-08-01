import React from 'react';
import { Card, CardBody, CardMedia } from './Card';
import { Text } from './Text';

export default {
  component: Card,
  title: 'Components/Card',
};

export const Default = () => (
  <Card style={{ margin: '2rem' }}>
    <CardMedia style={{ backgroundColor: '#66BF3C' }}>
      <img src="/logos/logo-csf.svg" style={{ padding: 64 }} />
    </CardMedia>
    <CardBody>
      <Text style={{ padding: 64 }}>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed turpis
        nibh, imperdiet ac gravida eleifend, pretium in augue. Ut et elit vel
        ante sodales feugiat cursus sit amet augue. Etiam nec est ac lacus
        convallis volutpat id a enim. Pellentesque luctus non urna vel molestie.
        Suspendisse potenti. Aliquam malesuada sit amet est vitae varius.
        Vestibulum vitae lorem quis augue pharetra fringilla. Nullam eget
        dignissim nisi, id facilisis sem.
      </Text>
    </CardBody>
  </Card>
);
