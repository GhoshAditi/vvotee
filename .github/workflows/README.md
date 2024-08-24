<p align="center">
  <a href="" rel="noopener">
 <img src="https://i.imgur.com/AZ2iWek.png" alt="Project logo"></a>
</p>
<h3 align="center">Decentralised Autonomous Organization for Local Governance</h3>

<div align="center">

[![Hackathon](https://img.shields.io/badge/hackathon-StatusCode1-orange.svg)](http://hackathon.url.com)
[![Status](https://img.shields.io/badge/status-active-success.svg)]()
[![GitHub Issues](https://img.shields.io/github/issues/AdityaSeth777/blockchain-voting.svg)](https://github.com/AdityaSeth777/blockchain-voting/issues)
[![GitHub Pull Requests](https://img.shields.io/github/issues-pr/kylelobo/The-Documentation-Compendium.svg)](https://github.com/kylelobo/The-Documentation-Compendium/pulls)
[![License](https://img.shields.io/badge/license-MIT-blue.svg)](LICENSE.md)

</div>

---

<p align="center"> XYZ is our very own blockchain based platform that allows local bodies to participate in government policy-making using a Decentralised Autonomous Organization (DAO) with absolute transparency.
    <br> 
</p>

## 📝 Table of Contents

- [Problem Statement](#problem_statement)
- [Idea / Solution](#idea)
- [Dependencies / Limitations](#limitations)
- [Future Scope](#future_scope)
- [Setting up a local environment](#getting_started)
- [Usage](#usage)
- [Technology Stack](#tech_stack)
- [Contributing](../CONTRIBUTING.md)
- [Authors](#authors)
- [Acknowledgments](#acknowledgments)

## 🧐 Problem Statement <a name = "problem_statement"></a>

Local government decision-making often lacks transparency and citizen participation, leading to inefficiencies and reduced public trust. A decentralized autonomous organization (DAO) based on blockchain technology can address these issues by providing a transparent and secure platform for local bodies to actively participate in and influence government decisions. This system ensures accountability, reduces corruption, and fosters a more inclusive and democratic decision-making process.

- In the ideal state, the decentralized autonomous organization (DAO) platform is fully operational and widely adopted by local government bodies. Citizens and representatives can easily access the platform to propose, discuss, and vote on various government decisions. The blockchain-based system ensures complete transparency, security, and immutability of records, fostering trust and accountability. All stakeholders, including local officials and community members, are actively engaged and informed, leading to more democratic, efficient, and fair decision-making processes. The platform's ease of use and accessibility empower citizens to have a meaningful impact on local governance, ultimately enhancing community well-being and public satisfaction.
- In a mid-sized city, a DAO platform is launched to enhance transparency and citizen participation in local governance. Citizens and officials are educated and onboarded to use the secure, blockchain-based system. Community members propose, discuss, and vote on local issues like park development, ensuring transparent and tamper-proof decision-making. Continuous updates and public audits build trust and accountability, leading to increased civic engagement, efficient governance, and higher public satisfaction.

## 💡 Idea / Solution <a name = "idea"></a>

- To address potential issues with a blockchain-based DAO for local governance, user-friendly interfaces and comprehensive training can mitigate technical complexity, while robust security measures and scalable technologies ensure system integrity and performance. Awareness campaigns and engagement strategies boost user adoption, and legal compliance is secured through collaboration with experts and policymakers. Clear timelines and automated processes prevent decision-making delays, and privacy-preserving technologies protect user data. Engaging community leaders and demonstrating benefits can overcome resistance to change, while securing funding optimizes resource allocation. Finally, fair governance is ensured through equal representation, transparent processes, and effective dispute resolution mechanisms.


## ⛓️ Dependencies / Limitations <a name = "limitations"></a>

- What are the dependencies of your project?
- Describe each limitation in detailed but concise terms
- Explain why each limitation exists
- Provide the reasons why each limitation could not be overcome using the method(s) chosen to acquire.
- Assess the impact of each limitation in relation to the overall findings and conclusions of your project, and if
  appropriate, describe how these limitations could point to the need for further research.

## 🚀 Future Scope <a name = "future_scope"></a>

Write about what you could not develop during the course of the Hackathon; and about what your project can achieve
in the future.

## 🏁 Getting Started <a name = "getting_started"></a>

These instructions will get you a copy of the project up and running on your local machine for development
and testing purposes. See [deployment](#deployment) for notes on how to deploy the project on a live system.

### Prerequisites

What things you need to install the software and how to install them.

```
Give examples
```

### Installing

A step by step series of examples that tell you how to get a development env running.

Say what the step will be

```
Give the example
```

And repeat

```
until finished
```

## 🎈 Usage <a name="usage"></a>

Add notes about how to use the system.

## ⛏️ Built With <a name = "tech_stack"></a>

- [MongoDB]https://img.shields.io/badge/:badgeContent?style=flat-square&logo=MongoDB&logoColor=rgba&logoSize=auto&color=hsl&link=https%3A%2F%2Fwww.mongodb.com
 - Database
- [Express](https://expressjs.com/) - Server Framework
- [VueJs](https://vuejs.org/) - Web Framework
- [NodeJs](https://nodejs.org/en/) - Server Environment

<!--
## ✍️ Authors <a name = "authors"></a>

- [@kylelobo](https://github.com/kylelobo) - Idea & Initial work

See also the list of [contributors](https://github.com/kylelobo/The-Documentation-Compendium/contributors)
who participated in this project.

!-->
## 🎉 Acknowledgments <a name = "acknowledgments"></a>


- Hat tip to anyone whose code was used
- Inspiration
- References


```bash
npm install @auth0/auth0-react axios react-router-dom
npm install mongoose express-session passport passport-auth0 body-parser axios dotenv
```
<!--
├── decentralized-voting-app                # Root directory of the project.
    ├── build                               # Directory containing compiled contract artifacts.
    |   └── contracts                       
    |       ├── MigrationArtifact.json      
    |       └── VotingArtifact.json         
    ├── contracts                           # Directory containing smart contract source code.
    |   ├── DeployContracts.js              
    |   ├── Migration.sol                   
    |   └── Voting.sol                      
    ├── database_api                        # API code for database communication.
    |   └── api_main.py                     
    ├── migrations                          # Ethereum contract deployment scripts.
    |   └── InitialMigration.js             
    ├── node_modules                        # Node.js modules and dependencies.
    ├── public                              # Public assets like favicon.
    |   └── favicon.ico                     
    ├── src                                 
    |   ├── assets                          # Project images.
    |   |   └── eth_background.jpg          
    |   ├── styles                          # CSS stylesheets.
    |   |   ├── admin_panel.css             
    |   |   ├── main.css                    
    |   |   └── login_page.css              
    |   ├── dist                            # Compiled JavaScript bundles.
    |   |   ├── main_bundle.js              
    |   |   └── login_bundle.js             
    |   ├── templates                       # HTML templates.
    |   |   ├── admin_panel.html            
    |   |   ├── main_page.html              
    |   |   └── login_page.html             
    |   └── scripts                         # JavaScript logic files.
    |       ├── main_script.js              
    |       └── login_script.js             
    ├── app.js                              # Main entry point for Node.js application.
    ├── package.json                        # Node.js package configuration.
    ├── package-lock.json                   # Lockfile for package dependencies.
    ├── README.md                           # Project documentation.
    └── truffle-config.js                   # Truffle configuration file.


!-->


├── blockchain-voting-dapp                # Root directory of the project.
    ├── build                             # Directory containing compiled contract artifacts.
    |   └── contracts                     
    |       ├── Migrations.json           
    |       └── Voting.json               
    ├── contracts                         # Directory containing smart contract source code.
    |   ├── 2_deploy_contracts.js         
    |   ├── Migrations.sol                
    |   └── Voting.sol                    
    ├── Database_API                      # API code for database communication.
    |   └── main.py                       
    ├── migrations                        # Ethereum contract deployment scripts.
    |   └── 1_initial_migration.js        
    ├── node_modules                      # Node.js modules and dependencies.
    ├── public                            # Public assets like favicon.
    |   └── favicon.ico                   
    ├── src                               
    |   ├── assets                        # Project images.
    |   |   └── eth5.jpg                  
    |   ├── css                           # CSS stylesheets.
    |   |   ├── admin.css                 
    |   |   ├── index.css                 
    |   |   └── login.css                 
    |   ├── dist                          # Compiled JavaScript bundles.
    |   |   ├── app.bundle.js             
    |   |   └── login.bundle.js           
    |   ├── html                          # HTML templates.
    |   |   ├── admin.html                
    |   |   ├── index.html                
    |   |   └── login.html                
    |   └── js                            # JavaScript logic files.
    |       ├── app.js                    
    |       └── login.js                  
    ├── index.js                          # Main entry point for Node.js application.
    ├── package.json                      # Node.js package configuration.
    ├── package-lock.json                 # Lockfile for package dependencies.
    ├── README.md                         # Project documentation.
    └── truffle-config.js                 # Truffle configuration file.
