import axios from "axios";
import Link from "next/link";
const Article = ({ data }) => {
  return (
    <div className="container text-center">
      <h1>{data.title}</h1>
      <p>{data.body}</p>
      <Link href="/news">
        <a>Go Back</a>
      </Link>
    </div>
  );
};

export const getStaticProps = async (context) => {
  const { data } = await axios.get(`/posts/${context.params.id}`);

  return {
    props: {
      data,
    },
  };
};

export const getStaticPaths = async () => {
  const { data } = await axios.get(`/posts`);

  const ids = data.map((item) => item.id);
  const paths = ids.map((id) => ({
    params: {
      id: id.toString(),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export default Article;
