// eslint-disable-next-line react/prop-types
const Card = ({taskTitle, taskDes, cardColor, status, startWork, id, btnName, imgsrc}) => {
  return (
    <>
      <div className="task-card p-1" style={{ background: cardColor }}>
        <div className="card-img">
          <img src={imgsrc} alt="avater" />
        </div>
        <div className="card-content p-1 ">
          <h1>{taskTitle}</h1>
          <p>{taskDes}</p>
          <div className="d-flex space-between mt-1">
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
      </div>
    </>
  );
};

export default Card;
