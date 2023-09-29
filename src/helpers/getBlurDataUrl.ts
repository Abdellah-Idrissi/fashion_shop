import fs from "node:fs/promises";
import { getPlaiceholder } from "plaiceholder"

export const getBlurDataUrL = async (imageName:string) => {
  const buffer = await fs.readFile(`public/${imageName}`)
  const {base64} = await getPlaiceholder(buffer)
  return base64
}