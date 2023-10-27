import React, { useState } from 'react';

const useVisualMode = (initial) => {
  const [history, setHistory] = useState([initial]);

  const transition = (mode, replace = false) => {
    setHistory(prev => (replace ?  [...prev.slice(0, prev.length - 1), mode]: [...prev, mode]));
  };

  const back = () => {
    setHistory(prev => (prev.length <= 1 ? [...prev] : [...prev.slice(0, prev.length - 1)]));
  };

  return {
    mode: history[history.length - 1],
    transition,
    back
  };
};



export default useVisualMode;