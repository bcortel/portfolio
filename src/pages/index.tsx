import MainLayout from "../layout/main";
import Image from "next/image";
import Head from "next/head";

const Home = () => {
  return (
    <MainLayout>
      <section>
        <div className="flex justify-center -mt-32">
          <div
            className={
              "border-8 border-white rounded-full mx-auto relative h-auto w-80 overflow-hidden"
            }
          >
            <Image
              src="/static/images/picture.jpg"
              alt="profile picture"
              layout="responsive"
              height={300}
              width={300}
            />
          </div>
        </div>
        <h1 className="w-full text-center text-xl">Butch Klein Cortel</h1>
        <div className="text-center ">
          <p>Web Developer</p>
          <p>Cavite, Ph</p>
          <div>
            <ul>
              <li>
                <a href=""></a>
              </li>
            </ul>
          </div>
        </div>
      </section>
    </MainLayout>
  );
};

export default Home;
