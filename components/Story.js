function Story({ img, username }) {
  return (
    <div>
      <img src={img} alt="user picture" />
      <p>{username}</p>
    </div>
  );
}

export default Story;
