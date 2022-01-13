<script>
import Vue from 'vue'

const store = Vue.observable({
  consoleLog: false
})

export default {
  name: 'App',

  provide: {
    store
  },

  computed: {
    consoleLog: {
      get() {
        return store.consoleLog;
      },
      set(value) {
        store.consoleLog = value
      }
    },
  },
};
</script>

<template>
  <v-app>
    <v-app-bar
      app
      color="primary"
      dark
    >
      <div class="d-flex align-center">
        <v-img
          alt="Vuetify Logo"
          class="shrink mr-2"
          contain
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
          transition="scale-transition"
          width="40"
        />

        <v-img
          alt="Vuetify Name"
          class="shrink mt-1 hidden-sm-and-down"
          contain
          min-width="100"
          src="https://cdn.vuetifyjs.com/images/logos/vuetify-name-dark.png"
          width="100"
        />
      </div>

      <v-tabs align-with-title>
        <v-tab to="/">Non Reactive</v-tab>
        <v-tab to="/2">Non Reactive 2</v-tab>
        <v-tab to="/reactive">Reactive</v-tab>
      </v-tabs>

      <v-spacer/>
      <v-switch
        v-model="consoleLog"
        :label="(consoleLog ? 'Hide' : 'Show') + ' Console Log'"
        hide-details
      />
    </v-app-bar>

    <v-main>
      <router-view/>
    </v-main>
  </v-app>
</template>

<style lang="scss" scoped>
.v-tabs { 
  width: auto;
}
</style>