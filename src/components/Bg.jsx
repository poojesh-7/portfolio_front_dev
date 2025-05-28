import "./Bg.css";
const Bg = (props) => {
  let yVal = props.y;
  let gbClass = "gb";
  let bgclass1 = `${gbClass} grad_box1 shadow1`;
  let bgclass2 = `${gbClass} grad_box2 shadow1`;
  let bgclass3 = `${gbClass} grad_box3 shadow1`;
  let bgclass4 = `${gbClass} grad_box4 shadow1`;
  let bgclass5 = `${gbClass} gb_spec grad_box5 shadow2`;
  let bgclass6 = `${gbClass} gb_spec grad_box6 shadow2`;
  let bgclass7 = `${gbClass} gb_spec grad_box7 shadow2`;
  let bgclass8 = `${gbClass} gb_spec grad_box8 shadow2`;
  if (yVal > 592) {
    bgclass1 = `${gbClass} grad_box1 shadow3 move-20`;
    bgclass2 = `${gbClass} grad_box2 shadow3 move-40`;
    bgclass3 = `${gbClass} grad_box3 shadow3 move0`;
    bgclass4 = `${gbClass} grad_box4 shadow3 move-60`;
    bgclass5 = `${gbClass} gb_spec grad_box5 shadow4 move--60`;
    bgclass6 = `${gbClass} gb_spec grad_box6 shadow4 move0`;
    bgclass7 = `${gbClass} gb_spec grad_box7 shadow4 move--40`;
    bgclass8 = `${gbClass} gb_spec grad_box8 shadow4 move--20`;
  }
  if (yVal > 1650) {
    bgclass1 = `${gbClass} grad_box1 shadow5 move-60`;
    bgclass2 = `${gbClass} grad_box2 shadow5 move-40`;
    bgclass3 = `${gbClass} grad_box3 shadow5 move-20`;
    bgclass4 = `${gbClass} grad_box4 shadow5 move0`;
    bgclass5 = `${gbClass} gb_spec grad_box5  shadow6 move0`;
    bgclass6 = `${gbClass} gb_spec grad_box6  shadow6 move--20`;
    bgclass7 = `${gbClass} gb_spec grad_box7  shadow6 move--40`;
    bgclass8 = `${gbClass} gb_spec grad_box8  shadow6 move--60`;
  }
  if (yVal > 2672) {
    bgclass1 = `${gbClass} grad_box1 shadow7 move-40`;
    bgclass2 = `${gbClass} grad_box2 shadow7 move-20`;
    bgclass3 = `${gbClass} grad_box3 shadow7 move-60`;
    bgclass4 = `${gbClass} grad_box4 shadow7 move0`;
    bgclass5 = `${gbClass} gb_spec grad_box5  shadow8 move0`;
    bgclass6 = `${gbClass} gb_spec grad_box6  shadow8 move--60`;
    bgclass7 = `${gbClass} gb_spec grad_box7  shadow8 move--20`;
    bgclass8 = `${gbClass} gb_spec grad_box8  shadow8 move--40`;
  }
  if (yVal > 4000) {
    bgclass1 = `${gbClass} grad_box1 shadow9 move-40`;
    bgclass2 = `${gbClass} grad_box2 shadow9 move-60`;
    bgclass3 = `${gbClass} grad_box3 shadow9 move0`;
    bgclass4 = `${gbClass} grad_box4 shadow9 move-20`;
    bgclass5 = `${gbClass} gb_spec grad_box5 shadow10 move--20`;
    bgclass6 = `${gbClass} gb_spec grad_box6 shadow10 move0`;
    bgclass7 = `${gbClass} gb_spec grad_box7 shadow10 move--60`;
    bgclass8 = `${gbClass} gb_spec grad_box8 shadow10 move--40`;
  }
  return (
    <div className="bg">
      <div className="left_box">
        <div className={bgclass1}></div>
        <div className={bgclass2}></div>
        <div className={bgclass3}></div>
        <div className={bgclass4}></div>
      </div>
      <div className="left_box">
        <div className={bgclass5}></div>
        <div className={bgclass6}></div>
        <div className={bgclass7}></div>
        <div className={bgclass8}></div>
      </div>
    </div>
  );
};

export default Bg;
