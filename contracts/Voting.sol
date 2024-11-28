pragma solidity ^0.8.19;

contract GasEfficientVoting {
    // Tightly packed struct for minimal storage
    struct Candidate {
        uint32 id;           // Reduced size from uint to uint32
        uint32 voteCount;    // Reduced size from uint to uint32
        bytes32 nameAndParty; // Compact storage of name and party
    }

    // Use fixed-size arrays instead of dynamic for predictable gas costs
    Candidate[10] private candidateList;
    
    // Bit-packed storage for voter tracking
    mapping(address => uint256) private voterStatus;

    uint8 public candidateCount;
    uint64 public votingStart;
    uint64 public votingEnd;
    address public immutable owner;

    // Custom errors for gas efficiency
    error VotingNotActive();
    error InvalidCandidate();
    error AlreadyVoted();
    error VotingPeriodSet();
    error InvalidVotingPeriod();

    // Events for efficient off-chain tracking
    event CandidateAdded(uint32 indexed id, bytes32 nameAndParty);
    event VoteCast(address indexed voter, uint32 candidateId);

    constructor() {
        owner = msg.sender;
    }

    // Modifier for voting period check - uses custom error
    modifier onlyDuringVotingPeriod() {
        if (block.timestamp < votingStart || block.timestamp >= votingEnd) 
            revert VotingNotActive();
        _;
    }

    // Owner-only modifier with custom error
    modifier onlyOwner() {
        if (msg.sender != owner) revert InvalidCandidate();
        _;
    }

    // Efficient candidate addition
    function addCandidate(string calldata name, string calldata party) 
        external onlyOwner returns (uint32) 
    {
        // Prevent more than 10 candidates
        if (candidateCount >= 10) revert InvalidCandidate();

        // Compact storage of name and party
        bytes32 compactData = keccak256(abi.encodePacked(name, party));
        
        candidateList[candidateCount] = Candidate({
            id: uint32(candidateCount + 1),
            voteCount: 0,
            nameAndParty: compactData
        });

        emit CandidateAdded(uint32(candidateCount + 1), compactData);
        
        unchecked { candidateCount++; }
        return uint32(candidateCount);
    }

    // Bit-packed voting mechanism
    function vote(uint32 candidateId) external onlyDuringVotingPeriod {
        // Validate candidate
        if (candidateId == 0 || candidateId > candidateCount) 
            revert InvalidCandidate();

        // Bit-packed voter tracking
        uint256 voterPacked = voterStatus[msg.sender];
        uint256 voterBit = 1 << (candidateId - 1);

        // Check if already voted
        if (voterPacked & voterBit != 0) revert AlreadyVoted();

        // Update voter status and candidate votes
        voterStatus[msg.sender] = voterPacked | voterBit;
        unchecked { candidateList[candidateId - 1].voteCount++; }

        emit VoteCast(msg.sender, candidateId);
    }

    // Compact candidate retrieval
    function getCandidate(uint32 candidateId) 
        external view returns (uint32 id, bytes32 nameAndParty, uint32 voteCount) 
    {
        if (candidateId == 0 || candidateId > candidateCount) 
            revert InvalidCandidate();
        
        Candidate memory candidate = candidateList[candidateId - 1];
        return (candidate.id, candidate.nameAndParty, candidate.voteCount);
    }

    // Efficient voting period setting
    function setVotingPeriod(uint64 start, uint64 end) external onlyOwner {
        if (votingStart != 0 || votingEnd != 0) revert VotingPeriodSet();
        if (start >= end || start < block.timestamp) 
            revert InvalidVotingPeriod();

        votingStart = start;
        votingEnd = end;
    }

    // View total votes for a candidate
    function getCandidateVotes(uint32 candidateId) 
        external view returns (uint32) 
    {
        if (candidateId == 0 || candidateId > candidateCount) 
            revert InvalidCandidate();
        
        return candidateList[candidateId - 1].voteCount;
    }

    // Check if a specific address has voted
    function hasVoted(address voter) external view returns (bool) {
        return voterStatus[voter] != 0;
    }
}
