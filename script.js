// ========== DR. ABRAXIS – FORTUNES & LUCKY NUMBERS ==========
// 260 fortunes: good, bad, funny, sad, strange – all from the Seer of Fates

const fortuneList = [
    // 🟢 GOOD (60) – more elaborate
    "Dr. Abraxis sees a wave of joy rolling toward you before the next dawn – it will crest in a smile you cannot suppress.",
    "The Seer of Fates whispers: a long‑held wish, one you've almost forgotten, will bloom like a night flower under a full moon.",
    "Unexpected kindness will find you this week – perhaps a stranger's small gesture that rekindles your faith in softness.",
    "A door you thought sealed by time and regret will swing open again, its hinges singing a melody of second chances.",
    "Your patience, worn thin as old silk, is about to be rewarded in gold – not coin, but something rarer: peace of mind.",
    "The stars align for a new romance or a deeper friendship – look for someone who laughs at the same absurdities.",
    "A letter, handwritten or digital, brings news that lifts your spirit like a kite catching a sudden, perfect wind.",
    "What you lost – a ring, a hope, a name – will return in a different, better form, like rain reshaping a river.",
    "The sun smiles on your next adventure; even the shadows will fall behind you, unable to keep pace.",
    "Healing comes quietly, like moss growing over a scarred stone – already on its way, patient and sure.",
    "A child or an animal will show you pure love today, with no agenda, no fine print – only a warm, wordless truth.",
    "Your hard work will be noticed by someone who matters – not a crowd, but the one person whose nod you've sought.",
    "Forgiveness – given or received – will set you free, as if a lock you didn't know existed finally clicks open.",
    "A small risk, no larger than a step off a curb, leads to a large smile that lingers on your face like twilight.",
    "The Seer guarantees: this month holds a pleasant surprise wrapped in ordinary moments – a laugh, a coincidence, a flavor.",
    "You will laugh until your stomach hurts, tears streaming, over something so silly you'll never remember the joke.",
    "An old talent, dusty and forgotten, reawakens and brings you joy – like finding a childhood toy that still works.",
    "Someone you miss, whose absence has been a low hum, will reach out unexpectedly – perhaps with a memory or a question.",
    "Your luck turns with the rising moon tonight – not a flood, but a gentle tide that lifts small boats.",
    "A gift from nature – a rainbow after a brief storm, a sunset painted in apricot and lavender – will comfort you.",
    "A wish made at 11:11, perhaps idle or desperate, will stir into motion like a seed underground.",
    "You will be proud of a decision you make tomorrow – not because it's perfect, but because it's yours.",
    "The universe sends a sign; watch for feathers, coins, or a sudden scent of lilac – these are its postcards.",
    "Your kindness to a stranger echoes back threefold, though the shape of its return may surprise you.",
    "A problem that felt huge, a mountain in your mind, will shrink to a pebble you can kick aside.",
    "You are about to meet someone who changes your perspective – not with argument, but with a quiet story.",
    "Dr. Abraxis notes: rest is coming. Real, deep rest, like a hammock between two pines on a warm afternoon.",
    "A creative spark will ignite before Friday – a melody, a sentence, a doodle – follow it even into the dark.",
    "What you've been hoping for, that shimmer on the horizon, is closer than you think – one turn of the road away.",
    "The Seer sees a celebration in your near future – perhaps small, with a single candle, but genuine.",
    "You will find money in an unexpected place – a coat pocket, a book, a forgotten jar – and it will feel like a wink.",
    "A conversation you dread will end better than you imagined; the other person is nervous too.",
    "Your presence brightens a room – soon someone will tell you so, and you'll believe them this time.",
    "An invitation arrives – say yes, even if your first instinct is no. The door is already open.",
    "The fog in your mind lifts; clarity dawns like a landscape after rain – every leaf distinct.",
    "A small daily habit – stretching, writing, sipping water – will soon bring a huge reward no one sees but you.",
    "You are loved more than you know – expect proof in a text, a touch, a remembered detail.",
    "A dream you had last week carries a true omen – write it down before it fades like morning mist.",
    "The Seer of Fates smiles: your season of abundance begins. Not loud, but steady – like grain filling a barn.",
    "What broke can be mended, perhaps even stronger – like a bone, like a friendship, like a promise.",
    "You will hear a song that heals your heart – not a new one, but an old friend from your past.",
    "A coincidence will feel like destiny – trust it. The universe occasionally sends certified mail.",
    "Courage finds you when you need it most, not as a roar but as a quiet hand on your shoulder.",
    "The next full moon brightens your path – you'll see a step you missed before.",
    "A long silence will break with good news – a phone call, an email, a knock that means well.",
    "Your natural charm, that effortless ease you doubt, will open a locked door this week.",
    "Dr. Abraxis advises: watch the sky tonight – a sign awaits, perhaps a meteor or a single star that seems to move.",
    "You will sleep deeply and wake with a solution that was knitting itself in your dreams.",
    "A piece of art or music will speak directly to your soul – listen as if it were made for you.",
    "A rival becomes an ally; a problem becomes a joke; a knot becomes a bow.",
    "You are exactly where you need to be. Peace follows, not like a shout but like a settling of dust.",
    "Generosity toward yourself is coming – accept it. Eat the pastry. Take the nap. Say no.",
    "The Seer predicts: a sweet reunion within forty days – perhaps with a place, a pet, or a person.",
    "You will finally let go of an old weight – a grudge, a fear, a version of yourself that no longer fits.",
    "A secret you keep will soon feel safe to share – the right ears will hear it gently.",
    "The sun on your skin tomorrow carries a blessing – stand in it for one full minute.",
    "You are about to learn something that excites you – a fact, a skill, a possibility that cracks your world open.",
    "A promise made long ago, perhaps to yourself, will be kept – you'll remember and smile.",
    "The Seer of Fates announces: joy is not far. It's in the next room, putting on its shoes.",
    "Dr. Abraxis sees laughter and light in your week ahead – even the shadows will dance.",

    // 🔴 BAD / HARSH (50) – more elaborate, poignant
    "The Seer warns: someone you trust, whose name you'd swear by, will disappoint you – not with malice, but with weakness.",
    "A plan you cherished, polished like a gem, will fall apart – but not forever. It is merely being unmade to be remade.",
    "Dr. Abraxis says: you cannot save everyone. Choose wisely, or you'll drown trying to hold up a sinking ship.",
    "A lie you believed, one that felt like a blanket, will soon reveal itself – and you'll shiver in the truth.",
    "The path ahead holds a small betrayal. Guard your heart, but do not lock it; the lock will rust.",
    "Not every goodbye comes with warning. Be prepared for a silence that arrives like a slammed door.",
    "Your patience will be tested by a fool who mistakes your calm for weakness – hold steady, but hold firm.",
    "A piece of news will sting, like a paper cut across your attention. Breathe before reacting; the blood will clot.",
    "The Seer sees a delay that feels like a punishment – you'll wait, and the waiting will teach you something bitter.",
    "What you ignore will grow louder – a leak, a lie, a loneliness – until you face it in the dark.",
    "Someone envies you, and that envy will show itself – not as a confession, but as a chill in a warm room.",
    "A good thing ends this month. Grieve, then grow. The end of a season is not the end of the year.",
    "Dr. Abraxis foresees a conflict you didn't start – you will be a bystander who gets splashed.",
    "Your kindness will be taken for weakness – once. The second time, you will know what to do.",
    "A memory will resurface and ache, like a bone that knows the rain is coming.",
    "You will lose something small but precious – a key, a note, a trinket – and its absence will nag.",
    "A friend grows distant without explanation. The silence is not empty; it is full of their own storm.",
    "The Seer of Fates says: your effort may go unnoticed this time. Do it anyway, but for yourself.",
    "A promise will be broken, and you'll hear the snap from across the room.",
    "You will say something you wish you could take back – the words will hang in the air like smoke.",
    "Dr. Abraxis notes: a silence is not empty; it hides a hard truth you've been avoiding.",
    "Expect a rude surprise from a source you thought safe – a creaking floorboard in a trusted house.",
    "The universe says 'not yet' – and it stings like a door closing on your fingers.",
    "A door will slam shut while you're reaching for the handle – your knuckles will bruise, but not break.",
    "Someone will misunderstand your intentions badly – your good heart will wear a villain's mask for a day.",
    "Your body will demand rest at an inconvenient time – listen, or it will shout later.",
    "A habit you love is secretly hurting you – a sweet poison, a warm trap.",
    "The Seer sees a minor accident – stay alert this week. Stairs, corners, and loose rugs will conspire.",
    "You will feel invisible in a room full of people – a ghost at a feast, hungry for a glance.",
    "A financial hope will fizzle like a wet firecracker – the smoke smells of 'maybe next time'.",
    "Dr. Abraxis warns: a secret you told in confidence may slip – not from malice, but from a loose tongue.",
    "You will be compared to someone else and found lacking – in their eyes. But their eyes are not the sun.",
    "An old wound throbs without warning – a reminder that some pains learn to wait.",
    "What you're chasing might be running from you – a rabbit, a chance, a love. Stop. Let it turn.",
    "The Seer of Fates says: not every apology will come. You will have to heal without the sound of sorry.",
    "A beautiful thing will break – a cup, a trust, a silence you loved. Sweep it up carefully.",
    "You will wait for an answer that never arrives – the mailbox will stay closed, the phone dark.",
    "Someone will take credit for your work – your name will be a whisper while theirs is a shout.",
    "A shortcut turns into a long detour – the universe reminding you that straight lines are rare.",
    "Dr. Abraxis sees a night of restless thoughts – you'll count hours instead of sheep.",
    "You will be asked to choose between two bad options – a fork in a dark wood, neither path welcoming.",
    "A piece of luck you counted on will vanish – like a coin down a grate, the sound of it falling.",
    "The Seer predicts: a misunderstanding with a loved one – words will cross like swords in the dark.",
    "Your temper will flare at the wrong moment – a match in a dry room. Damage control follows.",
    "What you fear is not as bad as you imagine – but it still hurts. Fear is a poor artist, but reality can be blunt.",
    "A plan you made in good faith will backfire – good intentions paving a bumpy road.",
    "Someone leaves earlier than expected – a departure that leaves a half‑full cup on the table.",
    "You will feel the weight of a decision for days – a stone in your shoe you cannot shake.",
    "The Seer of Fates says: a small failure teaches a big lesson – tuition paid in embarrassment.",
    "Dr. Abraxis sees a storm coming – but you have an umbrella. It won't be dry, but you'll survive.",

    // 😄 FUNNY / WITTY (50) – more playful and vivid
    "Dr. Abraxis says: a squirrel will outsmart you this week – it will stare at you from a branch, holding a nut it stole from your very thoughts. Laugh it off.",
    "The Seer of Fates predicts you will finally find your missing sock... in the freezer, next to a bag of peas. No explanation will ever arrive.",
    "You will forget someone's name immediately after they tell you – your brain will substitute 'Dave' for everyone, including Dave.",
    "A cat will judge you, and you will deserve it. Its slow blink says: 'I have seen your browser history.'",
    "The universe will send a sign in the form of a very weird‑shaped vegetable – a carrot that looks like it's running away. Take a photo.",
    "You will trip on flat ground and blame the floor loudly. The floor, unmoved, will not apologize.",
    "Dr. Abraxis sees a text message sent to the wrong person. Panic briefly, then delete, then pretend it never happened – they know.",
    "Your future includes a small victory over a stubborn jar lid – you will grunt, your face will redden, and the lid will surrender with a pop.",
    "The Seer laughs: you will sing loudly in the car, and someone will see you – a child will wave, an adult will look away. Both are correct.",
    "A mysterious smell will haunt your kitchen. It's probably fine. Probably. Check the potatoes.",
    "You will say 'I'm fine' when you are clearly not fine. Classic. The other person will nod, also lying.",
    "Dr. Abraxis predicts you will lose your phone while holding it – you'll pat your pockets in a panic, the phone in your hand watching.",
    "A pigeon will stare at you like it knows your secrets – it does, but it only cares about breadcrumbs.",
    "The Seer of Fates says: your next online argument will be a waste of time, but you'll do it anyway – and feel briefly like a gladiator.",
    "You will sneeze and scare a pet. The pet will forgive you slowly, with a side‑eye that says 'we'll discuss this later.'",
    "A Google search will lead you down a very weird rabbit hole – from 'how to remove a stain' to 'medieval torture devices' in six clicks.",
    "Dr. Abraxis sees you pretending to understand instructions – nodding while your inner voice screams for subtitles.",
    "You will open the fridge, stare, close it, and open it again. Nothing changed. The leftover curry still isn't becoming a pizza.",
    "The Seer grins: you will laugh at your own joke before finishing it – a snort will escape, and you'll have to explain.",
    "A piece of tape will defeat you. Seek help. Or scissors. Or therapy. Tape is not to be trusted.",
    "You will call someone by the wrong name and pray they didn't notice – they noticed. They are now mentally renaming you 'That Person.'",
    "Dr. Abraxis foresees a meeting that could have been an email – you will watch a PowerPoint about a pie chart of a bar graph. Your soul will leave.",
    "Your future includes a dance move you invented that no one else appreciates – it involves flailing and confidence. Keep it.",
    "The Seer of Fates says: a plant you own will die no matter what you do. It's not you. It's the plant's drama.",
    "You will be very proud of a meal you burned slightly – charcoal is a flavor, you'll insist. No one agrees.",
    "A stranger will give you a thumbs‑up for no reason – you'll spend the rest of the day wondering if you dropped something.",
    "Dr. Abraxis predicts you will say 'you too' when the waiter says 'enjoy your meal' – the silence will be deafening. Own it.",
    "Your next hiccup will come at the worst possible moment – during a toast, a kiss, or a moment of fake gravitas.",
    "The Seer sees you stepping in a puddle with fresh socks – the universe's favorite prank, older than time.",
    "A cartoonishly large spider will appear just to remind you who's boss – you will scream, it will yawn, and you'll move out.",
    "You will argue with a machine and lose – a printer, a self‑checkout, a traffic light. The machine feels nothing.",
    "Dr. Abraxis says: your alter ego is much cooler, but they rarely show up – usually during showers or at 3 AM.",
    "The Seer of Fates predicts you will forget why you walked into a room – you'll stand there like a statue, hoping the room remembers.",
    "A child will ask you a question you cannot answer honestly – 'Why is the sky?' You will say 'because' and flee.",
    "You will find a hair in your food, and it's yours – the slow realization, the quiet acceptance, the continued eating.",
    "Dr. Abraxis sees you trying to 'fix' something that isn't broken – you'll make it worse, then claim it's 'character.'",
    "Your next parking spot will be comically far away – you'll hike, arrive sweaty, and the spot near the door will remain empty out of spite.",
    "The Seer laughs: you will tell a secret to someone who already knows it – they will nod patiently while you discover your own redundancy.",
    "A calendar alert will surprise you with a meeting you never scheduled – it's a ghost meeting. Attend in spirit only.",
    "You will wear something inside out and only realize it at noon – you'll spend the rest of the day pretending it's a style choice.",
    "Dr. Abraxis predicts you will narrate your dog's thoughts in a silly voice – the dog tolerates this, barely.",
    "Your future includes a sudden, intense craving for a food you hate – pickles, olives, canned fish. The craving will pass, leaving only shame.",
    "The Seer of Fates says: you will attempt a DIY project and regret it – your bookshelf will lean like the Tower of Pisa.",
    "A fly will outmaneuver you for five minutes – you'll swing, miss, and it will land on your nose. The fly wins.",
    "You will buy something online and immediately forget what it was – the package will arrive as a complete surprise. Like a gift from your own past.",
    "Dr. Abraxis sees you using a self‑checkout machine that judges you – 'Unexpected item in bagging area' means 'I know what you bought, weirdo.'",
    "Your next elevator ride will be awkwardly silent – you and a stranger will watch the numbers change, united in pretend nothingness.",
    "You will wave at someone who was waving at the person behind you – you'll turn the wave into a hair‑scratch, but they saw.",
    "The Seer predicts you will find a ten‑year‑old candy in your coat pocket – it will be dusty, hard, and you'll consider eating it.",
    "You will yawn while someone is yelling at you – could be worse. You could laugh. Don't laugh. (But imagine it.)",

    // 😢 SAD / POIGNANT (50) – more lyrical and aching
    "The Seer of Fates sees a goodbye that leaves a hollow space – not empty, but filled with the echo of a voice you memorized.",
    "Dr. Abraxis says: some people are only meant to stay for a season. Grieve them anyway, as you'd mourn autumn's last apple.",
    "A memory will visit you tonight, and it will taste like salt – you'll swallow it, and it will stay in your chest.",
    "You will outgrow someone you once loved. It hurts, but it's truth – like a childhood shirt that no longer buttons.",
    "The Seer whispers: not every silence is peaceful. Some are lonely, like a phone that never rings on a birthday.",
    "An echo of a happier time will make your chest ache – a song, a smell, a photograph that smiles back at you.",
    "Dr. Abraxis sees you walking away from something you never wanted to leave – your feet move, but your heart stays, looking back.",
    "A promise you kept will not be returned – you held up your end, and the other end dangles in the wind.",
    "The Seer of Fates says: some wounds heal, but they leave a scar you always feel – like a stone under soft grass.",
    "You will realize you've become a stranger to a former friend – you pass each other like ships whose names you've forgotten.",
    "A song from your past will stop you mid‑step – you'll stand in a grocery aisle, held hostage by a memory.",
    "Dr. Abraxis foresees a night where you miss someone who is still alive – a different kind of ghost, one that breathes but isn't there.",
    "You will apologize and not be forgiven. It happens, like rain that falls and is not welcomed.",
    "The Seer sees a photograph that makes you pause too long – you'll trace a face with your finger, as if touch could bring them back.",
    "A dream will feel so real that waking up is a disappointment – the blankets are cold, and the room is too quiet.",
    "You will give more than you receive this month. It's temporary, but the tiredness is real – like a well that has given all its water.",
    "Dr. Abraxis says: a soft place to fall is not guaranteed. Be your own cushion, even if you're hard and tired.",
    "The Seer of Fates sees a letter you will never send – it lives in a drawer, each word a small, private grave.",
    "You will watch someone change into a person you don't recognize – not suddenly, but slowly, like a shore eroding.",
    "A childhood place will feel smaller and sadder now – the trees are shorter, the magic is gone, and you can't get it back.",
    "You will feel forgotten on a day that matters to you – no call, no card, no 'thinking of you.' The silence is a gift you didn't want.",
    "Dr. Abraxis notes: some tears are not for sadness, but for release – a storm after a long drought.",
    "The Seer predicts a moment of quiet loneliness in a crowded room – you'll be surrounded, and still feel like the last person on earth.",
    "You will finally understand why someone left, and it won't help – knowing the reason doesn't fill the chair they used to sit in.",
    "A tradition ends this year. Honor it, then let it go – like a bird you've held too long.",
    "The Seer of Fates says: you will outlive a story you once told yourself – the one where you were the hero, or the victim. Both fall away.",
    "Dr. Abraxis sees you holding onto a hope that has already faded – your hands are cupped around nothing but air.",
    "A reflection in a window will remind you of time passing – your own face, slightly blurred, slightly older, slightly softer.",
    "You will be kind to someone who can't be kind back – your kindness will evaporate, and you'll wonder why you bothered.",
    "The Seer whispers: a shadow from your past will follow you for a day – not to harm, but to remind you of what you've survived.",
    "You will delete a message you've re‑read a hundred times – each read was a small hope; the delete is a small death.",
    "Dr. Abraxis foresees a birthday that feels quieter than before – fewer candles, fewer voices, more echoes.",
    "The Seer of Fates says: some love stories end without a fight – they simply run out of air, like a candle in a sealed room.",
    "You will smell a perfume or cologne that takes you back to a loss – you'll close your eyes, and for a second, they're there.",
    "A pet or a person will leave a space that nothing fills – a bed half‑empty, a leash by the door, a toothbrush untouched.",
    "You will try to fix something that is already broken beyond repair – your hands will work, but the crack remains.",
    "The Seer sees you looking at the sky and feeling small – not in a bad way, but in a lonely way, like a single star.",
    "Dr. Abraxis says: you will forgive someone, but the memory stays – forgiveness is not amnesia, only a ceasefire.",
    "A mirror will show you the face of someone you used to be – younger, brighter, unscarred. You'll nod at them, and turn away.",
    "You will lose interest in something you once loved – a hobby, a show, a dream. The passion didn't die; it just moved out.",
    "The Seer of Fates predicts a night of remembering everything – every mistake, every loss, every 'what if.' Morning will come, eventually.",
    "A door closes with no lock on your side – you can't open it, you can't even rattle the handle. You can only stand and listen.",
    "You will feel the weight of a decade in a single afternoon – a photograph, a song, a phrase, and suddenly it's all there.",
    "Dr. Abraxis sees you learning that 'almost' can be the hardest word – almost loved, almost enough, almost there.",
    "The Seer whispers: some goodbyes happen without words – a look, a turning away, a door that closes on its own.",
    "You will finish a book or show and feel an emptiness – the characters leave, and you're left with your own quiet life.",
    "A compliment you received years ago will echo and make you sad – you'll realize you've been trying to deserve it ever since.",
    "You will realize you've been waiting for someone who isn't coming – the station is empty, the train long gone.",
    "The Seer of Fates says: grief is love with nowhere to go – it paces the halls of your heart, looking for a door.",
    "Dr. Abraxis sees you surviving something that should have broken you – and that survival feels strangely like loss.",

    // 🔮 STRANGE / MYSTERIOUS (50) – more atmospheric and cryptic
    "Dr. Abraxis murmurs: a clock will stop exactly when you enter the room. Pay attention to what you were thinking – it matters.",
    "The Seer of Fates sees a black feather on your path – not a threat, but a reminder: change is a bird you cannot cage.",
    "You will dream of a house you've never seen, then pass it next week – the curtains will move, though no wind blows.",
    "A number will follow you for three days – on receipts, clocks, license plates. Write it down. It is trying to tell you something.",
    "Dr. Abraxis says: a mirror in a dim room holds a message you can't hear – look past your reflection, into the silver fog.",
    "The Seer whispers: a bird tapping on your window carries a warning – not of danger, but of a choice you've been ignoring.",
    "You will taste something familiar but cannot name it – a ghost of a flavor, a memory in your mouth, here and gone.",
    "A shadow will move when nothing casts it. Look away slowly. Do not challenge it; it only wants to be seen.",
    "Dr. Abraxis foresees a conversation with a stranger who knows your name – they will smile and say, 'It's time.'",
    "The Seer of Fates says: a penny from the year you were born will find you – heads up, warm from the ground, a small hello.",
    "You will smell rain before it forms, and it smells like nostalgia – a specific afternoon, a specific loss, a specific hope.",
    "A light will flicker in no pattern. That is a reply. You asked something once, in your sleep; this is the answer.",
    "Dr. Abraxis sees a red string tied around your finger in a dream – when you wake, your finger will feel warm.",
    "The Seer says: a door will creak without wind. Someone wants your attention – not loudly, but persistently.",
    "You will find a key that fits no lock – keep it. One day, you'll find the lock, and it will open something you didn't know was closed.",
    "A song will play backwards in your head and make sense – the melody inverted, the lyrics reversed, a hidden truth.",
    "Dr. Abraxis murmurs: a circle of mushrooms will appear near your home – fairy folk, or just fungi. Do not step inside.",
    "The Seer of Fates sees you speaking a word in an unknown language – it will come out smooth, and you'll feel it in your bones.",
    "A photograph of you will develop a smudge that looks like a face – someone who wasn't there, watching.",
    "You will feel a touch on your shoulder when you are alone – light, brief, almost apologetic.",
    "Dr. Abraxis says: a crow will watch you for exactly one minute – then fly west. Follow its direction with your thoughts.",
    "The Seer whispers: a coin you lost will reappear in a different currency – a peso where you lost a penny, a yen where you lost a dime.",
    "A number on a license plate will repeat in your dreams – you'll wake whispering it, not knowing why.",
    "You will know who is calling before the phone rings – a name in your head, a chill, a certainty.",
    "Dr. Abraxis foresees a gust of wind that smells like flowers not in season – roses in winter, lilacs in autumn. Something is blooming elsewhere.",
    "The Seer of Fates says: an old photograph will fall from a book – it will be of a place you've never been, but you recognize it.",
    "You will see someone who looks exactly like you – they will not notice you. Your double is busy living your other life.",
    "A candle flame will bend toward a person who is not there – someone cold, someone passing through, someone grateful for the warmth.",
    "Dr. Abraxis murmurs: a bee will land on your hand and not sting – it will taste your skin, then fly away. You have been chosen as neutral.",
    "The Seer says: a broken object in your home will suddenly work again – a radio will play static, a watch will tick. Do not question it.",
    "You will hear footsteps above you when there is no floor – only attic, only rafters, only dust and possibility.",
    "A reflection in water will show a different sky – clouds you've never seen, a sun in the wrong position. Do not stare too long.",
    "Dr. Abraxis sees you picking up a stone that feels unnaturally warm – as if it has been held, as if it remembers hands.",
    "The Seer of Fates whispers: a clock will chime thirteen – count the strokes. Whatever you were doing, stop.",
    "You will say something and remember saying it in a dream before – the words feel borrowed, returned, spoken twice.",
    "A shadow will fall behind you even when the light is in front – a companion you didn't ask for, but who follows.",
    "Dr. Abraxis says: a book will open to a page you've never read, but it feels familiar – you've lived this paragraph.",
    "The Seer sees a rainbow at night – a rare omen of hidden truth, a promise made in colors the dark cannot swallow.",
    "A stranger will give you a single piece of fruit and walk away – an apple, a pear, a plum. Eat it. It is not poisoned; it is a message.",
    "You will wake with dirt under your nails and no memory – you travelled somewhere while your body slept. Wash your hands, but remember.",
    "Dr. Abraxis murmurs: a drawer will stick, then open easily when you stop trying – it wanted to be asked nicely.",
    "The Seer of Fates says: a fly will land on your food in a perfect triangle – three points, three wishes, three lies. Brush it away gently.",
    "You will feel a presence behind you, but when you turn, it's a cat – or a shadow that pretends to be a cat. The cat doesn't care.",
    "A scar you've had for years will itch on the day of a decision – the old wound remembers what you forgot.",
    "Dr. Abraxis sees a bell ringing in an abandoned place – you will hear it faintly, like a memory of sound. Someone is trying to reach you.",
    "The Seer whispers: a cloud will look exactly like someone you miss – for a moment, they are there. Then the wind changes.",
    "You will find a message written in dust that you did not write – 'I was here' or 'look behind you' or a single initial.",
    "A train whistle will blow three times when no train is near – the third whistle will be softer. That was for you.",
    "Dr. Abraxis says: a plant in your home will bloom out of season – a stubborn flower, a defiance of time. Celebrate it.",
    "The Seer of Fates sees you stopping at a red light that never changes – wait. It will turn green exactly when you stop thinking about it."
];

// Function to generate 6 unique random numbers between 1 and 58
function generateLuckyNumbers() {
    const numbers = new Set();
    while (numbers.size < 6) {
        const rand = Math.floor(Math.random() * 58) + 1;
        numbers.add(rand);
    }
    return Array.from(numbers).sort((a, b) => a - b);
}

function updateLuckyNumbers() {
    const numberSpans = document.querySelectorAll('.number-ball');
    const luckyNums = generateLuckyNumbers();
    numberSpans.forEach((span, index) => {
        if (index < luckyNums.length) {
            span.textContent = luckyNums[index];
        }
    });
}

function displayRandomFortune() {
    const fortuneTextEl = document.getElementById('fortuneText');
    const ticketEl = document.querySelector('.ticket');
    const tokenEl = document.querySelector('.collector-token');
    
    if (fortuneTextEl) {
        fortuneTextEl.style.opacity = '0';
        setTimeout(() => {
            const randomIndex = Math.floor(Math.random() * fortuneList.length);
            fortuneTextEl.textContent = fortuneList[randomIndex];
            fortuneTextEl.style.opacity = '1';
        }, 180);
    }
    if (ticketEl) {
        ticketEl.classList.add('ticket-pulse');
        setTimeout(() => ticketEl.classList.remove('ticket-pulse'), 420);
    }
    // ✨ Extra magic: subtle flicker on the collector token
    if (tokenEl) {
        tokenEl.style.transition = 'opacity 0.2s';
        tokenEl.style.opacity = '0.6';
        setTimeout(() => {
            tokenEl.style.opacity = '1';
        }, 200);
        setTimeout(() => {
            tokenEl.style.opacity = '';
            tokenEl.style.transition = '';
        }, 500);
    }
}

document.addEventListener('DOMContentLoaded', () => {
    const fortuneTextEl = document.getElementById('fortuneText');
    if (fortuneTextEl) {
        const randomIndex = Math.floor(Math.random() * fortuneList.length);
        fortuneTextEl.textContent = fortuneList[randomIndex];
        fortuneTextEl.style.opacity = '1';
    }
    updateLuckyNumbers();
    const ticketEl = document.querySelector('.ticket');
    if (ticketEl) {
        ticketEl.classList.add('ticket-pulse');
        setTimeout(() => ticketEl.classList.remove('ticket-pulse'), 500);
    }
});
