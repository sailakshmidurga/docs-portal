"use client";

import { useEffect } from "react";

export default function CodeCopyEnhancer() {
  useEffect(() => {
    const blocks = document.querySelectorAll("pre");

    blocks.forEach((block) => {
      if (block.querySelector("button")) return;

      // Create wrapper
      const wrapper = document.createElement("div");
      wrapper.style.position = "relative";
      wrapper.style.marginTop = "10px";

      block.parentNode?.insertBefore(wrapper, block);
      wrapper.appendChild(block);

      // Style block properly
      block.style.padding = "16px";
      block.style.background = "#f3f3f3";
      block.style.border = "1px solid #ccc";
      block.style.borderRadius = "4px";
      block.style.overflowX = "auto";

      // Create button
      const button = document.createElement("button");
      button.innerText = "Copy";

      button.style.position = "absolute";
      button.style.top = "8px";
      button.style.right = "8px";
      button.style.fontSize = "12px";
      button.style.padding = "4px 8px";
      button.style.border = "1px solid #aaa";
      button.style.background = "#fff";
      button.style.cursor = "pointer";

      button.onclick = () => {
        const code = block.querySelector("code");
        const text = code ? code.textContent : block.textContent;

        navigator.clipboard.writeText(text || "");

        button.innerText = "Copied!";
        setTimeout(() => (button.innerText = "Copy"), 1500);
      };

      wrapper.appendChild(button);
    });
  }, []);

  return null;
}
