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
      <button class="burger" @click="menuOpen = !menuOpen">
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
import { ref, nextTick, onMounted, onBeforeUnmount } from "vue";
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();

const menuOpen = ref(false);
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
      if (currentY > 80) {
        isHidden.value = currentY > lastScrollY;
      } else {
        isHidden.value = false;
      }

      lastScrollY = currentY;
      ticking = false;
    });

    ticking = true;
  }
};

onMounted(() => {
  lastScrollY = window.scrollY;
  window.addEventListener("scroll", handleScroll, { passive: true });
});

onBeforeUnmount(() => {
  window.removeEventListener("scroll", handleScroll);
});
</script>

<style scoped>
.navbar-custom {
  padding: 18px 32px;
  position: sticky;
  top: 0;
  z-index: 999;
  background: var(--bg);
  backdrop-filter: blur(10px);
  background: rgba(247, 243, 234, 0.7);
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

/* DESKTOP */
.desktop-nav {
  display: flex;
  gap: 28px;
}

.nav-link {
  position: relative;
  text-decoration: none;
  color: #5e7468;
  padding: 6px 0;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: 0;

  width: 100%;
  height: 1px;
  background: #5e7468;

  transform: scaleX(0);
  transition: 0.3s ease;
}

.nav-link:hover::after,
.router-link-active::after {
  transform: scaleX(1);
}

/* BURGER */
.burger {
  display: none;
  width: 36px;
  height: 28px;
  background: none;
  border: none;
  position: relative;
  z-index: 1001;
}

.burger span {
  position: absolute;
  left: 0;
  width: 100%;
  height: 2px;
  background: #5e7468;
  transition: 0.3s ease;
}

.burger span:first-child {
  top: 8px;
}

.burger span:last-child {
  bottom: 8px;
}

.burger span.active:first-child {
  transform: rotate(45deg);
  top: 13px;
}

.burger span.active:last-child {
  transform: rotate(-45deg);
  bottom: 13px;
}

/* MOBILE MENU */
.mobile-menu {
  position: fixed;
  inset: 0;
  background: #5e7468;

  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;

  z-index: 1000;
}

.mobile-menu a {
  color: white;
  text-decoration: none;
  font-size: 32px;
  font-weight: 300;
  text-transform: lowercase;
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

/* MOBILE */
@media (max-width: 992px) {
  .desktop-nav {
    display: none;
  }

  .burger {
    display: block;
  }
}
</style>
