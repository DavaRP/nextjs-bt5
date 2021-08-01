import axios from "axios";
import Meta from "../components/Head";
import styles from "../styles/Home.module.css";
export default function Home() {
  return (
    <>
      <Meta
        title="Bootstrap 5 + Next js Boiler Plate | davarp.id "
        description="Bootstrap 5 + Next js Boiler Plate inspired by tranversy media Course"
        keywords="next js, bootstrap 5, boilerplate"
      />
      <div className="container">
        <h1 className="mb-0">Home</h1>
      </div>
    </>
  );
}
