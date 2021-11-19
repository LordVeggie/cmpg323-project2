const mongoose = require('mongoose');

const imageSchema = new mongoose.Schema
({
    name:
    {
        type: String,
        required: true
    },
    imagUrl:
    {
        type: String,
        required: true
    },
    GeoLocation:
    {
        type: String,
        required: true
    },
    CaptuerBy:
    {
        type: String,
        required: true
    },
    CaptureDate:
    {
        type: String,
        required: true
    },
    album:
    {
        type: String,
        required: true
    },
    tags:
    [{
        type: String
    }]    
})

const Image = mongoose.model('Image',imageSchema);

module.exports = Image;
