let voteCount = 1;
    
function increaseVoteCount() {
    voteCount++;
    document.getElementById("msg").innerHTML = "Total Votes: " + voteCount;
}

function helloVote() {
    increaseVoteCount();
}