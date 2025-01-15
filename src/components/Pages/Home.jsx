import React, { useEffect, useState } from 'react';
import Card from '../Card';
import FunFact from '../FunFact';
import Hero from '../Hero';
import Div from '../Div';
import SectionHeading from '../SectionHeading';
import Spacing from '../Spacing';
import Cta from '../Cta';
import LogoList from '../LogoList';
import MovingText from '../MovingText';
import PortfolioSlider from '../Slider/PortfolioSlider';
import PostSlider from '../Slider/PostSlider';
import TestimonialSlider from '../Slider/TestimonialSlider';
import TeamSlider from '../Slider/TeamSlider';
import VideoModal from '../VideoModal';
import TimelineSlider from '../Slider/TimelineSlider';
import { pageTitle } from '../../helper';
import Portfolio from '../Portfolio';
import { Icon } from '@iconify/react';


// Hero Social Links
const heroSocialLinks = [
  {
    name: 'Behance',
    links: '/',
  },
  {
    name: 'Twitter',
    links: '/',
  },
];

// FunFact Data
const funfaceData = [
  {
    title: 'Global Happy Clients',
    factNumber: '40K',
  },
  {
    title: 'Project Completed',
    factNumber: '50K',
  },
  {
    title: 'Team Members',
    factNumber: '245',
  },
  {
    title: 'Digital products',
    factNumber: '550',
  },
];
const portfolioData_2 = [
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_1.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_2.jpeg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_0.jpg',
  },
  {
    title: 'Colorful Art Work',
    subtitle: 'See Details',
    href: '/portfolio/portfolio-details',
    src: '/images/portfolio_3.jpeg',
  },
];
const categoryMenu = [
  {
    title: 'Web Development',
    category: 'web_development',
  },
  {
    title: 'Mobile Apps',
    category: 'mobile_apps',
  },]

  const portfolioData = [
    {
      title: 'Space Property',
      subtitle: 'Live Link',
      href: 'https://spaceproperties.ae/',
      src: '/images/work/space.jpg',
      category: 'web_development',
    },
    {
      title: 'Aravia',
      subtitle: 'Live Link',
      href: 'https://aravia.ae/',
      src: '/images/work/saloon.jpg',
      category: 'web_development',
    },
    {
      title: 'P C F',
      subtitle: 'Live Link',
      href: 'https://pcfgcc.com/',
      src: '/images/work/pdp.jpg',
      category: 'web_development',
    },
    {
      title: 'Max Office',
      subtitle: 'Live Link',
      href: 'https://www.maxoffice.ae/',
      src: '/images/work/maxoffice.jpg',
      category: 'web_development',
    },
    {
      title: 'Maxhome property',
      subtitle: 'Live Link',
      href: '/portfolio/portfolio-details',
      src: '/images/work/maxhome.jpg',
      category: 'web_development',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'Live Link',
      href: '/portfolio/portfolio-details',
      src: '/images/work/phone.jpg',
      category: 'mobile_apps',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'Live Link',
      href: '/portfolio/portfolio-details',
      src: '/images/work/flower shop.jpg',
      category: 'web_development',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'Live Link',
      href: '/portfolio/portfolio-details',
      src: '/images/work/amt.jpg',
      category: 'web_development',
    },
    {
      title: 'Colorful Art Work',
      subtitle: 'Live Link',
      href: '/portfolio/portfolio-details',
      src: '/images/work/caffe.jpg',
      category: 'web_development',
    },
  ];

export default function Home() {
  pageTitle('Home');
      const [active, setActive] = useState('all');
      const [itemShow, setItemShow] = useState(7);
  
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      {/* Start Hero Section */}
      <Hero
        title="Creativity In <br/>Our Blood Line"
        subtitle="We deliver best problem solving solution for our client and provide finest finishing product in present and upcoming future."
        btnText="Get a Quote"
        btnLink="/contact"
        scrollDownId="#service"
        socialLinksHeading="Follow Us"
        heroSocialLinks={heroSocialLinks}
        bgImageUrl="/images/hero_bg.jpeg"
      />
      {/* End Hero Section */}

      {/* Start FunFact Section */}
      <div className="container">
        <FunFact
          variant="cs-type1"
          title="Our fun fact"
          subtitle="Sed ut perspiciatis unde omnis iste natus error voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis."
          data={funfaceData}
        />
      </div>
      {/* End FunFact Section */}

      {/* Start Service Section */}
      <Spacing lg="150" md="80" />
      <Div id="service">
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Services we can help you with"
                subtitle="What Can We Do"
                btnText="See All Services"
                btnLink="/service"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-8">
              <Div className="row">
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="UI/UX design"
                    link="/service/service-details"
                    src="/images/service_1.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="React.js Development"
                    link="/service/service-details"
                    src="/images/service_2.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Digital Marketing"
                    link="/service/service-details"
                    src="/images/service_3.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
                <Div className="col-lg-3 col-sm-6">
                  <Card
                    title="Technology"
                    link="/service/service-details"
                    src="/images/service_4.jpeg"
                    alt="Service"
                  />
                  <Spacing lg="0" md="30" />
                </Div>
                <Div className="col-lg-3 col-sm-6 cs-hidden_mobile"></Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Service Section */}


    <Div className="container">
                  <Div className="cs-portfolio_1_heading">
                    <SectionHeading title="Some recent work" subtitle="Our Portfolio" />
                    <Div className="cs-filter_menu cs-style1">
                      <ul className="cs-mp0 cs-center">
                        <li className={active === 'all' ? 'active' : ''}>
                          <span onClick={() => setActive('all')}>All</span>
                        </li>
                        {categoryMenu.map((item, index) => (
                          <li
                            className={active === item.category ? 'active' : ''}
                            key={index}
                          >
                            <span onClick={() => setActive(item.category)}>
                              {item.title}
                            </span>
                          </li>
                        ))}
                      </ul>
                    </Div>
                  </Div>
                  <Spacing lg="90" md="45" />
                  <Div className="row">
                    {portfolioData.slice(0, itemShow).map((item, index) => (
                      <Div
                        className={`${ index === 3 || index === 6 ? 'col-lg-8' : 'col-lg-4'
                        } ${
                          active === 'all'
                            ? ''
                            : !(active === item.category)
                            ? 'd-none'
                            : ''
                        }`}
                        key={index}
                      >
                        <Portfolio
                          title={item.title}
                          subtitle={item.subtitle}
                          href={item.href}
                          src={item.src}
                          variant="cs-style1 cs-type1"
                        />
                        <Spacing lg="25" md="25" />
                      </Div>
                    ))}
                  </Div>
          
                  <Div className="text-center">
                    {portfolioData.length <= itemShow ? (
                      ''
                    ) : (
                      <>
                        <Spacing lg="65" md="40" />
                        <span
                          className="cs-text_btn"
                          onClick={() => setItemShow(itemShow + 3)}
                        >
                          <span>Load More</span>
                          <Icon icon="bi:arrow-right" />
                        </span>
                      </>
                    )}
                  </Div>
                </Div>

      {/* Start Portfolio Section */}
      <Spacing lg="150" md="50" />
      <Div>
        <Div className="container">
          <SectionHeading
            title="Portfolio to explore"
            subtitle="Latest Projects"
            variant="cs-style1 text-center"
          />
          <Spacing lg="90" md="45" />
        </Div>
        <PortfolioSlider data={portfolioData} />
      </Div>
      {/* End Portfolio Section */}

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
                title="We get multiple awards"
                subtitle="Our Awards"
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

      {/* Start Video Block Section */}
      <Spacing lg="130" md="70" />
      <Div className="container">
        <h2 className="cs-font_50 cs-m0 text-center cs-line_height_4">
          Our agile process is ability to adapt and respond to change. Agile
          organizations view change as an opportunity, not a threat.
        </h2>
        <Spacing lg="70" md="70" />
        <VideoModal
          videoSrc="https://www.youtube.com/watch?v=VcaAVWtP48A"
          bgUrl="/images/video_bg.jpeg"
        />
      </Div>
      {/* End Video Block Section */}

      {/* Start Team Section */}
      <Spacing lg="145" md="80" />
      <Div className="container">
        <SectionHeading
          title="Awesome team <br/>members"
          subtitle="Our Team"
          variant="cs-style1"
        />
        <Spacing lg="85" md="45" />
        <TeamSlider />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End Team Section */}

      {/* Start Testimonial Section */}
      <TestimonialSlider />
      {/* End Testimonial Section */}

      {/* Start Blog Section */}
      <Spacing lg="150" md="80" />
      <Div className="cs-shape_wrap_4">
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title="Explore recent publication"
                subtitle="Our Blog"
                btnText="View More Blog"
                btnLink="/blog"
              />
              <Spacing lg="90" md="45" />
            </Div>
            <Div className="col-xl-7 offset-xl-1">
              <Div className="cs-half_of_full_width">
                <PostSlider />
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>
      {/* End Blog Section */}

      {/* Start MovingText Section */}
      <Spacing lg="125" md="70" />
      <MovingText text="Our reputed world wide partners" />
      <Spacing lg="105" md="70" />
      {/* End MovingText Section */}

      {/* Start LogoList Section */}
      <Div className="container">
        <LogoList />
      </Div>
      <Spacing lg="150" md="80" />
      {/* End LogoList Section */}

      {/* Start CTA Section */}
      <Div className="container">
        <Cta
          title="Let’s disscuse make <br />something <i>cool</i> together"
          btnText="Apply For Meeting"
          btnLink="/contact"
          bgSrc="/images/cta_bg.jpeg"
        />
      </Div>
      {/* End CTA Section */}
    </>
  );
}
