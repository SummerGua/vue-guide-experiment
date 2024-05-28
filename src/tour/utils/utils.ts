export const getOutlineSize = (selector: string) => {
  const el = document.querySelector(selector);
  console.log(selector);
  if (!el) throw new Error(`element ${selector} not found`);
  const { width, height, x, y } = el.getBoundingClientRect();
  return {
    width,
    height,
    x: x + window.scrollX,
    y: y + window.scrollY,
  };
};

export const getPixel = (num: number) => {
  return `${num}px`;
};
