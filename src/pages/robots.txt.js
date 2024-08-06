const robotsTxt = `
User-agent: *

Allow: /wp-admin/admin-ajax.php
Disallow: /wp-login
Disallow: /wp-admin
Disallow: /*/feed/
Disallow: /*/trackback/
Disallow: /*/attachment/
Disallow: *?replytocom
Disallow: /tag/*/page/
Disallow: /tag/*/feed/
Disallow: /comments/
Disallow: /xmlrpc.php
Disallow: /*?s=
Disallow: /*/*/*/feed.xml
Disallow: /?attachment_id*
Disallow: /page
Disallow: /tag.*
Disallow: /blog/tag/
Disallow: /blog_d2b/

Allow: /*.css$
Allow: /*.js$

Sitemap: ${new URL('sitemap-index.xml', import.meta.env.SITE).href}
`.trim()

export const GET = () => {
  return new Response(robotsTxt, {
    headers: {
      'Content-Type': 'text/plain; charset=utf-8'
    }
  })
}
