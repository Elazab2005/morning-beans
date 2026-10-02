import { useState, useEffect } from 'react';
export default function useLocalStorage(key, initial) {
  const [value, setValue] = useState(() => {
    try { const v = JSON.parse(localStorage.getItem(key)); return Array.isArray(initial) && !Array.isArray(v) ? initial : v ?? initial; }
    catch { return initial; }
  });
  useEffect(() => { try { localStorage.setItem(key, JSON.stringify(value)); } catch { /* storage unavailable */ } }, [key, value]);
  return [value, setValue];
}
