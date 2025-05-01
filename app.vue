<template>

  <!-- DEFAULT META -->

  <Head>
    <!-- Page Title -->
    <Title>Sanggar Seni Mupu Art Dance</Title>

    <!-- Basic Meta Tags -->
    <Meta name="description"
      content="The world's most-loved social storytelling platform. StoryTime connects a global community of 90 million readers and writers through the power of story." />
    <Meta name="keywords"
      content="StoryTime, storytelling platform, read stories online, share stories, writers community, writing platform, free stories" />
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