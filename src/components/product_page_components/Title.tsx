import { prata } from "@/app/layout";

export default function Title({title}:{title:string}) {
  return (
    <h3 className={`${prata.className} text-[22px] capitalize`}>
      {title.toLowerCase()}
    </h3>
  )
}
