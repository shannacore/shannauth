<template>
  <div class="about-page">
    <div class="about-brand">
      <img src="/images/shanna-auth-logo.svg" alt="SHANNA Authenticator" />
      <div>
        <h2>SHANNA Authenticator</h2>
        <small>SHANNA STUDIO</small>
      </div>
    </div>
    <div class="about-version">{{ i18n.version_label }} {{ version }}</div>
    <p class="about-tagline">Secure your accounts with two-factor authentication</p>
    <p class="about-description">
      Kelola kode verifikasi dua langkah langsung dari browser.
      Simpan backup sebelum mengganti perangkat atau menghapus ekstensi.
    </p>
    <div class="about-links">
      <a href="https://shanna-auth.web.app/docs" target="_blank" rel="noopener noreferrer">Panduan</a>
      <a href="https://github.com/shannacore/shannauth" target="_blank" rel="noopener noreferrer">GitHub</a>
      <a href="licenses.html" target="_blank" rel="noopener noreferrer">Lisensi</a>
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
