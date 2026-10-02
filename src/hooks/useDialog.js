import { useEffect } from 'react';
export default function useDialog(onClose) {
  useEffect(() => {
    const key = (e) => e.key === 'Escape' && onClose();
    document.addEventListener('keydown', key);
    document.body.classList.add('lock');
    return () => { document.removeEventListener('keydown', key); document.body.classList.remove('lock'); };
  }, [onClose]);
}
