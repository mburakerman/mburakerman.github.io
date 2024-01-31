import React from "react";
import type { DetailedReactHTMLElement } from "react";

type StyledComponent = {
  children: React.ReactNode;
};

type Tag = keyof JSX.IntrinsicElements;

type Styled = Record<
  Tag,
  (
    strings: TemplateStringsArray,
  ) => (props: StyledComponent) => DetailedReactHTMLElement<any, HTMLElement>
>;

const tags: Tag[] = ["div", "button", "span", "header"];

function generateComponent(tag: Tag) {
  return (strings: TemplateStringsArray) =>
    ({ children }: StyledComponent) => {
      const cleanCss = strings[0].replace("\n", "");
      const objCss = css2obj(cleanCss);

      return React.createElement(tag, { style: { ...objCss } }, children);
    };
}

export const styled = Object.fromEntries(
  tags.map((tag) => [tag, generateComponent(tag)]),
) as Styled;

const css2obj = (css: string) => {
  const r = /(?<=^|;)\s*([^:]+)\s*:\s*([^;]+)\s*/g,
    o: Record<string, string> = {};

  css.replace(r, (m, p, v) => (o[p] = v));
  return o;
};

export const StyledButton = styled.button`
  border: none;
  border-radius: 4px;
  background-color: pink;
  color: #111;
  padding: 3px 10px;
  cursor: pointer;
`;
