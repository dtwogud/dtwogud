import { StrictMode } from "react";
import React, { useState, useEffect, useRef } from "react";
import ReactDOM from "react-dom";

export const useFadeIn = (duration = 1, delay = 0) => {
  const element = useRef();
  useEffect(() => {
    if (element.current) {
      console.log(element.current);
      const { current } = element;
      current.style.transition = `opacity ${duration}s ease-in-out ${delay}s`;
      current.style.opacity = 1;
    }
  }, []);
  if (typeof duration !== "number" || typeof delay !== "number") {
    return;
  }
  return { ref: element, style: { opacity: 0 } };
};
