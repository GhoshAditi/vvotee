pragma solidity ^0.5.15;

contract Voting {
    struct Candidate {
        uint id;
        string name;
        string party;
        uint voteCount;
    }

    // Mapping to store the candidates with candidate ID as the key
    mapping(uint => Candidate) public candidates;
    
    // Mapping to store whether an address has voted
    mapping(address => bool) public voters;

    uint public countCandidates;
    uint256 public votingEnd;
    uint256 public votingStart;

    // Modifier to check if voting period is active
    modifier onlyDuringVotingPeriod() {
        require(votingStart <= now && now < votingEnd, "Voting period is not active.");
        _;
    }

    // Function to add a new candidate
    function addCandidate(string memory name, string memory party) public returns (uint) {
        countCandidates++;
        candidates[countCandidates] = Candidate(countCandidates, name, party, 0);
        return countCandidates;
    }

    // Function to cast a vote for a candidate
    function vote(uint candidateID) public onlyDuringVotingPeriod {
        require(candidateID > 0 && candidateID <= countCandidates, "Invalid candidate ID.");
        require(!voters[msg.sender], "You have already voted.");

        voters[msg.sender] = true;  // Mark the sender as having voted
        candidates[candidateID].voteCount++;  // Increment the vote count for the chosen candidate
    }

    // Function to check if the sender has already voted
    function checkVote() public view returns (bool) {
        return voters[msg.sender];
    }

    // Function to get the total number of candidates
    function getCountCandidates() public view returns (uint) {
        return countCandidates;
    }

    // Function to get the details of a candidate
    function getCandidate(uint candidateID) public view returns (uint, string memory, string memory, uint) {
        require(candidateID > 0 && candidateID <= countCandidates, "Invalid candidate ID.");
        Candidate memory candidate = candidates[candidateID];
        return (candidate.id, candidate.name, candidate.party, candidate.voteCount);
    }

    // Function to set the voting start and end dates
    function setDates(uint256 _startDate, uint256 _endDate) public {
        require(votingEnd == 0 && votingStart == 0, "Voting dates already set.");
        require(_startDate + 1000000 > now && _endDate > _startDate, "Invalid voting period.");
        
        votingEnd = _endDate;
        votingStart = _startDate;
    }

    // Function to get the voting start and end dates
    function getDates() public view returns (uint256, uint256) {
        return (votingStart, votingEnd);
    }
}
