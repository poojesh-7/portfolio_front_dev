import { useState } from "react";
import "./Sec4.css";
/*
https://i.ibb.co/c3mb8sY/Smart-Select-20230910-221002-Chrome.webp
https://i.ibb.co/Y2rXbx8/Smart-Select-20230910-220902-Chrome.webp
https://i.ibb.co/q16Dv2R/Smart-Select-20230910-220837-Chrome.webp
*/
const classNames = [
  {
    projectName: "User Management",
    imageLink: "https://i.ibb.co/qP5R0sS/Screenshot-2025-04-30-223418.png",
    sideClass1: "first-one side1",
    sideClass2: "first-one  side2",
    img1Class: "first-one type1",
    img2Class: "first-one type2",
    img3Class: "first-one  type3",
    img4Class: "first-one  type4",
    imageBoxClass: "image-box1",
    link: "https://usermanageapp.netlify.app/",
    description:
      "Developed a responsive landing page with user authentication flows designed for employees and admins. Created an intuitive admin interface for managing employee records, focusing on usability and seamless user experience. Built using React.js with attention to responsive design and interactive frontend features.",
  },
  {
    projectName: "Shopping website",
    imageLink: "https://i.ibb.co/wChqj1B/ecommerce.png",
    sideClass1: "first-one side1",
    sideClass2: "first-one  side2",
    img1Class: "first-one type1",
    img2Class: "first-one type2",
    img3Class: "first-one  type3",
    img4Class: "first-one  type4",
    imageBoxClass: "image-box1",
    specialClass: "last_desc",
    link: "https://poomsecommerce.netlify.app",
    description:
      "A responsive eCommerce website built with React.js, featuring favorites, shopping cart, and login interface. Utilizes Redux for efficient state management across components. Designed to simulate a complete eCommerce experience with smooth UI/UX, entirely on the frontend.",
    // link: "https://64fc73ac5e5dc3632c7bbe31--imaginative-gingersnap-05a6fb.netlify.app/",
  },

  // {
  //   projectName: "Travel Plan Website",
  //   imageLink: "https://i.ibb.co/wChqj1B/ecommerce.png",
  //   sideClass1: "fourth-one side7",
  //   sideClass2: "fourth-one side8",
  //   img1Class: "fourth-one type13",
  //   img2Class: "fourth-one type14",
  //   img3Class: "fourth-one type15",
  //   img4Class: "fourth-one type16",
  //   imageBoxClass: "image-box3",
  //   link: "https://64fc1023a6f3c42cb30768d8--stately-vacherin-0f53d9.netlify.app/",
  // },
  //<img src="https://i.ibb.co/qP5R0sS/Screenshot-2025-04-30-223418.png" alt="Screenshot-2025-04-30-223418" border="0">

  {
    projectName: "Blogs Website",
    imageLink: "https://i.ibb.co/QMtgw9y/blogs.webp",

    sideClass1: "first-one side1",
    sideClass2: "first-one  side2",
    img1Class: "first-one type1",
    img2Class: "first-one type2",
    img3Class: "first-one  type3",
    img4Class: "first-one  type4",
    imageBoxClass: "image-box1",
    // specialClass: "last_desc",
    link: "https://64fc156b07d1232fd9244d54--snazzy-crepe-ff6ac5.netlify.app/",
    description:
      "A blogging interface built with React.js, allowing users to create blogs, comment on posts, and interact through a login interface. Designed with a focus on smooth user experience and component-based architecture. Simulates core blog platform functionality entirely on the frontend.",
  },
];

const Sec4 = () => {
  const [show1, setShow1] = useState("");
  const [show2, setShow2] = useState("");
  const [show3, setShow3] = useState("");
  // document.querySelectorAll(".project_desc").style.transform =
  //   "translateY(-100%) translateX(-400px)";
  const descFnOpen = (index) => {
    if (index === 0) {
      setShow1("show_desc1");
    } else if (index === 1) {
      setShow2("show_desc2");
    } else {
      setShow3("show_desc3");
    }
  };
  const descFnCLose = (index) => {
    if (index === 0) {
      setShow1("");
    } else if (index === 1) {
      setShow2("");
    } else {
      setShow3("");
    }
  };
  const display = classNames.map((classNameObj, index) => (
    <div className="project_cover" key={index}>
      <div onPointerEnter={descFnOpen.bind(null, index)}>
        <h2 className="project-name">{classNameObj.projectName}</h2>
        <div className="image_holder">
          <a className="app-link" href={classNameObj.link} target="__blank">
            <div className={classNameObj.imageBoxClass}>
              <img
                src={classNameObj.imageLink}
                alt={classNameObj.projectName}
                className={`image ${classNameObj.img1Class}`}
              />
              <img
                src={classNameObj.imageLink}
                alt={classNameObj.projectName}
                className={`image ${classNameObj.img2Class}`}
              />
              <img
                src={classNameObj.imageLink}
                alt={classNameObj.projectName}
                className={`image ${classNameObj.img3Class}`}
              />
              <img
                src={classNameObj.imageLink}
                alt={classNameObj.projectName}
                className={`image ${classNameObj.img4Class}`}
              />
            </div>
          </a>
        </div>
      </div>
      <div
        className={`project_desc ${classNameObj.specialClass ?? ""} ${
          index === 0 ? show1 : index === 1 ? show2 : show3
        }`}
      >
        <p>{classNameObj.description}</p>
        <a className="app-link" href={classNameObj.link} target="__blank">
          <button className="project_view">View</button>
        </a>
      </div>
    </div>
  ));
  return (
    <div className="sec4">
      <div className="clp1"></div>
      <div className="clp2"></div>
      <div className="clp3"></div>
      <h1 className="project-text">Projects</h1>
      <div className="images_sec">{display}</div>
    </div>
  );
};

export default Sec4;
