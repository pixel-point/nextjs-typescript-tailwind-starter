import getMetadata from '@/utils/get-metadata';

const Home = () => {
  return <div className="container">Hello World</div>;
};

export default Home;

// FIXME: Add real data here
export const metadata = getMetadata({
  title: 'Home - Next.js TypeScript Tailwind Starter',
  description: 'Next.js TypeScript Tailwind Starter',
  pathname: '/',
});
