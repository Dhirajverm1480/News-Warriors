import axios from "axios";
import { createContext, useEffect, useState, type ReactNode } from "react";

export const api_uri = import.meta.env.VITE_API_URL;

type Article = {
  title: string;
  description: string;
  url: string;
  urlToImage?: string;
};

type NewsContextType = {
    articles: Article[];
};

export const NewsContext = createContext<NewsContextType | null>(null);

type Props = {
  children: ReactNode;
};

const NewsContextProvider = ({ children }: Props) => {
  const [articles, setArticles] = useState<Article[]>([]);

  const handleFetchArticles = async () => {
    try {
      const response = await axios.get(api_uri);
      setArticles(response.data.articles || []);
    } catch (error) {
      console.log("Articles Error : ", error);
    }
  };

  useEffect(() => {
    handleFetchArticles()
  },[])
  const value: NewsContextType = {
    articles,
  };

  return <NewsContext.Provider value={value}>{children}</NewsContext.Provider>;
};

export default NewsContextProvider;
