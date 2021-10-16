import MainLayout from "../layout/main";
import { About, Introduction, Projects } from "../components/views/home";
import { ProjectProps } from "../types/projects";

const Home = ({ projects }: ProjectProps) => {
  return (
    <MainLayout>
      <Introduction />
      <About />
      <Projects projects={projects} />
    </MainLayout>
  );
};

export default Home;

export async function getStaticProps() {
  return {
    props: {
      projects: [
        {
          id: 1,
          img: "/static/images/fixedit.png",
          title: "FixedIt!",
          subTitle: "Personal Project",
          text: `A CRUD application. This can be used by shops internally to manage request queue.
          A user can create an account either as a technician or as a requestor only. They can
          manage their requests and repairs accordingly.`,
          footerText:
            "Technologies used: Nodejs, Expressjs, Bootstrap 4, Reactjs, MongoDB, Google Cloud Platform",
          href: "https://fixedit.netlify.app/",
        },
        {
          id: 2,
          img: "/static/images/quickcheck.png",
          title: "QuickCheck",
          subTitle: "School Project",
          text: `A Windows Application for teacher and Android application for students. It is a QR Code-based classroom assistance system. 
                Teachers can use this application for managing multiple classrooms (students, attendance and grades). 
                It can also help in administering Quizzes and exams in a classroom without the need for internet. 
                On the students' side, an android app is installed to serve as an "Answer sheet" when conducting an examination/quiz.`,
          footerText:
            "Technologies used: Java, JavaFX, Java for Android Development",
          href: "https://www.youtube.com/watch?v=qiWA5Dho2jY",
        },
        {
          id: 3,
          img: "/static/images/sarinv.png",
          title: "SarInventory",
          subTitle: "Personal Project, Client Demo",
          text: `A POS system for small business owners. It can record sales and manage inventory as well as show transaction history. ,
          It also uses built-in webcam/phone cam instead of a dedicated barcode/qrcode scanner for more flexibility. `,
          footerText:
            "Technologies used: PHP, Laravel, Tailwind CSS, Cloudinary, Barcode/QR Code",
          href: "https://sarinventory.000webhostapp.com/",
        },
        {
          id: 4,
          img: "/static/images/quickcheck.png",
          title: "QuickCheck",
          subTitle: "School Project",
          text: `A Windows Application for teacher and Android application for students. It is a QR Code-based classroom assistance system. 
                Teachers can use this application for managing multiple classrooms (students, attendance and grades). 
                It can also help in administering Quizzes and exams in a classroom without the need for internet. 
                On the students' side, an android app is installed to serve as an "Answer sheet" when conducting an examination/quiz.`,
          footerText:
            "Technologies used: Java, JavaFX, Java for Android Development",
          href: "https://www.youtube.com/watch?v=qiWA5Dho2jY",
        },
      ],
    },
  };
}
