import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export const initgsap = () => {
  ScrollTrigger.refresh();

  /**
   * HERO TITLE TIMELINE
   */
  const hero = document.querySelector("#hero");

  if (!hero) return;

  gsap.context(() => {
    const tlHero = gsap.timeline({
      defaults: { ease: "power2.out" }, // meno “energico” di power3
    });

    tlHero
      .from(".line-0", {
        y: 70,
        opacity: 0,
        duration: 0.8,
      })

      .from(
        ".line-1",
        {
          y: 70,
          opacity: 0,
          duration: 1.1,
        },
        "-=0.9",
      )

      .from(
        ".line-2",
        {
          y: 70,
          opacity: 0,
          duration: 1.1,
        },
        "-=0.85",
      )

      .from(
        ".icon",
        {
          opacity: 0,
          scale: 0.97,
          duration: 0.9,
        },
        "-=0.75",
      )

      .from(
        ".hero-desc",
        {
          y: 10,
          opacity: 0,
          duration: 0.9,
        },
        "-=0.7",
      )

      .fromTo(
        ".hero-btn",
        {
          y: 14,
          autoAlpha: 0,
          scale: 0.98,
        },
        {
          y: 0,
          autoAlpha: 1,
          scale: 1,
          duration: 0.9,
        },
        "-=0.6",
      );
  }, hero);

  const clouds = document.querySelector(".hero-clouds");
  const sun = document.querySelector(".hero-sun");

  if (clouds && sun) {
    gsap.from([clouds, sun], {
      opacity: 0,
      scale: 1.05,
      duration: 1.6,
      ease: "power2.out",
      delay: 1.2, // 👈 parte dopo hero
      stagger: 0.2,
    });
  }

  /**
   * BASE REVEAL (default)
   */
  gsap.utils.toArray(".reveal-section").forEach((el) => {
    if (el.id === "hero") return;
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
