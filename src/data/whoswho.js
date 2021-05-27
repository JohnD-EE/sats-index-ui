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
        bio: [
            ''
        ],
        image: '',
        web: [
            { site: '', url: '' },
        ],
        ratings: [
            {
                metric: 'libertarianism',
                rating: 0,
                reason: ''
            },
            {
                metric: 'bitcoiner',
                rating: 0,
                reason: ''
            },
            {
                metric: 'tech',
                rating: 0,
                reason: ''
            },
            {
                metric: 'economics',
                rating: 0,
                reason: ''
            },
            {
                metric: 'entertaining',
                rating: 0,
                reason: ''
            },
            {
                metric: 'controversial',
                rating: 0,
                reason: ''
            },
            {
                metric: 'noobfriendly',
                rating: 0,
                reason: ''
            },
            {
                metric: 'integrity',
                rating: 0,
                reason: ''
            },
            {
                metric: 'lovability',
                rating: 0,
                reason: ''
            },
            {
                metric: 'influence',
                rating: 0,
                reason: ''
            },
            {
                metric: 'educator',
                rating: 0,
                reason: ''
            }
        ]
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
        ratings: [
            {
                metric: 'libertarianism',
                rating: 99,
                reason: 'From the white paper and other communications via email and forum posts he seems strongly rooted in Austrian Economics / Libertarian thinking.'
            },
            {
                metric: 'bitcoiner',
                rating: 100,
                reason: 'Well, obviously'
            },
            {
                metric: 'tech',
                rating: 99,
                reason: 'Clearly an abstract thinker, creating bitcoin out of the intersection of other technical innovations. As he said, \'I am better with code than with words though\', however Satoshi\'s code itself wasn\'t flawless'
            },
            {
                metric: 'economics',
                rating: 99,
                reason: 'A great understanding of human behaviour, economic incentives and rewards, as well as a deep understanding of money. The components existed before Satoshi, but the genius is in the implementation.'
            },
            {
                metric: 'entertaining',
                rating: 15,
                reason: 'We don\'t know him personally, there\'s not much evidence of humour but his sarcastic message in the genesis block earns him some points: \'Chancellor on Brink of Second Bailout for Banks\''
            },
            {
                metric: 'controversial',
                rating: 99,
                reason: 'He\'s disrupted everything and he\'s anonymous'
            },
            {
                metric: 'noobfriendly',
                rating: 20,
                reason: 'He made the effort to communicate his thinking in the right way, we don\t have much to go on though, other than his writings.'
            },
            {
                metric: 'integrity',
                rating: 95,
                reason: 'He did the right thing and walked away from the project to leave it leaderless and decentralised, and he has never spent his vast bitcoin wealth.'
            },
            {
                metric: 'lovability',
                rating: 0,
                reason: 'We just don\'t know him, but apparently he could come across as a bit harsh sometimes'
            },
            {
                metric: 'influence',
                rating: 90,
                reason: 'He\'s changed the world forever, and he has over 1M BTC in his wallets which have never been moved, but his influence and importance in the Bitcoin project diminishes over time'
            },
            {
                metric: 'educator',
                rating: 75,
                reason: 'His creation has educated so many people about money, but he\'s not currently actively educating'
            },
        ]
    },
    {
        name: 'Andreas Antonopoulus',
        bio: [
            'An influential speaker, teacher and podcaster in the Bitcoin domain since 2012, Andreas is now one of the most recognised and respected voices in the space, oozes charisma, and shares generously.',
            'Andreas is definitely a Noob Friendly place to start, he\'s recognised by everyone in Bitcoin as a great educator and has worked tirelessly to aleviate Bitcoin confusion.'],
        image: 'https://pbs.twimg.com/profile_images/1362967502247129090/Q2ypSr9W_400x400.jpg',
        web: [
            { site: 'Twitter', url: 'https://twitter.com/aantonop'},
            { site: 'YouTube', url: 'https://www.youtube.com/user/aantonop' }
        ],
        ratings: [
            {
                metric: 'libertarianism',
                rating: 75,
                reason: 'Certainly an advocate of free market economics, but also seems to play by the rules within the existing system'
            },
            {
                metric: 'bitcoiner',
                rating: 50,
                reason: 'Strong advocte for the Bitcoin eco-system but also embraces other cryptocurrencies'
            },
            {
                metric: 'tech',
                rating: 95,
                reason: 'Has a degree in Computer Science and Data Communications and Distributed Systems from University College London. Very stong in Security'
            },
            {
                metric: 'economics',
                rating: 75,
                reason: 'Seems to understand real world economics but not necessarily a guru on fincance and economics'
            },
            {
                metric: 'entertaining',
                rating: 95,
                reason: 'Brilliant presentations, peppered with jokes, doesn\'t take himself too seriously'
            },
            {
                metric: 'controversial',
                rating: 50,
                reason: 'Too nice to be overly controversial'
            },
            {
                metric: 'noobfriendly',
                rating: 99,
                reason: 'Surely one of the best explainers of the Bitcoin foundations in the cryptocurrency space'
            },
            {
                metric: 'integrity',
                rating: 90,
                reason: 'Been in the Bitcoin domain for ages, consistent adherent'
            },
            {
                metric: 'lovability',
                rating: 99,
                reason: 'Surely the sweetest guy out there'
            },
            {
                metric: 'influence',
                rating: 90,
                reason: 'Huge influence over the years'
            },
            {
                metric: 'educator',
                rating: 100,
                reason: 'Educating others is what he does best - so many good analogies, wirtten several of the early books on Bitcoin, so much well explained content.'
            }
        ]
    },
    {
        name: 'Michael Saylor',
        bio: [
            'A former rocket scientist and currently CEO of the Business Intelligence company, Microservices, Michael Saylor irrupted onto the Bitcoin scene in 2020 by adding bitcoin as a large proportion of Microstrategy\'s treasury reserves.',
            'Saylor has since been encouraging other corporations to do the same, including Elon Musk\'s Tesla.',
            'He is interviewed often by Podcasters and YouTubers and advises people to zoom out, ignore the noise, and see Bitcoin as a long term store of value.',
            'Saylor really does have \'skin in the game\'.'
        ],
        image: 'https://pbs.twimg.com/profile_images/1391739753540853762/CDFXycp2_400x400.jpg',
        web: [{ site: 'Twitter', url: 'https://twitter.com/michael_saylor'}],
        ratings: [
            {
                metric: 'libertarianism',
                rating: 65,
                reason: 'Libertarian leaning, judging by his actions, but is libertarianism his driving principle?'
            },
            {
                metric: 'bitcoiner',
                rating: 65,
                reason: 'While he seems all in on Bitcoin, his collusion with Elon Musk to \'fix\' the Bitcoin energy problem through a Bitcoin Mining Council is contrary to the anti-heroing Bitcoiner mantra'
            },
            {
                metric: 'tech',
                rating: 60,
                reason: 'A rocket scientist background, so not tech averse, not sure if he qualifies as Bitcoin tech guru'
            },
            {
                metric: 'economics',
                rating: 95,
                reason: 'Has a good grasp of real life economics'
            },
            {
                metric: 'entertaining',
                rating: 50,
                reason: 'He seems to want to inform, rather than entertain'
            },
            {
                metric: 'controversial',
                rating: 85,
                reason: 'The more conservative CFOs and shareholders will certainly see him as controversial'
            },
            {
                metric: 'noobfriendly',
                rating: 15,
                reason: 'He goes quite deep, probably not the best place for a total novice to start unless well versed in corpotate financials'
            },
            {
                metric: 'integrity',
                rating: 90,
                reason: 'Well he has skin in the game, that\'s what it\'s all about'
            },
            {
                metric: 'lovability',
                rating: 65,
                reason: 'Seems quite friendly and approachable but very matter of fact'
            },
            {
                metric: 'influence',
                rating: 99,
                reason: 'Hugely influential for corporate and institutional investors, a massive figure in Bitcoin since 2020'
            },
            {
                metric: 'educator',
                rating: 85,
                reason: 'Well he educated Elon Musk, but didn\'t complete the job, otherwise some very prescient insights for all'
            }
        ]
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
            { site: 'YouTube: Orange Pill', url: 'https://www.youtube.com/user/MaxKeiserTV' }
        ],
        ratings: [
            {
                metric: 'libertarianism',
                rating: 95,
                reason: 'Endorses the soveriegnty of the individual while chastising the legacy authoritarian establishment'
            },
            {
                metric: 'bitcoiner',
                rating: 100,
                reason: 'A Bitcoin maximalist, been shouting about Bitcoin since 2011, when it was $1 USD'
            },
            {
                metric: 'tech',
                rating: 5,
                reason: 'More finance than tech'
            },
            {
                metric: 'economics',
                rating: 95,
                reason: 'Knows the inner mechanics of finance and the macro world of Economics'
            },
            {
                metric: 'entertaining',
                rating: 100,
                reason: 'Max is great entertainment value, especially when he\'s on a rant'
            },
            {
                metric: 'controversial',
                rating: 90,
                reason: 'If you are Jamie Dimon or otherwise rooted to legacy banking, you may find Max somewhat offensive'
            },
            {
                metric: 'noobfriendly',
                rating: 55,
                reason: 'Without a grounding in libertarian thinking, the financial markets and macroeconomics a Noob may struggle with Max, but patience pays.'
            },
            {
                metric: 'integrity',
                rating: 85,
                reason: 'Seems pretty straight, honest, and consistent (However he was once a broker and options trader)'
            },
            {
                metric: 'lovability',
                rating: 65,
                reason: 'Stacey seems to put up with him, but some may find him nauseating'
            },
            {
                metric: 'influence',
                rating: 75,
                reason: 'Strong influence, especially in the early years of Bitcoin, purhaps he\'s since been overtaken by bigger Bitcoin celebrities.'
            },
            {
                metric: 'educator',
                rating: 95,
                reason: 'He\'s been educating us about Bitcoin vs the Zombie Economy for ages, and has quite a broad reach.'
            }
        ]
    },
    {
        name: 'Dan Held',
        bio: [
            'A growth leader at Bitcoin and Crypto exchange, Kraken and Writes in-depth thoughts in a weekly newsletter with tens of thousands subscribers.',
            'Dan \'Hedl\' has been active in the Crypto domain for many years, a huge influence through his various writings, podcast interviews and social activity, helping people to understand what makes Bitcoin so relevant to investors and everyday people.',
            'Dan is the proponent of the Supercycle thesis, that the current cycle is different to past 4 year cycles, the Macro backdrop of Covid and unprecedented fiat Shitcoin money printing, and the stampede of the institutional herds making this cycle different.'
        ],
        image: 'https://pbs.twimg.com/profile_images/1366113307883577346/b_ViQHZi_400x400.jpg',
        web: [
            { site: 'Twitter', url: 'https://twitter.com/danheld' },
            { site: 'The Held Report', url: 'https://danheld.substack.com'},
        ],
        ratings: [
            {
                metric: 'libertarianism',
                rating: 75,
                reason: 'Seems aligned with the liberating ideas of Bitcoin'
            },
            {
                metric: 'bitcoiner',
                rating: 70,
                reason: 'Sees Bitcoin as King, very much and advocate, writes mostly about Bitcoin, but takes a pragmatic view of altcoins'
            },
            {
                metric: 'tech',
                rating: 25,
                reason: 'Not sure about this one, certainly not a geek - Dan seems far more concentrated on the financials and societal impacts than the tech, but then again he\'s written about quantum computing and clearly understands Bitcoin mechanics'
            },
            {
                metric: 'economics',
                rating: 90,
                reason: 'Well, he has taught us all about the Supercycle'
            },
            {
                metric: 'entertaining',
                rating: 60,
                reason: 'Not a showman as such but probably brings a chuckle to a lot of bitcoiners with his timely critique of Bitcoin events as they unfold'
            },
            {
                metric: 'controversial',
                rating: 50,
                reason: 'Doesn\'t seem to deliberately court controversy, but not afraid of speaking his mind'
            },
            {
                metric: 'noobfriendly',
                rating: 85,
                reason: 'Explains his ideas clearly'
            },
            {
                metric: 'integrity',
                rating: 95,
                reason: 'Seems very consistent with his convictions, very much in this for the long run'
            },
            {
                metric: 'lovability',
                rating: 90,
                reason: 'Seems a nice enough guy'
            },
            {
                metric: 'influence',
                rating: 95,
                reason: 'Huge social following, opinions are well respected and very active in the Bitcoin space'
            },
            {
                metric: 'educator',
                rating: 100,
                reason: 'He puts a lot of thought to bringing insight and revelations to the masses'
            }
        ]
    },
    {
        name: 'Elon Musk',
        bio: [
            'Elon. Like him or loathe him, there is no denying his influence on the world and in the Bitcoin / Crypto space. A supporter of Cryptocurrency vs Fiat but seems conflicted in terms of Bitcoin. Had a huge influence on adoption when announcing Tesla\'s treasury holdings in BTC, but then made the markets tank buy no longer accepting BTC and surfacing FUD around Energy usage for mining.',
            'A fascinating character but the Bitcoin story is yet to fully unfold. Some say he is malisciously using his influence to manipulate markets for his own gain.'
        ],
        image: 'https://pbs.twimg.com/profile_images/1383184766959120385/MM9DHPWC_400x400.jpg',
        web: [
            { site: 'Twitter', url: 'https://twitter.com/elonmusk' },
        ],
        ratings: [
            {
                metric: 'libertarianism',
                rating: 5,
                reason: 'Often talks as a freedom loving, fiat hating, self-sovereign libertarian but has no problem taking government funding for his business interests'
            },
            {
                metric: 'bitcoiner',
                rating: 0,
                reason: 'Created unecessary FUD around the Bitcoin energy usage and shills nonsense coins'
            },
            {
                metric: 'tech',
                rating: 50,
                reason: 'Savvy as a rocket Engineer, but perhaps not so much in Bitcoin'
            },
            {
                metric: 'economics',
                rating: 40,
                reason: 'Thinks he understands money because he co-founded Paypal, and clearly business Savvy, but does he understand Bitcoin economics?'
            },
            {
                metric: 'entertaining',
                rating: 20,
                reason: 'Some will find fun arguing with him, but he\'s not really there to entertain'
            },
            {
                metric: 'controversial',
                rating: 95,
                reason: 'You bet! Sometimes for good, sometimes for bad'
            },
            {
                metric: 'noobfriendly',
                rating: 0,
                reason: 'No, he gives Noobs bad advice (Dogecoin)'
            },
            {
                metric: 'integrity',
                rating: 15,
                reason: 'Mixed feelings on this one, he puts his money where his mouth is in business but really lacked integrity when he became a Dogecoin shill, encouraging ignorant followers to part with their savings, could have behaved more responsibly'
            },
            {
                metric: 'lovability',
                rating: 25,
                reason: 'He\'s a bit marmite really'
            },
            {
                metric: 'influence',
                rating: 99,
                reason: 'With so many followers and being one of the biggest and loudest Billionaires he\'s having a huge influence on market sentiment and adoption'
            },
            {
                metric: 'educator',
                rating: 0,
                reason: 'He is not an educator on Bitcoin - his messages are mixed, his arguments are often unfounded, he reacts emotionally'
            }
        ]
    },
    {
        name: 'Raoul Pal',
        bio: [
            'CEO and Co-Founder of Real Vision, an  investment platform helping people understand the complexities of finance, business and the global economy.',
            'Raoul Pal is very active on social media, providing commentary and interviews to educate investors and the masses in Bitcoin and Crypto. His knowledge of traditional Money Markets helps to inform our understanding of DeFi by comparison.'
        ],
        image: 'https://pbs.twimg.com/profile_images/1134440835410538496/jrvVYXVY_400x400.jpg',
        web: [
            { site: 'Twitter', url: 'https://twitter.com/RaoulGMI' },
            { site: 'Real Vision', url: 'https://www.realvision.com/' },
            { site: 'YouTube: Real Vision', url: 'https://www.youtube.com/channel/UCBH5VZE_Y4F3CMcPIzPEB5A' }
        ],
        ratings: [
            {
                metric: 'libertarianism',
                rating: 15,
                reason: 'Is Raoul in Bitcoin for the investment, or to build the foundational base-layer for the freedom of future generations? Hard to tell. He gets into online spats about libertarianism, seems confused by it'
            },
            {
                metric: 'bitcoiner',
                rating: 10,
                reason: 'His infuence spreads across the entire digital asset space, and he has come under fire from Bitcoin Maxis for this'
            },
            {
                metric: 'tech',
                rating: 5,
                reason: 'More finance than Tech'
            },
            {
                metric: 'economics',
                rating: 90,
                reason: 'A pro in legacy finance, knows the space well and the opportunity for digital assets'
            },
            {
                metric: 'entertaining',
                rating: 50,
                reason: 'E5ntertaining as a magnet for criticism from Bitcoin maximalists'
            },
            {
                metric: 'controversial',
                rating: 95,
                reason: 'Crticised b Bitcoiners who accuse him of promoting altcoins, even gets into spats with Saifedeam after endorsing his book'
            },
            {
                metric: 'noobfriendly',
                rating: 20,
                reason: 'Probably not overly Noob friendly, especially those who blindly follow his advice about altcoins and ICOs'
            },
            {
                metric: 'integrity',
                rating: 25,
                reason: 'This may be unfair, he doesn\'t like the frequent criticism he gets from Bitcoiners. Once said that \'Bitcoin is the only trade that matters\', but criticised for shilling ICO shitcoins in 2017. He doesn\'t always seem to take criticism with humility'
            },
            {
                metric: 'lovability',
                rating: 20,
                reason: 'Seems well liked and respected in fianance but comes in for a lot of criticism by Bitcoiners and doesn\'t always handle it gracefully'
            },
            {
                metric: 'influence',
                rating: 90,
                reason: 'Broad reach through the Real Vision platform, many followers who act on his advice'
            },
            {
                metric: 'educator',
                rating: 90,
                reason: 'His company, Real Vision, is educating investors and the masses alike - he\'s a good presenter'
            }
        ]
    },
    {
        name: 'Pete McCormack',
        bio: [
            'Host of the popular Bitcoin Podcast, What Bitcoin Did, Peter takes a Bitcoin maximalist stance with regular bulletins from Bedford, UK.',
            'Pete\'s style is honest and engaging, a natural and relaxed interviewer who creates a vibe where his guests seem like they can be themselves'
        ],
        image: 'https://pbs.twimg.com/profile_images/1390064694191443968/HFfoSgE1_400x400.jpg',
        web: [
            { site: 'Twitter', url: 'https://twitter.com/PeterMcCormack' },
            { site: 'What Bitcoin Did', url: 'https://twitter.com/PeterMcCormack' },
            { site: 'YouTube: WBD', url: 'https://www.youtube.com/c/WhatBitcoinDidPodcast'}
            
        ],
        ratings: [
            {
                metric: 'libertarianism',
                rating: 70,
                reason: 'Gone a long way down the road to libertarianism but admits he can\'t quite go all the way against Statism - more of a minarchist'
            },
            {
                metric: 'bitcoiner',
                rating: 97,
                reason: 'Bitcoiner through and through, but does pragmatically accept a role for other digital assets as part of the eco-system'
            },
            {
                metric: 'tech',
                rating: 20,
                reason: 'Not technical but has played with code in the distant past and does take the plunge in Bitcoin specific tech'
            },
            {
                metric: 'economics',
                rating: 70,
                reason: 'Open minded enough to embrace the fundamentals of Austrian Economics and well versed in Bitcoin vs Legacy Economics arguments'
            },
            {
                metric: 'entertaining',
                rating: 90,
                reason: 'Shows are a great listen, very engaging interviews, very personal, great balance'
            },
            {
                metric: 'controversial',
                rating: 99,
                reason: 'Jus ask Elon who called Pete \'obnoxious\' when triggering the collapse in May 2021'
            },
            {
                metric: 'noobfriendly',
                rating: 95,
                reason: 'List to his Beginner\'s Guide to Bitcoin series, just brilliant'
            },
            {
                metric: 'integrity',
                rating: 95,
                reason: 'Seems to act on his words'
            },
            {
                metric: 'lovability',
                rating: 80,
                reason: 'Very subjective, some haters but many likers'
            },
            {
                metric: 'influence',
                rating: 95,
                reason: 'Triggering the crash of May 2021 when debating Elon'
            },
            {
                metric: 'educator',
                rating: 95,
                reason: 'Interviews and chats are very accessible learning tools'
            }
        ]
    },
    {
        name: 'Peter Schiff',
        bio: [
            'A Gold Bug and financial commentater firmly rooted in legacy finance, a self proclaimed anti-bitcoiner who would probably be mildly amused to find himself in a Who\'s Who of Bitcoin.',
            'Peter Schiff is in some ways aligned with Bitconer thinking, seeing money supply inflation as the demise of fiat currency, but advocates gold rather than Bitcoin as the lifeboat.'
        ],
        image: 'https://pbs.twimg.com/profile_images/1265705916298641408/qK7MHnk9_400x400.jpg',
        web: [
            { site: 'Twitter', url: 'https://twitter.com/PeterSchiff' },
            { site: 'Schiff Radio', url: ' http://SchiffRadio.com' }
        ],
        ratings: [
            {
                metric: 'libertarianism',
                rating: 50,
                reason: 'Economic advisor to Ron Paul in 2008, Libertarian leanngs but still rooted to legacy politics.'
            },
            {
                metric: 'bitcoiner',
                rating: 0,
                reason: 'One of the loudest voices against Bitcoin - Eric Voorhees gave him some, but apparently Schiff lost the keys'
            },
            {
                metric: 'tech',
                rating: 0,
                reason: 'Nope - he lost his Bitcoin keys'
            },
            {
                metric: 'economics',
                rating: 65,
                reason: 'Legacy economics yes, but not an advocate for Bitcoin economics - only time will tell who was right'
            },
            {
                metric: 'entertaining',
                rating: 50,
                reason: 'Bitcoiners seem to find him immensely entertaining'
            },
            {
                metric: 'controversial',
                rating: 75,
                reason: 'Loves a fight with Bitcoiners'
            },
            {
                metric: 'noobfriendly',
                rating: 10,
                reason: 'Noobs can use Schiff to practice their rebuttals'
            },
            {
                metric: 'integrity',
                rating: 85,
                reason: 'Seems to stick to his principles'
            },
            {
                metric: 'lovability',
                rating: 80,
                reason: 'Despite his anti-Bitcoin stance, he seems mostly affable'
            },
            {
                metric: 'influence',
                rating: 55,
                reason: 'As schiff has confessed himself, when he attacks Bitcoin its price tends to rise'
            },
            {
                metric: 'educator',
                rating: 10,
                reason: 'Useful in the sphere of legacy finance, but mostly wrong about Bitcoin - or is he?'
            }
        ]
    },
    {
        name: 'Robert Breedlove',
        bio: [
            'Through the concept of Parallax, when an object appears to change its position because the person observing it has changed their position, Breedlove encourages us to shift our perspectives to those presented by the digital age of the internet and Bitcoin.',
            'Breedlove, who calls himself a \'freedom maximalist\' sees questioning the concept of money as the most significant thing we could be engaged in, in a world drowning in deception.',
            'Describing Bitcoin as honest money, he sees it as a humanitarian movement exposing the deception of central banking, the greatest con in human history.'
        ],
        image: 'https://pbs.twimg.com/profile_images/1362530493095309314/JnIBLjJQ_400x400.jpg',
        web: [
            { site: 'Twitter', url: 'https://twitter.com/Breedlove22' },
            { site: 'What Is Money? Podcast', url: 'https://whatismoneypodcast.com/' },
            { site: 'Parallax Blog', url: 'https://www.parallaxdigital.io/blog' }
        ],
        ratings: [
            {
                metric: 'libertarianism',
                rating: 100,
                reason: 'A Freedom Maximalist, and a great teacher about freedom and self-sovereignty'
            },
            {
                metric: 'bitcoiner',
                rating: 99,
                reason: 'Describes Bitcoin as Honest Money'
            },
            {
                metric: 'tech',
                rating: 10,
                reason: 'Hard to know, doesn\'t seem to specialise much on the tech side of Bitcoin'
            },
            {
                metric: 'economics',
                rating: 99,
                reason: 'Goes beyond economics looks for first principes, understands money from it\'s earliest conception'
            },
            {
                metric: 'entertaining',
                rating: 60,
                reason: 'A great speaker, fascinating ideas, but not a showman'
            },
            {
                metric: 'controversial',
                rating: 50,
                reason: 'Doesn\'t seem to court controversy like some Bitcoiners, but Central bankers will disagree vehemently with is Central Banking as a con mantra'
            },
            {
                metric: 'noobfriendly',
                rating: 75,
                reason: 'Noobs would do well to take the time to listen to Breedlove, but may find his thinking a little heavy the first time around'
            },
            {
                metric: 'integrity',
                rating: 99,
                reason: 'Seems all in, committed and consistent'
            },
            {
                metric: 'lovability',
                rating: 80,
                reason: 'seems quite likeable, and apparently the ladies think he\'s hot'
            },
            {
                metric: 'influence',
                rating: 85,
                reason: 'Hightly influential to those who have thought deeply about Bitcoin\'s potential impact on humanity'
            },
            {
                metric: 'educator',
                rating: 99,
                reason: 'Author of fine in depth articles, and frequent podcaster, brings deep philosophical analysis'
            }
        ]
    },
]

export default {
    whosWhoData
}