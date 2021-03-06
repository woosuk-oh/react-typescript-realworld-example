import * as React from "react";

import Article from "../../model/IArticle";
import { Link } from "react-router-dom";

export interface ArticlePreviewProps {
  article: Article;
}

const ArticlePreview: React.FunctionComponent<ArticlePreviewProps> = ({
  article
}) => {
  return (
    <div className="article-preview">
      <div className="article-meta">
        <Link to="">
          <img src={article.author.image} alt={article.author.username} />
        </Link>
        <div className="info">
          <Link to="" className="author">
            {article.author.username}
          </Link>
          <span className="date">{article.createdAt.toLocaleDateString()}</span>
        </div>
        <button className="btn btn-outline-primary btn-sm pull-xs-right">
          <i className="ion-heart"></i> {article.favoritesCount}
        </button>
      </div>
      <Link to="" className="preview-link">
        <h1>{article.slug}</h1>
        <p>{article.description}</p>
        <span>Read more...</span>
      </Link>
    </div>
  );
};

export default ArticlePreview;
