import { Schema, model, models } from 'mongoose'

const OrderSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'UserMongo',
    },   
    isPaid: {
        type: Boolean,
        default: false,   
    },
    phone: {
        type: String,
        default: "", 
    },     
    address: {
        type: String,
        default: "", 
    },     
    store: {
        type: Schema.Types.ObjectId,
        ref: 'StoreMongo',
    },   
    orderItems: {
        type: Schema.Types.ObjectId,
        ref: 'OrderItemMongo',
    },   
},{ timestamps: true })
const OrderMongo = models.OrderMongo || model('OrderMongo', OrderSchema)

export default OrderMongo