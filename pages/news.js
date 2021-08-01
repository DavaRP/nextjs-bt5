import axios from "axios";
import Meta from "../components/Head";
import ArticleList from "../components/ArticleList";
export default function News({ data }) {
  console.log(data);
  return (
    <>
      <Meta
        title="Bootstrap 5 + Next js Boiler Plate | davarp.id "
        description="Bootstrap 5 + Next js Boiler Plate inspired by tranversy media Course"
        keywords="next js, bootstrap 5, boilerplate"
      />
      <div className="container">
        <div className="row">
          {data.map((item) => (
            <ArticleList key={item.id} article={item} />
          ))}
        </div>
      </div>
    </>
  );
}

export const getStaticProps = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/posts?_limit=6"
  );
  return {
    props: {
      data,
    },
  };
};
