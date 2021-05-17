<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <h2>Money 101</h2>
                </v-flex>
                <v-flex xs12 sm8>
                    <p class="body-1"><span class="font-italic">"It's very attractive to the libertarian viewpoint if we can explain it properly. I'm better with code than with words though."</span>
                    <span class="font-weight-medium"> -Satoshi Nakomoto, 13th October 2008, Bitcoin P2P e-cash paper</span>
                    </p>

                </v-flex>
            </v-layout>
        </v-container>
        
        
            <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm10 offset-sm-1>
                    <h3 class="text-center mt-10">The historical evolotion of money</h3>
                    <p class="text-center body mb-10 ">Whence it came, Where it Went.</p>
                </v-flex>
                <v-flex xs12 sm10 offset-sm-1>
  <v-timeline>
    <v-timeline-item
      v-for="(item, i) in timelineItems"
      :key="i"
      color="red lighten-2"
      large
    >
      <template v-slot:opposite>
        <span>{{ item.dates }}</span>
      </template>
      <v-card class="elevation-2">
        <v-card-title class="headline">
          {{ item.title }}
        </v-card-title>
        <v-card-text>
          {{ item.text }}
        </v-card-text>
      </v-card>
    </v-timeline-item>
  </v-timeline>
  </v-flex>
  <v-flex xs12 sm10 offset-sm-1>
                    <h3 class="text-center mt-10">More to come...</h3>
                    <p class="text-center body mb-10 ">Clearly we've just got started but he we will draw on a number of thinkers through the lens of modern thinkers in the Bitcoin era to old school economists, historians and anthropologiests. We'll proababy be referencing the likes of Nik Bhatia, Saifedean Ammous, Jeff Booth, Nick Szabo, Steve Keen, David Graebeer, Keynes and Friedman, Kenneth Galbraith, Adam Smith, Charles Eisenstein and more...</p>
                </v-flex>
            </v-layout>
            </v-container>


    </div>
</template>

<script>
  export default {
    data: () => ({
      timelineItems: [
        {
          dates: '2009 onwards: From analogue to digital',
          title: 'Bitcoin and CBDCs',
          text: 'Today\'s money, the march of Bitcoin as Gold 2.0, Covid as an inflection point where everything changed, and CBDCs puting lipstick on the pig of fiat currencies.',
        },
        {
          dates: '10000 BCE to 2009: Early civilisations, the middle ages, the industrial revolution and onwards',
          title: 'Gold, Banking, and Fiat Currencies',
          text: 'The emergence of states, the gold backed renaissance to take us out of the middle ages to the not-yet-worthless hyper-inflated fiat currencies.',
        },
        {
          dates: 'Pre-agricultual nomadic hunter gatherer',
          title: 'Barter and Gift Economies',
          text: 'Shells, beads, stones and Cuneiform. Primitive money and accounting methods - Draw on anthropoplogy and Charles Eisenstein\'s Sacred Economics',
        }
      ]
    })
  }
</script>