// import { db } from "@/utils";
// import { GRADES } from "@/utils/schema";
// import { NextResponse } from "next/server";

// export async function GET(req){
//     const result=await db.select().from(GRADES);

//    return NextResponse.json({result})
// }


import { db } from "@/utils";
import { GRADES } from "@/utils/schema";
import { NextResponse } from "next/server";

export async function GET(req) {
    try {
        // Fetch data from the database
        const result = await db.select().from(GRADES);
        
        // Check if result is an array and has data
        if (Array.isArray(result)) {
            // Return the result as JSON
            return NextResponse.json(result);
        } else {
            // Return an empty array if result is not in expected format
            return NextResponse.json([]);
        }
    } catch (error) {
        console.error('Error fetching grades:', error);
        
        // Return an error response
        return NextResponse.json({ error: 'Failed to fetch grades' }, { status: 500 });
    }
}
