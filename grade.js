function grade(score) {
  if (score < 0 || score > 100) {
    console.log("Score must not be less than 0 or more than 100.");
    return;
  }

  if (score >= 80) {
    console.log("You got A");
  } else if (score >= 70) {
    console.log("You got B");
  } else if (score >= 60) {
    console.log("You got C");
  } else if (score >= 50) {
    console.log("You got D");
  } else console.log("You got F");
}

grade(1000);
