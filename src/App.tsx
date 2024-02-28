import { Heading } from './features/heading'
import { Title } from './features/title'
import { Article } from './features/article'
import me from '@/assets/me-peggy.png'
import bpor from '@/assets/bpor.png'
import finance from '@/assets/finance.gif'
import { SiteHeader } from './features/site-header'
import { IconBrandGithub, IconBrandLinkedin, IconBrandYoutube } from '@tabler/icons-react'

function App() {
  return (
    <>
      <SiteHeader>
        <div className="flex-1">
          <Title />
        </div>
        <ul className="list-none self-end flex space-x-5">
          <li>
            <a href="https://www.linkedin.com/in/neil-thom-503513a0/" target="_blank">
              <IconBrandLinkedin size={28} color="#FFF" stroke="2" />
            </a>
          </li>
          <li>
            <a href="https://github.com/NeilioThom" target="_blank">
              <IconBrandGithub size={28} color="#FFF" stroke="2" />
            </a>
          </li>
          <li>
            <a href="https://www.youtube.com/acutegaming" target="_blank">
              <IconBrandYoutube size={28} color="#FFF" stroke="2" />
            </a>
          </li>
        </ul>
      </SiteHeader>
      <div className="container mx-auto mt-8 mb-20">
        <div className="lg:flex lg:space-x-24">
          <div className="mx-auto lg:mx-0">
            <img src={me} className="lg:w-[300px] lg:h-[300px] w-[250px] h-[250px] mx-auto block" />
          </div>
          <div className="flex-1">
            <Heading variant="secondary" tagName="h2" className="text-4xl lg:text-6xl my-8">
              Greetings!
            </Heading>
            <Heading variant="primary" tagName="h2" className="text-xl">
              I am Neil, a web developer based in Belfast.
            </Heading>
            <p className="text-white text-lg">I have almost ten years of professional experience in web development.</p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Heading variant="primary" tagName="h2" className="text-3xl">
          My experience
        </Heading>
        <Heading variant="primary" tagName="h3" className="text-xl">
          Notable projects
        </Heading>
      </div>
      <div className="container mx-auto space-y-8">
        <Article
          img={bpor}
          linkToUrl="https://bepartofresearch.nihr.ac.uk/"
          textContent={
            <>
              <p>
                Be Part of Research was developed for the National Institute for Health and Care Research as a digital
                transformation project. The goal of this service was to make access to clinical trials accessible to as
                many people as possible.
              </p>
              <p>
                I led frontend development on this project and implemented the majority of the UI in HTML, CSS and
                Vue.js. Accessibility was a huge focus for this project, which taught me a lot about how to write
                semantic and accessible markup.
              </p>
            </>
          }
          pillText="2019"
          title="NIHR Be Part of Research"
          tags={['vue', 'html', 'css', 'accessibility']}
        />
        <Article
          img={finance}
          textContent={
            <>
              <p>
                Recently, I have been working in the financial services industry for 2 of the worlds largest banking
                firms.
              </p>
              <p>
                Much of the work is on React applications where I am integrating with complex, asynchronous APIs and
                displaying huge datasets. Of course, this poses some interesting performance challenges that have
                greatly widened my knowledge of React.
              </p>
            </>
          }
          pillText="2020 - present"
          title="Wealth Management Platforms"
          tags={['react', 'api', 'websockets']}
        />
      </div>
      <footer className="bg-indigo-dark mt-24 border-t border-black text-[#bebebe] text-sm">
        <div className="container mx-auto py-4">
          Thanks for visiting! This site was designed & developed by Neil Thom
        </div>
      </footer>
    </>
  )
}

export default App
