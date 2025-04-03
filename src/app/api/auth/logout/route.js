// import { getServerSession } from "next-auth";
// import { authOptions } from "../[...nextauth]"; // Adjust path as needed
// import { NextResponse } from "next/server";

// export async function POST() {
//   const session = await getServerSession(authOptions);

//   if (!session) {
//     return NextResponse.json({ message: "No active session" }, { status: 401 });
//   }

//   return NextResponse.json(
//     { message: "Logging out..." },
//     {
//       status: 200,
//       headers: {
//         "Set-Cookie": `next-auth.session-token=; Path=/; Max-Age=0`, // Expire the session
//       },
//     }
//   );
// }
