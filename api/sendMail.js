import nodemailer from "nodemailer";

export default async function handler (req, res) {
  const { email, name, message } = req.body;
  console.log( message)

  if (!email || !name || !message) {
    return res.status(400).json({ error: "Campos obrigatórios ausentes." , email: email, name: name, message: message});
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: false, // use true se for porta 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Sindy Paes Advogada" <${process.env.SMTP_USER}>`,
      to: `${process.env.SMTP_USER}`,
      subject: "Consultoria Jurifica",
      html: `<p>${message}</p>`,
    });

    return res.json({ success: true,email,name,message });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao enviar e-mail.",email,name,message });
  }
};