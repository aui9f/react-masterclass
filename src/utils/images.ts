export function makeIamgePath(id: string, format?: string){
  console.log("id: ", id)
  return `https://image.tmdb.org/t/p/w1280${id}`
}