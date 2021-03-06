import {useEffect} from 'react';
import {useState} from 'react';

/**
 * useDebounce
 * @param {any} value
 * @param {any} delay
 * @returns {any}
 */
function useDebounce(value, delay) {
  const [debouncedValue, setDebouncedValue] = useState(value);
  useEffect(
    () => {
      const handler = setTimeout(() => {
        setDebouncedValue(value);
      }, delay);
      return () => {
        clearTimeout(handler);
      };
    },
    [value, delay],
  );
  return debouncedValue;
}

export default useDebounce;
