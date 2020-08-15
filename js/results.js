let voteElements = document.getElementsByClassName("result-votes");

var votesArray = [];

for (const voteElement of voteElements) {
  votesArray.push(parseInt(voteElement.innerText));
}

var maxVotes = votesArray.reduce(function (a, b) {
  return Math.max(a, b);
});

let resultElements = document.getElementsByClassName("result");

for (const resultElement of resultElements) {
  let votes = parseInt(
    resultElement.getElementsByClassName("result-votes")[0].innerText
  );

  let percentage = (votes / maxVotes) * 100;

  let percentageBarElement = resultElement.getElementsByClassName(
    "result-percentage-bar"
  )[0];

  percentageBarElement.style.width = percentage + "%";
}
