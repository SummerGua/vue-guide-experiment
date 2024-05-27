import { Router } from 'vue-router';

export interface TourConfig {
  router: Router;
  routeName: string;
  once?: boolean;
  allowSkip?: boolean;
  steps: Step[];
  start?: (...args: unknown[]) => unknown;
  end?: (...args: unknown[]) => unknown;
  change?: (...args: unknown[]) => unknown;
}

export interface Step {
  target: string;
  text: string;
}
