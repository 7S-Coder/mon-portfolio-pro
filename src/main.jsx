import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)

// Initialize reveal-on-scroll after initial render
function initRevealOnScroll() {
  if (typeof window === 'undefined' || !('IntersectionObserver' in window)) return;

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          // Add visible class to parent
          entry.target.classList.add('reveal--visible');

          // Apply stagger to direct children using CSS variable `--reveal-delay`
          const children = entry.target.querySelectorAll(':scope > *');
          children.forEach((child, i) => {
            // 100ms step; adjust multiplier if you want faster/slower stagger
            const delay = i * 100;
            child.style.setProperty('--reveal-delay', `${delay}ms`);
          });

          // Stop observing after first reveal
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12, rootMargin: '0px 0px -10% 0px' }
  );

  // Observe elements with the `reveal` class
  const els = document.querySelectorAll('.reveal');
  els.forEach((el) => observer.observe(el));
}

// Slight delay to ensure React has mounted DOM nodes
setTimeout(() => initRevealOnScroll(), 60);
