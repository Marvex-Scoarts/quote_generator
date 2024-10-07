const quotes = [
"Too many of us are not living our dreams because we are living our fears. — Les Brown",
"I have learned over the years that when one's mind is made up, this diminishes fear. — Rosa Parks",
"I didn't fail the test. I just found 100 ways to do it wrong. — Benjamin Franklin",
"If you're offered a seat on a rocket ship, don't ask what seat! Just get on. — Sheryl Sandberg",
"I attribute my success to this: I never gave or took any excuse. — Florence Nightingale",
"I would rather die of passion than of boredom. — Vincent van Gogh",
"Believe you can and you\'re halfway there. — Theodore Roosevelt",
"The only person you are destined to become is the person you decide to be. — Ralph Waldo Emerson",
"The question isn't who is going to let me; it's who is going to stop me. — Ayn Rand",
"Winning isn\'t everything, but wanting to win is. — Vince Lombardi",
"Whether you think you can or you think you can\'t, you\'re right. — Henry Ford",
"You miss 100% of the shots you don't take. — Wayne Gretzky",
"I alone cannot change the world, but I can cast a stone across the water to create many ripples. — Mother Teresa",
"You become what you believe. — Oprah Winfrey",
"The most difficult thing is the decision to act, the rest is merely tenacity. — Amelia Earhart",
"How wonderful it is that nobody need wait a single moment before starting to improve the world. — Anne Frank",
"An unexamined life is not worth living. — Socrates",
"Everything you\'ve ever wanted is on the other side of fear. — George Addair",
"Dream big and dare to fail.— Norman Vaughan",
"You may be disappointed if you fail, but you are doomed if you don't try. — Beverly Sills",
"It does not matter how slowly you go as long as you do not stop.— Confucius",
"When everything seems to be going against you, remember that the airplane takes off against the wind, not with it. — Henry Ford"
];

const quoteButton = document.getElementById('quote-button');
const quoteText = document.getElementById('quote');

quoteButton.addEventListener('click', () =>{
    const randomIndex = Math.floor(Math.random() *
    quotes.length);

    quoteText.textContent = quotes[randomIndex];
});