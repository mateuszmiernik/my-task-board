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
        enum: [ 'todo', 'inprogress', 'completed', 'wontdo'],
        default: 'inprogress'
    }
},
{
    timestamps: true
});

taskSchema.index( { boardId: 1, name: 1 }, { unique: true });

const Task = mongoose.model('Task', taskSchema);

export default Task;