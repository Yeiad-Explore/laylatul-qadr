export interface IntroCard {
  icon: string;
  title: string;
  text: string;
}

export interface NightItem {
  night: number;
  type: 'even' | 'odd' | 'special' | 'farewell';
  theme: string;
  focus: string;
  acts: string[];
}

export interface Hadith {
  id: number;
  arabic?: string;
  text: string;
  source: string;
}

export interface HistoryItem {
  date: string;
  title: string;
  text: string;
  image: string;
}

export interface SignCard {
  icon: string;
  title: string;
  text: string;
  source: string;
}

export interface IbadahItem {
  num: number;
  name: string;
  desc: string;
}

export interface IbadahCategory {
  id: string;
  label: string;
  items: IbadahItem[];
}

export interface Dua {
  arabic: string;
  translit: string;
  meaning: string;
  occasion: string;
}

export const introCards: IntroCard[] = [
  {
    icon: '🌙',
    title: 'What Are They?',
    text: "The final 10 nights of Ramadan — beginning from the 21st night — are a period of intensified worship, reflection, and spiritual pursuit. The Prophet ﷺ would tighten his belt and devote himself entirely to worship during these nights.",
  },
  {
    icon: '⭐',
    title: 'Laylat ul-Qadr',
    text: "Hidden within these 10 nights is Laylat ul-Qadr — the Night of Power. A single night of worship on Laylat ul-Qadr is equivalent to 83 years and 4 months of continuous worship. Allah conceals it so we worship every night fully.",
  },
  {
    icon: '📿',
    title: "The Prophet's Sunnah",
    text: 'Aisha (RA) reported: "When the last ten days of Ramadan arrived, the Prophet ﷺ would stay up all night, wake his family, strive hard, and tighten his waist belt." — Sahih al-Bukhari #2024',
  },
  {
    icon: '🤲',
    title: "I'tikaf",
    text: "The Prophet ﷺ performed I'tikaf (spiritual seclusion in the mosque) during the last 10 nights every year until he passed away. It is a Sunnah Mu'akkadah — a confirmed practice of spiritual retreat and proximity to Allah.",
  },
  {
    icon: '📖',
    title: "The Quran's Descent",
    text: "The Quran was first revealed on Laylat ul-Qadr. Allah says: \"Indeed, We sent it [the Quran] down during the Night of Decree.\" (97:1) This night marks the beginning of divine revelation to humanity.",
  },
  {
    icon: '🌅',
    title: 'Angels Descend',
    text: 'On Laylat ul-Qadr, Allah says: "The angels and the Spirit descend therein by permission of their Lord for every matter." (97:4) The number of angels descending exceeds the pebbles of the earth.',
  },
];

export const nights: NightItem[] = [
  {
    night: 21,
    type: 'even',
    theme: '🌿 Night of Tawbah',
    focus: 'Repentance & Renewal',
    acts: ['Begin with a sincere istighfar session', 'Pray Isha & Taraweeh in congregation', 'Recite Surah Al-Mulk before sleep', "Perform 2 raka'ah Tahajjud with Ayat al-Kursi"],
  },
  {
    night: 22,
    type: 'even',
    theme: '❤️ Night of Shukr',
    focus: 'Gratitude & Reflection',
    acts: ['Write 100 blessings you are grateful for', 'Recite Alhamdulillah 1000 times', 'Give extra sadaqah — even a smile counts', 'Call a parent or elder and express love'],
  },
  {
    night: 23,
    type: 'odd',
    theme: '✨ Night of Revelation',
    focus: 'The Quran Descended — Night of 1000 Months',
    acts: ["Complete Taraweeh — every single raka'ah", 'Read 1 Juz with tafsir & contemplation', "Perform I'tikaf if possible", 'Pray Tahajjud until Fajr with dua list'],
  },
  {
    night: 24,
    type: 'even',
    theme: '🌙 Night of Family',
    focus: 'Silat ur-Rahim — Mending Bonds',
    acts: ['Reconcile with anyone you have conflict with', 'Pray for all deceased family members', 'Cook and share food with neighbors', 'Recite Surah Yusuf — forgiveness & family'],
  },
  {
    night: 25,
    type: 'odd',
    theme: '💎 Night of the Quran',
    focus: 'Recitation, Reflection & Transformation',
    acts: ['Read Quran with tafsir for at least 1 hour', 'Memorize or review a new ayah', 'Reflect: which ayah speaks to your struggle?', "Pray long raka'ahs with extended recitation"],
  },
  {
    night: 26,
    type: 'even',
    theme: '🔮 Night of the Heart',
    focus: 'Tazkiyat un-Nafs — Purifying the Inner Self',
    acts: ['30 mins of silent muraqabah (self-accounting)', 'Recite Surah Al-Hashr (59:22-24) 100x', 'Give a secret charity no one knows about', 'Dua: "Ya Muqallibal Quloob thabbit qalbee"'],
  },
  {
    night: 27,
    type: 'special',
    theme: '👑 The Most Sought Night',
    focus: 'Most Scholars: This Is THE Night — Go All In',
    acts: ['Perform full ghusl before Maghrib', 'Pray all nawafil from Maghrib to Fajr', 'Recite the Qadr dua thousands of times', 'Make the most sincere duas of your life', 'Wake every member of your household'],
  },
  {
    night: 28,
    type: 'even',
    theme: '🌱 Night of Sadaqah',
    focus: 'Generosity, Zakat & Purification of Wealth',
    acts: ['Calculate and pay Zakat ul-Fitr', 'Sponsor an orphan or widow for the year', 'Give anonymously to someone in need', 'Recite Surah Al-Waqiah for barakah in rizq'],
  },
  {
    night: 29,
    type: 'odd',
    theme: '🔥 Night of Last Chances',
    focus: 'Do Not Let Regret Be Your Eid Companion',
    acts: ['Pray Witr with Qunoot — most heartfelt ever', 'Recite Istighfar 1000 times before Fajr', 'Write down your duas — commit to them', 'Make a pledge to Allah for post-Ramadan life'],
  },
  {
    night: 30,
    type: 'farewell',
    theme: '🌅 Wida\' — Night of Farewell',
    focus: 'Ramadan Departs — Carry Its Light Forward',
    acts: ['Last Tahajjud of Ramadan — pray with tears', 'Dua: "O Allah, accept from us"', 'Give final sadaqah before Eid Salah', 'Commit to fasting 6 days of Shawwal'],
  },
];

export const qadrStats = [
  { num: '1,000', label: 'Months of Worship', sub: 'One night equals 83 years & 4 months' },
  { num: '5', label: 'Verses of Surah Al-Qadr', sub: 'An entire surah revealed in its honor' },
  { num: '∞', label: 'Angels Descending', sub: 'More than the pebbles of the earth' },
  { num: '1', label: 'Hidden Night', sub: 'Concealed to maximize our worship' },
];

export const qadrFeatures = [
  {
    icon: '📜',
    title: 'Why Was It Hidden?',
    text: "The wisdom of concealing Laylat ul-Qadr is profound. Had Allah revealed its exact date, Muslims might worship intensely only on that one night and neglect the others. By hiding it, Allah ensures that the believer strives throughout all 10 nights, or even all 30 nights of Ramadan. Ibn Rajab al-Hanbali wrote: \"It was hidden so that the servant might exert effort on all the nights and so that his relationship with Allah across many nights becomes beloved.\"",
  },
  {
    icon: '🌌',
    title: 'The Night of Decree',
    text: 'Al-Qadr means both "power" and "decree." On this night, the annual decrees for each person — their lifespan, provision, events of the coming year — are handed to the angels for execution. Allah says in Surah Ad-Dukhan (44:3-4): "We sent it down on a blessed night... On that night every wise matter is made distinct." Worshipping Allah on this night means you are present at the moment your year is written.',
  },
  {
    icon: '🕊️',
    title: 'Peace Until Dawn',
    text: 'Allah describes Laylat ul-Qadr as "Salaam" — Peace — "until the emergence of dawn." The entirety of the night is an unbroken peace. Iblis (Satan) is chained and cannot harm. The angels greet every worshipper. Many believers report an unusual tranquility, ease of worship, and a sweetness in du\'a during this night that they have never felt before or since.',
  },
  {
    icon: '🕌',
    title: "The Quran's Birth Night",
    text: "The first revelation of the Quran came to Prophet Muhammad ﷺ on Laylat ul-Qadr in the Cave of Hira. Jibreel (AS) appeared and revealed the first verses of Surah Al-Alaq: \"Read in the name of your Lord who created...\" (96:1). This night is therefore the spiritual birthday of divine guidance for all of humanity — the night Allah's word entered the world through His final Prophet.",
  },
];

export const hadiths: Hadith[] = [
  {
    id: 1,
    arabic: 'مَنْ قَامَ لَيْلَةَ الْقَدْرِ إِيمَانًا وَاحْتِسَابًا غُفِرَ لَهُ مَا تَقَدَّمَ مِنْ ذَنْبِهِ',
    text: '"Whoever stands in prayer on Laylat ul-Qadr with faith and seeking reward, his previous sins will be forgiven."',
    source: 'Sahih al-Bukhari #1901 · Sahih Muslim #760',
  },
  {
    id: 2,
    arabic: 'تَحَرَّوْا لَيْلَةَ الْقَدْرِ فِي الْوِتْرِ مِنَ الْعَشْرِ الأَوَاخِرِ مِنْ رَمَضَانَ',
    text: '"Seek Laylat ul-Qadr in the odd nights of the last ten days of Ramadan."',
    source: 'Sahih al-Bukhari #2017',
  },
  {
    id: 3,
    arabic: 'كَانَ النَّبِيُّ ﷺ إِذَا دَخَلَ الْعَشْرُ شَدَّ مِئْزَرَهُ، وَأَحْيَا لَيْلَهُ، وَأَيْقَظَ أَهْلَهُ',
    text: '"When the last ten days of Ramadan began, the Prophet ﷺ would tighten his waist belt, stay up all night in worship, and wake his family."',
    source: 'Sahih al-Bukhari #2024 · Narrated by Aisha (RA)',
  },
  {
    id: 4,
    text: '"Aisha (RA) asked: \'O Messenger of Allah, if I know which night is Laylat ul-Qadr, what should I say?\' He replied: \'Say: Allahumma innaka \'afuwwun tuhibbul \'afwa fa\'fu \'anni — O Allah, You are Pardoning and You love to pardon, so pardon me.\'"',
    source: 'Sunan al-Tirmidhi #3513 · Sahih Ibn Majah #3850',
  },
  {
    id: 5,
    arabic: 'إِنَّ هَذَا الشَّهْرَ قَدْ حَضَرَكُمْ، وَفِيهِ لَيْلَةٌ خَيْرٌ مِنْ أَلْفِ شَهْرٍ، مَنْ حُرِمَهَا فَقَدْ حُرِمَ الْخَيْرَ كُلَّهُ',
    text: '"This month has come to you, and in it is a night that is better than a thousand months. Whoever is deprived of it has been deprived of all good."',
    source: 'Sunan Ibn Majah #1644 · Authenticated by al-Albani',
  },
  {
    id: 6,
    text: '"Aisha (RA) reported: \'The Messenger of Allah ﷺ used to exert himself in the last ten nights of Ramadan more than he would at any other time.\'"',
    source: 'Sahih Muslim #1175 · Narrated by Aisha (RA)',
  },
  {
    id: 7,
    text: '"The Prophet ﷺ said: \'Look for Laylat ul-Qadr in the last ten nights of Ramadan,\' then he pointed with his hand indicating 9, 7, and 5 [nights remaining]."',
    source: 'Sahih al-Bukhari #2021',
  },
  {
    id: 8,
    text: '"Ubadah ibn al-Samit (RA) narrated that the Prophet ﷺ came out to inform them about Laylat ul-Qadr, but two men were quarreling, so he said: \'I came out to inform you about Laylat ul-Qadr, but because of the quarreling between so-and-so, its knowledge was raised. Perhaps that is better for you. Look for it in the 9th, 7th, and 5th [remaining nights].\'"',
    source: 'Sahih al-Bukhari #2023',
  },
  {
    id: 9,
    text: '"The Prophet ﷺ performed I\'tikaf during the last ten nights of Ramadan, and said: \'Seek Laylat ul-Qadr in the last ten days of Ramadan.\' He continued performing I\'tikaf every year until he died, and his wives continued doing it after him."',
    source: 'Sahih al-Bukhari #2026 · Sahih Muslim #1172',
  },
  {
    id: 10,
    arabic: 'لَيْلَةُ الْقَدْرِ لَيْلَةٌ سَمِحَةٌ طَلِقَةٌ، لَا حَارَّةٌ وَلَا بَارِدَةٌ',
    text: '"Laylat ul-Qadr is a calm, pleasant night — neither hot nor cold — and the sun rises the following morning weak and red."',
    source: 'Sahih Ibn Khuzaimah #2049 · Ibn Hibban',
  },
];

export const historyItems: HistoryItem[] = [
  {
    date: '610 CE\n~13 BH',
    title: 'The First Revelation — Cave of Hira',
    text: "It was on Laylat ul-Qadr in the month of Ramadan that Angel Jibreel (AS) first appeared to Muhammad ﷺ in the Cave of Hira and revealed the opening verses of Surah Al-Alaq: \"Read! In the name of your Lord who created...\" The Prophet ﷺ was 40 years old. This night marks the beginning of prophethood and the descent of the final divine message to humanity. The Prophet ﷺ returned trembling to Khadijah (RA), who wrapped him and comforted him. He described the encounter as the most overwhelming experience of his life.",
    image: '/history/history-cave-hira.png',
  },
  {
    date: '610–632 CE',
    title: '23 Years of Revelation',
    text: "While the first revelation came on Laylat ul-Qadr, the Quran continued to be revealed over 23 years in stages — responding to events, guiding the community, and building the moral and legal framework of Islam. But every Ramadan, the Prophet ﷺ would review the entire Quran with Jibreel (AS) in what is known as the \"Ardat al-Akhira\" (final review). In his last Ramadan, Jibreel reviewed the Quran with him twice.",
    image: '/history/history-revelation.png',
  },
  {
    date: '~2 AH',
    title: 'Surah Al-Qadr Revealed',
    text: 'Allah revealed Surah Al-Qadr (Chapter 97) — an entire chapter of the Quran dedicated to honoring and describing this blessed night. The Surah declares it "better than a thousand months," describes the descent of the angels, and ends with the declaration that it is "peace until the emergence of dawn." This was Allah\'s own tribute to the night on which His Book first descended.',
    image: '/history/history-surah-qadr.png',
  },
  {
    date: '~2–10 AH',
    title: "The Prophet's I'tikaf Practice",
    text: "After the migration to Medina and the establishment of the Islamic calendar with Ramadan fasting, the Prophet ﷺ began performing I'tikaf (spiritual seclusion in the mosque) during the last 10 nights of Ramadan every single year. Aisha (RA) reported that he never abandoned this practice until his death. He would instruct his wives to perform I'tikaf, and after his passing, they continued it as his living legacy.",
    image: '/history/history-itikaf.png',
  },
  {
    date: '~7 AH',
    title: 'The Night Its Date Was Hidden',
    text: "The Prophet ﷺ narrated in Sahih al-Bukhari that he came out to inform the companions about the exact date of Laylat ul-Qadr, but he witnessed two men quarreling. As a result, the knowledge of its precise date was taken from him. He told the companions: \"Its knowledge was raised. Perhaps that is better for you.\" This is one of the most profound pieces of wisdom in Islamic history.",
    image: '/history/history-date-hidden.png',
  },
  {
    date: '11 AH',
    title: "The Prophet's Final Ramadan",
    text: "In his final Ramadan (11 AH), the Prophet ﷺ performed I'tikaf for 20 nights instead of the usual 10. Scholars interpret this as a sign that he knew it was his last Ramadan and wanted to make it exceptional. Jibreel (AS) reviewed the entire Quran with him twice that year. He passed away in Safar of 11 AH, just months later.",
    image: '/history/history-final-ramadan.png',
  },
  {
    date: '11–40 AH',
    title: "The Companions' Devotion",
    text: "The Sahabah (companions) carried the tradition of the last 10 nights with great zeal. Umar ibn al-Khattab (RA) would perform I'tikaf and stay up until Fajr during these nights. Ali ibn Abi Talib (RA) was known to sleep during the day so he could worship all night. Aisha (RA) continued the Prophet's I'tikaf for decades after his passing.",
    image: '/history/history-companions.png',
  },
  {
    date: 'Ongoing',
    title: '1400+ Years of Seeking',
    text: "For over fourteen centuries, billions of Muslims have sought Laylat ul-Qadr every Ramadan. Mosques overflow with worshippers on odd nights. Tears are shed in the depths of the night. Duas are whispered for family, for the ummah, for forgiveness. The tradition is unbroken. No other religious observance on earth is as widely practiced in a single night as this.",
    image: '/history/history-ongoing.png',
  },
];

export const signs: SignCard[] = [
  { icon: '🌙', title: 'Calm, Mild Night', text: 'The night will be calm, neither excessively hot nor cold. A peaceful, temperate night with a sense of stillness and serenity in the atmosphere.', source: 'Musnad Ahmad · Ibn Khuzaimah' },
  { icon: '☀️', title: 'Sun Rises Without Rays', text: 'The morning after Laylat ul-Qadr, the sun rises white and radiant without its usual blazing rays — appearing like a full moon rather than a burning disc.', source: 'Sahih Muslim · Ahmad' },
  { icon: '💧', title: 'Rain May Fall', text: 'Some narrations mention that it may rain on or around Laylat ul-Qadr. The earth receiving divine mercy and water is consistent with a night of immense barakah.', source: 'Musannaf Ibn Abi Shaybah' },
  { icon: '✨', title: 'Inner Peace in Worship', text: 'Many believers report an unusual sweetness in prayer, ease in weeping, and a profound sense of connection with Allah that they have rarely experienced — as if the heart is unusually open.', source: 'Scholar consensus · Lived experience' },
  { icon: '🌟', title: 'Sky Is Clear & Luminous', text: 'Some narrations indicate the sky appears unusually bright and clear on this night. The moon appears without haze, and stars seem particularly vivid and still.', source: 'Ibn Khuzaimah #2049' },
  { icon: '🕌', title: 'Masses Drawn to Worship', text: 'Scholars note that on Laylat ul-Qadr, Allah draws the hearts of believers toward the mosque and toward prayer. An unusual number of people feel compelled to worship that night.', source: "Ibn Rajab al-Hanbali · Lata'if al-Ma'arif" },
];

export const ibadahCategories: IbadahCategory[] = [
  {
    id: 'salah',
    label: 'Salah',
    items: [
      { num: 1, name: 'Isha & Taraweeh', desc: "Pray Isha in congregation. Complete all 20 raka'ahs of Taraweeh without skipping. This is your minimum for every night." },
      { num: 2, name: 'Tahajjud (Qiyam ul-Layl)', desc: "Pray 2-12 raka'ahs in pairs after midnight and before Fajr. This is the most beloved voluntary prayer to Allah. Recite long surahs slowly." },
      { num: 3, name: 'Witr with Qunoot', desc: "End every night with Witr prayer (1 or 3 raka'ahs). In the final raka'ah, raise your hands in Qunoot dua and pour out your heart." },
      { num: 4, name: 'Salat ul-Tasbeeh', desc: "The Prophet ﷺ taught this 4-raka'ah prayer with 300 tasbeehat. Especially recommended for seeking forgiveness of all sins." },
      { num: 5, name: 'Salat ul-Hajat', desc: "2 raka'ahs for a specific need or request. Pray, then make your dua. The Prophet ﷺ said whoever has a need should perform wudu and pray 2 raka'ahs." },
      { num: 6, name: 'Fajr in Congregation', desc: 'The Prophet ﷺ said: "Whoever prays Isha in congregation, it is as if he stood in prayer for half the night. Whoever prays Fajr in congregation, it is as if he stood the whole night." Do both — every night.' },
    ],
  },
  {
    id: 'quran',
    label: 'Quran',
    items: [
      { num: 1, name: 'Recitation with Tajweed', desc: 'Recite with proper tajweed and a heart present. "Those to whom We gave the Book recite it as it deserves to be recited." (2:121)' },
      { num: 2, name: 'Tadabbur — Deep Reflection', desc: 'Do not just race through pages. Pause at ayahs that move you. Ask: what does this mean for my life right now? This is the Quran\'s purpose.' },
      { num: 3, name: 'Complete Khatam', desc: 'Aim to complete a full Quran recitation in the 10 nights — approximately 6 pages per hour. Even if you don\'t finish, the intention and effort are rewarded.' },
      { num: 4, name: 'Study Tafsir', desc: 'Read the explanation of key surahs. Recommended: Tafsir Ibn Kathir (available free online). Even 30 mins of tafsir per night transforms your relationship with the Quran.' },
      { num: 5, name: 'Memorization', desc: "Pick one ayah per night and commit it to memory. By the end of 10 nights you'll have 10 new ayahs. Hafiz level: review your entire hifdh." },
      { num: 6, name: 'Listen to Recitation', desc: 'While preparing suhoor or during rest, listen to qaris like Sheikh Sudais, Sheikh Mishary, or Shaykh Abdul Basit. The Quran enters the heart through the ears too.' },
    ],
  },
  {
    id: 'dhikr',
    label: 'Dhikr',
    items: [
      { num: 1, name: 'Istighfar (Forgiveness)', desc: '"Astaghfirullah" — minimum 100 times daily. The Prophet ﷺ sought forgiveness 70–100 times every day despite being sinless. How much more do we need it?' },
      { num: 2, name: 'Laylat ul-Qadr Dua', desc: '"Allahumma innaka \'afuwwun tuhibbul \'afwa fa\'fu \'anni" — Repeat thousands of times on every odd night. This was the specific dua taught by the Prophet ﷺ.' },
      { num: 3, name: 'Subhanallah, Alhamdulillah, Allahu Akbar', desc: 'These three are "the most beloved words to Allah." The Prophet ﷺ said they are heavier on the scale than everything between heaven and earth.' },
      { num: 4, name: 'Salawat on the Prophet ﷺ', desc: '"Allahumma salli \'ala Muhammad" — 100x minimum. "Whoever sends salawat on me once, Allah sends salawat on him ten times." (Muslim)' },
      { num: 5, name: 'La ilaha illallah', desc: 'The greatest dhikr. "The best of remembrance is La ilaha illallah." (Tirmidhi) Fill the silences of your night with this declaration of monotheism.' },
      { num: 6, name: 'Personal Dua List', desc: 'Write a comprehensive dua list: dunya needs, akhirah goals, family, ummah, specific forgiveness requests. Be specific. Allah loves detailed, heartfelt requests from His servants.' },
    ],
  },
  {
    id: 'sadaqah',
    label: 'Sadaqah',
    items: [
      { num: 1, name: 'Zakat ul-Fitr', desc: 'Obligatory on every Muslim before Eid prayer. Equivalent to ~2.5kg of staple food per person in your household. Pay it early in the last 10 nights, not last minute.' },
      { num: 2, name: 'Ongoing Sadaqah', desc: '"Sadaqah extinguishes sin as water extinguishes fire." (Tirmidhi) Give something every single night of the 10 — even a small amount. Consistency matters.' },
      { num: 3, name: 'Sponsor an Orphan', desc: 'The Prophet ﷺ said: "I and the sponsor of an orphan will be in Paradise like this" — and he joined his index and middle fingers. Set up a monthly sponsorship this Ramadan.' },
      { num: 4, name: 'Feed People', desc: '"Whoever feeds a fasting person will have a reward like theirs." Cook extra and share with neighbors, distribute iftar packs, or donate to food programs.' },
      { num: 5, name: 'Secret Charity', desc: '"The right hand gives so secretly that the left hand does not know." (Bukhari) This type of charity is among the 7 shaded under Allah\'s throne on Judgment Day.' },
      { num: 6, name: 'Sadaqah Jariyah', desc: 'Invest in ongoing charity: contribute to building a mosque, a water well, an Islamic school, or fund a Quran printing. The rewards continue flowing after Ramadan ends and after you die.' },
    ],
  },
  {
    id: 'itikaf',
    label: "I'tikaf",
    items: [
      { num: 1, name: "What Is I'tikaf?", desc: "Spiritual seclusion in the mosque, cutting off from worldly affairs to focus entirely on Allah. The Prophet ﷺ never abandoned it after beginning this practice." },
      { num: 2, name: 'Duration & Status', desc: "Full I'tikaf: 10 days and nights in the mosque. Sunnah Mu'akkadah — if no one in the community performs it, all are considered negligent (fard kifayah)." },
      { num: 3, name: "Rules of I'tikaf", desc: 'Do not leave the mosque except for necessities (bathroom, wudu). No sexual relations. No unnecessary worldly talk. Focus only on: Salah, Quran, Dhikr, Dua, Islamic learning.' },
      { num: 4, name: "Virtual / Partial I'tikaf", desc: "If full I'tikaf is not possible, minimize screen time, reduce conversation, limit social media, and mentally \"retreat\" during the last 10 nights. Make your home a sanctuary of worship." },
      { num: 5, name: "Wisdom of I'tikaf", desc: "Ibn al-Qayyim wrote that I'tikaf is for the heart what retreating to a mountain is for the body — it removes noise, creates space, and allows the soul to find its center in Allah alone." },
      { num: 6, name: "The Women's I'tikaf", desc: "Aisha (RA) and other wives of the Prophet ﷺ performed I'tikaf. It is permissible for women in a safe, designated area of the mosque, or with the permission of their guardian." },
    ],
  },
];

export const duas: Dua[] = [
  { arabic: "اللَّهُمَّ إِنَّكَ عَفُوٌّ تُحِبُّ الْعَفْوَ فَاعْفُ عَنِّي", translit: "Allahumma innaka 'afuwwun tuhibbul 'afwa fa'fu 'annee", meaning: "O Allah, You are Pardoning and You love to pardon, so pardon me.", occasion: "The Laylat ul-Qadr Dua · Taught by the Prophet ﷺ" },
  { arabic: "رَبَّنَا آتِنَا فِي الدُّنْيَا حَسَنَةً وَفِي الْآخِرَةِ حَسَنَةً وَقِنَا عَذَابَ النَّارِ", translit: "Rabbana atina fid-dunya hasanatan wa fil-akhirati hasanatan wa qina 'adhaban-nar", meaning: "Our Lord, give us good in this world and good in the Hereafter, and protect us from the punishment of the Fire.", occasion: "Quran 2:201 · The Most Comprehensive Dua" },
  { arabic: "اللَّهُمَّ اغْفِرْ لِي وَلِوَالِدَيَّ وَلِلْمُؤْمِنِينَ يَوْمَ يَقُومُ الْحِسَابُ", translit: "Allahummaghfir lee wa-liwaalidayya wa lil-mu'mineena yawma yaqoomul-hisaab", meaning: "O Allah, forgive me and my parents and the believers on the Day when the account is established.", occasion: "Quran 14:41 · For Yourself & Family" },
  { arabic: "يَا مُقَلِّبَ الْقُلُوبِ ثَبِّتْ قَلْبِي عَلَى دِينِكَ", translit: "Ya Muqallibal quloob, thabbit qalbee 'alaa deenik", meaning: "O Turner of hearts, make my heart firm upon Your religion.", occasion: "Hadith – Tirmidhi · For Steadfastness in Faith" },
  { arabic: "اللَّهُمَّ إِنِّي أَسْأَلُكَ الْجَنَّةَ وَأَعُوذُ بِكَ مِنَ النَّارِ", translit: "Allahumma innee as'alukal-jannata wa a'oodhu bika minan-naar", meaning: "O Allah, I ask You for Paradise and I seek refuge in You from the Fire.", occasion: "Hadith – Abu Dawud · The Essential Request" },
  { arabic: "اللَّهُمَّ تَقَبَّلْ مِنَّا إِنَّكَ أَنتَ السَّمِيعُ الْعَلِيمُ", translit: "Allahumma taqabbal minnaa innaka Antas-Samee'ul-'Aleem", meaning: "O Allah, accept from us. Indeed, You are the All-Hearing, the All-Knowing.", occasion: "Quran 2:127 · The Acceptance Dua — For End of Each Night" },
];
