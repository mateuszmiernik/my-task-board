import mongoose from 'mongoose';

const taskSchema = new mongoose.Schema({
    boardId: {
        type: mongoose.Schema.Types.ObjectId,
        ref: 'Board',
        required: true
    },
    name: { 
        type: String, 
        required: true
    },
    description: String,
    icon: String,
    status: {
        type: String,
        enum: [ 'In progress', 'Completed', 'Won\'t Do'],
        default: 'In progress'
    }
},
{
    timestamps: true
});

const Task = mongoose.model('Task', taskSchema);

export default Task;