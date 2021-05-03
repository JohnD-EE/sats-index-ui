<template>
  <v-app>
    <div id="app">
      <v-app-bar
        color="white"
        flat
        hide-on-scroll
      >
      <v-toolbar-side-icon>
        <v-icon large>
          mdi-format-section
        </v-icon>
    </v-toolbar-side-icon>
        <v-toolbar-title>Sats Index</v-toolbar-title>
        <v-spacer></v-spacer>
        <v-toolbar-items>
          <v-btn text :ripple="false" plain to="/">
            Sats
          </v-btn>
          <v-btn text :ripple="false" plain to="/fiat">
            Fiat Shitcoin
          </v-btn>
          <v-btn text :ripple="false" plain to="/orange-pill">
            Orange Pill
          </v-btn>
          <v-btn text :ripple="false" plain to="/money-101">
            Money 101
          </v-btn>
          <v-btn text :ripple="false" plain to="/catechism">
            Catechism
          </v-btn>
          <v-btn text :ripple="false" plain to="/satoshi">
            Satoshi
          </v-btn>
          <v-btn text :ripple="false" plain to="/blog">
            Blog
          </v-btn>
        </v-toolbar-items>
        <v-app-bar-nav-icon>
        </v-app-bar-nav-icon>
      </v-app-bar>
      <v-container mt-5 ml-1 mb-1 mr-1>
        <router-view />
      </v-container>
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
