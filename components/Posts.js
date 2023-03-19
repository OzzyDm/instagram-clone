import Post from "./Post";

function Posts() {
  const posts = [
    {
      id: "1",
      username: "spiderman",
      userImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3_XdQSkv2yXWO_Aptqjv8GqYSWv7p0ts7w&usqp=CAU",
      img: "https://insomniac.games/wp-content/uploads/2018/09/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg",
      caption: "Selfie",
    },
    {
      id: "2",
      username: "maryjane",
      userImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR9YH7CDLd9G4ED5hviEwI3G-nre0sevH6cCw&usqp=CAU",
      img: "https://static.wikia.nocookie.net/spiderman-films/images/8/85/Mary_Jane_Watson_%28Kirsten_Dunst%29.jpg/revision/latest?cb=20210601233728",
      caption: "New style",
    },
  ];
  return (
    <div>
      {posts.map((post) => (
        <Post
          key={post.id}
          id={post.id}
          username={post.username}
          userImg={post.userImg}
          img={post.img}
          caption={post.caption}
        />
      ))}
    </div>
  );
}

export default Posts;
