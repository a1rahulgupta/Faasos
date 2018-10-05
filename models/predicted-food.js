var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
var Schema = mongoose.Schema;

var PredictedFoodSchema = new Schema({
  name: {
        type: String,
    },
  quantity: {
          type: String,
      },
 
  
});
module.exports = mongoose.model('PredictedFood', PredictedFoodSchema);