import { useRef, useState } from "react";
// import CV from "../assets/Pooms.jpg";
import "./Sec5.css";
const Sec5 = () => {
  const emailRef = useRef();
  const commentRef = useRef();
  const [valid, setValid] = useState(true);
  const sendRequest = async (userReview) => {
    try {
      const res = await fetch(
        "https://happyshop-6b7db-default-rtdb.firebaseio.com/client.json",
        {
          method: "POST",
          "Content-Type": "application.json",
          body: JSON.stringify(userReview),
        }
      );
      if (!res.ok) {
        throw new Error("Submission Failed");
      }
      return null;
    } catch (e) {
      alert(e);
    }
  };

  const submitHandler = (e) => {
    e.preventDefault();
    const email = emailRef.current.value;
    const comment = commentRef.current.value;
    const isValid = email.trim().length > 8 && email.includes("@");
    setValid(isValid);
    if (isValid) {
      if (email && comment.length > 5) {
        sendRequest({ email, comment });
      } else {
        sendRequest({ email, comment: "" });
      }
      emailRef.current.value = "";
      commentRef.current.value = "";
    } else {
      return;
    }
  };
  return (
    <div className="sec5">
      {/* <a
        className="download_link"
        href={CV}
        target="_blank"
        download="poojesh_cv.png"
      >
        <button className="download_btn">DOWNLOAD RESUME</button>
        <div className="curved_arrow"></div>
        <div className="curved_arrow"></div>
      </a> */}
      <h3 className="contact_me">Contact me</h3>
      <form className="form" onSubmit={submitHandler}>
        <div className="input_box">
          <input
            placeholder="Email"
            className="email_input"
            type="text"
            ref={emailRef}
          />

          <div className="sl"></div>
          <div className="sr"></div>
        </div>
        {!valid && <p className="error__text">invalid email</p>}
        <div className="textarea_box">
          <textarea
            placeholder="Comment"
            className="comment_input"
            ref={commentRef}
          />
          <div className="slide-box2"></div>
        </div>
        <button className="btn">Send</button>
      </form>
    </div>
  );
};

export default Sec5;
