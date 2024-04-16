import { Resend } from 'resend'
import { isDev } from '@/lib/utils'

const devTag = isDev ? 'DEV | ' : ''

export const POST = async ({ params, request }) => {
  const { name, email, number, company, message } = await request.json()

  const resend = new Resend(import.meta.env.RESEND_API_KEY)
  try {
    resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'fabianmorag0405@gmail.com',
      subject: `${devTag}Hello World`,
      html: `
        <strong>Nombre</strong>: ${name} <br>
        <strong>Email</strong>: ${email} <br>
        <strong>Telefono</strong>: ${number} <br>
        <strong>Empresa</strong>: ${company} <br>
        <strong>Comentario</strong>: ${message} <br>
      `
    }).then(res => console.log(res)).catch(err => console.log(err))
    return new Response('OK', { status: 200, headers: { 'Content-Type': 'text/plain' } })
  } catch (e) {
    return new Response('Error', { status: 500, headers: { 'Content-Type': 'text/plain' } })
  }
}
