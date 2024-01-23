import './ArticlePage.css';
import {Await, useLoaderData, useNavigate} from 'react-router-dom';
import {Suspense} from 'react';
import {InfinitySpin} from 'react-loader-spinner';
import {ArticleHeader} from '../../components/article/ArticleHeader.tsx';
import {Button} from '../../components/input/Button.tsx';

const ArticlePage = () => {
  // @ts-expect-error TODO Find out how to type React-Router loader data
  const {data} = useLoaderData();
  const navigate = useNavigate();

  const articleResolveHandler = ({status, article}: ArticlesInfoResponse) => {
    console.log(status, article);

    if (status === 'error' || article === undefined) {
      return <div className="pv-article-container">
        <h2>Nicht gefunden</h2>
        <p>Es tut mir leid, aber dieser Artikel konnte nicht gefunden
           werden.</p>
      </div>;
    } else {
      return <ArticleHeader
          article={article}
      />;
    }
  };

  return (
      <div className="pv-article-container">
        <div className="pv-article-buttons">
          <Button onClick={() => navigate(-1)}>{'\u2039 Zurück'}</Button>
        </div>
        {/* TODO Refactor hardcoded color */}
        <Suspense fallback={<div className="pv-article-spinner">
          <InfinitySpin color="#f56476" />
        </div>}>
          <Await resolve={data}>
            {articleResolveHandler}
          </Await>
        </Suspense>
      </div>
  );
};

export default ArticlePage;
