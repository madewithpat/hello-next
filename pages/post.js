import { withRouter } from "next/router";
import Layout from "../layouts";

const Content = withRouter(({ router }) => (
   <div>
      <h1>{router.query.title}</h1>
      <p>Now we're inside the Content component</p>
   </div>
));

const Page = () => (
   <Layout>
      <Content />
   </Layout>
);

export default Page;
