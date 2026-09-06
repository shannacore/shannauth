<template>
  <div>
    <div class="header">
      <span id="menuName">{{ i18n.settings }}</span>
      <div class="icon" id="i-close" v-on:click="hideMenu()">
        <IconArrowLeft />
      </div>
    </div>
    <div id="menuBody">
      <div class="menuList">
        <p v-bind:title="i18n.advisor" v-on:click="showInfo('AdvisorPage')">
          <span><IconAdvisor /></span>{{ i18n.advisor }}
        </p>
        <a
          href="permissions.html"
          target="_blank"
          style="text-decoration: none"
        >
          <p v-bind:title="i18n.permissions">
            <span><IconClipboardCheck /></span>{{ i18n.permissions }}
          </p>
        </a>
      </div>
      <div class="menuList">
        <p v-bind:title="i18n.backup" v-on:click="showInfo('BackupPage')">
          <span><IconExchange /></span>{{ i18n.backup }}
        </p>
        <p
          v-bind:title="i18n.security"
          v-on:click="showInfo('SetPasswordPage')"
        >
          <span><IconLock /></span>{{ i18n.security }}
        </p>
        <p
          v-bind:title="i18n.sync_clock"
          v-on:click="syncClock()"
          v-if="isSupported"
        >
          <span><IconSync /></span>{{ i18n.sync_clock }}
        </p>
        <p
          v-bind:title="i18n.resize_popup_page"
          v-on:click="showInfo('PreferencesPage')"
        >
          <span><IconWrench /></span>{{ i18n.resize_popup_page }}
        </p>
      </div>
      <div class="menuList">
        <p v-bind:title="i18n.feedback" v-on:click="openHelp()">
          <span><IconComments /></span>{{ i18n.feedback }}
        </p>
        <p
          v-bind:title="i18n.translate"
          v-on:click="openLink('https://auth.shanna.id/docs/en')"
        >
          <span><IconGlobe /></span>{{ i18n.translate }}
        </p>
        <p
          v-bind:title="i18n.source"
          v-on:click="openLink('https://github.com/shannacore/shannauth')"
        >
          <span><IconCode /></span>{{ i18n.source }}
        </p>
        <p v-bind:title="i18n.about" v-on:click="showInfo('AboutPage')">
          <span><IconInfo /></span>{{ i18n.about }}
        </p>
      </div>
      <div class="menuList update-card" v-if="updateAvailable">
        <p
          v-bind:title="i18n.update_available"
          v-on:click="openLink(updateUrl)"
        >
          <span><IconInfo /></span>
          <strong>{{ i18n.update_available }}</strong>
          <small>{{ i18n.update_download.replace("$VERSION$", updateVersion) }}</small>
        </p>
      </div>
      <div id="version">Version {{ version }}</div>
    </div>
  </div>
</template>
<script lang="ts">
import Vue from "vue";
import { syncTimeWithGoogle } from "../../syncTime";

import IconArrowLeft from "../../../svg/arrow-left.svg";
import IconInfo from "../../../svg/info.svg";
import IconExchange from "../../../svg/exchange.svg";
import IconDatabase from "../../../svg/database.svg";
import IconLock from "../../../svg/lock.svg";
import IconSync from "../../../svg/sync.svg";
import IconWrench from "../../../svg/wrench.svg";
import IconAdvisor from "../../../svg/lightbulb.svg";
import IconComments from "../../../svg/comments.svg";
import IconGlobe from "../../../svg/globe.svg";
import IconCode from "../../../svg/code.svg";
import IconClipboardCheck from "../../../svg/clipboard-check.svg";
import { isFirefox, isSafari } from "../../browser";
import { UserSettings } from "../../models/settings";

export default Vue.extend({
  data() {
    return {
      updateAvailable: false,
      updateVersion: "",
      updateUrl: "https://github.com/shannacore/shannauth/releases/latest",
    };
  },
  mounted() {
    chrome.runtime.sendMessage({ action: "checkForUpdate" }, (result) => {
      if (chrome.runtime.lastError || !result) {
        return;
      }
      this.updateAvailable = result.available === true;
      this.updateVersion = result.latestVersion || "";
      this.updateUrl = result.url || this.updateUrl;
    });
  },
  components: {
    IconArrowLeft,
    IconInfo,
    IconExchange,
    IconDatabase,
    IconLock,
    IconSync,
    IconWrench,
    IconAdvisor,
    IconComments,
    IconGlobe,
    IconCode,
    IconClipboardCheck,
  },
  computed: {
    version: function () {
      return this.$store.state.menu.version;
    },
    isSupported: {
      get(): boolean {
        return !isSafari;
      },
    },
  },
  methods: {
    hideMenu() {
      this.$store.commit("style/hideMenu");
    },
    openHelp() {
      let url = "https://auth.shanna.id/docs#chrome";

      if (navigator.userAgent.indexOf("Firefox") !== -1) {
        url = "https://auth.shanna.id/docs#firefox";
      } else if (navigator.userAgent.indexOf("Edg") !== -1) {
        url = "https://auth.shanna.id/docs#edge";
      }

      const feedbackURL = this.$store.state.menu.feedbackURL;
      if (typeof feedbackURL === "string" && feedbackURL) {
        url = feedbackURL;
      }

      chrome.tabs.create({ url });
    },
    openLink(url: string) {
      window.open(url, "_blank");
      return;
    },
    showInfo(tab: string) {
      if (this.$store.getters["accounts/currentlyEncrypted"]) {
        if (tab === "SetPasswordPage") {
          this.$store.commit("notification/alert", this.i18n.phrase_incorrect);
          return;
        }
      }
      this.$store.commit("style/showInfo");
      this.$store.commit("currentView/changeView", tab);
      return;
    },
    syncClock() {
      chrome.permissions.request(
        { origins: ["https://www.google.com/"] },
        async (granted) => {
          if (granted) {
            await UserSettings.updateItems();
            const message = await syncTimeWithGoogle();
            this.$store.commit("notification/alert", this.i18n[message]);
          }
          return;
        }
      );
      return;
    },
  },
});
</script>
