function Post({ post }) {
  return (
    <div>
      <img src={post.photoUrl} alt="" />
      <p>{post.input}</p>
    </div>
  );
}

export default Post;
