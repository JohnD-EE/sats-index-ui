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
                        <v-list class="transparent">
                        <v-list-item
                        >
                            <v-list-item-title>Integrity: 95% | Entertainment: 5%</v-list-item-title>
                            <v-list-item-subtitle class="text-right">
                            Rating: 87% <v-btn
                                    icon
                                    @click="show = !show"
                                >
                                    <v-icon>{{ show ? 'mdi-chevron-up' : 'mdi-chevron-down' }}</v-icon>
                                </v-btn>
                            </v-list-item-subtitle>
                        </v-list-item>
                        </v-list>
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
                    <p class="text-center body mb-10 ">This is just a start, more profiles will be added over time.</p>
                </v-flex>
            </v-layout>
        </v-container>
    </div>
</template>

<script>
import whosWho from '../data/whoswho.js'

export default {
    data: () => ({
        whosWhoData: whosWho.whosWhoData
    }),
    computed: {
        //
    }
}
</script>
