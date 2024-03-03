import { useSession } from "next-auth/react";
import { type FC } from "react";
import { SimpleArticleCard } from "~/component/card";
import { SimpleArticleCardLoading } from "~/component/loading";
import { NoArticlesUploadedError } from "~/component/miniComponent";
import { AuthorArea } from "~/pages/dev/[username]";
import { type LayoutProps } from "./Stacked";

const Grid: FC<LayoutProps> = (({ data, isLoading, author, isFetchingNextPage }) => {
  const { data: user } = useSession();

  return (
    <div className="w-full bg-light-bg dark:bg-primary">
      <AuthorArea author={author} />

      {isLoading ? (
        <div className="border-light h-[50%] min-h-[24rem] rounded-md border border-border-light bg-gray-200 shadow-md dark:border-border dark:bg-primary-light"></div>
      ) : data && data.length > 0 ? (
        <div className="border-t border-border-light dark:border-border">
          <div className="mx-auto flex max-w-[1000px] flex-wrap gap-4 px-4 py-4 sm:py-8">
            {data.map((e) => (
              <SimpleArticleCard key={e.id} article={e} />
            ))}
            {
              isLoading && (
                <>
                  <SimpleArticleCardLoading number={3} />
                  <SimpleArticleCardLoading number={3} />
                  <SimpleArticleCardLoading number={3} />
                  <SimpleArticleCardLoading number={3} />
                  <SimpleArticleCardLoading number={3} />
                  <SimpleArticleCardLoading number={3} />
                  <SimpleArticleCardLoading number={3} />
                  <SimpleArticleCardLoading number={3} />
                </>
              )
            }
            {
              isFetchingNextPage && (
                <>
                  <SimpleArticleCardLoading number={3} />
                  <SimpleArticleCardLoading number={3} />
                  <SimpleArticleCardLoading number={3} />
                  <SimpleArticleCardLoading number={3} />
                </>
              )
            }
          </div>

        </div>

      ) : (
        <NoArticlesUploadedError user={user} author={author} />
      )}
    </div>
  );
});

export default Grid;
