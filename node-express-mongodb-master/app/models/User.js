

module.exports = mongoose => {
const userSchema = mongoose.Schema({

    title: String,
    description: String,
    published: Boolean


}, { timestamps: true });


userSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject();
    object.id = _id;
    return object;
  });

  const User = mongoose.model('User', userSchema)
  return User;
};

