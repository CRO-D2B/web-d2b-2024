import { Resend } from 'resend'

export const POST = async ({ _params, request }) => {
  const { name, email, number, company, message } = await request.json()

  const resend = new Resend(import.meta.env.RESEND_API_KEY)
  const { error } = await resend.emails.send({
    from: `${name} <onboarding@resend.dev>`,
    to: import.meta.env.CONTACT_MAIL,
    subject: 'Contacto desde d2b.cl',
    html: `
        <strong>Nombre</strong>: ${name} <br>
        <strong>Email</strong>: ${email} <br>
        <strong>Telefono</strong>: ${number} <br>
        <strong>Empresa</strong>: ${company} <br>
        <strong>Comentario</strong>: ${message} <br>
      `
  })
  if (error) {
    console.error(error)
    return new Response('Error sending email', { status: 500 })
  }
  return new Response('OK', { status: 200 })
}
