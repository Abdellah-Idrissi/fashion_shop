

export default function layout({children}: {children: React.ReactNode}) {
  return (
      <div className="relative min-h-screen flex justify-center items-center ">

        <div className="absolute inset-0 bg-hero bg-center blur-sm mmd:hidden" />
        <div className="hidden mmd:block mmd:w-[50%] bg-hero bg-center min-h-screen">
        </div>

        <div className="z-50 mmd:flex-1 mmd:flex mmd:justify-center mmd:items-center w-[90%] max-w-[450px] mmd:w-full mmd:max-w-full">
          {children}
        </div>
      </div>
  )
}
