import Lenis from "lenis";

let lenis;

export function initSmoothScroll() {
  if (lenis) return;

  lenis = new Lenis({
    duration: 1.8,
    smoothWheel: true,
    smoothTouch: false,
    wheelMultiplier: 0.8,
    touchMultiplier: 1,
    infinite: false,
  });

  function raf(time) {
    lenis.raf(time);
    requestAnimationFrame(raf);
  }

  requestAnimationFrame(raf);
}
