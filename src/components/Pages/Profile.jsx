import React, { useEffect } from "react";
import { pageTitle } from "../../helper";
import Cta from "../Cta";
import PageHeading from "../PageHeading";
import Div from "../Div";
import Spacing from "../Spacing";
import SocialWidget from "../Widget/SocialWidget";
import SectionHeading from "../SectionHeading";
import TimelineSlider from "../Slider/TimelineSlider";
import LogoList from "../LogoList";
const portfolioData = [
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_1.jpeg",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_2.jpeg",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_0.jpg",
  },
  {
    title: "Colorful Art Work",
    subtitle: "See Details",
    href: "/portfolio/portfolio-details",
    src: "/images/portfolio_3.jpeg",
  },
];
export default function Profile() {
  pageTitle("Team Member");
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
     
      <Spacing lg="150" md="80" />
      <Div className="container">
        <Div className="row align-items-center">
          <Div className="col-xl-5 col-lg-6">
            <Div className="cs-radius_15 cs-shine_hover_1">
              <img
                src="/images/member_details_2.jpg"
                alt="Member"
                className="w-100"
              />
            </Div>
          </Div>
          <Div className="col-lg-6 offset-xl-1">
            <Spacing lg="0" md="45" />
            <Div className="cs-section_heading cs-style1">
              <h2 className="cs-section_title">Arshad Vk</h2>
              <Div className="cs-height_10 cs-height_lg_10" />
              <h3 className="cs-section_subtitle">Software Developer</h3>
              <Div className="cs-height_5 cs-height_lg_5" />
              <Div className="cs-separator cs-accent_bg" />
              <Div className="cs-height_45 cs-height_lg_25" />
              <p className="cs-m0">
                I am an experienced software developer currently based in Abu
                Dhabi, with a proven track record of delivering high-quality web
                and software solutions. My journey began in India, where I
                worked as a web developer, building robust and scalable
                applications for various clients. Over the years, I have
                cultivated a deep understanding of both frontend and backend
                technologies, enabling me to create seamless, full-stack
                solutions.
              </p>
              <Div className="cs-height_25 cs-height_lg_20" />
              <ul>
                <li>
                Backend Development: Proficient in PHP, Laravel, and Node.js, specializing in crafting secure and efficient server-side architectures.
                </li>
                <li>
                Frontend Development: Skilled in React, Next.js, Tailwind, and TypeScript, creating intuitive, responsive, and user-friendly interfaces.      
              </li>

              <li>
              Cloud and DevOps: Experienced in deploying and managing applications on AWS, cPanel, and other hosting environments                </li>
                <li>
                Problem Solving: Strong grasp of data structures and algorithms, enabling me to solve complex problems effectively.              </li>
              </ul>
              <Div className="cs-height_25 cs-height_lg_20" />
            
              <SocialWidget />
            </Div>
          </Div>
        </Div>
      </Div>

      {/* Start Awards Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_2">
        <Div className="cs-shape_2">
          <Div />
        </Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Education & Work&nbsp;Experience"
                subtitle=""
                variant="cs-style1"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <TimelineSlider />
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Awards Section */}
      <Spacing lg="150" md="80" />

      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
    </>
  );
}
