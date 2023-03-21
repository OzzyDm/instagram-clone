import Post from "./Post";

function Posts() {
  const posts = [
    {
      id: "1",
      username: "spiderman",
      userImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRB3_XdQSkv2yXWO_Aptqjv8GqYSWv7p0ts7w&usqp=CAU",
      img: "https://insomniac.games/wp-content/uploads/2018/09/Spider-Man_PS4_Selfie_Photo_Mode_LEGAL.jpg",
      caption: "I love NYC!",
    },
    {
      id: "2",
      username: "maryjane",
      userImg:
        "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTlokgUbcG28rFhrRJ5Odq6eAYp-372aLDq4g&usqp=CAU",
      img: "https://i0.wp.com/www.sinembargo.mx/wp-content/uploads/2021/05/maryjane2.jpeg?fit=1100%2C580&quality=80&strip=all&ssl=1",
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
