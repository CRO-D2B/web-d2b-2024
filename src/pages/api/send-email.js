import { Resend } from 'resend'

export const POST = async ({ params, request }) => {
  const { name, email, number, company, message } = await request.json()

  const resend = new Resend(import.meta.env.RESEND_API_KEY)

  resend.emails.send({
    from: 'onboarding@resend.dev',
    to: 'fabianmorag0405@gmail.com',
    subject: 'DEV | Hello World',
    html: `
      <strong>Nombre</strong>: ${name} <br>
      <strong>Email</strong>: ${email} <br>
      <strong>Telefono</strong>: ${number} <br>
      <strong>Empresa</strong>: ${company} <br>
      <strong>Comentario</strong>: ${message} <br>
    `
  })

  return new Response('OK', { status: 200, headers: { 'Content-Type': 'text/plain' } })
}
