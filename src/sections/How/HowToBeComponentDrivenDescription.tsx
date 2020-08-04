import React, { useLayoutEffect } from 'react';
import styled from 'styled-components';
import { motion, useAnimation, AnimationControls } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { ExplainerCard } from '../../components/ExplainerCard';
import { margin } from '../../styles';
import { Stack, StackProps } from '../../components/Stack';

const DescriptionListContainer = styled(Stack)<StackProps>`
  margin-top: ${margin.large}px;
`;

const MotionImg = styled(motion.img).attrs({
  initial: { y: '-100%', opacity: 0 },
})<any>`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: 1;
`;

function useAnimateInView(): [React.Ref<HTMLElement>, AnimationControls] {
  const controls = useAnimation();

  const [ref, inView] = useInView({
    threshold: 1,
    triggerOnce: true,
    rootMargin: '0px 0px -200px 0px',
  });

  const sequence = async () => {
    await controls.start({
      y: '0%',
      opacity: 1,
      transition: {
        ease: [0.76, 0, 0.24, 1],
        duration: 0.8,
      },
    });

    return await controls.start({
      opacity: 0,
    });
  };

  useLayoutEffect(() => {
    if (inView) {
      sequence();
    }
  }, [controls, inView]);

  return [ref, controls];
}

export const HowToBeComponentDrivenDescription = () => {
  const [compositionRef, compositionControls] = useAnimateInView();
  const [pageRef, pageControls] = useAnimateInView();
  const [integrateRef, integrateControls] = useAnimateInView();

  return (
    <DescriptionListContainer axis="vertical" space="80px">
      <ExplainerCard
        illustration={<img src="/component.svg" />}
        term="Build one component at a time"
        definition="Build each component in isolation and define its relevant states. Start small."
        examples={['Avatar', 'Button', 'Input', 'Tooltip']}
      />
      <ExplainerCard
        illustration={
          <>
            <img src="/composition.svg" />
            <MotionImg
              src="/composition-stack.svg"
              ref={compositionRef}
              animate={compositionControls}
            />
          </>
        }
        term="Combine components"
        definition="Compose small components together to unlock new features while gradually increasing complexity."
        examples={['Forms', 'Header', 'List', 'Table']}
      />
      <ExplainerCard
        illustration={
          <>
            <img src="/page.svg" />
            <MotionImg
              src="/page-stack.svg"
              ref={pageRef}
              animate={pageControls}
            />
          </>
        }
        term="Assemble pages"
        definition="Build pages by combining composite components. Use mock data to simulate pages in hard-to-reach states and edge cases."
        examples={['Home page', 'Settings page', 'Profile page']}
      />
      <ExplainerCard
        illustration={
          <>
            <img src="/integrate.svg" />
            <MotionImg
              src="/integrate-stack.svg"
              ref={integrateRef}
              animate={integrateControls}
            />
          </>
        }
        term="Integrate pages into your project"
        definition="Add pages to your app by connecting data and hooking up business logic. This is when your UI meets your backend APIs and services."
        examples={['Web app', 'Marketing site', 'Docs site']}
        hideArrow
      />
    </DescriptionListContainer>
  );
};
