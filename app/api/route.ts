import { NextResponse } from 'next/server'

import db from '@/utils/db'
import data from '@/utils/data'
import User from '@/models/User'

export async function GET(request: Request) {
  await db.connect()
  await User.deleteMany()
  await User.insertMany(data.users)
  await db.disconnect()

  return NextResponse.json({ text: 'Seeded successfully' }, { status: 200 })
}
