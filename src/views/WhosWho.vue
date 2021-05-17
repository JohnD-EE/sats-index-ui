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
                    <div v-for="(item, i) in whosWhoData"
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
        whosWhoDatad () {
            //console.log(this.whosWho)
            return [
    {
        name: 'Satoshi Nakamoto',
        bio: 'The pseudonymous creator of Bitcoin',
        image: '',
        web: [{ site: 'bitcoin.org', url: 'https://bitcoin.org/'}],
        ratings: {
            libertarianism: {
                rating: 99,
                reason: 'From the white paper and other communications via email and forum posts he seems strongly rooted in Austrian Economics / Libertarian thinking.'
            },
            bitcoiner: {
                rating: 100,
                reason: 'Well, obviously'
            },
            tech: {
                rating: 99,
                reason: 'Clearly an abstract thinker, creating bitcoin out of the intersection of other technical innovations. As he said, \'I am better with code than with words though\', however Satoshi\'s code itself wasn\'t flawless'
            },
            economics: {
                rating: 99,
                reason: 'A great understanding of human behaviour, economic incentives and rewards, as well as a true understanding of money'
            },
            entertaining: {
                rating: 15,
                reason: 'We don\'t know him personally, there\'s not much evidence of humour but his sarcastic message in the genesis block earns him some points: \'Chancellor on Brink of Second Bailout for Banks\''
            },
            controversial: {
                rating: 99,
                reason: 'He\'s disrupted everything'
            },
            understandability: {
                rating: 20,
                reason: 'He made the effort to communicate his thinking in the right way, we don\t have much to go on though, other than his writings.'
            },
            integrity: {
                rating: 99,
                reason: 'He did the right thing and walked away from the project to leave it leaderless and decentralised, and he has never spent his vast bitcoin wealth.'
            },
            lovability: {
                rating: -25,
                reason: 'We just don\'t know him, but apparently he could come across as a bit harsh sometimes'
            },
            influence: {
                rating: 100,
                reason: 'He\'s changed the world forever, and he could do a fair bit of damage if he wanted.'
            }
        }
    },
    {
        name: 'Andreas Antonopoulus',
        bio: 'Andreas Bio',
        web: [{ site: 'Twitter', url: 'https://twitter.com/aantonop'}],
        ratings: {
            libertarianism: {
                rating: 75,
                reason: 'Certainly an advocate of free market economics, but also seems to play by the rules within the existing system'
            },
            bitcoiner: {
                rating: 50,
                reason: 'Strong advocte for the Bitcoin eco-system but also embraces other cryptocurrencies'
            },
            tech: {
                rating: 75,
                reason: 'Appreciation of the tech but not a devoted coder'
            },
            economics: {
                rating: 75,
                reason: 'Seems to understand real world economics but not necessarily a gura on fincance and economics'
            },
            entertaining: {
                rating: 95,
                reason: 'Brilliant presentations, peppared with jokes, doesn\'t take himself too seriously'
            },
            controversial: {
                rating: 50,
                reason: 'Too nice to be overly controversial'
            },
            understandability: {
                rating: 99,
                reason: 'Surely one of the best explainers in the cryptocurrency space'
            },
            integrity: {
                rating: 95,
                reason: 'Been in the Bitcoin domain for ages, consistent adherent'
            },
            lovability: {
                rating: 99,
                reason: 'Surely the sweetest guy out there'
            },
            influence: {
                rating: 90,
                reason: 'Huge influence over the years'
            }
        }
    }
];
        }
    }
}
</script>
