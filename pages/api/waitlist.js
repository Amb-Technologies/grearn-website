import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const { fullname, email, phone } = req.body;

  if (!fullname || !email) {
    return res.status(400).json({ message: "Missing required fields" });
  }

  try {
    const record = await prisma.waitlist.create({
      data: {
        fullname,
        email,
        phone,
      },
    });

    return res.status(200).json({
      message: "Successfully added to waitlist!",
      data: record,
    });
  } catch (err) {
    return res.status(400).json({
      message:
        "You may already be on the waitlist or something went wrong.",
    });
  }
}
