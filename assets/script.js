var topics = ['HTML', 'Git', 'CSS', 'JavaScript']

var randomTopics = topics[ Math.floor( Math.random() * topics.length ) ]

function listTopics() {
    for ( let i = 0; i < topics.length; i++ ) {
    console.log(topics[i]);
    }
}

function selectTopic() {
    if (randomTopics === 'HTML') {
    console.log("Let's study HTML!");
    } else if (randomTopics === 'CSS') {
    console.log("Let's study CSS!");
    } else if (randomTopics === 'Git') {
    console.log("Let's study Git!");
    } else if (randomTopics === 'JavaScript') {
    console.log("Let's study JavaScript!");
    } else {
    console.log('Please try again!');
    }
}

console.log('Here are the topics we learned through prework:');
listTopics();

console.log('Which topic should we study first?');
selectTopic();



