
export default function isObjectEmpty(object:Object) {

  const arrLength = Object.keys(object).length

  return arrLength === 0 ? true : false
}
