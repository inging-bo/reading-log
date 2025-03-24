import Header from "../components/layout/Header.tsx";
import LeftPage from "../components/layout/LeftPage.tsx";
import RightPage from "../components/layout/RightPage.tsx";

export default function Main() {
  return (
    <section>
      <Header />
      <article>
        <LeftPage />
        <RightPage />
      </article>
    </section>
  );
}
