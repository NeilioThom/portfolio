import clsx from 'clsx'

export const SiteHeader = ({ className, children }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx('site-header', className)}>
    <div className="container flex items-center mx-auto">{children}</div>
  </div>
)
