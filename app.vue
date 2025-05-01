<template>

  <!-- DEFAULT META -->

  <Head>
    <!-- Page Title -->
    <Title>Sanggar Seni Mupu Art Dance</Title>

    <!-- Basic Meta Tags -->
    <Meta name="description"
      content="Welcome to Mupu Art Dance, where the heart of Balinese tradition comes alive through the beauty of dance." />
    <Meta name="keywords"
      content="Sanggar, Balinese, Dance, Tari, Pulau Dewata, Kesenian" />
    <Meta name="author" content="StoryTime Team" />
    <Meta name="viewport" content="width=device-width, initial-scale=1" />
    <Meta charset="utf-8" />

  </Head>

  <NuxtLayout>
    <NuxtLoadingIndicator :height="10" :throttle="0" />
    <NuxtPage />
  </NuxtLayout>
</template>

<script setup lang="ts">
useHead({
  htmlAttrs: { lang: 'id' },
  link: [{ rel: 'canonical', href: 'https://nuxt.com/' }],
});
</script>