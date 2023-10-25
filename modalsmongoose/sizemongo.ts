import { Schema, model, models } from 'mongoose'

const SizeSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'UserMongo',
    }, 
    name: {
        type: String,
    },     
    value: {
        type: String,
    },     
    store: {
        type: Schema.Types.ObjectId,
        ref: 'StoreMongo',
    },   
    products: {
        type: Schema.Types.ObjectId,
        ref: 'ProductMongo',
    },   
},{ timestamps: true })
const SizeMongo = models.SizeMongo || model('SizeMongo', SizeSchema)

export default SizeMongo