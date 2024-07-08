import client from '@mailchimp/mailchimp_marketing'
import md5 from 'md5'

const TAGS = ['Inscritos-Web', ' TEST']

const { MAILCHIMP_API_KEY, MAILCHIMP_SERVER_PREFIX, MAILCHIMP_LIST_ID } = import.meta.env

client.setConfig({
  apiKey: MAILCHIMP_API_KEY,
  server: MAILCHIMP_SERVER_PREFIX
})

function emailToMd5 ({ email }) {
  return md5(email.toLowerCase())
}

export const POST = async ({ _params, request }) => {
  const { name, email } = await request.json()

  try {
    await client.lists.setListMember(
      MAILCHIMP_LIST_ID,
      emailToMd5({ email }),
      {
        full_name: name,
        email_address: email,
        status_if_new: 'subscribed',
        tags: TAGS
      }
    )
  } catch (e) {
    return new Response('Error sending email', { status: 500 })
  }

  return new Response('OK', { status: 200 })
}
