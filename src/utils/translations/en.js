const general = {
  success: 'Success',
  warning: 'Warning',
  cancel: 'Cancel',
  ok: 'OK',
  error: {
    default: 'Woops something went wrong. Try again later, If the error persist try to update the network settings.',
    buildingTransaction: 'Error while building transaction, try again.',
    gettingTransaction: 'Error while getting transaction.',
    clipboardCopied: 'Something wrong while copying'
  },
  balance: 'Balance',
  tronPower: 'TRON POWER',
  confirmed: 'Confirmed',
  unconfirmed: 'Unconfirmed',
  transactionType: {
    transfer: 'Transfer',
    transferAsset: 'Transfer Asset',
    freeze: 'Freeze',
    unfreeze: 'Unfreeze',
    vote: 'Vote',
    participate: 'Participate',
    create: 'Create',
    undefined: 'Undefined Type'
  }
}

const firstTime = {
  button: {
    create: 'CREATE WALLET',
    restore: 'RESTORE WALLET'
  }
}

const freeze = {
  title: 'FREEZE',
  unfreeze: {
    title: 'UNFREEZE',
    inThreeDays: 'After a three day period you can unfreeze your TRX',
    inXMinutes: 'You can unfreeze your TRX in {{minutes}} minutes.',
    inXHours: 'You can unfreeze your TRX in {{hours}} minutes.',
    inXDays: 'You can unfreeze your TRX in {{days}} minutes.',
    now: 'You can unfreeze your TRX now.'
  },
  error: {
    minimumAmount: 'The minimum amount for any freeze transaction is 1.',
    insufficientBalance: 'Insufficient TRX balance',
    roundNumbers: 'Can only freeze round numbers'
  },
  amount: 'FREEZE AMOUNT'
}

const getVault = {
  notInstalled: `It seems that you don't have Tron Vault installed in your phone to proceed with your transaction.`,
  downloadHere: 'You can download it here'
}

const market = {
  time: {
    hour: '1H',
    day: '1D',
    week: '1W',
    month: '1M',
    all: 'ALL'
  },
  trxPrice: 'TRX PRICE',
  highest: 'HIGHEST',
  lowest: 'LOWEST',
  volume: 'VOLUME 24H',
  cap: 'MARKET CAP',
  supply: 'CIRCULATING SUPPLY'
}

const pin = {
  title: 'SECURITY CHECK',
  enter: 'Enter PIN',
  reenter: 'Re-Enter PIN'
}

const receive = {
  title: 'RECEIVE',
  clipboardCopied: 'Copied to clipboard',
  button: {
    copy: 'Copy',
    share: 'Share'
  }
}

const rewards = {
  title: 'REWARDS',
  earned: 'You have earned'
}

const seed = {
  confirm: {
    title: 'CONFIRM SEED',
    error: {
      title: 'Wrong Combination',
      message: `Selected words don't match. Make sure you wrote the words in the correct order.`
    },
    explanation: 'Select the words below in the right order to confirm your secret phrase.',
    button: {
      reset: 'RESET WORDS',
      confirm: 'CONFIRM SEED'
    }
  },
  create: {
    title: 'CONFIRM WALLET SEED',
    error: 'Oops, we have a problem. Please restart the application.',
    generateNew: 'This will generate a completely new wallet.',
    button: {
      written: `I'VE WRITTEN IT DOWN`,
      newSeed: 'GET NEW SEED',
      later: 'Confirm later'
    }
  },
  restore: {
    title: 'RESTORE WALLET',
    explanation: `To restore your wallet, please provide the same 12 words that you wrote on paper when you created your wallet for the first time. If you enter a different sequence of words, a new empty wallet will be created.`,
    placeholder: 'Please, type your 12 seed words here',
    success: 'Wallet restored with success!',
    warning: 'Restore seed will erase all data on this device and pull information from the network for the restored account.',
    error: `Oops. Looks like the words you typed aren't a valid mnemonic seed. Check for a typo and try again.`,
    button: 'RESTORE'
  }
}

const send = {
  title: 'SEND',
  error: {
    insufficientBalance: 'Not enough balance.',
    gettingBalance: 'Error while getting balance data',
    incompleteAddress: 'Address is either incomplete or invalid.',
    invalidReceiver: 'Invalid receiver address',
    selectBalance: 'Select a balance first',
    invalidAmount: 'Invalid amount'
  },
  input: {
    token: 'TOKEN',
    to: 'TO',
    amount: 'AMOUNT'
  },
  available: 'available',
  chooseToken: 'Please, choose a token below.',
  minimumAmount: 'The minimum amount for any send transaction is 0.000001.'
}

const settings = {
  title: 'SETTINGS',
  notifications: {
    title: 'Notifications Subscription',
    description: 'Enable or disable push notifications'
  },
  network: {
    title: 'Network',
    description: 'Choose a node of your preference',
    modal: {
      title: 'NETWORK',
      explanation: 'With this option you can select the node that will better suit your needs and preferences. Please be careful while updating the node IP while wrong IP can lead to malfunctions within your wallet. Example: 35.231.121.122:50051',
      error: {
        storage: 'Error getting node ip from local storage',
        invalidIp: 'Please put a valid IP',
        update: 'Something went wrong while updating nodes ip',
        reset: 'Something wrong while reseting node ip'
      },
      success: {
        updated: 'Updated',
        updatedIp: 'Nodes IP updated!',
        switchTest: 'Switched nodes IP to Testnet',
        switchMain: 'Switched nodes IP to default main',
        reset: 'Node IP reseted!'
      },
      placeholder: {
        loadingIp: 'Loading IP',
        loadingPort: 'Loading Port'
      },
      button: {
        update: 'Update and Connect',
        reset: 'Reset'
      },
      mainNode: 'Main Node',
      solidityNode: 'Solidity Node',
      testNet: 'TestNet'
    }
  },
  backup: {
    title: 'Backup Wallet',
    description: 'Backup your secret words'
  },
  restore: {
    title: 'Restore Wallet',
    description: 'Restore previously used 12 secrets words'
  },
  reset: {
    title: 'Reset Wallet',
    description: 'Restart all data from current wallet',
    warning: `Warning: This action will erase all saved data including your 12 secret words. If you didn't save your secret, please do it before continue.`,
    button: 'OK, I understand it'
  },
  partners: 'PARTNERS'
}

const transactions = {
  title: 'MY TRANSACTIONS',
  from: 'From',
  to: 'To',
  notFound: 'No transactions found.'
}

const transactionDetails = {
  title: 'TRANSACTION',
  clipboard: {
    tronscanUrl: 'Tronscan url for this transaction copied to the clipboard',
    publicKey: 'Public Key copied to the clipboard'
  },
  hash: 'HASH',
  status: 'STATUS',
  time: 'TIME',
  block: 'BLOCK',
  frozenBalance: 'FROZEN BALANCE',
  unfrozenBalance: 'UNFROZEN BALANCE',
  totalVotes: 'TOTAL VOTES',
  amount: 'AMOUNT',
  to: 'TO',
  from: 'FROM',
  tokenName: 'TOKEN NAME',
  unityValue: 'UNITY VALUE',
  totalSupply: 'TOTAL SUPPLY',
  startTime: 'START TIME',
  endTime: 'END TIME',
  description: 'DESCRIPTION',
  votedAddress: 'VOTED ADDRESS'
}

const transactionSuccess = {
  submitted: 'TRANSACTION SUBMITTED TO NETWORK!',
  success: 'SUCCESS!'
}

export default {
  firstTime,
  freeze,
  getVault,
  market,
  pin,
  receive,
  rewards,
  seed,
  send,
  settings,
  transactions,
  transactionDetails,
  transactionSuccess,
  ...general
}
