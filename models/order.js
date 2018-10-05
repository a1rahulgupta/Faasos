var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var OrderSchema = new Schema({
  name: {
        type: String,
    },
  quantity: {
          type: String,
      },
  prdeictedquantity: {
        type: String,
    },
  status:{
    type: Boolean,
   
  }
  
});
module.exports = mongoose.model('Order', OrderSchema);