import Link from "next/link";
const ArticleList = ({ article }) => {
  return (
    <div className="col-4 my-2">
      <Link href="/news/[id]" as={`/news/${article.id}`}>
        <a className="card card-body text-dark h-100 border-3 border-dark">
          <p className="fw-bold mb-1">{article.title}</p>
          <small>{article.body}</small>
        </a>
      </Link>
    </div>
  );
};

export default ArticleList;
