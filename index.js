const express = require('express');
const path = require('path');
const jwt = require('jsonwebtoken');

require('dotenv').config();

const app = express();

// Authorization middleware
const authorizeUser = (req, res, next) => {
  const token = req.query.Authorization?.split('Bearer ')[1];

  if (!token) {
    return res.status(401).send('<h1 align="center"> Login to Continue </h1>');
  }
  
  try {
    // Verify and decode the token
    const decodedToken = jwt.verify(token, process.env.SECRET_KEY, { algorithms: ['HS256'] });

    req.user = decodedToken;
    next(); // Proceed to the next middleware
  } catch (error) {
    return res.status(401).json({ message: 'Invalid authorization token' });
  }
};

app.use('/css', express.static(path.join(__dirname, 'src/css')));
app.use('/js', express.static(path.join(__dirname, 'src/js')));
app.use('/html', express.static(path.join(__dirname, 'src/html')));
app.use('/assets', express.static(path.join(__dirname, 'src/assets')));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/login.html'));
});

app.get('/js/login.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/js/login.js'));
});

app.get('/css/login.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/css/login.css'));
});

app.get('/css/index.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/css/index.css'));
});

app.get('/css/admin.css', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/css/admin.css'));
});

app.get('/assets/bg.jpg', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/assets/bg.jpg'));
});

app.get('/js/app.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/js/app.js'));
});

app.get('/admin.html', authorizeUser, (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/admin.html'));
});

app.get('/index.html', authorizeUser, (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/index.html'));
});

app.get('/dist/login.bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/dist/login.bundle.js'));
});

app.get('/dist/app.bundle.js', (req, res) => {
  res.sendFile(path.join(__dirname, 'src/dist/app.bundle.js'));
});

// Serve the favicon.ico file
app.get('/favicon.ico', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/favicon.ico'));
});

// Start the server
app.listen(8080, () => {
  console.log('Server listening on http://localhost:8080');
});


app.get('/index.html', authorizeUser, (req, res) => {
  res.sendFile(path.join(__dirname, 'src/html/index.html'));
});

/*
/// connecting metamask
const getWeb3 = async () => {
  return new Promise(async (resolve, reject) => {
      const web3 = new Web3(window.ethereum)
  try {
      await window.ethereum.request({ method: "eth_requestAccounts" })
      resolve(web3)
      }catch (error) {
      reject (error)
  } I
  })
  }

  document.addEventListener("DOMContentLoaded", () => {
      document.getElementById("connect_button").addEventListener("click", async () => {
          const web3 = await getWeb3()
          const walletAddress = await web3.eth. requestAccounts()
          const walletBalanceInWei = await web3.eth.getBalance (walletAddress [0])
          const walletBalanceInEth = Math. round (Web3.utils.fromWei(walletBalanceInWei) * 1000) / 1000
          target.setAttribute("hidden", "hidden")
          document.getElementById("wallet_address").innerText = walletAddress
          document.getElementById("wallet_balance").innerText = walletBalanceInEth
          document.getElementById("wallet_info").removeAttribute("hidden")
      })
  })

*/