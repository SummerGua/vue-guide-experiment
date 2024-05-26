export const setTipPosition = (div: HTMLElement, rect: DOMRect) => {
  div.style.left = `${rect.left}px`;
  div.style.top = `${rect.top}px`;
  div.style.width = `${rect.width}px`;
  div.style.height = `${rect.height}px`;
  div.style.transform = 'scale(1.1)';
};

export const moveTipTextPosition = (div: HTMLElement, rect: DOMRect) => {
  div.style.left = `${rect.left}px`;
  div.style.top = `${rect.top + rect.height + 10}px`;
};

export const setElementContent = (div: HTMLElement, content: string) => {
  div.textContent = content;
};
