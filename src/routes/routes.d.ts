type SearchPageParams = {
  query: string;
  page: string;
}

type ArticlePageParams = {
  id: string;
}

type ArticlesResponse = {
  page: number;
  pageSize: number;
  resultSize: number;
  items: Array<Article>;
}

type ArticlesInfoResponse = {
  status: string,
  article?: Article,
}