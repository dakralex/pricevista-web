import React, {Fragment, useRef, useState} from 'react';
import {Button} from '../input/Button.tsx';

type ArticleHeaderProps = {
  article: Article
};

export const ArticleHeader = ({
  article,
}: ArticleHeaderProps) => {
  const [editable, setEditable] = useState(false);

  const brandNameRef = useRef(null);
  const articleNameRef = useRef(null);
  const descriptionRef = useRef(null);

  const [brandName, setBrandName] = useState(article.brandName);
  const [articleName, setArticleName] = useState(article.name);
  const [description, setDescription] = useState(article.description);

  const shouldMakeEdit = (inputText: string | null): inputText is string => {
    return editable && inputText !== null && inputText.trim() !== '';
  };

  const editBrandNameHandler: React.FormEventHandler = (e) => {
    const newText = e.currentTarget.textContent;
    setBrandName(shouldMakeEdit(newText) ? newText : article.brandName);
  };

  const editArticleNameHandler: React.FormEventHandler = (e) => {
    const newText = e.currentTarget.textContent;
    setArticleName(shouldMakeEdit(newText) ? newText : article.brandName);
  };

  const editDescriptionHandler: React.FormEventHandler = (e) => {
    const newText = e.currentTarget.textContent;
    setDescription(shouldMakeEdit(newText) ? newText : article.brandName);
  };

  const editHandler = () => setEditable(true);
  const saveHandler = () => {
    setEditable(false);
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/articles/info/`;

    fetch(apiUrl, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        id: article.id,
        name: articleName === article.name ? null : articleName,
        brandName: brandName === article.brandName ? null : brandName,
        description: description === article.description ? null : description,
      }),
    }).then(res => res.json()).then(res => {
      if (res.status !== 'success') {
        throw new Error('Could not change the article information.');
      }
    }).catch(err => console.error(err));
  };

  const deleteHandler = () => {
    const apiUrl = `${import.meta.env.VITE_API_BASE_URL}/articles/info/?id=${article.id}`;

    fetch(apiUrl, {
      method: 'DELETE',
    }).then(res => res.json()).then(res => {
      if (res.status !== 'success') {
        throw new Error('Could not delete the article.');
      }
    }).catch(err => console.error(err));
  };

  return <Fragment>
    <div className="pv-article-buttons">
      <Button onClick={editable ? saveHandler : editHandler}>
        {editable ? '💾 Speichern' : '✒️ Bearbeiten'}
      </Button>
      <Button onClick={deleteHandler}>
        {'Löschen'}
      </Button>
    </div>
    <div className="pv-article-header">
      <div className="pv-article-info-box">
        <h2 className="pv-article-info-name">
            <span
                ref={brandNameRef}
                contentEditable={editable}
                className="pv-article-info-brand-name"
                onInput={editBrandNameHandler}>
              {brandName}
            </span>
          &nbsp;
          <span
              ref={articleNameRef}
              contentEditable={editable}
              className="pv-article-info-article-name"
              onInput={editArticleNameHandler}>
              {articleName}
            </span>
        </h2>
        <p className="pv-article-info-quantity">{article.articleQuantity}&nbsp;{article.articleUnit}</p>
        <p
            ref={descriptionRef}
            contentEditable={editable}
            className="pv-article-info-description"
            onInput={editDescriptionHandler}>
          {description}
        </p>
      </div>
      <div className="pv-article-info-image">
        <img
            src={article.imageUrl ?? 'https://placehold.co/500'}
            alt={article.imageUrl
                ? `${article.brandName} ${article.name} article image`
                : `Missing image for ${article.brandName} ${article.name}`
            } />
      </div>
    </div>
  </Fragment>;
};