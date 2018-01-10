import moment from 'moment';

function Transaction(t) {
    Object.assign(this, t);

    // Value is in Weis -> https://etherconverter.online/
    this.ethValue = (Number(this.value) / 1000000000000000000).toFixed(2);
    this.createdAt = Number(this.timeStamp * 1000);
    this.dateDisplay = moment(Number(this.timeStamp * 1000)).format('MMM D, YYYY');
    this.timeDisplay = moment(Number(this.timeStamp * 1000)).format('hh:mm A');
}

export default Transaction;