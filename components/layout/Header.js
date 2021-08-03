import styles from "../../styles/Layout.module.css";
import Image from "next/image";
import Link from "next/link";
import NavbarImage from "../../public/vercel.svg";
import { useRouter } from "next/router";
const Header = () => {
  const router = useRouter();
  return (
    <header className={styles.navbar}>
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          <Link href="/">
            <Image src={NavbarImage} height={20} width={100} />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse "
            id="navbarSupportedContent"
          >
            <ul className="navbar-nav ms-md-auto pe-lg-5 mb-2 mb-lg-0 ">
              <li className="nav-item">
                <Link href="/">
                  <a
                    className={
                      router.pathname == "/" ? "active nav-link" : "nav-link"
                    }
                  >
                    Home
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/about">
                  <a
                    className={
                      router.pathname == "/about"
                        ? "active nav-link"
                        : "nav-link"
                    }
                  >
                    About
                  </a>
                </Link>
              </li>
              <li className="nav-item">
                <Link href="/news">
                  <a
                    className={
                      router.pathname == "/news"
                        ? "active nav-link"
                        : "nav-link"
                    }
                  >
                    News
                  </a>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
