<template>
  <header class="navbar-custom" :class="{ hidden: isHidden }">
    <div class="container-custom nav-wrap">
      <!-- DESKTOP -->
      <nav class="nav-links desktop-nav">
        <router-link to="/" class="nav-link">home</router-link>

        <a @click.prevent="handleSection('about')" href="#" class="nav-link"
          >about</a
        >

        <a @click.prevent="handleSection('services')" href="#" class="nav-link"
          >per chi</a
        >

        <a @click.prevent="handleSection('help')" href="#" class="nav-link"
          >metodo</a
        >

        <a @click.prevent="handleSection('blog')" href="#" class="nav-link"
          >articoli</a
        >

        <a @click.prevent="handleSection('contacts')" href="#" class="nav-link"
          >contatti</a
        >

        <router-link to="/blog" class="nav-link">blog</router-link>
      </nav>

      <!-- MOBILE BUTTON -->
      <button
        class="burger"
        :class="{ open: menuOpen }"
        @click="menuOpen = !menuOpen"
      >
        <span :class="{ active: menuOpen }"></span>
        <span :class="{ active: menuOpen }"></span>
      </button>

      <!-- MOBILE OVERLAY -->
      <transition name="menu-fade">
        <nav v-if="menuOpen" class="mobile-menu">
          <router-link @click="closeMenu" to="/">home</router-link>

          <a @click.prevent="handleSection('about')">about</a>

          <a @click.prevent="handleSection('services')">per chi</a>

          <a @click.prevent="handleSection('help')">metodo</a>

          <a @click.prevent="handleSection('blog')">articoli</a>

          <a @click.prevent="handleSection('contacts')">contatti</a>

          <router-link @click="closeMenu" to="/blog">blog</router-link>
        </nav>
      </transition>
    </div>
  </header>
</template>

<script setup>
import { ref, nextTick, onMounted, onBeforeUnmount, watch } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

watch(route, () => {
  isHidden.value = false;
  lastScrollY = window.scrollY;
});

const menuOpen = ref(false);

watch(menuOpen, (open) => {
  const html = document.documentElement;
  const body = document.body;

  if (open) {
    html.style.overflow = "hidden";
    body.style.overflow = "hidden";
    body.style.touchAction = "none";
    body.style.height = "100vh";
  } else {
    html.style.overflow = "";
    body.style.overflow = "";
    body.style.touchAction = "";
    body.style.height = "";
  }
});

const isHidden = ref(false);

let lastScrollY = 0;
let ticking = false;

const closeMenu = () => {
  menuOpen.value = false;
};

/**
 * SCROLL TO SECTION
 */
const goToSection = async (sectionId) => {
  if (route.path !== "/") {
    await router.push("/");
  }

  await nextTick();

  requestAnimationFrame(() => {
    const el = document.getElementById(sectionId);

    if (el) {
      el.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  });
};

const handleSection = async (id) => {
  closeMenu();
  await goToSection(id);
};

/**
 * NAVBAR HIDE / SHOW ON SCROLL
 */
const handleScroll = () => {
  const currentY = window.scrollY;

  if (!ticking) {
    window.requestAnimationFrame(() => {
      if (currentY <= 80) {
        isHidden.value = false;
      } else if (currentY < lastScrollY) {
        isHidden.value = false;
      } else {
        isHidden.value = true;
      }

      lastScrollY = currentY;
      ticking = false;
    });

    ticking = true;
  }
};

onMounted(() => {
  lastScrollY = window.scrollY;
  isHidden.value = false;

  window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navbar-custom {
  width: 100%;
  padding: 18px 32px;
  position: fixed;
  top: 0;
  z-index: 999;
  background: transparent;
  transition: transform 0.45s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: transform;
}

.navbar-custom.hidden {
  transform: translateY(-110%);
}

.nav-wrap {
  display: flex;
  justify-content: flex-start;
  align-items: center;
}

/* =========================
MOBILE FIRST
========================= */

.desktop-nav {
  display: none;
}

.burger {
  display: block;
  width: 36px;
  height: 28px;
  background: none;
  border: none;
  padding: 0;
  position: relative;
  z-index: 2001;
}

.burger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;

  background: var(--primary);
  transition: all 0.3s ease;
}

/* posizione base */
.burger span:first-child {
  top: 8px;
}

.burger span:last-child {
  bottom: 8px;
}

/* OPEN */
.burger.open span {
  background: var(--white);
}

/* X stabile e visibile */
.burger.open span:first-child {
  transform: translateY(6px) rotate(45deg);
}

.burger.open span:last-child {
  transform: translateY(-6px) rotate(-45deg);
}

.burger.open {
  z-index: 99999;
}

/* MOBILE OVERLAY */
.mobile-menu {
  position: fixed;
  inset: 0;

  width: 100vw;
  height: 100dvh;

  background: var(--primary);

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 34px;

  z-index: 9999;

  overflow: hidden;
  overscroll-behavior: none;
}

.mobile-menu a {
  color: var(--white);
  text-decoration: none;
  font-size: 32px;
  font-weight: 300;
  text-transform: lowercase;
}

/* DESKTOP LINK */
.nav-link {
  position: relative;
  text-decoration: none;
  color: var(--text);
  padding: 6px 0;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 1px;
  background: var(--text);

  transform: scaleX(0);
  transition: 0.3s ease;
}

.nav-link:hover::after,
.router-link-active::after {
  transform: scaleX(1);
}

/* ANIMATION */
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.35s ease;
}

.menu-fade-enter-from,
.menu-fade-leave-to {
  opacity: 0;
}

/* =========================
DESKTOP ≥ 992
========================= */
@media (min-width: 992px) {
  .navbar-custom {
    backdrop-filter: blur(10px);
  }

  .desktop-nav {
    display: flex;
    gap: 28px;
  }

  .burger {
    display: none;
  }
}
</style>
