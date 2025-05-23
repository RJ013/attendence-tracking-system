import Student from "@/app/dashboard/students/page";
import { db } from "@/utils";
import { ATTENDANCE, STUDENTS } from "@/utils/schema";
import { eq, isNull, or } from "drizzle-orm";
import { NextResponse } from "next/server";

export async function GET(req) {
    const searchParams=req.nextUrl.searchParams;
    const grade=searchParams.get('grade');
    const month=searchParams.get('month')
    const result = await db.select({
        name:STUDENTS.name,
        present:ATTENDANCE.present,
        day:ATTENDANCE.day,
        date:ATTENDANCE.date,
        grade:STUDENTS.grade,
        studentId:STUDENTS.id,
        attendanceId:ATTENDANCE.id
    }).from(STUDENTS)
    .leftJoin(ATTENDANCE,eq(STUDENTS.id,ATTENDANCE.studentId))
    .where(eq(STUDENTS.grade,grade))
    .where(
        or(
            eq(ATTENDANCE.date,month)),
            isNull(ATTENDANCE.date)
        )
        

    return NextResponse.json(result);
}