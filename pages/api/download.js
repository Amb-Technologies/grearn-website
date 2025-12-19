import path from "path";
import fs from "fs";

export default function handler(req, res) {
  const filePath = path.join(process.cwd(), "apk", "grearn.apk"); // file in main dir
  const fileBuffer = fs.readFileSync(filePath);

  res.setHeader("Content-Type", "application/vnd.android.package-archive");
  res.setHeader("Content-Disposition", "attachment; filename=grearn.apk");
  res.send(fileBuffer);
}
