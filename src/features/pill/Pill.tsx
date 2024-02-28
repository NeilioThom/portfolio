import clsx from 'clsx'

export const Pill = ({ className, children }: React.HTMLAttributes<HTMLDivElement>) => (
  <div className={clsx('bg-primary tracking-tight font-bold text-white w-max rounded-full my-1 px-4 py-1', className)}>
    {children}
  </div>
)
