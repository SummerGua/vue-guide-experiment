export interface TourConfig {
  route: {
    mode: 'hash' | 'history';
    path: string;
  };
  once?: boolean;
  allowSkip?: boolean;
  steps: Step[];
  start?: (...args: unknown[]) => unknown;
  end?: (...args: unknown[]) => unknown;
  change?: (...args: unknown[]) => unknown;
}

interface Step {
  target: string;
  text: string;
}
