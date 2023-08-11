import { Pageinfo } from "@/typings";

export const fechPageInfo = async() => {
    const res= await fetch(`${process.env.NEXT_PUBLIC_BASE_URL}/api/getPageInfo`);

    const data = await res.json()
    const pageInfo : Pageinfo = data.pageInfo;

    //console.log("fetching",pageInfo);

    return pageInfo ;
}