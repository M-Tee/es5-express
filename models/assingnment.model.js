const mongoose = require('mongoose')

const AssignmentSchema = new Schema(
    {
        uploaded_by: { //students name and regno
            type: String
        },
        file: {
            type: Schema.Types.Mixed,
            required: true,
        },
        uploaded_at: {
            type: Date
        }
    }
);
// await userSchema.plugin(hashing);


module.exports = mongoose.model('assingmentSchema', AssignmentSchema);
