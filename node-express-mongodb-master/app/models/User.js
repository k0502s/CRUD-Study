module.exports = mongoose => {
const userSchema = mongoose.Schema({

    title: String,
    description: String,
    published: Boolean


}, { timestamps: true }); //timestamps가 true일때 발동(Client에서 처리)


//프론트엔드 쪽에서는 서버 데이터 키값 _id가 아닌 id가 필요하므로 재정의해줌
userSchema.method("toJSON", function() {
    const { __v, _id, ...object } = this.toObject(); //?
    object.id = _id;
    return object;
  });

  const User = mongoose.model('User', userSchema)
  return User;
};

