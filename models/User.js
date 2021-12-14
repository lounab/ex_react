import mongoose from 'mongoose'

var Schema = mongoose.Schema

var user = new Schema({
    username: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    //walletId:{
       // type: Schema.Types.ObjectId,
      //  required: false
    //},
    createdArt:{
        type: Date,
        default: Date.now
    }
})

mongoose.models = {}

var user = mongoose.model('User', user)

export default user