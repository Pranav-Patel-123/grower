import type { GetServerSideProps, NextPage } from "next";
import { ExploreMainBody, Header } from "~/component";
import MetaTags from "~/component/MetaTags";

const ExplorePage: NextPage = () => {
  return (
    <>
      <MetaTags
        title={`Explore Popular Entrepreneurial Blogs and Topics`}
        description="Explore the most popular entrepreneur blogs from the Grower community. A constantly updating list of the best minds in entreprenurial journey."
      />

      <Header />
      <ExploreMainBody />
    </>
  );
};

export default ExplorePage;

export const getServerSideProps: GetServerSideProps = async (context) => {
  const hasSession = context.req.headers.cookie?.includes(
    "next-auth.session-token",
  );

  if (
    hasSession &&
    (context.req.url === "/explore/tags-following" ||
      context.req.url === "/explore/articles-following")
  ) {
    return { props: { session: null }, redirect: { destination: "/" } };
  }

  return {
    props: {},
  };
};
