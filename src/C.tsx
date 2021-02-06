import { styled } from '@linaria/react';
import { Text, Title } from './styled';
import React, { useState } from 'react';
import { css } from '@linaria/core';

const MarginedText = styled(Text)`
  font-style: normal;
  margin: 24px;
`;

const Text2 = styled.p<{ small: boolean }>`
  font-size: ${(props) => (props.small ? "9px" : "20px")};
`;

declare module 'csstype' {
  interface Properties {
    // Add a CSS Custom Property
    '--box-size'?: string;
  }
}

export const C = () => {
  const [val, setVal] = useState<number | ''>(10);
  const [color, setColor] = useState("black");
  const [small, setSmall] = useState(false);

  return (
    <div>
      <Title>Page C</Title>
      <br />
      <br />
      <select value={color} onChange={(ev) => setColor(ev.target.value)}>
        <option value="black">black</option>
        <option value="green">green</option>
      </select>
      <br />
      <br />
      <input
        type="number"
        placeholder="type"
        value={val}
        onChange={(ev) => setVal(ev.target.value === '' ? '' : +ev.target.value)}
      />
      <br />
      <br />
      <label>
        Small txt?
        <input
          type="checkbox"
          checked={small}
          onChange={() => setSmall((curr) => !curr)}
        />
      </label>
      <br />
      <br />
      <Text color={color}>This is some text</Text>
      <br />
      <br />
      <Text2 small={small}>Toggle checkbox to change font size</Text2>
      <MarginedText color={color}>Some txt</MarginedText>
      <div
        // https://github.com/callstack/linaria/blob/master/docs/DYNAMIC_STYLES.md#dynamic-styles-with-css-tag
        // It's not possible to use dynamic styles with css like bellow:
        // className={css`
        //   background: yellow;
        //   height: ${val}px;
        //   width: ${val}px;
        // `}
        // so alternative is used:
        className={css`
          background: yellow;
          height: var(--box-size);
          width: var(--box-size);
        `}
        style={{ '--box-size': `${val || 0}px` }}
      />
    </div>
  );
};

export default C;
