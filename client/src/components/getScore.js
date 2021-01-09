module.exports = (rolls) => {

  // Edge case: 0
  if (rolls.length === 0) {
    return 0
  }

  // Calculate total score
  let total = 0;
  for (let i = 0; i < 8; i++) {
    let current = rolls[i];
    let next = rolls[i + 1];
    let nextNext = rolls[i + 2];
    // Handle spares and strikes
    if (next === 'X') {
      next = 10;
    }
    if (nextNext === 'X') {
      nextNext = 10;
    }
    if (current === 10 && next !== undefined) {
      current += next;
    } else if (current === 'X') {
      if (next !== undefined && nextNext !== undefined) {
        current = 10 + next + nextNext;
      } else if (next !== undefined && nextNext === undefined) {
        current = 10 + next;
      } else if (!next && !nextNext) {
        current = 10;
      }
    }
    total += current;
    if (next === undefined) {
      break;
    }
  }

  // Handle last two frames
  let ninthFrame = rolls.slice(8, 11);
  let tenthFrame = rolls.slice(9, 12);

  const scoreLastFrames = function(lastFrames) {
    let result = 0;
    let currentFrame;
    let nextFrame;
    let nextNextFrame;
    if (lastFrames.length <= 0) {
      return result;
    } else {
      currentFrame = lastFrames[0];
      if (lastFrames.length === 1) {
        if (currentFrame === 'X') {
          currentFrame = 10;
        }
        result += currentFrame;
        return result;
      } else if (lastFrames.length === 2) {
        nextFrame = lastFrames[1];
        if (currentFrame === 10) {
          result += handleSpare(currentFrame, nextFrame)
        } else if (currentFrame === 'X') {
          result += handleStrike(currentFrame, nextFrame);
        }
      } else if (lastFrames.length === 3) {
        nextFrame = lastFrames[1];
        nextNextFrame = lastFrames[2];
        if (currentFrame === 10) {
          result += handleSpare(currentFrame, nextFrame)
        } else if (currentFrame === 'X') {
          result += handleStrike(currentFrame, nextFrame, nextNextFrame);
        }
      }
    }
    return result;
  }

  const handleSpare = function(current, next = 0) {
    if (next === 'X') {
      next = 10;
    }
    return current + next;
  }

  const handleStrike = function(current, next = 0, nextNext = 0) {
    current = 10;
    if (next === 'X') {
      next = 10;
    }
    if (nextNext === 'X') {
      nextNext = 10;
    }
    return current + next + nextNext;
  }

  if (rolls.length >= 9) {
    total += scoreLastFrames(ninthFrame);
  }

  if (rolls.length >= 10) {
    total += scoreLastFrames(tenthFrame);
  }
  return total;
}