export const getOutlineSize = (selector: string) => {
  const el = document.querySelector(selector);
  console.log(selector);
  if (!el) throw new Error(`element ${selector} not found`);
  const { width, height, left, top } = el.getBoundingClientRect();
  return {
    width,
    height,
    left,
    top,
  };
};

export const getPixel = (num: number) => {
  return `${num}px`;
};
