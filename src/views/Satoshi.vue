<template>
    <div>
        <v-container>
            <v-layout row wrap>
                <v-flex xs12>
                    <h2>Satoshi and the Noob</h2>
                </v-flex>
                <v-flex xs12 sm8>
                    <p class="body-1"><span class="font-italic">"I've been working on a new electronic cash system that's fully
peer-to-peer, with no trusted third party."</span><span class="font-weight-medium"> - Satoshi Nakamoto, Cryptography Mailing List, 31st October 2008</span></p>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container row wrap mt-15>
            <v-layout>
                <v-flex xs12 sm6 offset-sm-3>
                <h3>A Fictitious Conversation with Satoshi</h3>
                <p>Enjoy this series of imaginary conversations between Satoshi Nakamoto and a Noob to help you better understand why Bitcoin exists and how it works...</p>
                <p>Disclaimer: The characters here are completely fictitious. There are differing opinions among Bitcoiners on how Satoshi should be talked about or represented. Please see this as a playful illustration to help educate those who are curious about Bitcoin's history and potential role in the world, rather than any kind of bastardisation of the Satoshi story.</p>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container class="mt-15">
            <v-layout row wrap>
                <v-flex sm12 md6 offset-md-3>
            <v-timeline
            dense
            clipped
            >
                <v-timeline-item
                class="mb-6"
                hide-dot
            >
                <p class="display-1 mb-0">{{ interview.title }}</p>
                <p class="subtitle-1">{{ interview.subtitle }}</p>
                </v-timeline-item>
                
                <v-timeline-item
                v-for="(item, i) in interview.text"
                    :key="i"
                    class="mb-4"
                    :color="getColor(i)"
                    icon-color="grey"
                    small
                ><span class="subtitle-2">{{ getPerson(i) }}:</span>
                    <v-row justify="space-between">
                    <v-col cols="12">
                        {{ item }}
                    </v-col>
                    
                    </v-row>
                </v-timeline-item>
            </v-timeline>
                </v-flex>
            </v-layout>
        </v-container>
        <v-container row wrap mt-15>
            <v-layout>
                <v-flex xs12 sm6 offset-sm-3>
                <h3>Satoshi and the Noob</h3>
                <p>Thank you for reading, hopefully you learned something...</p>
                <p>These fictitious interviews will soon be placed into an open source GitHub repository where they may be critiqued, modified and extended by others.</p>
                </v-flex>
            </v-layout>
        </v-container>
        
    </div>
</template>

<script>
import satoshandthenoob from '../data/satoshiandthenoob.js'

export default {
    data: () => ({
        interview: satoshandthenoob.interview
    }),
    methods: {
        getColor(i) {
            return i % 2 ? 'orange' : 'grey'
        },
        getPerson(i) {
            return i % 2 ? 'Satoshi' : 'Noob'
        }
    }
}
</script>
