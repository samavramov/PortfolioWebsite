import React from "react"
import Image from "next/image"
import Link from "next/link"
import SlideUp from "./SlideUp"
import { BsGithub, BsArrowUpRightSquare } from "react-icons/bs"

const projects = [
  {
    name: "Connections ∞",
    description:
      "Mobile app meant to resemble the popular New York Times Connections, with infinte levels. Built primarily using Dart with Flutter, as well as C++ and Ruby on the backend. Currently working on implementing APIs and adding numerous levels. Available on the app store by 2025.",
    image: "/simulator1.png",
    github: "https://github.com/samavramov/ConnectionsClone",
    link: "https://github.com/samavramov/ConnectionsClone",
    skills: [
      {
        name: "Dart",
        link: "https://dart.dev/",
        image: "/dart.svg"
      },
      {
        name: "Flutter SDK",
        link: "https://flutter.dev/",
        image: "/flutter.svg"
      },
      {
        name: "Material Design", link: "https://m3.material.io/",
        image: "/md.svg"
      },
      {
        name: "Ruby", link: "https://www.ruby-lang.org/en/",
        image: "/ruby.svg"
      },
      {
        name: "C++", link: "https://cplusplus.com/",
        image: "/C++.svg"
      },
    ],
  },
  {
    name: "Personal Website",
    description:
      "Built to showcase my projects using HTML,TSX,and CSS/Tailwind CSS for front-end development. This website is optimized for both web and mobile, and is run using Next.js with React Components",
    image: "/portfolio.png",
    github: "https://github.com/samavramov/PortfolioWebsite",
    link: "/",
    skills: [
      {
        name: "HTML",
        link: "https://html.com/",
        image: "/html.svg"
      },
      {
        name: "CSS",
        link: "https://www.w3schools.com/css/css_intro.asp/",
        image: "/css.svg"
      },
      {
        name: "Tailwind CSS", link: "https://tailwindcss.com/",
        image: "/tailwind.svg"
      },
      {
        name: "TypeScript", link: "https://www.typescriptlang.org/",
        image: "/ts.svg"
      },
      {
        name: "Next.js", link: "https://nextjs.org/",
        image: "/next.svg"
      },
      {
        name: "React", link: "https://react.dev/",
        image: "/react.svg"
      },
    ],
  },
  {
    name: "Etude Waiver Tracker",
    description:
      "Website built to track the waivers of gymnasts. The front-end was built with MUI, CSS, and HTML. The back-end was built with JS, as well as AWS DynamoDB for storage and Google Oauth 2.0 for user authentication/security. The website was made using React.",
    image: "/Etude.png",
    github: "https://github.com/samavramov/Etude-Website",
    link:"https://github.com/samavramov/Etude-Website",
    skills: [
      {
        name: "Material UI", link: "https://mui.com/",
        image: "/mui.svg"
      },
      {
        name: "CSS",
        link: "https://www.w3schools.com/css/css_intro.asp/",
        image: "/css.svg"
      },
      {
        name: "HTML",
        link: "https://html.com/",
        image: "/html.svg"
      },
      {
        name: "AWS DynamoDB", link: "https://aws.amazon.com/pm/dynamodb/?gclid=Cj0KCQjw5cOwBhCiARIsAJ5njubVsTgwlqTEpUf8GWP7kZwnJxnNFATp4ko-07GDtkMT0UxqGhO0rYwaAqb0EALw_wcB&trk=390f2f77-1064-4521-bd83-27d9213b65c9&sc_channel=ps&ef_id=Cj0KCQjw5cOwBhCiARIsAJ5njubVsTgwlqTEpUf8GWP7kZwnJxnNFATp4ko-07GDtkMT0UxqGhO0rYwaAqb0EALw_wcB:G:s&s_kwcid=AL!4422!3!651751059996!e!!g!!aws%20dynamodb!19852662209!145019198137",
        image: "/db.svg"
      },
      {
        name: "Google OAuth 2.0", link: "https://developers.google.com/identity/protocols/oauth2",
        image: "/google.svg"
      },
      {
        name: "React", link: "https://react.dev/",
        image: "/react.svg"
      },
    ],
  },

]

const ProjectsSection = () => {
  return (
    <section id="projects">
  <h1 className="my-10 text-center font-bold text-4xl align-top">
    Projects
    <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded" />
  </h1>

  <div className="flex flex-col space-y-28">
    {projects.map((project, idx) => {
      return (
        <div key={idx} className="align-top">
          <SlideUp offset="-300px 0px -300px 0px">
            <div className="flex flex-col md:flex-row md:space-x-12 align-items-start">
              <div className="md:w-1/2 flex justify-center md:justify-start">

                <Link href={project.link}>
                  <br></br>
                  <br></br>
                  <Image
                    src={project.image}
                    alt=""
                    width={1000}
                    height={1000}
                    className="rounded-xl shadow-xl hover:opacity-70"
                  />
                </Link>
              </div>
              <div className="mt-8 md:w-1/2">
                <h1 className="text-4xl font-bold mb-6">{project.name}</h1>
                <p className="text-xl leading-7 mb-4 text-neutral-600 dark:text-neutral-400">
                  {project.description}
                </p>
                <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
                  {project.skills.map((item, idx) => {
                    return (
                      <a
                        key={idx}
                        href={item.link}
                        className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold flex items-center"
                      >
                        <Image src={item.image} alt={item.name} width={25} height={25} className="mr-2" />
                        <span>{item.name}</span>
                      </a>
                    )
                  })}
                </div>
                <br />
                <div className="flex flex-row align-bottom space-x-4">
                  <Link href={project.github} target="_blank">
                    <BsGithub
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                  <Link href={project.link} target="_blank">
                    <BsArrowUpRightSquare
                      size={30}
                      className="hover:-translate-y-1 transition-transform cursor-pointer"
                    />
                  </Link>
                </div>
              </div>
            </div>
          </SlideUp>
        </div>
      )
    })}
  </div>
</section>

  )
}


export default ProjectsSection
