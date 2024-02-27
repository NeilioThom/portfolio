import clsx from 'clsx'

export const Title = ({ className }: React.HTMLAttributes<HTMLDivElement>) => (
  <div
    className={clsx(
      'bg-white text-primary tracking-tighter text-xl font-bold flex w-[60px] h-[60px] rounded-full justify-center items-center',
      className,
    )}
  >
    nt
  </div>
)
