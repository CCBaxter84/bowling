let score = [
  {}, {}, {}, {}, {},
  {}, {}, {}, {}, {}, {},
]

let pins = 7;
let frame = 1;
let turn = 1;
let strike = false;
let spare = false;

const callback = (prev) => {
  let updatedScore = [...prev];
  let currentFrame = frame - 1;
  let total = updatedScore.length - 1;

  if (turn === 1) {
    updatedScore[currentFrame] = {score: pins};
  } else if (turn === 2) {
    let temp = updatedScore[currentFrame].score;

    updatedScore[currentFrame].score = temp + pins;
  }

  if (frame === 1) {
    let temp = updatedScore[currentFrame];
    updatedScore[total] = temp;
    console.log(updatedScore[0]);
  } else {
    let temp1 = updatedScore[total].score;
    let temp2 = updatedScore[currentFrame].score;
    console.log(updatedScore[0]);
    updatedScore[total].score = temp1 + temp2;
    console.log(updatedScore[0]);
  }
  if (strike) {
    updatedScore[currentFrame]
  }

  score = updatedScore;
}

callback(score)
console.log(score);

pins = 2;
turn = 2;
callback(score);
console.log(score)

pins = 10;
turn = 1;
frame = 2;
callback(score);
console.log(score)