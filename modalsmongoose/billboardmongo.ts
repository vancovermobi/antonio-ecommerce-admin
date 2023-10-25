import { Schema, model, models } from 'mongoose'

const BillboardSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'UserMongo',
    },   
    label: {
        type: String,
        required: [true, 'Label is required!'],        
        match: [/^(?=.{4,40}$)/, "Label invalid, it should contain 3-20 alphanumeric letters and be unique!"],
    },
    imageUrl: {
        type: String,
        required: [true, 'ImageUrl is required!'],        
        match: [/^(?=.{4,40}$)/, "ImageUrl invalid, it should contain 3-20 alphanumeric letters and be unique!"],
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: 'StoreMongo',
    },
    categories: {
        type: Schema.Types.ObjectId,
        ref: 'CategoryMongo',
    },       
},{ timestamps: true })
const BillboardMongo = models.BillboardMongo || model('BillboardMongo', BillboardSchema)

export default BillboardMongo