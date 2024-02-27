import clsx from 'clsx'

interface Props extends React.HTMLAttributes<HTMLDivElement> {
  tagName: 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6'
  variant: 'primary' | 'secondary'
}

export const Heading = ({ tagName, children, className, variant }: Props) => {
  const TagName = tagName

  const variantStyles: Record<Props['variant'], string> = {
    primary: 'font-roboto text-white font-bold tracking-tight leading-8 my-4',
    secondary: 'font-roboto text-primary font-light tracking-loose leading-8 my-4',
  }

  return <TagName className={clsx(variantStyles[variant], className)}>{children}</TagName>
}
