import { styled } from '@linaria/react';
import { ComponentProps } from 'react';

export const Title = styled.h1`
  color: red;
`;

export const Description = styled.p`
  color: blue;
`;

type TextProps = Omit<ComponentProps<'p'>, 'color'> & { color: string };

export const Text = styled.p<TextProps>`
  text-transform: uppercase;
  font-style: italic;
  color: ${(props) => props.color};
`;
