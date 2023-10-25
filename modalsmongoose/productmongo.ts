import { Schema, model, models } from 'mongoose'

const ProductSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'UserMongo',
    },   
    name: {
        type: String,
        required: [true, 'Name is required!'],        
        match: [/^(?=.{4,40}$)/, "Name invalid, it should contain 3-20 alphanumeric letters and be unique!"],
    },
    price: {
        type: Number,
        required: [true, 'Price is required!'],    
    },
    isFeatured: {
        type: Boolean,
        default: false,   
    },
    isArchived: {
        type: Boolean,
        default: false,   
    },  
    store: {
        type: Schema.Types.ObjectId,
        ref: 'StoreMongo',
    }, 
    categories: {
        type: Schema.Types.ObjectId,
        ref: 'CategoryMongo',
    },
    sizes: {
        type: Schema.Types.ObjectId,
        ref: 'SizeMongo',
    },
    colors: {
        type: Schema.Types.ObjectId,
        ref: 'ColorMongo',
    },
    images: {
        type: Schema.Types.ObjectId,
        ref: 'ImageMongo',
    },   
    orderItems: {
        type: Schema.Types.ObjectId,
        ref: 'OrderItemMongo',
    },   
},{ timestamps: true })
const ProductMongo = models.ProductMongo || model('ProductMongo', ProductSchema)

export default ProductMongo