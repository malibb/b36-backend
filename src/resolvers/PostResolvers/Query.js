const { getAllPosts, getOnePost} = require('../../services/PostService');

const getPosts = async () => {
    const posts = await getAllPosts();
    return posts;
};

const getSinglePost = async (_, { id }) => {
    const post = await getOnePost(id);
    if(!post) throw new Error('Post not exist');
    return post;
};

getResetPassword(_ ,{ email}){
    user = getUserByEmail(email)
    sendEmail(user)
}
module.exports = {
    getPosts,
    getSinglePost
};


//Otro archivo
conexion API 

const sendEmail = (user) =>{
    API.methoddqueEnviEMail(email: email)
}

module.exports = sendEmail