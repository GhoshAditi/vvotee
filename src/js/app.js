const Web3 = require('web3');
const contract = require('@truffle/contract');
const votingArtifacts = require('../../build/contracts/Voting.json');
const VotingContract = contract(votingArtifacts);

// Fetch the current date at the top of the document
const currentDate = new Date();

window.App = {
  account: null,
  contractInstance: null,

  start: async function() {
    if (window.ethereum) {
      try {
        // Request account access if needed
        await window.ethereum.request({ method: 'eth_requestAccounts' });

        // We don't know window.web3 version, so we use our own instance of web3
        const web3 = new Web3(window.ethereum);

        // Set the provider for our contract
        VotingContract.setProvider(web3.currentProvider);

        // Get the accounts
        const accounts = await web3.eth.getAccounts();
        this.account = accounts[0];
        $("#accountAddress").html("Your Account: " + this.account);

        // Get the contract instance
        this.contractInstance = await VotingContract.deployed();

        // Load initial data
        this.loadCandidates();
        this.loadDates();
        this.checkVote();

        // Bind events
        this.bindEvents();
      } catch (error) {
        console.error("Could not connect to contract or chain: " + error.message);
      }
    } else {
      console.error('MetaMask not detected. Please install MetaMask.');
    }
  },

  bindEvents: function() {
    $(document).on('click', '#addCandidate', this.addCandidate.bind(this));
    $(document).on('click', '#addDate', this.setVotingDates.bind(this));
    // No need to bind vote button click here, as it's handled directly via HTML
  },

  loadCandidates: async function() {
    try {
      const countCandidates = await this.contractInstance.getCountCandidates();
      for (let i = 0; i < countCandidates; i++) {
        const data = await this.contractInstance.getCandidate(i + 1);
        const id = data[0];
        const name = data[1];
        const party = data[2];
        const voteCount = data[3];

        // Initialize local storage counter for each candidate if not already set
        if (!localStorage.getItem(`candidate_${id}_votes`)) {
          localStorage.setItem(`candidate_${id}_votes`, '0');
        }

        // Display candidates with current vote count
        const viewCandidates = `
          <tr>
            <td>
              <input class="form-check-input" type="radio" name="candidate" value="${id}" id=${id}>
              ${name}
            </td>
            <td>${party}</td>
            <td id="vote_count_${id}">${voteCount}</td>
          </tr>`;
          
        $("#boxCandidate").append(viewCandidates);
      }
      window.countCandidates = countCandidates;
    } catch (error) {
      console.error("Error loading candidates: " + error.message);
    }
  },

  loadDates: async function() {
    try {
      const result = await this.contractInstance.getDates();
      const startDate = new Date(result[0] * 1000);
      const endDate = new Date(result[1] * 1000);
      
      // Display the current date if the fetched dates are not set correctly
      const displayStartDate = result[0] ? startDate : currentDate;
      const displayEndDate = result[1] ? endDate : currentDate;

      $("#dates").text(`${displayStartDate.toDateString()} - ${displayEndDate.toDateString()}`);
    } catch (error) {
      console.error("Error loading dates: " + error.message);
    }
  },

  checkVote: async function() {
    try {
      const voted = await this.contractInstance.checkVote({ from: this.account });
      if (!voted) {
        $("#voteButton").attr("disabled", false);
      } else {
        $("#voteButton").attr("disabled", true);
      }
    } catch (error) {
      console.error("Error checking vote status: " + error.message);
    }
  },

  addCandidate: async function() {
    const nameCandidate = $('#name').val();
    const partyCandidate = $('#party').val();

    try {
      await this.contractInstance.addCandidate(nameCandidate, partyCandidate, { from: this.account });
      console.log("Candidate added successfully.");

      // Add a new candidate to local storage with a vote count of 0
      const newCandidateId = await this.contractInstance.getCountCandidates();
      localStorage.setItem(`candidate_${newCandidateId}_votes`, '0');

      window.location.reload();
    } catch (error) {
      console.error("Error adding candidate: " + error.message);
    }
  },

  setVotingDates: async function() {
    const startDate = Date.parse($('#startDate').val()) / 1000;
    const endDate = Date.parse($('#endDate').val()) / 1000;

    try {
      await this.contractInstance.setDates(startDate, endDate, { from: this.account });
      console.log("Voting dates set successfully.");
      window.location.reload();
    } catch (error) {
      console.error("Error setting voting dates: " + error.message);
    }
  },

  vote: async function() {
    const candidateID = $("input[name='candidate']:checked").val();
    if (!candidateID) {
      $("#msg").html("<p>Please vote for a candidate.</p>");
      return;
    }

    try {
      const alreadyVoted = localStorage.getItem(`voted_for_${this.account}_${candidateID}`);

      if (!alreadyVoted) {
        // Proceed with voting on the blockchain
        await this.contractInstance.vote(parseInt(candidateID), { from: this.account });

        // Increment the local counter for the voted candidate if the user hasn't voted yet
        const currentLocalVotes = parseInt(localStorage.getItem(`candidate_${candidateID}_votes`), 10) || 0;
        localStorage.setItem(`candidate_${candidateID}_votes`, currentLocalVotes + 1);
        localStorage.setItem(`voted_for_${this.account}_${candidateID}`, 'true'); // Mark this candidate as voted by this account

        // Update the displayed vote count
        $(`#vote_count_${candidateID}`).text(currentLocalVotes + 1);

        $("#voteButton").attr("disabled", true);
        $("#msg").html("<p>Voted</p>");
      } else {
        $("#msg").html("<p>You have already voted for this candidate.</p>");
      }

      window.location.reload();
    } catch (error) {
      console.error("Error voting: " + error.message);
    }
  }
};

window.addEventListener("load", function() {
  window.App.start();
});
