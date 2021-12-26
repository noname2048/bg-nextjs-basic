import Layout from "../components/Layout";
import NavBar from "../components/NavBar";

export default function MyApp({ Component, pageProps }) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
