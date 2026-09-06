<template>
  <div class="about-page">
    <div class="about-brand">
      <img src="/images/shanna-auth-logo.svg" alt="Shanna Auth" />
      <div>
        <h2>Shanna Auth</h2>
        <small>SHANNA STUDIO</small>
      </div>
    </div>
    <div class="about-version">{{ i18n.version_label }} {{ version }}</div>
    <p class="about-description">
      Shanna Auth adalah ekstensi autentikator dua langkah yang privat, ringan,
      dan mudah digunakan langsung dari browser.
    </p>
    <div class="about-links">
      <a href="https://auth.shanna.id/docs" target="_blank">Dokumentasi</a>
      <a href="https://github.com/shannacore/shannauth" target="_blank">GitHub</a>
      <a href="licenses.html" target="_blank">Lisensi</a>
    </div>
    <p class="about-copyright">© Shanna Studio</p>
  </div>
</template>

<script lang="ts">
import Vue from "vue";

export default Vue.extend({
  computed: {
    version: function () {
      return this.$store.state.menu.version;
    },
  },
});
</script>
