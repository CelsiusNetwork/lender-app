import moment from 'moment'

function Transaction (t) {
  Object.assign(this, t)

  // Value is in Weis -> https://etherconverter.online/
  // 1 ETH = 1,000,000,000,000,000,000 Weis
  this.ethValue = (Number(this.value) / 1000000000000000000).toFixed(2);
  this.createdAt = Number(this.timeStamp * 1000);
  this.dateDisplay = moment(Number(this.timeStamp * 1000)).format('MMM D, YYYY');
  this.timeDisplay = moment(Number(this.timeStamp * 1000)).format('hh:mm A');

  if (this.input === '0x' && this.ethValue) {
    this.isDegreeTransaction = false
  } else {
    this.isDegreeTransaction = true

    // parse last 20 chars to get amount
    // max celsius is 16^20, should be enough for now
    this.degAmount = Number.parseInt(t.input.slice(-20), 16).toFixed(2)
  }

  this.isReceiving = isReceiving
  this.isSending = isSending

  function isReceiving(lenderWalletAddress) {
    return this.to === lenderWalletAddress
  }
  function isSending(lenderWalletAddress) {
    return this.from === lenderWalletAddress
  }
}

export default Transaction
