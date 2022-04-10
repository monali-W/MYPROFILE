// import marbleTheoryImg from "../images/project-marbletheory.png";
// import marbleTheoryVid from "../images/videos/marbletheory.mp4";
// import ssPrintsPlusImg from "../images/project-ssprintsplus.png";
// import ssPrintsPlusVid from "../images/videos/ssprints.mp4";
// import greyAreaServicesImg from "../images/project-greyarea.png";
import homePage from "../images/homePage.png";
import giftCard from "../images/giftCard.png";
import giftCardAdd from "../images/giftCardAdd.png";
import loginGiftCard from "../images/loginGiftCard.png";
import nucampsite1 from "../images/nucampsite1.png";
import nucampsite2 from "../images/nucampsite2.png";
import nucampsite3 from "../images/nucampsite3.png";
// import jobsAppVid from "../images/videos/jobsapp.mp4";
// import upNextImg from "../images/project-up-next-app.png";
// import upNextVid from "../images/videos/upnext.mp4";

export const PROJECTS = [
  {
    id: "project1",
    carouselId: "carousel1",
    carouseltarget: "#carousel1",

    name: "Gift Card Wallet",
    description:
      "This React-based application allows users to look for various types of campsites. Where It interfaces with both the  (Open Movie Database) API to display the desired information for the user and makes use of local storage for data persistence between sessions. I designed all UI components to be fully responsive through the use of custom CSS and flexbox. ",
    image: homePage,
    image1: giftCard,
    image2: giftCardAdd,
    image3: loginGiftCard,
    // video: upNextVid,
    github: "https://github.com/monali-W/nucampsite",
    demo: "https://github.com/monali-W/nucampsite"
  },

  {
    id: "project2",
    carouselId: "carousel2",
    carouseltarget: "#carousel2",
    name: "Nucampsite",
    description:
      "  I proceeded to build this website using React, Bootstrap (via the ReactStrap library), and custom CSS. ",
    image: nucampsite1,
    image1: nucampsite2,
    image2: nucampsite3,
    image3: nucampsite2
    // video: greyAreaServicesVid,
  }

  // {
  //   id: "project3",
  //   name: "J.O.B.S. - Job Search Tracker",
  //   description:
  //     "This application affords the user a place to keep track of all potential employment opportunities they have found during their search. Users are able to create new job entries and update those entries based on where they are in the application process or whether the employer has extended an offer.  I was able to utilize the user's web browser local storage to implement data persistence after the browser has been refreshed or reloaded.",
  //   // image: jobsAppImg,
  //   // video: jobsAppVid,
  //   github: "https://github.com/rscole87/job-search-app",
  //   demo: "https://rsc-jobs-app.netlify.app"
  // },

  // {
  //   id: "project4",
  //   name: "SS Prints-Plus",
  //   description:
  //     "SS Prints-Plus is a local small business that did not have any existing web presence. The owner was looking to obtain a website to send prospective clients as well as receive order inquiries via a submission form. I was commissioned to design and build this website to meet their needs. Built using HTML, CSS, and vanilla JavaScript, this website also leverages the use of Bootstrap slider and modal components.",
  //   // image: ssPrintsPlusImg,
  //   // video: ssPrintsPlusVid,
  //   github: "https://github.com/rscole87/ssprintsplus_website_bootstrap",
  //   demo: "https://www.ssprintsplus.com"
  // },

  // {
  //   id: "project5",
  //   name: "Marble Theory Design",
  //   description:
  //     "Marble Theory Design is local graphic design and branding firm which was in need of a landing page for new clients. As a member of the co-founding team, I was tasked with designing and building this website. My tools of choice for this website were React, custom CSS, and Bootstrap for select built-in components and implementation of the layout grid system..",
  //   // image: marbleTheoryImg,
  //   // video: marbleTheoryVid,
  //   github: "https://github.com/rscole87/mt_website_react_v2",
  //   demo: "https://www.marbletheory.com"
  // }
];
