const advice = [
      {
        text: '"Genius is one percent inspiration and ninety-nine percent perspiration."'
      },
      {
        text: '"You can observe a lot just by watching."'
      },
      {
        text: '"A house divided against itself cannot stand."'
      },
      {
        text: '"Difficulties increase the nearer we get to the goal."'
      },
      {
        text: '"Fate is in your hands and no one elses"'
      },
      {
        text: '"Be the chief but never the lord."'
      },
      {
        text: '"Nothing happens unless first we dream."'
      },
      {
        text: '"Well begun is half done."'
      },
      {
        text: '"Life is a learning experience, only if you learn."'
      },
      {
        text: '"Self-complacency is fatal to progress."'
      },
      {
        text: '"Peace comes from within. Do not seek it without."'
      },
      {
        text: '"What you give is what you get."'
      }
];

let index = Math.floor(Math.random() * advice.length);
const btnRandom = document.querySelector(".btn-random");

btnRandom.addEventListener("click", function(){
    let index = Math.floor(Math.random() * advice.length);
    document.querySelector(".advice-text").textContent = advice[index].text;
    document.querySelector(".advice-id").textContent = `Advice #${index + 1}`;

});