import FiberManualRecordRoundedIcon from "@mui/icons-material/FiberManualRecordRounded";
import InfoRoundedIcon from "@mui/icons-material/InfoRounded";
import Image from "next/image";
import TimeAgo from "timeago-react";

function Widgets({ articles }) {
  return (
    <div className="hidden xl:inline space-y-2">
      {/* News */}
      <div className="newsContainer">
        <div className="flex items-center justify-between font-bold px-2.5">
          <h4>LinkedIn News</h4>
          <InfoRoundedIcon className="h-5 w-5" />
        </div>

        {/* Container for articles */}
        <div className="space-y-1">
          {/* truncating the articles so its not long */}
          {articles.slice(0, 5).map((article) => (
            <div
              key={article.url}
              className="flex space-x-2 items-center cursor-pointer hover:bg-black/10 dark:hover:bg-black/20 px-2.5 py-1"
            >
              
              <FiberManualRecordRoundedIcon className="!h-2 !w-2" />
              
              <div>
                <h5 className="max-w-xs font-medium text-sm truncate pr-10">
                  {article.title}
                </h5>
                <TimeAgo
                  datetime={article.publishedAt}
                  className="text-sm mt-0.5 dark:text-white/75 opacity-80"
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ads */}
      <div className="adsContainer">
        <div className="relative w-full h-full">
          <Image
            src="https://rb.gy/kbfeaa"
            layout="fill"
            objectFit="contain"
            priority
          />
        </div>
      </div>
    </div>
  );
}

export default Widgets;
