const StatusBar = ({ y }) => {
  // let y = props.y;
  let secline1 = "secline sec1-line";
  let secline2 = "secline sec2-line";
  let secline3 = "secline sec3-line";
  let secline4 = "secline sec4-line";
  let styleObj = {
    transform: `translateX(${y / 13}px)`,
    left: 0,
  };

  if (y >= 650) {
    styleObj = {
      transform: `translateY(${y / 20.5}px)`,
      left: "50px",
      bottom: "80.5px",
    };
  }
  if (y >= 1700) {
    styleObj = {
      transform: `translateX(-${y / 21.4}px)`,
      bottom: "-0.5px",
      left: "127px",
    };
  }
  if (y >= 2724) {
    styleObj = {
      transform: `translateY(-${y / 30}px) `,
      left: "0px",
      bottom: "-92.5px",
    };
  }
  return (
    <div className="square">
      <div
        className={secline1}
        style={{
          transform: `translateX(${y / 13}px)`,
        }}
      ></div>
      <div
        className={secline2}
        style={{
          transform: ` rotateZ(90deg) translateX(${y / 20.5}px)`,
        }}
      ></div>
      <div
        className={secline3}
        style={{
          transform: `translateX(-${y / 21.8}px)`,
        }}
      ></div>
      <div
        className={secline4}
        style={{
          transform: ` rotateZ(90deg) translateX(-${y / 25.9}px)`,
        }}
      ></div>
      <div className="small-square" style={styleObj}></div>
    </div>
  );
};

export default StatusBar;
