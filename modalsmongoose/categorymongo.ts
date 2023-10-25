import { Schema, model, models } from 'mongoose'

const CategorySchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'UserMongo',
    },   
    name: {
        type: String,
        required: [true, 'Name is required!'],        
        match: [/^(?=.{4,40}$)/, "Name invalid, it should contain 3-20 alphanumeric letters and be unique!"],
    },
    store: {
        type: Schema.Types.ObjectId,
        ref: 'StoreMongo',
    },
    billboards: {
        type: Schema.Types.ObjectId,
        ref: 'BillboardMongo',
    },   
    products: {
        type: Schema.Types.ObjectId,
        ref: 'ProductMongo',
    },
},{ timestamps: true })
const CategoryMongo = models.CategoryMongo || model('CategoryMongo', CategorySchema)

export default CategoryMongo