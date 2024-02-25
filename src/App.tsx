import { Heading } from "./features/heading";
import { Title } from "./features/title";
import { Article } from "./features/article";
import me from "@/assets/me-peggy.png";
import { SiteHeader } from "./features/site-header";

function App() {
  return (
    <>
      <SiteHeader>
          <Title />
      </SiteHeader>
      <div className="container mx-auto mt-12 mb-24">
        <div className="lg:flex lg:space-x-24">
          <div className="mx-auto lg:mx-0">
            <img src={me} className="w-[300px] h-[300px] mx-auto block" />
          </div>
          <div className="flex-1">
            <Heading
              variant="secondary"
              tagName="h2"
              displaySize="6xl"
              className="my-8 shadow"
            >
              Greetings!
            </Heading>
            <Heading variant="primary" tagName="h2" displaySize="xl">
              I am Neil, a web developer based in Belfast.
            </Heading>
            <p className="text-white text-lg">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
              rutrum malesuada lacinia. Duis eget augue et arcu tristique
              sodales non rutrum metus. Aenean nec tempor odio. Suspendisse
              lorem lacus, pretium sed ultrices vel, auctor et dolor. Curabitur
              viverra odio tempus leo porta.
            </p>
          </div>
        </div>
      </div>
      <div className="container mx-auto">
        <Heading variant="primary" tagName="h2" displaySize="3xl">
          My experience
        </Heading>
        <Heading variant="primary" tagName="h3" displaySize="2xl">
          Notable projects
        </Heading>
      </div>
      <div className="container mx-auto space-y-5">
        <Article
          detailText="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed rutrum malesuada lacinia. Duis eget augue et arcu tristique sodales non rutrum metus. Aenean nec tempor odio. Suspendisse lorem lacus, pretium sed ultrices vel, auctor et dolor. Curabitur viverra odio tempus leo porta, nec lobortis neque eleifend. Vivamus nibh ipsum, vulputate vitae vulputate id, finibus ut ante."
          pillText="2019"
          title="NIHR Be Part of Research"
        />
      </div>
    </>
  );
}

export default App;
