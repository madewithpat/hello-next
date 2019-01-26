import Link from "next/link";
import Layout from "../layouts";

const PostLink = ({ id, title }) => (
   <li>
      <Link as={`/p/${id}`} href={`/post?title=${title}`}>
         <a>{title}</a>
      </Link>
   </li>
);

const Index = () => (
   <Layout>
      <h1>A Sweet Blog</h1>
      <ul>
         <PostLink id="hello-nextjs" title="Hello Next.js" />
         <PostLink id="learn-nextjs" title="Learn Next.js" />
         <PostLink id="deploying-with-zeit" title="Deploying with Zeit" />
      </ul>
   </Layout>
);

export default Index;
