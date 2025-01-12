import React, { useEffect , useState} from 'react'
import { pageTitle } from '../../helper'
import { Icon } from '@iconify/react';
import Card from '../Card'
import Cta from '../Cta'
import PageHeading from '../PageHeading'
import PricingTableList from '../PricingTable/PricingTableList'
import Div from '../Div'
import SectionHeading from '../SectionHeading'
import TestimonialSlider from '../Slider/TestimonialSlider'
import Spacing from '../Spacing'
import Portfolio from '../Portfolio';


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
const categoryMenu = [
  {
    title: 'Web Development',
    category: 'web_development',
  },
  {
    title: 'Mobile Apps',
    category: 'mobile_apps',
  },

];

export default function ServicesPage() {


    const [active, setActive] = useState('all');
    const [itemShow, setItemShow] = useState(7);
  
    useEffect(() => {
      window.scrollTo(0, 0);
    }, []);

  pageTitle('Service');
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <PageHeading 
        title='Services'
        bgSrc='images/service_hero_bg.jpeg'
        pageLinkText='Services'
      />
      <Spacing lg='150' md='80'/>
      <Div className='cs-shape_wrap_4'>
        <Div className="cs-shape_4"></Div>
        <Div className="cs-shape_4"></Div>
        <Div className="container">
          <Div className="row">
            <Div className="col-xl-4">
              <SectionHeading
                title='Services we can help you with' 
                subtitle='What Can We Do'
              />
              <Spacing lg='90' md='45'/>
            </Div>
            <Div className='col-xl-8'>
              <Div className='row'>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='UI/UX design'
                    link='/service/ui-ux-design'
                    src='/images/service_1.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='React.js Development'
                    link='/service/reactjs-development'
                    src='/images/service_2.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Digital Marketing'
                    link='/service/digital-marketing'
                    src='/images/service_3.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Technology'
                    link='/service/technology'
                    src='/images/service_4.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Consultancy'
                    link='/service/consultancy'
                    src='/images/service_5.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
                <Div className='col-lg-3 col-sm-6 cs-hidden_mobile'></Div>
                <Div className='col-lg-3 col-sm-6'>
                  <Card
                    title='Creative Design'
                    link='/service/creative-design'
                    src='/images/service_6.jpeg'
                    alt='Service'
                  />
                  <Spacing lg='0' md='30'/>
                </Div>
              </Div>
            </Div>
          </Div>
        </Div>
      </Div>

      <Spacing lg="145" md="80" />
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

      <Spacing lg='150' md='80'/>
      <Div className="container">
        <SectionHeading
          title='Providing best <br/>pricing for client' 
          subtitle='Pricing & Packaging'
        />
        <Spacing lg='85' md='40'/>
        <PricingTableList/>
      </Div>
      <Spacing lg='125' md='55'/>
      <TestimonialSlider/>
      <Spacing lg='150' md='80'/>
      <Div className="container">
        <Cta 
          title='Let’s disscuse make <br />something <i>cool</i> together' 
          btnText='Apply For Meeting' 
          btnLink='/contact' 
          bgSrc='/images/cta_bg.jpeg'
        />
      </Div>
    </>
  )
}
