import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initgsap = () => {
  ScrollTrigger.killAll(false, true, true);

  /**
   * HERO TITLE TIMELINE
   */
  const hero = document.querySelector("#hero");

  if (!hero) return;

  gsap.context(() => {
    const tlHero = gsap.timeline({
      defaults: { ease: "power3.out" },
    });

    tlHero
      .from(".line-1", { y: 120, opacity: 0, duration: 1.1 })
      .from(".line-2", { y: 120, opacity: 0, duration: 1.1 }, "-=0.9")
      .from(".icon", { opacity: 0, scale: 0.9, duration: 0.9 }, "-=0.7")
      .from(".hero-desc", { y: 20, opacity: 0, duration: 0.9 }, "-=0.6")
      .from(
        ".hero-btn",
        { y: 25, opacity: 0, scale: 0.96, duration: 0.9 },
        "-=0.6",
      );
  }, hero);

  /**
   * BASE REVEAL (default)
   */
  gsap.utils.toArray(".reveal-section").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      y: 50,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });

  /**
   * ENTRA DA SINISTRA
   */
  gsap.utils.toArray(".reveal-left").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      x: -80,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });

  /**
   * ENTRA DA DESTRA
   */
  gsap.utils.toArray(".reveal-right").forEach((el) => {
    gsap.from(el, {
      opacity: 0,
      x: 80,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });

  /**
   * PARALLAX
   */
  gsap.utils.toArray(".parallax").forEach((el) => {
    gsap.to(el, {
      y: -80,
      ease: "none",
      scrollTrigger: {
        trigger: el,
        start: "top bottom",
        end: "bottom top",
        scrub: 1,
      },
    });
  });

  /**
   * ZOOM SOFT
   */
  gsap.utils.toArray(".zoom-in").forEach((el) => {
    gsap.from(el, {
      scale: 0.95,
      opacity: 0,
      duration: 1,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });

  /**
   * STAGGER TEXT WORDS
   */
  gsap.utils.toArray(".stagger-text").forEach((el) => {
    const words = el.innerText.split(" ");

    el.innerHTML = words
      .map(
        (word) =>
          `<span class="word-wrap"><span class="word">${word}</span></span>`,
      )
      .join(" ");

    gsap.from(el.querySelectorAll(".word"), {
      y: 14,
      opacity: 0,
      filter: "blur(2px)",
      duration: 0.8,
      stagger: 0.12,
      ease: "power2.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });
};
