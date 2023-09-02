# Cocobot!

## To run locally

This is an absolute rip-off of Discord's [Getting started](https://discord.com/developers/docs/getting-started) app. If you have no experience with Discord bots, refer to that doc for the basics, like creating a bot and such.

If you think you're real tough and just wanna get this to run:

1. Rename `.env.example` to `.env`, and fill in the APP_ID, DISCORD_TOKEN and PUBLIC_KEY values.
2. Install dependencies: `npm install`.
3. Register: `npm run register `
4. Run app.js with node: `node app.js`.
5. [Optional] Use ngrok (`ngrok http 3000`) on another terminal and paste Discord's Interactions Endpoint a public IP. 

_Note that you'll have to install the app on a server you own to actually test it._