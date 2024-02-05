const Contract = {
    address: '0xb07e28f145b46244406f2847d021362f5b3769c4', // Once contract deployed, copy To: address
    abi:[
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "certificateId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "previousOwner",
                    "type": "address"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "newOwner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "timestamp",
                    "type": "uint256"
                }
            ],
            "name": "CertificateOwnershipTransferred",
            "type": "event"
        },
        {
            "anonymous": false,
            "inputs": [
                {
                    "indexed": false,
                    "internalType": "uint256",
                    "name": "certificateId",
                    "type": "uint256"
                },
                {
                    "indexed": true,
                    "internalType": "address",
                    "name": "owner",
                    "type": "address"
                },
                {
                    "indexed": false,
                    "internalType": "bytes32",
                    "name": "certificateHash",
                    "type": "bytes32"
                }
            ],
            "name": "CertificateRegistered",
            "type": "event"
        },
        {
            "inputs": [],
            "name": "certificateCount",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                }
            ],
            "name": "certificates",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "certificateId",
                    "type": "uint256"
                },
                {
                    "internalType": "string",
                    "name": "name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "adminNumber",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "courseTaken",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "graduationYear",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "issuingInstitution",
                    "type": "string"
                },
                {
                    "internalType": "address",
                    "name": "issuer",
                    "type": "address"
                },
                {
                    "internalType": "bytes",
                    "name": "signature",
                    "type": "bytes"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_certificateId",
                    "type": "uint256"
                }
            ],
            "name": "getCertificateOwnershipHistory",
            "outputs": [
                {
                    "internalType": "address[]",
                    "name": "",
                    "type": "address[]"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_certificateId",
                    "type": "uint256"
                }
            ],
            "name": "getCertificateSignature",
            "outputs": [
                {
                    "internalType": "bytes",
                    "name": "",
                    "type": "bytes"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "string",
                    "name": "_name",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_adminNumber",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_courseTaken",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_graduationYear",
                    "type": "string"
                },
                {
                    "internalType": "string",
                    "name": "_issuingInstitution",
                    "type": "string"
                },
                {
                    "internalType": "bytes",
                    "name": "_signature",
                    "type": "bytes"
                }
            ],
            "name": "registerCertificate",
            "outputs": [
                {
                    "internalType": "uint256",
                    "name": "",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes32",
                    "name": "",
                    "type": "bytes32"
                }
            ],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_certificateId",
                    "type": "uint256"
                },
                {
                    "internalType": "address",
                    "name": "_newOwner",
                    "type": "address"
                }
            ],
            "name": "transferCertificateOwnership",
            "outputs": [],
            "stateMutability": "nonpayable",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_certificateId",
                    "type": "uint256"
                },
                {
                    "internalType": "bytes32",
                    "name": "_certificateHash",
                    "type": "bytes32"
                }
            ],
            "name": "verifyCertificate",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        },
        {
            "inputs": [
                {
                    "internalType": "uint256",
                    "name": "_certificateId",
                    "type": "uint256"
                }
            ],
            "name": "verifyIssuer",
            "outputs": [
                {
                    "internalType": "bool",
                    "name": "",
                    "type": "bool"
                }
            ],
            "stateMutability": "view",
            "type": "function"
        }
    ]
  };

  class CertificateVerificationApp {
    constructor(qrCodeInstance) {
        this.web3 = null;
        this.contractInstance = null;
        this.qrCode = qrCodeInstance;
        this.readOnlyProvider = 'https://eth-goerli.g.alchemy.com/v2/HGjiDTMJhv_9TKECYCTwlZ627sVqffkD'; // Replace with your endpoint
    }

    async init() {
        // Initialize web3 with read-only provider
        this.web3 = new Web3(new Web3.providers.HttpProvider(this.readOnlyProvider));

        const contractInterface = new this.web3.eth.Contract(Contract.abi, Contract.address);
        this.contractInstance = contractInterface;
    }
  
    async registerCertificate(name, adminNumber, courseTaken, graduationYear, issuingInstitution) {
        // Generate the certificate data to be signed (you may need to adjust this according to your requirements)
        // const certificateData = `${name}|${adminNumber}|${courseTaken}|${graduationYear}|${issuingInstitution}|Test Data Cert`;
        const certificateData = `Certificate Details:
                                    Name: ${name}
                                    Admin Number: ${adminNumber}
                                    Course Taken: ${courseTaken}
                                    Graduation Year: ${graduationYear}
                                    Issusing Institution: ${issuingInstitution}`;



        // Request MetaMask to sign the certificate data
        try {
            const signature = await this.signData(certificateData);

            // Assuming you have a function in your smart contract to register a new certificate
            // and it returns the certificate ID and certificate hash
            const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
            const from = accounts[0];

            // Use send instead of call to send a transaction to the contract
            const result = await this.contractInstance.methods.registerCertificate(
                name,
                adminNumber,
                courseTaken,
                graduationYear,
                issuingInstitution,
                signature // Pass the signature here
            ).send({ from: from, gas: 1000000 });

            const certificateId = result.events.CertificateRegistered.returnValues.certificateId; // Extract certificateId from the emitted event
            const certificateHash = result.events.CertificateRegistered.returnValues.certificateHash; // Extract certificateHash from the emitted event

            // Emit the event when a certificate is registered
            this.showQRCode(certificateHash, certificateId);
        } catch (error) {
            console.error('Error signing data:', error);
        }
    }
      
  
    // Function to sign data using MetaMask
    async signData(data) {
      try {
        const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
        const from = accounts[0];
        const signature = await this.web3.eth.personal.sign(data, from, ''); // Empty password for MetaMask
        return signature;
      } catch (error) {
        console.error('Error signing data:', error);
        throw error;
      }
    }
  
    async verifyCertificate(certificateId, certificateHash) {
        const isVerified = await this.contractInstance.methods.verifyCertificate(
            certificateId,
            certificateHash
        ).call({ from: this.web3.eth.defaultAccount });

        const verificationMessageElement = document.getElementById('verificationMessage');

        if (isVerified) {
            verificationMessageElement.textContent = 'Certificate is valid and authentic!';
            verificationMessageElement.style.color = 'green';

            // Get and display certificate details
            const certificateDetails = await this.getCertificateDetails(certificateId);
            this.displayCertificateDetails(certificateDetails);

            // Show the certificate details container
            const certificateDetailsContainer = document.getElementById('certificateDetailsContainer');
            certificateDetailsContainer.style.display = 'block';
        } else {
            verificationMessageElement.textContent = 'Certificate is invalid or tampered!';
            verificationMessageElement.style.color = 'red';

            // Hide the certificate details container
            const certificateDetailsContainer = document.getElementById('certificateDetailsContainer');
            certificateDetailsContainer.style.display = 'none';
        }
    }

    async getCertificateDetails(certificateId) {
        const certificateDetails = await this.contractInstance.methods.certificates(certificateId).call();
        return certificateDetails;
    }

    displayCertificateDetails(certificateDetails) {
        const detailsElement = document.getElementById('certificateDetails');
        detailsElement.innerHTML = `
            <p><strong>Name:</strong> ${certificateDetails.name}</p>
            <p><strong>Admin Number:</strong> ${certificateDetails.adminNumber}</p>
            <p><strong>Course Taken:</strong> ${certificateDetails.courseTaken}</p>
            <p><strong>Graduation Year:</strong> ${certificateDetails.graduationYear}</p>
            <p><strong>Issuing Institution:</strong> ${certificateDetails.issuingInstitution}</p>
        `;
    }
      
    showQRCode(certificateHash, certificateId) {
        const qrCodeData = `${certificateId}|${certificateHash}`;
        
        // Create a new QR code instance
        const qrCodeImageContainer = document.getElementById('qrCodeImage');
        const qrCodeOptions = {
          text: qrCodeData,
          width: 180, // Adjust the size as needed
          height: 180,
        };
        const qrCodeImage = new QRCode(qrCodeImageContainer, qrCodeOptions);
      
        // Create a canvas to add the border space
        const canvas = qrCodeImage._el.querySelector('canvas');
        const borderSize = 10; // Adjust the border size as needed
        const borderedCanvas = document.createElement('canvas');
        borderedCanvas.width = canvas.width + 2 * borderSize;
        borderedCanvas.height = canvas.height + 2 * borderSize;
        
        const context = borderedCanvas.getContext('2d');
        context.fillStyle = 'white'; // Set the border color
        context.fillRect(0, 0, borderedCanvas.width, borderedCanvas.height);
        context.drawImage(canvas, borderSize, borderSize);
        
        // Clear the container and add the bordered canvas
        qrCodeImageContainer.innerHTML = '';
        qrCodeImageContainer.appendChild(borderedCanvas);
      }

      async generateCertificateHash(name, adminNumber, courseTaken, graduationYear, issuingInstitution) {
        const dataToHash = `${name}${adminNumber}${courseTaken}${graduationYear}${issuingInstitution}`;
        try {
          const accounts = await ethereum.request({ method: 'eth_requestAccounts' });
          const from = accounts[0];
          const signature = await this.web3.eth.personal.sign(dataToHash, from, ''); // Empty password for MetaMask
          return signature;
        } catch (error) {
          console.error('Error signing data:', error);
          throw error;
        }
      }
      
  }

  // Initialize and run the DApp
  document.addEventListener('DOMContentLoaded', () => {
    // Initialize the QRCode instance with the qrCodeContainer element ID
    const qrCodeContainer = document.getElementById('qrCodeContainer');
    const qrCode = new QRCode(qrCodeContainer);

    // Initialize the app with the QRCode instance
    const app = new CertificateVerificationApp(qrCode);

    // Initialize and run the DApp
    app.init().then(() => {
        // Bind form submission event
        const registerBtn = document.getElementById('registerBtn');
        registerBtn.addEventListener('click', () => {
            const name = document.getElementById('name').value;
            const adminNumber = document.getElementById('adminNumber').value;
            const courseTaken = document.getElementById('courseTaken').value;
            const graduationYear = document.getElementById('graduationYear').value;
            const issuingInstitution = document.getElementById('issuingInstitution').value;
            app.registerCertificate(name, adminNumber, courseTaken, graduationYear, issuingInstitution);
        });

        // Bind verification button event
        const verifyBtn = document.getElementById('verifyBtn');
        verifyBtn.addEventListener('click', () => {
            const certificateId = document.getElementById('certificateId').value;
            const certificateHash = document.getElementById('certificateHash').value;
            app.verifyCertificate(certificateId, certificateHash);
        });
    }).catch((error) => {
        console.error('Error initializing the DApp:', error);
    });
});