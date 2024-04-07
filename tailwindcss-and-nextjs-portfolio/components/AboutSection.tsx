"use client"
import React from "react"
import Image from "next/image"
import { Link } from "react-scroll";
import { HiArrowDown } from "react-icons/hi"



function downloadPdf() {
  const link = document.createElement('a');
  link.href = '/resume.pdf';
  link.download = 'resume.pdf';
  document.body.appendChild(link);
  link.click();
  document.body.removeChild(link);
}

const skills = [
  {
    skill: "HTML",
    link: "https://html.com/",
    image: "/html.svg"
  },
  {
    skill: "CSS",
    link: "https://www.w3schools.com/css/css_intro.asp/",
    image: "/css.svg"
  },
  {
    skill: "JavaScript", link: "https://www.javascript.com/",
    image: "/javascript.svg"
  },
  {
    skill: "TypeScript", link: "https://www.typescriptlang.org/",
    image: "/ts.svg"
  },

  {
    skill: "React", link: "https://react.dev/",
    image: "/react.svg"
  },
  {
    skill: "Next.js", link: "https://nextjs.org/",
    image: "/next.svg"
  },
  {
    skill: "Tailwind CSS", link: "https://tailwindcss.com/",
    image: "/tailwind.svg"
  },
  {
    skill: "Material UI", link: "https://mui.com/",
    image: "/mui.svg"
  },

]
const backend = [

  {
    skill: "Python", link: "https://www.python.org/",
    image: "/python.svg"
  },
  
  {
    skill: "AWS DynamoDB", link: "https://aws.amazon.com/pm/dynamodb/?gclid=Cj0KCQjw5cOwBhCiARIsAJ5njubVsTgwlqTEpUf8GWP7kZwnJxnNFATp4ko-07GDtkMT0UxqGhO0rYwaAqb0EALw_wcB&trk=390f2f77-1064-4521-bd83-27d9213b65c9&sc_channel=ps&ef_id=Cj0KCQjw5cOwBhCiARIsAJ5njubVsTgwlqTEpUf8GWP7kZwnJxnNFATp4ko-07GDtkMT0UxqGhO0rYwaAqb0EALw_wcB:G:s&s_kwcid=AL!4422!3!651751059996!e!!g!!aws%20dynamodb!19852662209!145019198137",
    image: "/db.svg"
  },
  {
    skill: "Apache Commons Imaging", link: "https://commons.apache.org/proper/commons-imaging/",
    image: "/apache.svg"
  },
  {
    skill: "Java", link: "https://www.java.com/en/",
    image: "/java.svg"
  },
  
  
  {
    skill: "Google OAuth 2.0", link: "https://developers.google.com/identity/protocols/oauth2",
    image: "/google.svg"
  },
]
const AboutSection = () => {
  return (
    <section id="about">
      <div className="my-12 pb-12 md:pt-16 md:pb-48">
        <h1 className="text-center font-bold text-4xl">
          About Me
          <hr className="w-6 h-1 mx-auto my-4 bg-orange-500 border-0 rounded"></hr>
        </h1>

        <div className="flex flex-col space-y-10 items-stretch justify-center align-top md:space-x-10 md:space-y-0 md:p-4 md:flex-row md:text-left">
          <div className="md:w-1/2 ">
            <h1 className="text-center text-2xl font-bold mb-6 md:text-left">
              Background
            </h1>
            <p>
              Hi, my name is Sam Avramov, and I am an aspiring software engineer! I first became
              interested in CS when I took a coding class over COVID, and haven&#39;t looked back since.
            </p>
            <br />
            <p>
              I graduated from Skyline High School in 2024 as a member of the IB Diploma
              program, where I took courses such as IB Computer Science SL & HL, in addition
              to 11 other IB classes.
            </p>
            <br />
            <p>
              Now, I am an incoming freshman at <a href="https://cdis.wisc.edu/" className="font-bold text-orange-500" target="_blank" rel="noopener noreferrer">
                the University of Wisconsin-Madison
              </a>{" "} where
              I plan to pursue Bachelors of Science Degree in Computer Science. 
              To see what I&#39;ve been up to lately,  <Link to="projects" activeClass="active"
                spy={true}
                smooth={true}
                offset={-100}
                duration={500}
                className="font-bold text-orange-500"  >
                scroll down.{" "} 
              </Link>
               Or, to learn more about me, download my resume by clicking the button below:
              </p>
              <br></br>
              <p>
              <button
            className="text-neutral-100 font-semibold px-6 py-3 bg-orange-600 rounded shadow hover:bg-orange-700"
            onClick={downloadPdf}
          >
            Download Resume
          </button>
          </p>
            
          </div>
          <div className="text-center md:w-1/2 md:text-left">
            <h1 className="text-2xl font-bold mb-6">Front-end Languages & Libraries</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {skills.map((item, idx) => {
                return (
                  <a
                    key={idx}
                    href={item.link}
                    
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold flex items-center"
                  >
                    <Image src={item.image} alt={item.skill} width={25} height={25} className="mr-2" />
                    <span>{item.skill}</span>
                  </a>
                )
                
              })}
            </div>
            <br></br>
            <h1 className="text-2xl font-bold mb-6">Back-end Languages, Libraries, & APIs</h1>
            <div className="flex flex-wrap flex-row justify-center z-10 md:justify-start">
              {backend.map((item, idx) => {
                return (
                  <a
                    key={idx}
                    href={item.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="bg-gray-200 px-4 py-2 mr-2 mt-2 text-gray-500 rounded font-semibold flex items-center"
                  >
                    <Image src={item.image} alt={item.skill} width={25} height={25} className="mr-2" />
                    <span>{item.skill}</span>
                  </a>
                )
                
              })}
            </div>
            <br></br>
          </div>
        </div>
        <br></br>
        <br></br>

        <div className="flex flex-row items-center text-center justify-center ">
          <Link
            to="projects"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
          >
            <HiArrowDown size={35} className="animate-bounce" />
          </Link>
        </div>
      </div>

    </section>
  )
}
export default AboutSection
