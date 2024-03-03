import { TrendingUp } from "lucide-react";
import { type FC } from "react";
import { FilterTimeOption } from "~/hooks/useFilter";
import { api } from "~/utils/api";
import { asideItems, HashnodeSocials } from "~/utils/constants";
import { type TrendingTagsTypes } from "~/utils/context";
import { TrendingNavigation } from "../card";
import { TrendingTextLoading } from "../loading";
import { Divider } from "../miniComponent";
import AsideNavigation from "./AsideNavigation";

const Aside = () => {
  const { data: tagsData, isLoading } = api.tags.getTrendingTags.useQuery(
    {
      variant: FilterTimeOption.any,
      limit: 6,
    },
    {
      refetchOnWindowFocus: false,
      retry: 0,
    }
  );

  return (
    <div className="container-aside relative hidden min-h-[100dvh] py-4 lg:block">
      <aside className="sticky left-0 top-[5.5rem] h-fit w-full rounded-md border border-border-light bg-white py-2 dark:border-border dark:bg-primary">
        <Navigations />
        <Divider />
        <TrendingComponent
          trendingItems={{ data: tagsData, isLoading: isLoading }}
        />

        <SocialHandles />

        <div className="w-4/12 px-4">
          <Divider />
        </div>

        <div className="p-4">
          <span className="text-sm text-gray-700 dark:text-text-primary">
            @ {new Date().getFullYear()} Grower
          </span>
        </div>
      </aside>
    </div>
  );
};

export default Aside;

const Navigations = () => {
  return (
    <div className="pb-2">
      {asideItems.map((item, index) => {
        return item.type !== "link" ? (
          <AsideNavigation key={index} item={item} />
        ) : (
          <AsideNavigation item={item} key={index} />
        );
      })}
    </div>
  );
};

const TrendingComponent: FC<{
  trendingItems: TrendingTagsTypes;
}> = ({ trendingItems }) => {
  return (
    <div className="px-4 py-3">
      <div className="mb-2 flex items-center justify-between">
        <h1 className="mb-2 text-sm font-semibold dark:text-text-primary ">
          Trending tags
        </h1>
        <span>
          <TrendingUp className="h-4 w-4 stroke-black dark:stroke-text-primary" />
        </span>
      </div>

      {trendingItems.isLoading ? (
        <>
          <TrendingTextLoading />
          <TrendingTextLoading />
          <TrendingTextLoading />
          <TrendingTextLoading />
        </>
      ) : trendingItems.data && trendingItems.data.length > 0 ? (
        trendingItems.data.map((item) => (
          <TrendingNavigation key={item.id} item={item} />
        ))
      ) : (
        <div className="flex h-24 items-center justify-center">
          <p className="text-sm text-gray-700 dark:text-text-primary">
            No trending tags
          </p>
        </div>
      )}
    </div>
  );
};

const SocialHandles = () => {
  return (
    <ul className="flex flex-wrap gap-2 px-4 pb-4">
      {HashnodeSocials.map((item, index) => (
        <li key={index}>
          <a
            target="_blank"
            aria-label={`Follow us on ${item.name}`}
            title={`Follow us on ${item.name}`}
            className={`btn-social-icon flex h-8 w-8 items-center justify-center transition-colors ${item.name === "Twitter"
              ? "hover:bg-[#1da1f2]"
              : item.name === "Discord"
                ? "hover:bg-[#7289da]"
                : item.name === "Github"
                  ? "github hover:bg-[#2c3646]"
                  : item.name === "Grower"
                    ? "hover:bg-secondary"
                    : ""
              }`}
            href={`${item.link}`}
          >
            {item.icon}
          </a>
        </li>
      ))}
    </ul>
  );
};
