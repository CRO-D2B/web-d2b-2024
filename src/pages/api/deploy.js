import { exec } from 'node:child_process'

const deployCmd = 'sh src/pages/api/_deploy.sh'

export const POST = async ({ params, request }) => {
  // if (!request.url.includes('github')) { return new Response('Not valid request', { status: 500 }) }

  exec(
    deployCmd,
    (error, stdout, stderr) => {
      console.log(stdout)
      console.log(stderr)
      if (error !== null) {
        console.log(`exec error: ${error}`)
      }
    }
  )

  return new Response('Correct deploy', { status: 200 })
}
