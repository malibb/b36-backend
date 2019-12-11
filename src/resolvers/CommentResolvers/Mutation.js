/** Model
 * Comment{
 *  content:String, post, author, timestamps
 * }
 * **/
const createNewComment = async (_, { data }, { userAuth }) => {
    const dataComplete = {
        ...data, // {content: "Contenido post", post: "13245465742fdrer"}
        author: userAuth._id
    };
    const comment = await createComment(dataComplete);
    const post = await getPostById(data.post);
    post.comments.push(comment._id);
    post.save();
    userAuth.comments.push(comment._id);
    userAuth.save();
    return comment;
};
/* 
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
}; */