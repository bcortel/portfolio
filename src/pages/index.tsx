import MainLayout from "../layout/main";
import { About, Introduction, Projects } from "../components/views/home";
import { Project } from "../types/projects";
import Skills from "../components/views/home/skills";
import { Logo } from "../types/logos";

type Props = {
  projects: Project[];
  logos: Logo[];
};

const Home = ({ projects, logos }: Props) => {
  return (
    <MainLayout>
      <Introduction />
      <About />
      <Projects projects={projects} />
      <Skills logos={logos} />
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
      logos: [
        {
          id: 1,
          src: "/static/images/logos/android.png",
          height: 384,
          width: 384,
        },
        {
          id: 2,
          src: "/static/images/logos/bootstrap.png",
          height: 384,
          width: 306,
        },
        {
          id: 3,
          src: "/static/images/logos/cloudinary.png",
          height: 74,
          width: 384,
        },
        {
          id: 4,
          src: "/static/images/logos/express.png",
          height: 116,
          width: 384,
        },
        {
          id: 5,
          src: "/static/images/logos/gcp.png",
          height: 256,
          width: 384,
        },
        {
          id: 6,
          src: "/static/images/logos/golang.png",
          height: 144,
          width: 384,
        },
        {
          id: 7,
          src: "/static/images/logos/java.png",
          height: 384,
          width: 384,
        },
        {
          id: 8,
          src: "/static/images/logos/javafx.png",
          height: 160,
          width: 384,
        },
        {
          id: 9,
          src: "/static/images/logos/laravel.png",
          height: 399,
          width: 384,
        },
        {
          id: 10,
          src: "/static/images/logos/mongodb.png",
          height: 240,
          width: 384,
        },
        {
          id: 11,
          src: "/static/images/logos/nodejs.png",
          height: 235,
          width: 384,
        },
        {
          id: 12,
          src: "/static/images/logos/php.png",
          height: 207,
          width: 384,
        },
        {
          id: 13,
          src: "/static/images/logos/react.png",
          height: 129,
          width: 384,
        },
        {
          id: 14,
          src: "/static/images/logos/tailwind.png",
          height: 213,
          width: 384,
        },
        {
          id: 15,
          src: "/static/images/logos/wp.png",
          height: 213,
          width: 384,
        },
        {
          id: 16,
          src: "/static/images/logos/psql.png",
          height: 213,
          width: 384,
        },
        {
          id: 17,
          src: "/static/images/logos/rn.png",
          height: 213,
          width: 384,
        },
        {
          id: 18,
          src: "/static/images/logos/nextjs.png",
          height: 213,
          width: 384,
        },
        {
          id: 19,
          src: "/static/images/logos/mysql.png",
          height: 213,
          width: 384,
        },
      ],
    },
  };
}
