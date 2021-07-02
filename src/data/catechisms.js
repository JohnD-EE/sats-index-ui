/*
const catechismList = [
    {
        name: '',
        fuds: [],
        rebuttals: [],
        notes: [{
            note: '',
            url: '',
            site: ''            
        }]
    }
]
*/


/*
FUD LIST:
China Control:
Tether:
No CEO:
Silk Road:
Boiling the Oceans:
No Merchants:
BTC is a CULT
Criminals and Funds Terrorism:
Is Disgusting Rat Poison
Nation State Attack
The Greater Fool theory / Tulip Mania - the only reason BTC has value is that other ppl are willing to pay for it.
Quantum Computing
51% Attack
Government Bans
Government blocks will diminish its value.
No Intrinsic Value
Volatility
Can be cloned - look at all the cryptos
Fails as a currency
Doesn't scale
Vulnerable to hacks
Skewed BTC ownership - most is owned by the rich / early miners / early investors
Govts and central banks buy up Bitcoin so they control it just like they bought up gold.
What if Satoshi moved his coins (or Craig Wright moved Satoshis coins)
What if there was an inflation bug
Is backed by nothing (System Justification Bias we prefer Fiat Shitcoin and Legitimise the status quo due to cognitive bias)
*/

const catechismList = [
    {
        name: 'No Intrinsic Value',
        fuds: [
            'Bitcoin has no intrinsic value, it\'s just monopoly money.',
            'Bitcoin is just numbers on computers, it is just magic internet money.',
            'Bitcoin is fake money.'
        ],
        rebuttals: [
            'Nothing has intrinsic objective value. Value is subjective and contextual.',
            'Value is not an inherent property of anything.',
            'Humans impose value on something according to its usefulness.',
            'Gold has no intrinsic value, it\'s value is determined by humans',
            'The usefulness of something is determined by its properties, and the context in whcih it may be put to use.',
            'The value of something is the intersection of supply and demand in a free market.',
            'The properties inherent in Bitcoin are causing the market to converge on it as a tool to communicate and measure value.',
            'Bitcoin has the properties of saleability, scarcity, fungibility, durability and is the most secure, anti-fragile, apolitical, uninflatable, uncensorable, immutable, publicly accessible, soundest form of money ever conceived and that is what makes it desirable and which confers its value.',
            '"Any sufficiently advanced technology is indistinguishable from magic" - Arthur C Clarke.',
            'Fiat currency is just numbers on computors, money is created out of thin air through the issuance of government and corporate bonds, and bank loans (mostly mortgages)',
            'Let the markets decide what is fake money and what isn\'t, the market discovers truth.'
        ],
        notes: [{
            note: 'Andreas Antonopolous, Fake News and Fake Money',
            url: 'https://www.youtube.com/watch?v=i_wOEL6dprg',
            site: 'YouTube: Andreas Antonopolous'            
        }]
    },
    {
        name: 'Not Backed',
        fuds: [
            'Bitcoin is not backed by anything',
        ],
        rebuttals: [
            'Bitcoin is backed my energy, proof-of-work.',
            'Bitcoin is backed by math, cryptography, code, users, the network, and all of the previous timestamped and verified transactions openly and securely stored on its blockchain.',
            'If something is valued by people, and therefore in demand, it doesn\'t need to be backed by anything.',
            'Bitcoin is backed by the credibility of its monetary properties, defined in code and upheld by users.',
            'Fiat currency is only backed by decree, by the word of the government, it has been completely decoupled from gold since 1971 and is continually debased by central bank money printing.'
        ],
        notes: [
            {
                note: '"Money is energy. Bitcoin is the first crypto monetary energy network, capable of collecting all the world’s liquid energy, storing it over time without power loss, and channeling it across space with negligible impedance." — Michael Saylor',
                url: 'https://www.youtube.com/watch?v=1Ms7ql_S63A',
                site: 'The Saylor Series'            
            },
            {
                note: 'Bitcoin\'s monetary properties and principles: Verifiably scarce (21 Million Supply Cap making Bitcoin a great store of value because it can\'t be debased by printing more money); Immutability (Transactions are irreversible and can\'t be changed or hacked); Secure (Secured cryptographically during Proof of Work incentives); Portability (Your seed phrase to your account can be carried in your head); Trustless (A true peer-to-peer commodity which can be transacted without any 3rd parties therefore avoiding counterparty risk entierely); Unconfiscatable (Bitcoin is bearer cash rather than an IOU in a bank database, the owner has true sovereignty over their money, full custodial rights over their property, and it is unseizable so that a corrupt government cannot steal your Bitcoin); Censorship Resistance (A bank or government cannot close your account), Permissionless (You don\'t need to grovel to your bank or be wealthy to open an account); Neutral (No one authority controls it, it is 100% non-political); Decentralised (Bitcoin is everywhere and nowhere, no single point of failure); Public (An open and transparent transaction history scrutinisable by anyone); Consensus (The Bitcoin network agrees on things through equality, freedom and democracy - everyone can have a voice); Extensible (Functional layers can be built upon Bitcoin by anyone); Imortal (Bitcoin will outlast all fiat); Anti-fragile (The more it is attacked the stronger it becomes); Freedom (Bitcoin is the wedge to separate Money and State. Bitcoin is building the base layer of freedom for future generations, a non-coercive, non-aggressive money rooted in peace, love and kindess. Bitcoin is the embodyment of freedom); Hope (Bitcoin is Hope)',
                url: '',
                site: ''            
            },
            {
            note: 'Analysis by Parker Lewis',
            url: 'https://bitcoinwords.github.io/bitcoin-is-not-backed-by-nothing',
            site: 'Bitcoin Words'            
        }
    ]
    },
    {
        name: 'Price Volatility',
        fuds: [
            'Bitcoin is far too volatile to be useful as a medium of exchange.',
            'Who wants to accept payment in Bitcoin when the price can crash the following day?',
            'Bitcoin is too volatile to be a store of value.'
        ],
        rebuttals: [
            'Bitcoin\'s supply inelasticity and intervention-free market comes at the cost of price volatility.',
            'As Bitcoin\'s adoption and market capitalisation grows, volatility is likely to decrease.',
            'Going from zero to a globally accepted money standard will inherently involve volatility.',
            'If a merchant was concerned about volatility, they could exchange Bitcoin for a less volatile currency following a transaction.',
            'Whales, investors with huge Bitcoin holdings who create and trade off market swings, can indeed manipulate the market for their own ends, but the market will be more difficult to manipulate as Bitcoin network and market capitalisation grows and diversifies.',
            'Bitcoin is a Trojan Horse to the legacy monetary system, slowly gaining dominance over time, it was designed to infiltrate slowly with 4 yearly changes in its supply schedule accompaned with 4 yearly price swings, if it came in to quickly it would have been more tempting to shut down, but slow adoption means volatility.',
            'Bitcoin is a revolution, the legacy world will resist its incursion and propogate FUD as a response to adoption, adding to the volatility.',
            'Price volatilty during early Bitcoin adoption beats the supply velocity of late stage fiat.'
        ],
        notes: [{
            note: 'Supply inelasticity is a feature of Bitcoin. The supply schedule of Bitcoin is pre-determined and cannot be increased or decreased in response to demand. While this may add to short-term volatility as demand is fickle, the deterministic supply schedule is one of the properties of Bitcoin which make it an excelent store of value over time as no authority can print more bitcoin. Bitcoiners see this as an acceptable trade-off.',
            url: '',
            site: ''            
        }]
    },
    {
        name: 'China',
        fuds: [
            'China keeps banning Bitcoin',
            'Most mining is done in China so Chinese miners can be coerced into controlling bitcoin'
        ],
        rebuttals: [
            'Bitcoin is not centralised to China, it is distributed globally.',
            'Mning equipment based in China can be moved elsewhere if China bans Bitcoin.',
            'A number of mining pools are based in china, but the actual miners are globally distributed.',
            'Even if China gained control over a specific mining pool, the actual miners could easily switch to another pool.',
            'For every country which bans Bitcoin, there will be countries welcoming Bitcoiners and the wealth generating innovations which Britcoin brings.',
            'China may actually want Bitcoin to replace the USD as a global reserve currency, anything to relinquish finacial control from the USA.'
        ],
        notes: [{
            note: 'How might the China FUD play out',
            url: 'https://decrypt.co/72276/heres-how-chinas-crypto-fud-will-play-out',
            site: 'Decrypt'            
        }]
    },
    {
        name: 'Doesn\'t Scale, Too Slow',
        fuds: [
            'Bitcoin is unusable as a currency for everyday exchanges',
            'Bitcoin transaction fees are too high for everyday transactions.',
            'Nobody wants to wait 10 minutes, or much longer, to pay for a cup of coffee.'
        ],
        rebuttals: [
            'Bitcoin scaling layers such as the Lightning Network and the Liquid sidechain will facilitate Visa level transactions with minimal transaction fees and wait time.',
            'Bitcoin fulfills the role of money issuer and final settlement, like a central bank, it doesn\'t compete with Visa it competes with USD, GBP, YUAN and GOLD.',
            'The Bitcoin ledger contains every historical transaction and is publicly viewable, it is not designed for small everyday transactions, Lightning and other networks use Bitcoin as the settlement layer.'
        ],
        notes: [{
            note: 'Lightning 101',
            url: 'https://medium.com/suredbits/tagged/lightning-101',
            site: 'Suredbits'            
        }]
    },
    {
        name: 'Banned by Governments',
        fuds: [
            'Bitcoin can be banned by Governments.'
        ],
        rebuttals: [
            'For every country which bans Bitcoin, there will be countries welcoming Bitcoiners and the wealth generating innovations which Bitcoin brings',
            'Countries supporting bitcoin usage and innovation will have a competitive advantage over those which don\'t',
            'Government bans are very difficult to police, people will hide behind VPNs',
            'Bitcoin is permissionless, it doesn\'t need government endorsement to thrive',
            'As Bitcoin gains wider adoption, many adoptees are in government and can influence policy either through self-interest or societal interest based on the benefits brought by Bitcoin.',
            'Bitcoin is everywhere and nowhere.' 
        ],
        notes: [{
            note: 'Balaji Srinivasan makes the case for India fully embracing Bitcoin, rather than banning it',
            url: 'https://balajis.com/why-india-should-buy-bitcoin/',
            site: 'Balaji S. Srinivasan'            
        }]
    },
    {
        name: 'Criminals and Terrorists',
        fuds: [
            'Bitcoin is used by criminals and terrorists',
            'Bitcoin enables ransomeware'
        ],
        rebuttals: [            
            'Investigation companies like Chainalysis have software that links real-world entities to cryptocurrency activity',
            'According to Chainalysis, 0.34% of cryptocurrency transactions associated with illicit activity in 2020. Criminals can\'t hide behind Bitcoin.',
            'Smart criminals use privacy coins such as Monero, due to the fully open traceability of Bitcoin transaction',
            'Fiat currencies are founded upon fraud and coersion - Fraudulently countefietting and diminishing purchasing power through money printing, and using the violent force of the state to decree their usage.',
            'Criminals use the internet, criminals use cars, criminals drink coffee - should they be banned too?'
        ],
        notes: [{
            note: 'Chainalysis reports show that cryptocurrency-related crime fell significantly in 2020',
            url: 'https://blog.chainalysis.com/reports/2021-crypto-crime-report-intro-ransomware-scams-darknet-markets',
            site: 'Chainalysis 2021 Crypto Crime Report'            
        }]
    },
    {
        name: 'Energy Usage',
        fuds: [
            'Bitcoin consumes more energy than the Netherlands',
            'Bitcoin is a dirty currency',
            'Bitcoin is boiling the oceans',
            'Bitcoin is a waste of energy'
        ],
        rebuttals: [
            'Bitcoin mining constitutes one tenth of one percent of global energy consumption',
            'The enegy mix is important, Bitcoin mining makes heavy use of renewables and energy which would otherwise be wasted. Energy consumption does not equal carbon emission, it depends on production.',
            'Bitcoin miners are driven by economic incentives to use the lowest energy costs. Energy is costly and wasteful to distribute so miners often locate close to the source and consume surplusses which would otherwise be wasted.',
            'Miners help to balance the intermittent electricity supply of renewables.',
            'Bitcoin mining even harnesses byproducts of oil refining, the methane which would otherwise be flared into the atmosphere.',
            'Bitcoin mining incentivizes new and more efficient ways to generate energ by offering rewards to those who find cheaper ways to produce energy at scale',
            'Energy consumption, and the Proof of Work computation it powers, are arguably a worthwhile price to pay for a decentralised, secure, uncorruptable store of value which is freely accessible to all.',
            'There is no better use of energy than in securing and preserving the integrety of a monetary network providing a universal measure of value',
            'The market has given Bitcoin a far higher value that the cost of energy and is arguably the most efficient and worthwhile use of energy known to man.',
            'The energy costs of the existing banking and transaction system are huge in comparison to Bitcoin',
            'Bitcoin will spur innovation in the development of renewable energy technology & resources',
            'What is the energy mix in producing junk food, junk tv, wars, air conditioning, christmas tree lights, pointless car journeys? Who should be the judge of a worthwile use of energy?',
            'We need to understand the enormity of the problems within our legacy economic system, which Bitcoin solves.',
            'Our fiat system requires continual economic growth in order to be sustained. But continual growth is ultimately polluting and destructive. Bitcoin does not require continual economic growth at the expense of the planet. An inflationary monetary system is contrary to environmentalism.'
        ],
        notes: [{
            note: '',
            url: '',
            site: ''            
        }]
    },
    {
        name: 'No Merchants',
        fuds: [
            'Bitcoin is not widely accepted by shops',
        ],
        rebuttals: [
            'For Bitcoin to succceed as a globally accepted currency it will go through adoption stages, currently we are still early adopters, using Bitcoin for savings, merchants will come later.',
            'Go to Nigeria, Vietnam, Philippines, El Salvador, Venezuela, Guatemala, Chile, Columbia, Argentina, Brazil, Mexico to find the Bitcoin use cases for everyday exchanges, remittances and savings as an alternative to inflated and debased fiat currencies.',
            'The Lighting Network and other transaction protocols will slowly make everyday transactions a reality, networks don\'t grow overnight.',
            'The USD is not widely accepted by shops ing the UK. The Euro is not widely accepted by shops in the US. BTC acceptance is growing in every country, we are still early in its adoption.'
        ],
        notes: [{
            note: '',
            url: '',
            site: ''            
        }]
    },
    {
        name: 'Quantum Computing',
        fuds: [
            'Quantum computing will threaten the security of Bitcoin',
            'Quantum computers will be able to carry out brute force attacks on Bitcoin addresses to steal people\'s bitcoin',
        ],
        rebuttals: [
            'Quantum computing is a very long way from being stable or viable',
            'If Quantum computing becomes viable, then there are so many other potential targets for Cyber attacks, from nuclear facilities to the existing fianancial systems, the IT infrastructures of the world will be hackable.',
            'The Bitcoin network will have the option of adopting quantum resistant hashing techniques into the Bitcoin protocol',
            'Today\'s quantum computers have impractically-high error rates and can operate only in lab conditions at temperatures near absolute zero'
        ],
        notes: [{
            note: 'Can Quantum comFupters attack Bitcoin?',
            url: 'https://braiins.com/blog/can-quantum-computers-51-attack-bitcoin',
            site: 'Braiins'            
        }]
    },
    {
        name: 'Satoshi\'s Coins',
        fuds: [
            'Satoshi Nakamoto controls over 1 million Bitcoin',
            'What if Satoshi moved his coins?',
        ],
        rebuttals: [
            'The real concern would be if Craig Wright moved Satoshi\'s coins',
            'If Satoshi sold his coins for fiat, that would be a concern, it would damage his integrity.',
            'Since the inception of Bitcoin on Jan 3rd 2009, the Satoshi accounts have not been touched. This speaks louder than any FUD over Satoshi\'s coins.',
            'There would be a short-term impact on price, but long-term bitcoin would still thrive due to being the soundest money available, there are many altcoins with large pre-mines which still get people salivating.'
        ],
        notes: [{
            note: '',
            url: '',
            site: ''            
        }]
    },
    {
        name: 'No-one is in Control',
        fuds: [
            'Bitcoin has no CEO',
            'There is no Bitcoin customer services department',
            'There is no Bitcoin head-office'
        ],
        rebuttals: [
            'The lack of a leader or centralised control is a benefit of Bitcoin. Bitcoin is governed by rules, not rulers.',
            'Satoshi Nakamoto left Bitcoin because he knew that the presence of a founder or leader would be a single point of failure for its success.',
            'The lack of a central authority in Bitcoin is key to its anti-fragile nature, there is no single point of attack - if you cut off the head of a Hydra, more will grow back. People can set up new Bitcoin nodes anywhere there is an internet connection.'
        ],
        notes: [{
            note: '',
            url: '',
            site: ''            
        }]
    },
    {
        name: 'Bitcoin Fungability',
        fuds: [
            'Your Bitcoin can be tainted or balcklisted if it was previously used for criminality',
            'Cash can be used for drug deals or snorting cocaine and still maintain its purchasing power. Bitcoin\'s public and open nature means transactions are traceable so if your account holds transaction outputs from a tainted account, then your account becomes tainted.',
            'Some people claim that bitcoin mined from provably renewable energy sources should have a higher value than those from undeterminable sources.'
        ],
        rebuttals: [
            'Privacy protocols such as Dandelion (diffusion via random transaction pathways) and MimbleWimble (Masking transactions through cryptography) could be implemented if consensus is reached.',
            'The inclusion of Schnorr signatures into the Bitcoin protocal also enables greater privacy.',
            'The alreay existing method of Coinjoin, the mixing of transactions to obfuscate and anonymise transactions makes external tracking more difficult, but not impossible.'
        ],
        notes: [{
            note: 'Bitcoin fungibility, where all bitcoin are treated equally regardless of their transaction or mining history, is vital for its future. Bitcoin needs to be fungible in order to be considered sound money. Today, Bitcoin is not truly fungible because blockchain analysis tools can be used to reveal criminally tainted transaction outputs. Fungibility is likely to be the battleground of the future for Bitcoin. Technical solutions will be available should the need require a solutoin.',
            url: 'https://bravenewcoin.com/insights/cryptos-fungibility-problem',
            site: 'Brave New Coin'            
        }]
    },
    {
        name: 'Bitcoin is a Cult',
        fuds: [
            'There is a lot of cultish toxicity, especially from Bitcoin maximalists in their views towards anyone who is not a maximialist \'believer\'.'
        ],
        rebuttals: [
            'Bitcoiners are leaving the cult of fiat, not starting one',
            'Bitcoin needs no leaders',
            'Look at what is written on the USD notes - \'In God We Trust\', and all of the other weird cultish symbolism on the dollar bill, as well as all the antiquated pomp and ceremony of statism.'
        ],
        notes: [{
            note: '',
            url: '',
            site: ''            
        }]
    },
    {
        name: 'Nation State Attack',
        fuds: [
            'A nation state with deep pockets could overpower the Bitcoin network and maliciously interfere with the ledger.'
        ],
        rebuttals: [
            'There simply is not the spare capacity of specialised mining CPUs (ASICS) in existence to be bought up and targeted in unison against Bitcoin.'
        ],
        notes: [{
            note: '',
            url: '',
            site: ''            
        }]
    },
    {
        name: 'Too late',
        fuds: [
            'It\'s too late to buy Bitcoin, the ship has already sailed, I\'ve missed out.'
        ],
        rebuttals: [
            'Bitcoin\'s scarcity, its inelastic supply, means that it becomes ever more valuable as demand rises. Demand keeps rising as more and more people understand the credibility of its monetary properties compared with legacy fiat alternatives.',
            'Bitcoin is at the very early stages of adoption, its value, as determined by the market, will rise with the ongoing adoption.',
            'Bitcoin assessed, on its properties and principles, is the soundest form of money ever discovered, it will outcompete all other forms of money.',
            'It is still very early to get involved with Bitcoin, the reserve asset of the future.'
        ],
        notes: [{
            note: 'Parker Lewis, how Bitcoin obsoletes all other money',
            url: 'https://unchained-capital.com/blog/bitcoin-obsoletes-all-other-money/',
            site: 'Unchained Capital'            
        }]
    },
    {
        name: 'Bitcoin can be copied',
        fuds: [
            'Anyone can clone Bitcoin to launch a new coin. This makes Bitcoin\'s supply cap redundant.',
            'Bitcoin will be outcompteted by better coins',
            'There are constant innovations in the cryptocurrency space and these are faster, cheaper, and more functional than Bitcoin.',
            'Bitcoin is like MySpace or Netscape, it is old tech which will be replaced by better innovations.'
        ],
        rebuttals: [
            'Clones can be created by anyone, but ultimately the market will determine their value. Many Bitcoin variants have been launched, but not convinced the market.',
            'Bitcoin is considered an optimal tradeoff of decentralisation, speed, block size, block time, consensus mechanism, transparency, security, monetary policy, scalability',
            'Bitcoin is far more than just the code, which anyone can copy. An entire eco-system has emerged which could never have been envisaged at Bitcoin\'s genesis - users, miners, nodes, infrastructure providers, supporters, thinkers, market makers. Bitcoin is an organic eco-system with a beating heart which is impossible to replicate.',
        ],
        notes: [{
            note: 'Parker Lewis on why Bitcoin can\'t be copied',
            url: 'https://unchained-capital.com/blog/bitcoin-cant-be-copied/',
            site: 'Unchained Capital'            
        }]
    },
    {
        name: 'Bitcoin is a bubble',
        fuds: [
            'Bitcoin is tulip mania',
            'Bitcoin will be worthless, it will go to zero'
        ],
        rebuttals: [
            'Anyone can short bitcoin, bet on the price to go down - put some skin in the game and you\'ll make a fortune when it goes to zero'
        ],
        notes: [{
            note: '',
            url: '',
            site: ''            
        }]
    }
]

export default {
    catechismList
}
