const Comments = ({ data }) => {
  return (
    <div className="border-2 border-sky-200 md:mt-3 lg:mt-20 rounded-2xl h-fit">
      {data?.length > 0 &&
        data.map((comment) => <div key={comment.id}>Hello</div>)}
    </div>
  );
};

export default Comments;
