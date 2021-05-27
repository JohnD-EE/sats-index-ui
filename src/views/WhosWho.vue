<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12 sm8>
                    <h2>Who's Who?</h2>
                    <p class="body-1"><span class="font-italic">"I am not Dorian Nakamoto."</span>
                    <span class="font-weight-medium"> - Satoshi Nakamoto, P2P Foundation, 7th March 2014</span></p>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container row wrap mt-15>
            <v-layout>
                <v-flex xs12 sm6 offset-sm-3>                    
                    <h3>Bitcoin Top Trumps</h3>
                    <p class="body-1">This section will evolve into gameified Who's Who in Bitcoin based on the popular UK Top Trumps card game</p>
                    <p class="body-1">Learn about the movers and shakers, the devils and angels of Bitcoin through a fun nostalgic card game.</p>
                    <p>Remember though, that Bitcoin doesn't need heroes. Bitcoin is about freedom from the cult of the individual - that's why Satoshi left.</p>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container row mt-5>
            <v-layout>
                
                <v-flex xs12 sm6 offset-sm-3
                    >
                    <div 
                    v-for="(item, i) in whosWhoData"
                    :key="i"
                    class="mt-5 mb-5">
                    <v-card
                    class="mx-auto"
                    >
                        <v-card-text>
                            <v-row>
                            <v-col
                            cols="10"
                            >
                            <div>Position #{{i + 1}}</div>
                        <p class="display-1 text--primary">
                            {{ item.name }}
                        </p>
                            </v-col>
                            <v-col
                            cols="2"
                            >
                                <v-avatar size="64px">
                                <img
                                    :src="item.image"
                                    :alt="item.name"  
                                >
                                </v-avatar>
                            </v-col>
                            </v-row>
                        <div v-for="(bio, n) in item.bio"
                            :key="n">
                            <p>{{ bio }}</p>
                        </div>
                        </v-card-text>
                        <v-divider></v-divider>
                        <v-list class="transparent">
                        <v-list-item
                        >
                            <v-list-item-subtitle>{{ getScoreHighlights(item.ratings) }}</v-list-item-subtitle>
                            <v-list-item-subtitle class="text-right">
                            Average Rating: {{ item.averageScore }}% <v-btn
                                    icon
                                    @click="toggleCard(i)"
                                >
                                    <v-icon>{{ toggleCards.includes(i) ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-list-item-subtitle>
                        </v-list-item>
                        </v-list>

                         <v-expand-transition>
      
        <v-card-text
        v-if="toggleCards.includes(i)"
        class="transition-fast-in-fast-out v-card--reveal">
        
          <v-row
          v-for="(rating, r) in item.ratings"
            :key="r"
          class="mt-0"
          >
          <v-col
          cols="8"
            >
            <p class="mb-0 headline">{{ getRatingMetric(rating.metric) }}</p>
            <p class="body-2 font-weight-regular">{{ rating.reason }}</p>
            </v-col>
            <v-col
            cols="4"
            >
             <p class="text-right headline">{{ rating.rating }}%</p>
            </v-col>
            </v-row>
                            
          </v-card-text>
    </v-expand-transition>

                        <v-divider></v-divider>
                        <v-card-actions>
                        <v-btn
                            text
                            color="teal accent-4"
                            v-for="(web, n) in item.web"
                            :key="n"
                            :href="web.url"
                            target="_blank"
                        >   
                            {{ web.site }}
                        </v-btn>
                        </v-card-actions>

                    </v-card>
                    </div>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container>
            <v-layout>
                <v-flex xs12 sm10 offset-sm-1>
                    <h3 class="text-center mt-10">More to come...</h3>
                    <p class="text-center">This is just a start, more profiles will be added over time.</p>
                    <p class="text-center">RATINGS: The ratings given to the listed influencers in Bitcoin are currently assigned in a subjective way without any methodological rigour. They more for fun than fact. Should you disagree with the assessments please contact SatsIndex.com with an alternative suggestion. The ratings will soon be available in an open source GitHub repository where they may be critiqued, modified and extended by others.</p>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import whosWho from '../data/whoswho.js'

export default {
    data: () => ({
        whosWho: whosWho,
        toggleCards: []
    }),
    computed: {
        whosWhoData () {
            let whosWhoData = this.whosWho.whosWhoData
            whosWhoData.forEach((item, i) => {
                whosWhoData[i].averageScore = this.getTotalScore(item.ratings)
                whosWhoData[i].show = false
                let ratings = item.ratings.sort((a, b) => (a.rating < b.rating) ? 1 : -1)
                whosWhoData[i].ratings = ratings
            })
            
            whosWhoData.sort((a, b) => (a.averageScore < b.averageScore) ? 1 : -1)
            return whosWhoData
        }
    },
    methods: {
        toggleCard(i) {
            let toggleCards = this.toggleCards
            if (toggleCards.includes(i)) {
                const index = toggleCards.indexOf(i);
                if (index > -1) {
                    toggleCards.splice(index, 1);
                }
            } else {
                toggleCards.push(i)
            }
            this.toggleCards = toggleCards
        },
        getScoreHighlights(ratings) {
            let topStrength = ''
            let topRating = -999
            ratings.forEach((item) => {
                if (item.rating > topRating) {
                    topRating = item.rating
                    topStrength = item.metric
                }
            })
            topStrength = topStrength.charAt(0).toUpperCase() + topStrength.slice(1) //capitalise first letter
            return 'Top Strength: ' + topStrength
        },
        getTopStrength(ratings) {
            if (ratings) {
                //
            }
        },
        getTotalScore(ratings) {
            let total = 0
            let count = 0
            ratings.forEach((item) => {
                    total += item.rating
                    count ++
                })
            let average = Math.round(total / count)
            return average
        },
        getRatingMetric(metric) {
            let output = ''
            switch(metric) {
                case 'libertarianism':
                    output = 'Libertarianism'
                    break
                case 'bitcoiner':
                    output = 'Bitcoiner'
                    break
                case 'tech':
                    output = 'Tech Savvy'
                    break
                case 'economics':
                    output = 'Economics Savvy'
                    break
                case 'entertaining':
                    output = 'Entertaining'
                    break
                case 'controversial':
                    output = 'Controversial'
                    break
                case 'noobfriendly':
                    output = 'Noob Friendly'
                    break
                case 'integrity':
                    output = 'Integrity'
                    break
                case 'lovability':
                    output = 'Lovability'
                    break
                case 'influence':
                    output = 'Influence'
                    break
                case 'educator':
                    output = 'Educator'
                    break
                default:
                    output = 'N/A'
                }
            return output
        }
    }
}
</script>
