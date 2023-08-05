// eslint-disable-next-line react/prop-types
const Card = ({ taskTitle, taskDes, cardColor, status, startWork, id,btnName }) => {
  return (
    <>
      <div className="task-card p-1" style={{ background: cardColor }}>
        <h1>{taskTitle}</h1>
        <p>{taskDes}</p>
        <div className="d-flex space-between">
          <button>{status}</button>
          <button
            onClick={() => {
              startWork({ id });
            }}
          >
            {btnName}
          </button>
        </div>
      </div>
    </>
  );
};

export default Card;
