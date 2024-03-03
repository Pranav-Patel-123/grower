import React, { type FC } from "react";
import {
  type NotificationDataTypes,
  type TrendingArticleTypes,
  type TrendingTagsTypes,
} from "~/utils/context";
import { ArticleCard, NotificationCard, TagCard, TrendingCard } from "../card";
import { NotificationLoading } from "../loading";

interface Props {
  loading: React.ReactNode;
  articleData?: TrendingArticleTypes;
  tagsData?: TrendingTagsTypes;
  type: "TAG" | "ARTICLE" | "MINI_ARTICLES" | "NOTIFICATION";
  notificationData?: NotificationDataTypes;
  filter?: "This week" | "Any" | "This month" | "This year";
  error?: string | null;
}

const ManageData: FC<Props> = ({
  loading,
  articleData,
  tagsData,
  type,
  notificationData,
  filter,
  error = null,
}) => {
  return (
    <div className="manageData-container w-full">
      {type === "TAG" ? (
        tagsData?.isLoading ? (
          <div className="flex w-full flex-wrap gap-4 p-4">

            {Array(6)
              .fill("")
              .map((_, i) => (
                <div
                  key={i}
                  className="w-full bg-light-bg dark:bg-primary-light rounded-md border border-border-light dark:border-border md:w-[calc(100%/2-0.5rem)]"
                >
                  {loading}
                </div>
              ))}
          </div>
        ) : tagsData?.data && tagsData?.data.length > 0 && error === null ? (
          <div className="flex w-full flex-wrap gap-4 p-4">
            {tagsData.data.map((item) => {
              return (
                <div
                  key={item.id}
                  className="w-full md:w-[calc(100%/2-0.5rem)]"
                >
                  <TagCard tag={item} type={filter ?? "Any"} />
                </div>
              );
            })}
          </div>
        ) : (
          <div className="py-16">
            <p className="text-center text-lg text-gray-500 dark:text-gray-400">
              {error ?? "No Tags found!"}
            </p>
          </div>
        )
      ) : type === "ARTICLE" || type === "MINI_ARTICLES" ? (
        articleData?.isLoading ? (
          <>
            {Array(4)
              .fill("")
              .map((_, i) => (
                <div
                  key={i}
                  className="border-b border-border-light last:border-none dark:border-border"
                >
                  {loading}
                </div>
              ))}
          </>
        ) : articleData?.data && articleData?.data.length > 0 && error === null ? (
          articleData.data.map((item) => {
            return (
              <div
                key={item.id}
                className="border-b border-border-light last:border-none articleCard dark:border-border"
              >
                {type === "ARTICLE" ? (
                  <ArticleCard card={item} />
                ) : (
                  <TrendingCard
                    article={{
                      id: item.id,
                      title: item.title,
                      slug: item.slug,
                      user: {
                        id: item.user.id,
                        image: item.user.image,
                        name: item.user.name,
                        username: item.user.username,
                      },
                      likesCount: item.likesCount,
                      commentsCount: item.commentsCount,
                    }}
                    key={item.id}
                  />
                )}
              </div>
            );
          })
        ) : (
          <div className="py-16">
            <p className="text-center text-lg text-gray-500 dark:text-gray-400">
              {error ?? "No Articles found! 😢"}
            </p>
          </div>
        )
      ) : type === "NOTIFICATION" ? (
        notificationData?.isLoading ? (
          <>
            {Array(4)
              .fill("")
              .map((_, i) => (
                <div
                  className="border-b border-border-light last:border-none dark:border-border"
                  key={i}
                >
                  <NotificationLoading />
                </div>
              ))}
          </>
        ) : notificationData?.data && notificationData?.data.length > 0 && error === null ? (
          notificationData.data.map((notification) => {
            return (
              <NotificationCard
                notification={notification}
                key={notification.id}
              />
            );
          })
        ) : (
          <div className="py-16">
            <p className="text-center text-lg text-gray-500 dark:text-gray-400">
              {error ?? "No Notifications yet!"}
            </p>
          </div>
        )
      ) : null}
    </div>
  );
};

export default ManageData;
