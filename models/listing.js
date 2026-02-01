const mongoose = require("mongoose");
const Review = require("./review.js");
const Schema = mongoose.Schema

const listingSchema = new Schema({
    title: {
        type: String,
        required: true
    },
    description: {
        type: String
    },
    image: {
        url: {
        type: String,
        default: "https://images.unsplash.com/photo-1505691938895-1758d7feb511"
    },
    filename: {
        type: String,
        default: "default-image"
    }
    },
    price: {
        type: Number
    },
    location: {
        type: String
    },
    country: {
        type: String
    },
    reviews: [
        {
            type: Schema.Types.ObjectId,
            ref: "Review"
        }
    ],
    owner: {
        type: Schema.Types.ObjectId,
        ref: "User"
    },
    // models/listing.js
category: {
  type: String,
  enum: [
    "mountain",
    "pool",
    "beach",
    "city",
    "nature",
    "desert",
    "farm"
  ],
  required: true
}

})

listingSchema.post("findOneAndDelete", async (listing) => {
    if(listing) {
        await Review.deleteMany({_id: {$in: listing.reviews}});   
    }
})

const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;