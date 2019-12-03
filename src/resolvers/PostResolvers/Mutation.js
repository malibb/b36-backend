const { createPost, updatePost, deletePost } = require('../../services/PostService');
const { getOneAuthor } = require('../../services/AuthorService');
const storage = require('../../utils/storage');
publicacion/234567865432456

const data_ = {
    comentario : {
        texto,
    },
    idPublicacion,
}


const createNewComentario = async ( _, { data }, { userAuth }) => {
    data.comentario = {
        ...data.comentario,
        author: userAuth._id
    }
    const publicacion = await getPublicacionById(idPublicacion);
    const comentario = await createComentario(data.comentario, user._id);
    publicacion.comentarios.push(comentario);
    publicacion.noComentarios += 1;
    publicacion.save();
    return cometario;
};

const createPublicacion = async (_, {data},{userAuth})=> {
    const publicacion = await createNewPublicacion(userAuth._id, data);
}

const updateOnePost = async (_, { id, data }, { user }) => {
    data.author = user._id;
    if (data.cover) {
        const {
            createReadStream
        } = await data.cover;
        const stream = createReadStream();
        const image = await storage({
            stream
        });
        console.log(image);
        data = {
            ...data,
            cover: image.url,
        };
    }
    const post = await updatePost(id, data);
    if(!post) throw new Error('Post not exist');
    return post;
};

const deleteOnePost = async (_, { id }) => {
    const post = await deletePost(id);
    if (!post) throw new Error('Post not exist');
    return 'Post deleted';
};

module.exports = {
    createNewPost,
    updateOnePost,
    deleteOnePost
};
