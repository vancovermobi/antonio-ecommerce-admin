import { Schema, model, models } from 'mongoose'

const StoreSchema = new Schema({
    creator: {
        type: Schema.Types.ObjectId,
        ref: 'UserMongo',
    },   
    name: {
        type: String,
        required: [true, 'Name is required!'],        
        match: [/^(?=.{4,40}$)/, "Name invalid, it should contain 3-20 alphanumeric letters and be unique!"],
    },
    billboards: {
        type: Schema.Types.ObjectId,
        ref: 'BillboardMongo',
    },
    categories: {
        type: Schema.Types.ObjectId,
        ref: 'CategoryMongo',
    },
    products: {
        type: Schema.Types.ObjectId,
        ref: 'ProductMongo',
    },
    sizes: {
        type: Schema.Types.ObjectId,
        ref: 'SizeMongo',
    },
    colors: {
        type: Schema.Types.ObjectId,
        ref: 'ColorMongo',
    },
    orders: {
        type: Schema.Types.ObjectId,
        ref: 'OrderMongo',
    },   
},{ timestamps: true })

const StoreMongo = models.StoreMongo || model('StoreMongo', StoreSchema)

export default StoreMongo