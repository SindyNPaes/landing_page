
export default function handler(req, res) {
  res.status(200).json({
    "SMTP_HOST": String(process.env.SMTP_HOST),
    "SMTP_PORT": String(process.env.SMTP_PORT),
    "SMTP_USER": String(process.env.SMTP_USER),
    "SMTP_PASS": String(process.env.SMTP_PASS),
  });
}

