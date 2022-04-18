import homePage from "../images/homePage.png";
import giftCard from "../images/giftCard.png";
import giftCardAdd from "../images/giftCardAdd.png";
import loginGiftCard from "../images/loginGiftCard.png";
import nucampsite1 from "../images/nucampsite1.png";
import nucampsite2 from "../images/nucampsite2.png";
import nucampsite3 from "../images/nucampsite3.png";
import giftCardWalletVideo from "../images/giftCardWalletVideo.mp4";
import nucampVideo from "../images/nucampVideo.mp4";

export const PROJECTS = [
  {
    id: "project1",
    carouselId: "carousel1",
    carouseltarget: "#carousel1",

    name: "Gift Card Wallet",
    description:
      "This React-based application allows to add multiple gift card in gift card wallet, buy or sell your gift cards. ",
    image: homePage,
    video: giftCardWalletVideo,
    github: "https://github.com/monali-W/giftcardwallet"
  },

  {
    id: "project2",
    carouselId: "carousel2",
    carouseltarget: "#carousel2",
    name: "Campsite",
    description:
      "This website allows to reserve, cancel and search campsite to campers. And provides better campground view with multiple images, feedback and provide comments. This is a react based single page aplication using botstrap, css, javascript.",
    image: nucampsite1,
    video: nucampVideo,
    github: "https://github.com/monali-W/nucampsite"
  }
];
