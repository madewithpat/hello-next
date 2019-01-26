import Link from "next/link";
import Layout from "../layouts";

const PostLink = ({ title }) => (
   <li>
      <Link href={`/post?title=${title}`}>
         <a>{title}</a>
      </Link>
   </li>
);

const Index = () => (
   <Layout>
      <h1>A Sweet Blog</h1>
      <ul>
         <PostLink title="Hello Next.js" />
         <PostLink title="Learn Next.js" />
         <PostLink title="Deploying with Zeit" />
      </ul>
   </Layout>
);

export default Index;
