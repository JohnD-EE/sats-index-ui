/*
Rules:
MUST NOT include personal slurs or anything that could be libellous
Ratings MUST range from -100 to +100
Ratings MUST have a reason
Bitcoiner - how much of a Bitcoin Purist / Maximalist are they (or how Anti Bitcoin)
Integrity - how consistent, honest and trustworthy are they?
Libertarianism - Do they live by Libertarian / Austrian Economics principles?
Tech: Do they get the Bitcoin Tech
Influence - How much influence do they have in the Bitcoin space, the BTC price etc?

const whoswho = [
    {
        name: '',
        bio: '',
        image: '',
        web: [{ site: '', url: ''}],
        ratings: {
            libertarianism: {
                rating: 0,
                reason: ''
            },
            bitcoiner: {
                rating: 0,
                reason: ''
            },
            tech: {
                rating: 0,
                reason: ''
            },
            economics: {
                rating: 0,
                reason: ''
            },
            entertaining: {
                rating: 0,
                reason: ''
            },
            controversial: {
                rating: 0,
                reason: ''
            },
            noobfriendly: {
                rating: 0,
                reason: ''
            },
            integrity: {
                rating: 0,
                reason: ''
            },
            lovability: {
                rating: 0,
                reason: ''
            },
            influence: {
                rating: 0,
                reason: ''
            }
        }
    },
]
*/

const whosWhoData = [
    {
        name: 'Satoshi Nakamoto',
        bio: ['The pseudonymous creator of Bitcoin'],
        image: 'https://pbs.twimg.com/profile_images/421692600446619648/dWAbC2wg_400x400.jpeg',
        web: [
            { site: 'bitcoin.org', url: 'https://bitcoin.org/'},
            { site: 'BTC Whitepaper', url: 'https://bitcoin.org/bitcoin.pdf' }
        ],
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
            noobfriendly: {
                rating: 20,
                reason: 'He made the effort to communicate his thinking in the right way, we don\t have much to go on though, other than his writings.'
            },
            integrity: {
                rating: 99,
                reason: 'He did the right thing and walked away from the project to leave it leaderless and decentralised, and he has never spent his vast bitcoin wealth.'
            },
            lovability: {
                rating: 0,
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
        bio: ['An influential speaker, teacher and podcaster in the Bitcoin domain since 2012, Andreas is now one of the most recognised and respected voices in the space, oozes charisma, and shares generously.', 'Andreas is definitely a Noob Friendly place to start'],
        image: 'https://pbs.twimg.com/profile_images/1362967502247129090/Q2ypSr9W_400x400.jpg',
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
                rating: 95,
                reason: 'Has a degree in Computer Science and Data Communications and Distributed Systems from University College London. Very stong in Security'
            },
            economics: {
                rating: 75,
                reason: 'Seems to understand real world economics but not necessarily a guru on fincance and economics'
            },
            entertaining: {
                rating: 95,
                reason: 'Brilliant presentations, peppared with jokes, doesn\'t take himself too seriously'
            },
            controversial: {
                rating: 50,
                reason: 'Too nice to be overly controversial'
            },
            noobfriendly: {
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
    },
    {
        name: 'Michael Saylor',
        bio: [
            'A former rocket scientist and currently CEO of the Business Intelligence company, Microservices, Michael Saylor irrupted onto the Bitcoin scene in 2020 by adding bitcoin as a large proportion of Microstrategy\'s treasury reserves.',
            'Saylor has since been encouraging other corporations to do the same, including Elon Musk\'s Tesla.',
            'He is interviewed often by Podcasters and YouTubers and advises people to zoom out, ignore the noise, and see Bitcoin as a long term store of value.'
        ],
        image: 'https://pbs.twimg.com/profile_images/1391739753540853762/CDFXycp2_400x400.jpg',
        web: [{ site: 'Twitter', url: 'https://twitter.com/michael_saylor'}],
        ratings: {
            libertarianism: {
                rating: 65,
                reason: 'Libertarian leaning, judging by his actions, but is libertarianism his driving principle?'
            },
            bitcoiner: {
                rating: 95,
                reason: 'He seems all in on Bitcoin, not sure if he holds other crypto'
            },
            tech: {
                rating: 60,
                reason: 'A rocket scientist background, so not tech averse, not sure if he qualifies as Bitcoin tech guru'
            },
            economics: {
                rating: 95,
                reason: 'Has a good grasp of real life economics'
            },
            entertaining: {
                rating: 50,
                reason: 'He seems to want to inform, rather than entertain'
            },
            controversial: {
                rating: 85,
                reason: 'The more conservative CFOs and shareholders will certainly see him as controversial'
            },
            noobfriendly: {
                rating: 15,
                reason: 'He goes quite deep, probably not the best place for a total novice to start unless well versed in corpotate financials'
            },
            integrity: {
                rating: 90,
                reason: 'Well he has skin in the game, that\'s what it\'s all about'
            },
            lovability: {
                rating: 65,
                reason: 'Seems quite friendly and approachable but very matter of fact'
            },
            influence: {
                rating: 99,
                reason: 'Hugely influential for corporate and institutional investors, a massive figure in Bitcoin since 2020'
            }
        }
    },
    {
        name: 'Max Keiser',
        bio: [
            'Max has been a Bitcoin maximalist longer than anyone, through his show The Keiser Report, co-hosted with Stacey Herbert, he has been battling the Banksters and warning of impending economic collapse for aeons, heightened by the global collapse of 2008.',
            'An excitable visionary, not got the faint hearted, but very \'on the nail\' with his Bitcoin predictions'
        ],
        image: 'https://pbs.twimg.com/profile_images/1361873587582472195/y57DiTYX_400x400.jpg',
        web: [
            { site: 'Twitter', url: 'https://twitter.com/maxkeiser' },
            { site: 'Orange Pill', url: 'https://www.youtube.com/user/MaxKeiserTV' }
        ],
        ratings: {
            libertarianism: {
                rating: 95,
                reason: 'Endorses the soveriegnty of the individual while chastising the legacy authoritarian establishment'
            },
            bitcoiner: {
                rating: 100,
                reason: 'Been shouting about Bitcoin since 2011, when it was $1 USD'
            },
            tech: {
                rating: 5,
                reason: 'More fiancnce than tech'
            },
            economics: {
                rating: 99,
                reason: 'He knows his Austrian Economics'
            },
            entertaining: {
                rating: 100,
                reason: 'Max is great entertainment value, especially when he\'s on a rant'
            },
            controversial: {
                rating: 90,
                reason: 'If you are Jamie Dimon or otherwise rooted to legacy banking, you may find Max somewhat offensive'
            },
            noobfriendly: {
                rating: 50,
                reason: 'Without a grounding in libertarian thinking, the financial markets and macroeconomics a Noob may struggle with Max, but patience pays.'
            },
            integrity: {
                rating: 85,
                reason: 'Seems pretty straigt, honest, and consistent (However he was once a broker and options trader)'
            },
            lovability: {
                rating: 90,
                reason: 'Stacey seems to put up with him'
            },
            influence: {
                rating: 75,
                reason: 'Strong influence, especially in the early years of Bitcoin, purhaps he\'s since been overtaken by bigger Bitcoin celebrities.'
            }
        }
    },
];

export default {
    whosWhoData
}