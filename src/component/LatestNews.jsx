import Marquee from "react-fast-marquee";
import { Link } from "react-router-dom";

const LatestNews = () => {
    return (
      <div className="flex gap-2 items-center">
        <p className="bg-[#D72050] text-base-100 px-3 py-1">Latest</p>
        <Marquee pauseOnHover={true} speed={50} className="space-x-10">
          <Link to="/news">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
            quidem alias nihil et ab temporibus est voluptatem ut similique
            molestias harum soluta distinctio tempora hic, labore deleniti
            eveniet, quae beatae!
          </Link>
          <Link to="/news">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
            quidem alias nihil et ab temporibus est voluptatem ut similique
            molestias harum soluta distinctio tempora hic, labore deleniti
            eveniet, quae beatae!
          </Link>
          <Link to="/news">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
            quidem alias nihil et ab temporibus est voluptatem ut similique
            molestias harum soluta distinctio tempora hic, labore deleniti
            eveniet, quae beatae!
          </Link>
          <Link to="/news">
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsum,
            quidem alias nihil et ab temporibus est voluptatem ut similique
            molestias harum soluta distinctio tempora hic, labore deleniti
            eveniet, quae beatae!
          </Link>
        </Marquee>
      </div>
    );
};

export default LatestNews;