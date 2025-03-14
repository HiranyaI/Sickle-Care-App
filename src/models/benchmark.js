const mongoose = require('mongoose');

const healthBenchmarkSchema = new mongoose.Schema({
    benchmarkId: {
        type:String, 
        required: true
    },
    waterIntake: {
        litres:{
            type: Number,
            required: true,
        },   
    },  
    diet: { 
        type: [String], 
        required: true 
    }, 
    alcoholConsumption: {
        maxShots:{
            type:Number
        }
    },
    sleep: { 
        type: Number,
        required: true 
    }
});

//Export all within the class
module.exports = mongoose.model('Benchmark', healthBenchmarkSchema);