// Object
let author = {
    name : 'Philea',
    age : 24,
    isStudent : true,
}
console.log(author);

// String
    let storyName = 'Pudding the Kind Adventurer';
    console.log(storyName);

    // Part of story
    let catname = 'Pudding';

    let color1 = 'emerald-green';
    let color2 = 'orange';

    let parentsLName = 'Max';

// Number
    let numberOfLines = 20;
    console.log(numberOfLines);

    // Part of story
    let kittens = 5;
      
// Undefined
    // Part of story
    let curiosity;
    let nightfall;
    let starrysky;
    let end;

// Array
    // Part of story
    let forest = ['ancient oaks', ' winding paths', ' and mysterious creatures'];

// STORYSTART------------------

// 1 line----------
function firstLine(catname){
   console.log('Once upon a time, in a cozy little village nestled between two hills, there lived a mischievous cat named ' + catname + '.');
   // Boolean
   let isPuddingMischievous = true
   if (true) {
      console.log("Is Pudding mischievous? It is true.")
     } else {
      console.log("Is Pudding still mischievous? It is false.")
     }
}

// 2 line----------
function secondLine(color1,color2){
    console.log('Pudding had the most striking '+ color1 +' eyes and a sleek '+ color2 +' coat with darker stripes.');
}

// 3 line----------
function thirdLine(parentsLName){
    console.log('His parents, Mr. and Mrs. '+ parentsLName +', were wise and cautious cats who always emphasized the importance of not wondering around the forest.');
}

// 4 line----------
function fourthLine(catname){
    console.log('One sunny morning, as the birds sang and the dew glistened on the grass, ' + catname +' decided to explore beyond the village. ');
}

// 5 line----------
function fifthLine(curiosity){
    console.log('His parents had warned him about the dangers lurking in the nearby , but his curiosity won against the warnings. “Just a quick peek,” he thought, and off he went.');
}

// 6 line----------
function sixthLine(forest){
    console.log('The forest was enchanting with an assortment of '+ forest + '.');
}

// 7 line----------
function seventhLine(catname){
    console.log(catname +' chased butterflies, leaped over fallen logs, and felt the thrill of adventure. But as the sun dipped below the horizon, panic set in. ' + catname + ' was lost.');
}

// 8 line----------
function eighthLine(nightfall){
    console.log('He meowed for help, but the forest remained silent. Nightfall brought eerie sounds like the hoot of an owl, the rustle of unseen creatures, the cold wind blew. ');
}

// 9 line----------
function ninthLine(catname){
    console.log(catname + ' shivered and wished he’d listened to his parents.');
}

// 10 line----------
function tenthLine(parentsLName){
    console.log('Meanwhile, back in the village, Mr. and Mrs. ' + parentsLName + ' grew frantic. They organized search parties, calling out for their wayward son. They cried out his name throughout the search, while their hearts heavy with worry.');
}

// 11 line----------
function eleventhLine(catname){
    console.log('Days turned into weeks, and ' + catname + ' survived on berries and rainwater. He missed the warmth of home and the comforting purr of his parents.');
}

// 12 line----------
function twelvethLine(kittens){
    console.log('One night, he stumbled upon an old tree with a hollow trunk. Inside, he found a nest of ' + kittens + ' kittens they were hungry, scared, and abandoned.');
}

// 13 line----------
function thirteenthLine(catname){
    console.log(catname + 's heart swelled with compassion. He became their protector, teaching them survival skills and sharing stories of bravery. The kittens looked up to him, their eyes wide with admiration.');
}

// 14 line----------
function fourteenthLine(catname){
    console.log('The kittens like to play, eat, run, sleep, and explore just like he was before since they’re still young, so ' + catname + ' has a lot of work in his hands.');
}

// 15 line----------

function fifteenthLine(catname,parentsLName){
    console.log('One day, as ' + catname + ' led the kittens to a hidden stream, he heard a familiar voice. “' + catname + '” It was his father, Mr. ' + parentsLName + '. Tears filled Puddings eyes as he rushed into his parents’ embrace. “I’m sorry,” he mewed.');
}

// 16 line----------
function sixteenthLine(parentsLName){
    console.log('Mr. and Mrs. ' + parentsLName + ' forgave their adventurous son, relieved to have him back. But they also saw the change in him, how selfless and responsible he has become.');
}

// 17 line----------
function seventeenthLine(catname){
    console.log(catname + ' had learned that rules were essential, but sometimes, breaking them led to unexpected kindness.');
}

// 18 line----------
function eighteenthLine(catname){
    console.log('From then on, ' + catname + ' split his time between the village and the forest. He became a adventurer teaching the kittens about both safety and compassion and he also became an informant to the village of what the outside world is like.');
}

// 19 line----------
function nineteenthLine(starrysky){
    console.log('Whenever he looked at the starry sky, he thought of that day and how lucky he was that nothing bad happened to him, he was grateful that he rescued those poor kittens.');
}

// 20 line----------
function twentiethLine(storyName){
    console.log('And so, in that cozy village, the legend of ' + storyName + ' was born. A tale whispered by cats all around the village, reminding that rules were meant to be followed, but compassion was equally important.');
    let isPuddingMischievous = true
    if (false) {
       console.log("Is Pudding mischievous? It is true.")
      } else {
       console.log("Is Pudding still mischievous? It is false.")
      }
}


// startStory------------
function startStory(){
    firstLine(catname)
    secondLine(color1,color2)
    thirdLine(parentsLName)
    fourthLine(catname)
    fifthLine(curiosity)
    sixthLine(forest)
    seventhLine(catname)
    eighthLine(nightfall)
    ninthLine(catname)
    tenthLine(parentsLName)
    eleventhLine(catname)
    twelvethLine(kittens)
    thirteenthLine(catname)
    fourteenthLine(catname)
    fifteenthLine(catname,parentsLName)
    sixteenthLine(parentsLName)
    seventeenthLine(catname)
    eighteenthLine(catname)
    nineteenthLine(starrysky)
    twentiethLine(storyName)
}

startStory();

let recipients = ['Simul', 'Arth', 'INM120'];

recipients.forEach(function(recipientName) {
    console.log(`
    Hi ${recipientName},
    If you could let me know how to improve 
    the story, that would be really helpful!
    
    
    Thank you!
    Sincerely,
    Philea
    `);
    const specificDate = new Date("11-16-2021");
    console.log(specificDate);
    startStory();
});

