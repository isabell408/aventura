function chooseAdventure(choice) {
    const story = document.getElementById('story');
    const choices = document.querySelector('.choices');
    if (choice === 'enter') {
      story.innerHTML = "You step into the forest and encounter a fork in the path. Do you go left or right?";
      choices.innerHTML = `
        <button onclick="chooseAdventure('left')">Go Left</button>
        <button onclick="chooseAdventure('right')">Go Right</button>
      `;
    } else if (choice === 'leave') {
      story.innerHTML = "You decided not to enter the forest. You turn back and go home, wondering what could have been.";
      choices.innerHTML = '';
    } else if (choice === 'left') {
      story.innerHTML = "You go left and find a treasure chest! Congratulations!";
      choices.innerHTML = '';
    } else if (choice === 'right') {
      story.innerHTML = "You go right and encounter a wild beast! Sadly, it's the end of your adventure.";
      choices.innerHTML = '';
    }
  }
  