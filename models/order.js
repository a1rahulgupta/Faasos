var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  name: {
    type: String,
  },
  quantity: {
    type: Number,
  },
  orderquantitytillnow: {
    type: Number,
    default: 1
  },
  status: {
    type: Boolean,
    default: false
  },
  predictedquantity: {
    type: Number
  }
});
module.exports = mongoose.model('Order', OrderSchema);