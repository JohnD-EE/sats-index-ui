<template>
  <v-app>
    <div id="app">
      <v-app-bar
        color="white"
        flat
        hide-on-scroll
      >
        <v-toolbar-title>Sats Index</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn text :ripple="false" plain class="ml-2 mr-2" to="/">
            Main Index
          </v-btn>
          <v-btn text :ripple="false" plain class="ml-2 mr-2" to="/fiat">
            Fiat Shitcoin
          </v-btn>
          <v-btn text :ripple="false" plain class="ml-2 mr-2" to="/orange-pill">
            Orange Pill
          </v-btn>
        </v-toolbar-items>
      </v-app-bar>
      <router-view />
    </div>
  </v-app>
</template>

<script>

export default {
  name: 'App',
  components: {
    
  },

  data: () => ({
    //
  }),
};
</script>
