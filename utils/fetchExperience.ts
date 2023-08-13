 import type { NextApiRequest, NextApiResponse } from "next";
 import { groq } from "next-sanity";
 import { sanityClient } from "../sanity";
import { Experience } from "@/typings";


const query = groq`
*[_type == 'experience' ]  | order(dateStarted desc, dateEnded) {
  ...,
  technologies[]
->
} 
`

type Data = {
    experiences: Experience[]
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse<Data>
) {
    const experiences: Experience[] = await sanityClient.fetch(query)
  res.status(200).json({ experiences })
}





export const fetchExperiences = async() => {
   const res = await sanityClient.fetch(query)

   const experiences: Experience [ ] = res

return experiences 

    //console.log("fetching",experiences);

    
}
