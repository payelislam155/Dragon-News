import { useLoaderData } from "react-router-dom";
import NewsCart from "../component/NewsCart";

const PageNews = () => {
 const { data: news } = useLoaderData();
    return (
      <div>
        <h1 className="font-semibold mb-3">Dragon News Home</h1>
        <p className="text-gray-400 text-sm">
          {news.length}News Found in this Category
        </p>
        <div>
          {news.map((singlenews) => (
            <NewsCart key={singlenews._id} news={singlenews}></NewsCart>
          ))}
        </div>
      </div>
    );
};

export default PageNews;