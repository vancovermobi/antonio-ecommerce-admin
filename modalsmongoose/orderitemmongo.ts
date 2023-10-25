import { Schema, model, models } from 'mongoose'

const OrderItemSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'UserMongo',
    },   
    order: {
        type: Schema.Types.ObjectId,
        ref: 'OrderMongo',
    },   
    products: {
        type: Schema.Types.ObjectId,
        ref: 'ProductMongo',
    },   
},{ timestamps: true })
const OrderItemMongo = models.OrderItemMongo || model('OrderItemMongo', OrderItemSchema)

export default OrderItemMongo