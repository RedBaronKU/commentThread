import Comments from "./Comments/Comments";

const App = () => {
  return (
    <div>
      <h1>Comments</h1>
      <Comments
        commentsUrl="http://localhost:3004/comments"
        currentUserId="1"
      />
    </div>
  );
};

export default App;