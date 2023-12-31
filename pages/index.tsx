/* eslint-disable @next/next/no-img-element */
import About from "@/components/About";
import ContactMe from "@/components/ContactMe";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import WorkExperience from "@/components/WorkExperience";
import { Image } from "next/dist/client/image-component";
import  logo  from "../public/amenlogorouneded.png"
import { Experience, Project, Skill, Social, PageInfo } from "@/typings";
import { fetchExperiences } from "@/utils/fetchExperience";
import { fetchPageInfo } from "@/utils/fetchPageInfo";
import { fetchProjects } from "@/utils/fetchProjects";
import { fetchSkills } from "@/utils/fetchSkills";
import { fetchSocial } from "@/utils/fetchSocials";
import { GetStaticProps } from "next";
import Head from "next/head";
import Link from "next/link";

type Props = { 
  pageInfo: PageInfo;
  experiences: Experience[];
  skills: Skill[];
  projects: Project[]
  socials: Social[];
} 

const Home = ({pageInfo, experiences, skills, projects, socials} : Props) => {
  return (
    <div className="bg-[rgb(36,36,36)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0 scrollbar scrollbar-gray-400/20 scrollbar-thumb-[#F7AB0A]/80">
      <Head>
        <link rel="shortcut icon" href="../public/favicon.ico" />
        <title>Amen portfolio</title>
      </Head>

      {/* header*/}
      <Header socials={socials} />

      {/* hero*/}
      <section id="hero" className="snap-start">
        <Hero pageInfo={pageInfo} />
      </section>

      {/* about*/}
      <section id="about" className="snap-center">
        <About pageInfo={pageInfo} />
      </section>
      {/* experience*/}
      <section id="experience" className="snap-center">
        <WorkExperience experiences={experiences} />
      </section>
      {/* skills*/}
      <section id="skills" className="snap-start">
        <Skills skills={skills} />
      </section>
      {/* projects*/}
      <section id="projects" className="snap-start">
        <Projects projects={projects} />
      </section>

      {/* contact me */}
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
      <Link href="#hero">
        <footer className="sticky bottom-5 w-full cursor-pointer">
          <div className="flex items-center justify-center">
            <Image
              className="w-10 h-10 rounded-full filter grayscale hover:grayscale-0 cursor-pointer"
              src={logo}
              alt="logo"
            />
          </div>
        </footer>
      </Link>
    </div>
  );
}
export default Home;

export const getStaticProps: GetStaticProps<Props> = async () => {
  const pageInfo: PageInfo = await fetchPageInfo();
  const experiences: Experience[] = await fetchExperiences();
  const skills: Skill[] = await fetchSkills();
  const projects: Project[] = await fetchProjects();
  const socials: Social[] = await fetchSocial();

  return {
    props: {
      pageInfo,
      experiences,
      skills,
      projects,
      socials

    },

    revalidate: 10,
  }

}