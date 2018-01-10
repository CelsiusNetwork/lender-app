import moment from 'moment';

function Transaction(t) {
    Object.assign(this, t);

    this.createdAt = Number(this.timeStamp * 1000);
    this.dateDisplay = moment(Number(this.timeStamp * 1000)).format('MMM D, YYYY');
    this.timeDisplay = moment(Number(this.timeStamp * 1000)).format('hh:mm A');
}

export default Transaction;