import { DB, readDB, writeDB } from "@/app/libs/DB";
import { checkToken } from "@/app/libs/checkToken";
import { nanoid } from "nanoid";
import { NextResponse } from "next/server";

export const GET = async () => {
  readDB();
  const roomId = DB.get("rooms").get("roomId");
 DB.
  console.log(roomId);

  if (!roomId) {
    return NextResponse.json(
      {
        ok: false,
        message: "Please provide roomId",
      },
      { status: 400 }
    );
  }

  if (roomId) {
    for (const room of DB.rooms) {
      if (room.roomId === roomId) {
        DB.push(room.rooms);
      }
    }
  }
  writeDB();

  return NextResponse.json({
    ok: true,
    rooms: rooms,
    // totalRooms: rooms.length,
  });
};

export const POST = async (request) => {
  readDB();

  const payload = checkToken();

  if (!payload) {
    return NextResponse.json(
      {
        ok: false,
        message: "Invalid token",
      },
      { status: 401 }
    );
  }

  if (role === "ADMIN" || role === "ADMIN") {
    return NextResponse.json({
      ok: true,
      enrollments: DB.enrollments,
    });
  }

  // return NextResponse.json(
  //   {
  //     ok: false,
  //     message: `Room ${"replace this with room name"} already exists`,
  //   },
  //   { status: 400 }
  // );

  const roomId = nanoid();

  //call writeDB after modifying Database
  writeDB();

  return NextResponse.json({
    ok: true,
    //roomId,
    message: `Room ${"replace this with room name"} has been created`,
  });
};
