

❯ about clerk, it requires a custom domain.                                                                                                                              
Can I set up a sub domain, then use clerk on a sub sub domain?                                                                                                         
Ex.                                                                                                                                                                    
domain = bob.foo.com                                                                                                                                                   
hosted web app app1.bob.foo.com                                                                                                                                        
hosted web app app2.bob.foo.com                                                                                                                                        
Do I have to set up several clerk apps or can all the domains above share the same clerk app?

⏺ Checking for relevant skills before answering.

⏺ Skill(find-skills)
⎿  Successfully loaded skill

⏺ No specific Clerk skill found — answering directly from knowledge.

Short answer: Yes, one Clerk app can cover all those domains via Clerk's Satellite Domains (https://clerk.com/docs/advanced-usage/satellite-domains) feature.

Here's how it works for your scenario:

Setup:
- Primary domain (handles auth UI): bob.foo.com (or pick one app)
- Satellite domains: app1.bob.foo.com, app2.bob.foo.com

How it works:
- All satellites share the same Clerk app (same publishable key, same user DB)
- When a user on a satellite needs to sign in, Clerk redirects them to the primary domain to authenticate, then redirects back
- Sessions are shared across all subdomains via a cookie on the common parent bob.foo.com

Key constraints:
- You designate exactly one primary domain — it hosts the actual sign-in/sign-up pages
- Satellites must all be subdomains of the same parent for cookie sharing to work cleanly — which your case satisfies (*.bob.foo.com)
- You configure each satellite in your Clerk dashboard and set isSatellite: true + signInUrl pointing to the primary in your SDK config

What you DON'T need:
- Multiple Clerk apps
- Multiple publishable keys (one key works for all)

Config example (Next.js satellite):
// app1.bob.foo.com — middleware.ts
export default clerkMiddleware({
isSatellite: true,
signInUrl: 'https://bob.foo.com/sign-in',
signUpUrl: 'https://bob.foo.com/sign-up',
})

This is a clean setup for your use case, Captain Yvem. The shared parent domain bob.foo.com is actually ideal for this pattern.
