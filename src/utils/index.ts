/**
 * throttle
 * @param callback
 * @param delay
 */
export function throttle(func: () => void, delay: number) {
  let timer: NodeJS.Timeout | null;
  return function (...args: unknown[]) {
    if (!timer) {
      timer = setTimeout(function (this: typeof func) {
        timer = null;
        func.apply(this, args as []);
      }, delay);
    }
  };
}

export const isServer = () => typeof window === 'undefined';
