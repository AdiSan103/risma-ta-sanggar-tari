<template>
 <main>
  <layout-navbar />
  <ui-toup />
  <slot />
  <layout-footer />
 </main>
</template>

<style lang="css">
main {
 position: relative;
 overflow-x: hidden;
}

*,
html {
 scroll-behavior: smooth;
}
</style>
