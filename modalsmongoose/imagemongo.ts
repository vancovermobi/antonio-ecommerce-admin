import { Schema, model, models } from 'mongoose'

const ImageSchema = new Schema({
    userId: {
        type: Schema.Types.ObjectId,
        ref: 'UserMongo',
    }, 
    name: {
        type: String,
    },
    products: {
        type: Schema.Types.ObjectId,
        ref: 'ProductMongo',
    },   
},{ timestamps: true })
const ImageMongo = models.ImageMongo || model( 'ImageMongo', ImageSchema)

export default ImageMongo