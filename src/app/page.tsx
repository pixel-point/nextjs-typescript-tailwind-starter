import getMetadata from '@/utils/get-metadata';

const Home = () => {
  return <div className="container">Hello World</div>;
};

export default Home;

export async function generateMetadata() {
  // FIXME: Add real data here
  return getMetadata({
    title: 'Home - Next.js TypeScript Tailwind Starter',
    description: 'Next.js TypeScript Tailwind Starter',
    pathname: '/',
  });
}
