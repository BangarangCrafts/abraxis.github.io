// ========== DR. ABRAXIS – FORTUNES & LUCKY NUMBERS ==========
// 260 fortunes: good, bad, funny, sad, strange – all from the Seer of Fates

const fortuneList = [
    // 🟢 GOOD (60)
    "Dr. Abraxis sees a wave of joy arriving before the next dawn.",
    "The Seer of Fates whispers: a long‑held wish will soon bloom.",
    "Unexpected kindness will find you this week.",
    "A door you thought closed will swing open again.",
    "Your patience is about to be rewarded in gold.",
    "The stars align for a new romance or a deeper friendship.",
    "A letter brings news that lifts your spirit.",
    "What you lost will return in a different, better form.",
    "The sun smiles on your next adventure.",
    "Healing comes quietly, but it is already on its way.",
    "A child or an animal will show you pure love today.",
    "Your hard work will be noticed by someone who matters.",
    "Forgiveness – given or received – will set you free.",
    "A small risk leads to a large smile.",
    "The Seer guarantees: this month holds a pleasant surprise.",
    "You will laugh until your stomach hurts. Soon.",
    "An old talent reawakens and brings you joy.",
    "Someone you miss will reach out unexpectedly.",
    "Your luck turns with the rising moon tonight.",
    "A gift from nature – a rainbow, a sunset – will comfort you.",
    "A wish made at 11:11 will stir into motion.",
    "You will be proud of a decision you make tomorrow.",
    "The universe sends a sign; watch for feathers or coins.",
    "Your kindness to a stranger echoes back threefold.",
    "A problem that felt huge will shrink to nothing.",
    "You are about to meet someone who changes your perspective.",
    "Dr. Abraxis notes: rest is coming. Real, deep rest.",
    "A creative spark will ignite before Friday.",
    "What you’ve been hoping for is closer than you think.",
    "The Seer sees a celebration in your near future.",
    "You will find money in an unexpected place.",
    "A conversation you dread will end better than imagined.",
    "Your presence brightens a room; soon someone tells you so.",
    "An invitation arrives – say yes.",
    "The fog in your mind lifts; clarity dawns.",
    "A small daily habit will soon bring a huge reward.",
    "You are loved more than you know – expect proof.",
    "A dream you had last week carries a true omen.",
    "The Seer of Fates smiles: your season of abundance begins.",
    "What broke can be mended, perhaps even stronger.",
    "You will hear a song that heals your heart.",
    "A coincidence will feel like destiny – trust it.",
    "Courage finds you when you need it most.",
    "The next full moon brightens your path.",
    "A long silence will break with good news.",
    "Your natural charm will open a locked door.",
    "Dr. Abraxis advises: watch the sky tonight – a sign awaits.",
    "You will sleep deeply and wake with a solution.",
    "A piece of art or music will speak directly to your soul.",
    "A rival becomes an ally; a problem becomes a joke.",
    "You are exactly where you need to be. Peace follows.",
    "Generosity toward yourself is coming – accept it.",
    "The Seer predicts: a sweet reunion within forty days.",
    "You will finally let go of an old weight.",
    "A secret you keep will soon feel safe to share.",
    "The sun on your skin tomorrow carries a blessing.",
    "You are about to learn something that excites you.",
    "A promise made long ago will be kept.",
    "The Seer of Fates announces: joy is not far.",
    "Dr. Abraxis sees laughter and light in your week ahead.",

    // 🔴 BAD / HARSH (50)
    "The Seer warns: someone you trust will disappoint you.",
    "A plan you cherished will fall apart – but not forever.",
    "Dr. Abraxis says: you cannot save everyone. Choose wisely.",
    "A lie you believed will soon reveal itself.",
    "The path ahead holds a small betrayal. Guard your heart.",
    "Not every goodbye comes with warning. Be prepared.",
    "Your patience will be tested by a fool.",
    "A piece of news will sting. Breathe before reacting.",
    "The Seer sees a delay that feels like a punishment.",
    "What you ignore will grow louder until you face it.",
    "Someone envies you – and that envy will show itself.",
    "A good thing ends this month. Grieve, then grow.",
    "Dr. Abraxis foresees a conflict you didn't start.",
    "Your kindness will be taken for weakness – once.",
    "A memory will resurface and ache.",
    "You will lose something small but precious.",
    "A friend grows distant without explanation.",
    "The Seer of Fates says: your effort may go unnoticed this time.",
    "A promise will be broken.",
    "You will say something you wish you could take back.",
    "Dr. Abraxis notes: a silence is not empty; it hides a hard truth.",
    "Expect a rude surprise from a source you thought safe.",
    "The universe says 'not yet' – and it stings.",
    "A door will slam shut while you're reaching for the handle.",
    "Someone will misunderstand your intentions badly.",
    "Your body will demand rest at an inconvenient time.",
    "A habit you love is secretly hurting you.",
    "The Seer sees a minor accident – stay alert this week.",
    "You will feel invisible in a room full of people.",
    "A financial hope will fizzle.",
    "Dr. Abraxis warns: a secret you told in confidence may slip.",
    "You will be compared to someone else and found lacking – in their eyes.",
    "An old wound throbs without warning.",
    "What you're chasing might be running from you.",
    "The Seer of Fates says: not every apology will come.",
    "A beautiful thing will break.",
    "You will wait for an answer that never arrives.",
    "Someone will take credit for your work.",
    "A shortcut turns into a long detour.",
    "Dr. Abraxis sees a night of restless thoughts.",
    "You will be asked to choose between two bad options.",
    "A piece of luck you counted on will vanish.",
    "The Seer predicts: a misunderstanding with a loved one.",
    "Your temper will flare at the wrong moment.",
    "What you fear is not as bad as you imagine – but it still hurts.",
    "A plan you made in good faith will backfire.",
    "Someone leaves earlier than expected.",
    "You will feel the weight of a decision for days.",
    "The Seer of Fates says: a small failure teaches a big lesson.",
    "Dr. Abraxis sees a storm coming – but you have an umbrella.",

    // 😄 FUNNY / WITTY (50)
    "Dr. Abraxis says: a squirrel will outsmart you this week. Laugh it off.",
    "The Seer of Fates predicts you will finally find your missing sock... in the freezer.",
    "You will forget someone's name immediately after they tell you. It's fine.",
    "A cat will judge you, and you will deserve it.",
    "The universe will send a sign in the form of a very weird-shaped vegetable.",
    "You will trip on flat ground and blame the floor.",
    "Dr. Abraxis sees a text message sent to the wrong person. Panic briefly.",
    "Your future includes a small victory over a stubborn jar lid.",
    "The Seer laughs: you will sing loudly in the car, and someone will see you.",
    "A mysterious smell will haunt your kitchen. It's probably fine.",
    "You will say 'I'm fine' when you are clearly not fine. Classic.",
    "Dr. Abraxis predicts you will lose your phone while holding it.",
    "A pigeon will stare at you like it knows your secrets.",
    "The Seer of Fates says: your next online argument will be a waste of time, but you'll do it anyway.",
    "You will sneeze and scare a pet. The pet will forgive you slowly.",
    "A Google search will lead you down a very weird rabbit hole.",
    "Dr. Abraxis sees you pretending to understand instructions.",
    "You will open the fridge, stare, close it, and open it again. Nothing changed.",
    "The Seer grins: you will laugh at your own joke before finishing it.",
    "A piece of tape will defeat you. Seek help.",
    "You will call someone by the wrong name and pray they didn't notice.",
    "Dr. Abraxis foresees a meeting that could have been an email.",
    "Your future includes a dance move you invented that no one else appreciates.",
    "The Seer of Fates says: a plant you own will die no matter what you do.",
    "You will be very proud of a meal you burned slightly.",
    "A stranger will give you a thumbs‑up for no reason.",
    "Dr. Abraxis predicts you will say 'you too' when the waiter says 'enjoy your meal'.",
    "Your next hiccup will come at the worst possible moment.",
    "The Seer sees you stepping in a puddle with fresh socks.",
    "A cartoonishly large spider will appear just to remind you who's boss.",
    "You will argue with a machine and lose.",
    "Dr. Abraxis says: your alter ego is much cooler, but they rarely show up.",
    "The Seer of Fates predicts you will forget why you walked into a room.",
    "A child will ask you a question you cannot answer honestly.",
    "You will find a hair in your food, and it's yours.",
    "Dr. Abraxis sees you trying to 'fix' something that isn't broken.",
    "Your next parking spot will be comically far away.",
    "The Seer laughs: you will tell a secret to someone who already knows it.",
    "A calendar alert will surprise you with a meeting you never scheduled.",
    "You will wear something inside out and only realize it at noon.",
    "Dr. Abraxis predicts you will narrate your dog's thoughts in a silly voice.",
    "Your future includes a sudden, intense craving for a food you hate.",
    "The Seer of Fates says: you will attempt a DIY project and regret it.",
    "A fly will outmaneuver you for five minutes.",
    "You will buy something online and immediately forget what it was.",
    "Dr. Abraxis sees you using a self‑checkout machine that judges you.",
    "Your next elevator ride will be awkwardly silent.",
    "You will wave at someone who was waving at the person behind you.",
    "The Seer predicts you will find a ten‑year‑old candy in your coat pocket.",
    "You will yawn while someone is yelling at you. Could be worse.",

    // 😢 SAD / POIGNANT (50)
    "The Seer of Fates sees a goodbye that leaves a hollow space.",
    "Dr. Abraxis says: some people are only meant to stay for a season. Grieve them anyway.",
    "A memory will visit you tonight, and it will taste like salt.",
    "You will outgrow someone you once loved. It hurts, but it's truth.",
    "The Seer whispers: not every silence is peaceful. Some are lonely.",
    "An echo of a happier time will make your chest ache.",
    "Dr. Abraxis sees you walking away from something you never wanted to leave.",
    "A promise you kept will not be returned.",
    "The Seer of Fates says: some wounds heal, but they leave a scar you always feel.",
    "You will realize you've become a stranger to a former friend.",
    "A song from your past will stop you mid‑step.",
    "Dr. Abraxis foresees a night where you miss someone who is still alive.",
    "You will apologize and not be forgiven. It happens.",
    "The Seer sees a photograph that makes you pause too long.",
    "A dream will feel so real that waking up is a disappointment.",
    "You will give more than you receive this month. It's temporary.",
    "Dr. Abraxis says: a soft place to fall is not guaranteed. Be your own cushion.",
    "The Seer of Fates sees a letter you will never send.",
    "You will watch someone change into a person you don't recognize.",
    "A childhood place will feel smaller and sadder now.",
    "You will feel forgotten on a day that matters to you.",
    "Dr. Abraxis notes: some tears are not for sadness, but for release.",
    "The Seer predicts a moment of quiet loneliness in a crowded room.",
    "You will finally understand why someone left, and it won't help.",
    "A tradition ends this year. Honor it, then let it go.",
    "The Seer of Fates says: you will outlive a story you once told yourself.",
    "Dr. Abraxis sees you holding onto a hope that has already faded.",
    "A reflection in a window will remind you of time passing.",
    "You will be kind to someone who can't be kind back.",
    "The Seer whispers: a shadow from your past will follow you for a day.",
    "You will delete a message you've re‑read a hundred times.",
    "Dr. Abraxis foresees a birthday that feels quieter than before.",
    "The Seer of Fates says: some love stories end without a fight.",
    "You will smell a perfume or cologne that takes you back to a loss.",
    "A pet or a person will leave a space that nothing fills.",
    "You will try to fix something that is already broken beyond repair.",
    "The Seer sees you looking at the sky and feeling small.",
    "Dr. Abraxis says: you will forgive someone, but the memory stays.",
    "A mirror will show you the face of someone you used to be.",
    "You will lose interest in something you once loved.",
    "The Seer of Fates predicts a night of remembering everything.",
    "A door closes with no lock on your side.",
    "You will feel the weight of a decade in a single afternoon.",
    "Dr. Abraxis sees you learning that 'almost' can be the hardest word.",
    "The Seer whispers: some goodbyes happen without words.",
    "You will finish a book or show and feel an emptiness.",
    "A compliment you received years ago will echo and make you sad.",
    "You will realize you've been waiting for someone who isn't coming.",
    "The Seer of Fates says: grief is love with nowhere to go.",
    "Dr. Abraxis sees you surviving something that should have broken you.",

    // 🔮 STRANGE / MYSTERIOUS (50)
    "Dr. Abraxis murmurs: a clock will stop exactly when you enter the room. Pay attention.",
    "The Seer of Fates sees a black feather on your path – it means change.",
    "You will dream of a house you've never seen, then pass it next week.",
    "A number will follow you for three days. Write it down.",
    "Dr. Abraxis says: a mirror in a dim room holds a message you can't hear.",
    "The Seer whispers: a bird tapping on your window carries a warning.",
    "You will taste something familiar but cannot name it.",
    "A shadow will move when nothing casts it. Look away slowly.",
    "Dr. Abraxis foresees a conversation with a stranger who knows your name.",
    "The Seer of Fates says: a penny from the year you were born will find you.",
    "You will smell rain before it forms, and it smells like nostalgia.",
    "A light will flicker in no pattern. That is a reply.",
    "Dr. Abraxis sees a red string tied around your finger in a dream.",
    "The Seer says: a door will creak without wind. Someone wants your attention.",
    "You will find a key that fits no lock – keep it.",
    "A song will play backwards in your head and make sense.",
    "Dr. Abraxis murmurs: a circle of mushrooms will appear near your home.",
    "The Seer of Fates sees you speaking a word in an unknown language.",
    "A photograph of you will develop a smudge that looks like a face.",
    "You will feel a touch on your shoulder when you are alone.",
    "Dr. Abraxis says: a crow will watch you for exactly one minute.",
    "The Seer whispers: a coin you lost will reappear in a different currency.",
    "A number on a license plate will repeat in your dreams.",
    "You will know who is calling before the phone rings.",
    "Dr. Abraxis foresees a gust of wind that smells like flowers not in season.",
    "The Seer of Fates says: an old photograph will fall from a book.",
    "You will see someone who looks exactly like you – they will not notice you.",
    "A candle flame will bend toward a person who is not there.",
    "Dr. Abraxis murmurs: a bee will land on your hand and not sting.",
    "The Seer says: a broken object in your home will suddenly work again.",
    "You will hear footsteps above you when there is no floor.",
    "A reflection in water will show a different sky.",
    "Dr. Abraxis sees you picking up a stone that feels unnaturally warm.",
    "The Seer of Fates whispers: a clock will chime thirteen.",
    "You will say something and remember saying it in a dream before.",
    "A shadow will fall behind you even when the light is in front.",
    "Dr. Abraxis says: a book will open to a page you've never read, but it feels familiar.",
    "The Seer sees a rainbow at night – a rare omen of hidden truth.",
    "A stranger will give you a single piece of fruit and walk away.",
    "You will wake with dirt under your nails and no memory.",
    "Dr. Abraxis murmurs: a drawer will stick, then open easily when you stop trying.",
    "The Seer of Fates says: a fly will land on your food in a perfect triangle.",
    "You will feel a presence behind you, but when you turn, it's a cat.",
    "A scar you've had for years will itch on the day of a decision.",
    "Dr. Abraxis sees a bell ringing in an abandoned place – you will hear it.",
    "The Seer whispers: a cloud will look exactly like someone you miss.",
    "You will find a message written in dust that you did not write.",
    "A train whistle will blow three times when no train is near.",
    "Dr. Abraxis says: a plant in your home will bloom out of season.",
    "The Seer of Fates sees you stopping at a red light that never changes – wait."
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