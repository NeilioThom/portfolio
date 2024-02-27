import { Pill } from '@/features/pill'
import { Heading } from '@/features/heading'
import { IconExternalLink } from '@tabler/icons-react'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  pillText: string
  textContent: JSX.Element
  linkToUrl?: string
  img: string
  tags?: string[]
}

const WithLink = ({ linkToUrl, children }: { linkToUrl?: string } & React.PropsWithChildren) => {
  if (linkToUrl) {
    return (
      <a href={linkToUrl} target="_blank" className="hover:underline decoration-1 underline-offset-8">
        {children}
      </a>
    )
  }

  return <>{children}</>
}

export const Article = ({ textContent, pillText, img, tags, title, linkToUrl, ...rest }: Props) => (
  <div className="h-full lg:flex bg-white/5 rounded-lg mx-auto border border-indigo-dark" {...rest}>
    <div className="h-max lg:max-w-[400px]">
      <WithLink linkToUrl={linkToUrl}>
        <img src={img} className="h-max w-full object-contain" />
      </WithLink>
    </div>
    <div className="flex-1 p-5 border-l border-indigo-dark">
      <Pill>{pillText}</Pill>
      <Heading variant="secondary" tagName="h1" className="text-3xl my-6">
        <WithLink linkToUrl={linkToUrl}>
          {title}
          {linkToUrl && linkToUrl.length && <IconExternalLink className="inline ml-4" />}
        </WithLink>
      </Heading>
      <p className="text-white text-base space-y-4 leading-7">{textContent}</p>
      <ul className="list-none flex space-x-3 mt-6 text-base">
        {tags &&
          tags.length &&
          tags.map((tag) => <li className="rounded-full font-bold text-sm text-primary italic">#{tag}</li>)}
      </ul>
    </div>
  </div>
)
