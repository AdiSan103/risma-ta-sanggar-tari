export default defineI18nConfig(() => ({
  legacy: false,
  locale: 'en-US',
  fallbackLocale: 'en-US',
  locales: [
    {
      code: 'en-US',
      name: 'English',
      file: 'en-US.json'
    },
    {
      code: 'in-ID',
      name: 'Indonesia',
      file: 'in-ID.json'
    }
  ],
  lazy: true,
  langDir: 'locales/'  // ✅ CORRECT DIRECTORY
}))
