import MainLayout from "../layout/main";
import { About, Introduction, Projects } from "../components/views/home";

const Home = () => {
  return (
    <MainLayout>
      <Introduction />
      <About />
      <Projects />
    </MainLayout>
  );
};

export default Home;
