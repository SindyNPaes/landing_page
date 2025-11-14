import nodemailer from "nodemailer";

export const sendEmail = async (req, res) => {
  const { to, subject, message } = req.body;
  console.log(to, subject, message)

  if (!to || !subject || !message) {
    return res.status(400).json({ error: "Campos obrigatórios ausentes." });
  }

  try {
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,
      port: process.env.SMTP_PORT,
      secure: true, // use true se for porta 465
      auth: {
        user: process.env.SMTP_USER,
        pass: process.env.SMTP_PASS,
      },
    });

    await transporter.sendMail({
      from: `"Sindy Paes Advogada" <${process.env.SMTP_USER}>`,
      to,
      subject,
      html: `<p>${message}</p>`,
    });

    return res.json({ success: true, message: "E-mail enviado com sucesso!" },to,subject,message);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Erro ao enviar e-mail." },to,subject,message);
  }
};