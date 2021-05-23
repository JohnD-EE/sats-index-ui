<template>
  <v-app>
    <div id="app">
      <div class="ml-5 mr-5 mt-2 mb-2">
        <span class="mr-5 caption">World Population: {{ Number(worldPopulation).toLocaleString() }}</span>
        <span class="mr-5 caption">Sats in Circulation: <i class="fak fa-satoshisymbol-solid mr-1"></i>{{ Number(satsInCirculation).toLocaleString() }}</span>
        <span class="mr-5 caption">Sats per person: <i class="fak fa-satoshisymbol-solid mr-1"></i>{{ Number(satsPerPerson).toLocaleString() }}</span>
      </div>
      <v-divider></v-divider>
      <v-app-bar
        color="white"
        flat
        hide-on-scroll
      >
      <v-toolbar-side-icon class="mr-3">
        <router-link style="text-decoration: none; color: inherit;" to="/"> 
          <v-avatar color="orange" size="32" class="white--text">
            <i class="fak fa-satoshisymbol-solidtilt mr-1"></i>i
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
            <i class="fak fa-satoshisymbol-solid mr-1"></i>Sats
          </v-btn>
          <v-btn text :ripple="false" plain to="/fiat">
            Fiat Shitcoin
          </v-btn>
          <v-btn text :ripple="false" plain to="/satoshi">
            Satoshi &amp; Noob
          </v-btn>
          <v-btn text :ripple="false" plain to="/whos-who">
            Who's Who
          </v-btn>
          <v-btn text :ripple="false" plain to="/catechism">
            Catechism
          </v-btn>
          <v-btn text :ripple="false" plain to="/money-101">
            Money 101
          </v-btn>
          <v-btn text :ripple="false" plain to="/orange-pill">
            Orange Pill
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
          class="mx-4 white--text"
          text
          :ripple="false"
          plain href="https://twitter.com/SatsIndex" 
          target="_blank"
          >
          <v-icon size="24px" class="mr-3">mdi-twitter</v-icon> Follow @SatsIndex on Twitter
        </v-btn>
        
        
      </v-card-text>
      <v-divider></v-divider>
      <v-card-text>
        <p class="display-1 white--text text-center">21 Million BTC</p>
        <p class="display-2 white--text text-center"><i class="fak fa-satoshisymbol-solid mr-2"></i>2.1 Quadrillion Sats</p>
        <p class="display-3 white--text text-center">7.8+ Billion People</p>
        <p class="display-4 white--text text-center"><i class="fak fa-satoshisymbol-solid mr-3"></i>269,230 Sats Each</p>
      </v-card-text>
      <v-flex xs12 sm8 offset-sm2>
      <v-card-text class="white--text pt-0 text-center pt-3 pb-3">
        <p class="body-1">SatsIndex is envisioning a future world where Bitcoin becomes an accepted standard, as a store of value, perhaps playing the role of a reserve currency against which many national currencies are pegged. 
        If this transpires it is likely that the smallest denomination of bitcoin, the <i class="fak fa-satoshisymbol-solid"></i>Satoshi, would become an accepted <strong>unit of account</strong> for everyday items.</p>
        <p class="body-1">Satoshis are already referred to as Sats, so the aim of SatsIndex is to take a candid look at how we might value things in Sats, as well as helping people to extend their curiosity beyond Bitcoin and Sats prices to really understand money and economics, and why the world needs Bitcoin as digital Gold 2.0</p>
              </v-card-text>
              </v-flex>
              <v-card-text class="white--text pt-5 grey darken-1">
              RISK DISCLAIMER: This website is for learning and entertainment. It includes ideas and information about economics and finance which are not intended as investment advice. Investing in in cryptocurrency is complex and high risk and this website is not intended to advocate an investment strategy.
</v-card-text>
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
    btcInCirculation: 18698487
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
