import { useEffect, useState } from "react";
import { HeaderCMP } from "../../components/header/Header";
import { NavBarMenuCMP } from "../../components/nav-bar-menu/NavBarMenu";
import { WalletWiewCMP } from "../../components/wallet-view/WalletView";
import styles from "./styles.module.css";
import { PopUpCMP } from "../../components/pop-up/PopUp";

export const MainPage = () => {
  const [isPopUpOpen, setIsPopUpOpen] = useState(false);
  const [popUpData, setPopUpData] = useState({
    waypoint: "",
    msg: "",
    desc: "",
    img: "",
  });

  const handlePopUpOpen = () => {
    setIsPopUpOpen(true);
  };

  const toggleCardBindPopup = () => {
    const isBind = localStorage.getItem("isCardBound");
    if (isBind) {
      return;
    } else {
      setPopUpData({
        waypoint: "/vtb-hack-2024/bind-card",
        msg: "Привяжите карту",
        desc: "Привяжите карту банка чтобы иметь возможность совершать покупки на бирже",
        img: "../../assets/creditCard.png",
      });
      setTimeout(handlePopUpOpen, 1500);
      // localStorage.setItem("isCardBound", "true");
    }
  };

  useEffect(() => {
    toggleCardBindPopup();
  }, []);
  return (
    <div className={styles.container + " " + "page"}>
      <HeaderCMP />
      <WalletWiewCMP />
      <div className={styles.navBarWrapper}>
        <NavBarMenuCMP />
      </div>
      <div
        className={
          styles.popUp +
          " " +
          (isPopUpOpen ? styles.popUpVisible : styles.popUpHidden)
        }
      >
        <PopUpCMP
          msg={popUpData.msg}
          waypoint={popUpData.waypoint}
          desc={popUpData.desc}
          img="https://www.vtb.ru/media-files/vtb.ru/sitepages/personal/karty/kreditnye/Vozmozhnostey_1x.png"
          setPopupState={setIsPopUpOpen}
        />
      </div>
    </div>
  );
};
