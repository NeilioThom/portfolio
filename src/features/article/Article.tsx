import { Pill } from '@/features/pill'
import { Heading } from '@/features/heading'
import { IconExternalLink } from '@tabler/icons-react'
import clsx from 'clsx'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  title: string
  pillText: string
  textContent: JSX.Element
  linkToUrl?: string
  img: string
  tags?: string[]
  reverse?: boolean
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

export const Article = ({ textContent, pillText, img, tags, title, linkToUrl, reverse, ...rest }: Props) => (
  <div className="h-full items-stretch lg:flex rounded-lg mx-auto" {...rest}>
    <div className={clsx('lg:h-full', { 'order-last': reverse })}>
      <WithLink linkToUrl={linkToUrl}>
        <img src={img} className="w-full object-contain" />
      </WithLink>
    </div>
    <div className="flex-1 p-5 bg-white/5 border border-indigo-dark">
      <Pill>{pillText}</Pill>
      <div className="flex items-center">
        <Heading variant="secondary" tagName="h1" className="text-2xl text-right">
          <WithLink linkToUrl={linkToUrl}>{title}</WithLink>
        </Heading>
        <WithLink linkToUrl={linkToUrl}>
          {linkToUrl && linkToUrl.length && <IconExternalLink className="inline ml-4 text-primary" />}
        </WithLink>
      </div>
      <p className="text-white text-base space-y-4 leading-7">{textContent}</p>
      <ul className="list-none flex space-x-3 mt-6 text-base">
        {tags &&
          tags.length &&
          tags.map((tag) => <li className="rounded-full font-bold text-sm text-white italic">#{tag}</li>)}
      </ul>
    </div>
  </div>
)
