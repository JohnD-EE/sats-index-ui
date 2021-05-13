<template>
  <v-app>
    <div id="app">
      <div class="ml-5 mr-5 mt-2 mb-2">
        <span class="mr-5 caption">World Population: {{ Number(worldPopulation).toLocaleString() }}</span>
        <span class="mr-5 caption">Sats in Circulation: {{ Number(satsInCirculation).toLocaleString() }}</span>
        <span class="mr-5 caption">Sats per person: &sect;{{ Number(satsPerPerson).toLocaleString() }}</span>
      </div>
      <v-divider></v-divider>
      <v-app-bar
        color="white"
        flat
        hide-on-scroll
      >
      <v-toolbar-side-icon class="mr-3">
        <router-link style="text-decoration: none; color: inherit;" to="/"> 
          <v-avatar color="orange" size="32">
            <v-icon dark>
            mdi-format-section
            </v-icon>
          </v-avatar>
        </router-link>
    </v-toolbar-side-icon>
        <v-toolbar-title>
          <router-link style="text-decoration: none; color: inherit;" to="/">
            <span class="font-weight-bold">SatsIndex</span>
          </router-link>
          </v-toolbar-title>
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
      <v-divider></v-divider>
      <v-container fluid mt-10 mb-15>
        <router-view />
      </v-container>
      <v-footer
    dark
    padless
  >
    <v-card
    width="100%"
      flat
      tile
      class="grey white--text text-center"
    >
      <v-card-text>
        <v-btn
          v-for="icon in icons"
          :key="icon"
          class="mx-4 white--text"
          icon
        >
          <v-icon size="24px">
            {{ icon }}
          </v-icon>
        </v-btn>
      </v-card-text>

      <v-card-text class="white--text pt-0">
        SatsIndex is envisioning a future world where Bitcoin becomes an accepted standard, as a store of value, perhaps playing the role of a reserve currency against which many national currencies are pegged. 
        If this transpires it is likely that the smallest denomination of bitcoin, the Satoshi, would become an accepted <strong>unit of account</strong> for everyday items. 
        Satoshis are already referred to as Sats, so the aim of SatsIndex is to take a candid look at how we might value things in Sats, as well as helping people to extend their curiosity beyond Bitcoin and Sats prices to really understand money and economics, and why the world needs bitcoin as digital Gold 2.0
              </v-card-text>
              <v-card-text class="white--text pt-0">
              RISK DISCLAIMER: This website is for learning and entertainment. It includes ideas and information about economics and finance which are not intended as investment advice. Investing in in cryptocurrency is complex and high risk and this website is not intended to advocate an investment strategy.
</v-card-text>
      <v-divider></v-divider>

      <v-card-text class="white--text">
        {{ new Date().getFullYear() }} — <strong>SatsIndex</strong>
      </v-card-text>
    </v-card>
  </v-footer>
    </div>
    
  </v-app>
</template>

<script>

export default {
  name: 'App',
  data: () => ({
    worldPopulation: 7800000000,
  btcInCirculation: 18698487,
      icons: [
        'mdi-facebook',
        'mdi-twitter',
        'mdi-instagram',
        'mdi-telegram'
      ]
    }),
  components: {
  },
  computed: {
      satsInCirculation () {
        return this.btcInCirculation * 100000000
      },
      satsPerPerson () {
        return Math.floor(this.satsInCirculation / this.worldPopulation)
      },
  },
  
};
</script>
