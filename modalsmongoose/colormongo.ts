import { Schema, model, models } from 'mongoose'

const ColorSchema = new Schema({
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
const ColorMongo = models.ColorMongo || model( 'ColorMongo', ColorSchema)

export default ColorMongo