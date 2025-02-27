type VoidFunction<T> = (arg: T) => void;

export function debouncedCallback<T>(callback: VoidFunction<T>, delay: number) {
  let timeout: NodeJS.Timeout | null;
  return (arg: T) => {
    if (timeout) {
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      callback(arg);
    }, delay);
  };
}
