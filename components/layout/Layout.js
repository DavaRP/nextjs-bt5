import styles from "../../styles/Layout.module.css";
import HeadComponent from "../Head";
import Header from "./Header";
import FooterComponent from "../layout/Footer";
const Layout = ({ children }) => {
  return (
    <>
      <HeadComponent />
      <Header />
      <div className={styles.wrapper}>
        <main>{children}</main>
      </div>
      <FooterComponent />
    </>
  );
};

export default Layout;
