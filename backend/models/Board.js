import mongoose from 'mongoose';

const boardSchema = new mongoose.Schema({
    name: { type: String, required: true},
    description: String,
    tasks: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Task'}],
},
{
    timestamps: true,
});

const Board = mongoose.model('Board', boardSchema);

export default Board;