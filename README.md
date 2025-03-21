<p align="center">
  <a href="" rel="noopener">
 <img src="https://i.imgur.com/AZ2iWek.png" alt="Project logo"></a>
</p>
<h3 align="center">Decentralized Voting</h3>

<div align="center">

[![StatusCode1](https://img.shields.io/badge/hackathon-name-orange.svg)](http://hackathon.url.com)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<p align="center"> This project is a decentralized voting platform built on the Ethereum blockchain, designed to ensure transparency, security, and immutability in the voting process.

    <br> 
</p>

## 📝 Table of Contents

- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Dependencies / Limitations](#limitations)
- [Installation](#installation)
- [Usage](#usage)
- [Technology Stack](#tech_stack)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 Problem Statement : Decentralised voting

In traditional voting systems, concerns about security, transparency, and trustworthiness have often arisen. Issues such as voter fraud, manipulation of results, and lack of transparency can undermine the legitimacy of an election. Additionally, centralized systems are vulnerable to cyber-attacks and data breaches, posing a significant risk to the integrity of the voting process.


## 💡 Idea / Solution 

This project proposes a decentralized voting platform leveraging blockchain technology to address the challenges of traditional voting systems. By recording votes on the Ethereum blockchain, the system ensures that every vote is securely recorded, immutable, and transparent to all stakeholders. The platform integrates secure voter authentication using JWT tokens and manages voter data using a MySQL database hosted on Microsoft Azure. The decentralized nature of blockchain technology, combined with secure authentication and cloud-hosted data management, offers a robust and trustworthy solution for modern elections.


## ⛓️ Dependencies / Limitations 

### Backend (FastAPI):
- **Python 3.9+**
- **FastAPI**: Web framework for building APIs.
- **PyJWT**: For generating and verifying JWT tokens.
- **mysql-connector-python**: MySQL database connector.
- **dotenv**: For managing environment variables.

### Frontend:
- **Node.js & npm**: For managing dependencies and running scripts.
- **Express**: Server to handle static files and authentication.
- **MetaMask**: Ethereum wallet integration for blockchain interaction.

### Blockchain:
- **Truffle**: Development framework for Ethereum.
- **Web3.js**: JavaScript library for interacting with the Ethereum blockchain.

### Cloud Services:
- **Microsoft Azure**: 
  - **Azure MySQL Database**: To store voter information.
  - **Azure App Service**: To host the FastAPI backend.
- **Vercel/Netlify** (Optional): For hosting the frontend.


## 🏁 Getting Started 

These instructions will get you a copy of the project up and running on your local machine for development
and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
Give examples
```

## Installation

1. **Open a terminal.**

2. **Clone the repository** by using the command:
    ```bash
    git clone https://github.com/AdityaSeth777/blockchain-voting.git
    ```

3. **Download and install** [Ganache](https://trufflesuite.com/ganache/).

4. **Create a workspace** named **development** in Ganache. In the Truffle projects section, add `truffle-config.js` by clicking the `ADD PROJECT` button.

5. **Download the** [Metamask](https://metamask.io/download/) **extension** for your browser.

6. **Create a wallet** (if you don't have one), then import accounts from Ganache.

7. **Add a network to Metamask**:
    - **Network Name**: Localhost 7575
    - **RPC URL**: `http://localhost:7545`
    - **Chain ID**: 1337
    - **Currency Symbol**: ETH

8. **Open MySQL** and create a database named **voter_db**. (DO NOT USE XAMPP)

9. **In the `voter_db` database**, create a new table named **voters** with the following structure and add some values:
    ```sql
    CREATE TABLE voters (
        voter_id VARCHAR(36) PRIMARY KEY NOT NULL,
        role ENUM('admin', 'user') NOT NULL,
        password VARCHAR(255) NOT NULL
    );
    ```

    **Sample Table:**
    ```
    +--------------------------------------+-------+-----------+
    | voter_id                             | role  | password  |
    +--------------------------------------+-------+-----------+
    |                                      |       |           |
    +--------------------------------------+-------+-----------+
    ```

12. **Install Truffle globally**:
    ```bash
    npm install -g truffle
    ```

14. **Navigate to the root directory** of the repository and install Node.js modules:
    ```bash
    npm install
    ```

15. **Install Python dependencies**:
    ```bash
    pip install fastapi mysql-connector-python pydantic python-dotenv uvicorn uvicorn[standard] PyJWT
    ```

## Usage

> **Note**: Update the database credentials in the `./db/.env` file.

1. **Open a terminal** in the project directory.

2. **Open Ganache** and its **development** workspace.

3. **Open a terminal** in the project's root directory and run the command:
    ```bash
    truffle console
    ```
    Then, compile the smart contracts with the command:
    ```bash
    compile
    ```
    Exit the Truffle console.

5. **Bundle `app.js` with Browserify**:
    ```bash
    browserify ./src/js/app.js -o ./src/dist/app.bundle.js
    ```

2. **Start the Node.js server**:
    ```bash
    node index.js
    ```

3. **Navigate to the `db` folder** in another terminal:
    ```bash
    cd db
    ```
    Then, start the database server with the following command:
    ```bash
    uvicorn main:app --reload --host 127.0.0.1
    ```

4. **In a new terminal, migrate the Truffle contract** to the local blockchain:
    ```bash
    truffle migrate
    ```

You're all set! The Voting app should be up and running now at [http://localhost:8080/](http://localhost:8080/).



## ✍️ Authors 

- Aditi Ghosh
- Ayash Bera
- Aditya Seth
- Rudranil Chowdhury


## 🎉 Acknowledgments 
- Hat tip to anyone whose code was used
- Inspiration
- References
