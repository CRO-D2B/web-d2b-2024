import { Resend } from 'resend'
import { isDev } from '@/lib/utils'

const devTag = isDev ? 'DEV | ' : ''

export const POST = async ({ params, request }) => {
  const { name, email, number, company, message } = await request.json()

  const resend = new Resend(import.meta.env.RESEND_API_KEY)
  try {
    await resend.emails.send({
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
    })
  } catch (error) {
    console.error(error)
    return new Response('Error sending email', { status: 500 })
  }
  return new Response('OK', { status: 200 })
}
