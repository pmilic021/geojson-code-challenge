// When text is broken by multiple elements, we have to use custom matcher
export const matcher = (targetString: string) => (
  content: string,
  node: HTMLElement
) => {
  return node.textContent === targetString;
};
