<div align="center">
	<h1 align="center">~ beepSelfBot ~</h1>
	<strong>beepSelfBot is a small selfbot that wanted to be illegal since it was a kid.</strong><br />Now it is.<br /><br />
</div>

**WARNING!** It is against the ToS of Discord to use a selfbot! **Your account can get banned!** 

If you are planning to use it, keep this in mind:
> USING SELFBOTS IS [AGAINST THE DISCORD TERMS OF SERVICE](https://discordapp.com/developers/docs/topics/oauth2). I AM NOT RESPONSIBLE AND CANNOT BE HELD LIABLE IF YOU LOSE PRIVILEGES, GET KICKED OR BANNED FROM ANY SERVER OR FROM DISCORD.
If you know the risk and you want to continue; here are the instructions.

## Requirements

- `node` [Version 8.4.0 or higher](https://nodejs.org)

Only necessary if you want to download via command prompt:
- `git` command line ([Windows](https://git-scm.com/download/win)|[Linux](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git)|[MacOS](https://git-scm.com/download/mac)) installed

You cannot use the /update command because it uses local pathes on my Linux machine and requires Apache Subversion.
Some commands will not work if you are not using `pm2` to start the bot.

## Downloading

Just hit the `Clone or download` button or use git in a command prompt:

`git clone https://github.com/HerrEurobeat/beepSelfBot`

Once finished: 

- Create an token.json file outside of the bot folder with this content:

```json
{
"selfbottoken": "your token"
}
```

## Getting your login token

1. From either the web application, or the installed Discord app, use the **CTRL+SHIFT+I** keyboard shortcut.
2. This brings up the **Developer Tools**. Go to the **Application** tab
3. On the left, expand **Local Storage**, then click on the discordapp.com entry (it should be the only one).
4. Locate the entry called `token`, and copy it.

> **KEEP YOUR TOKEN SECRET, AND NEVER SHARE IT WITH ANYONE**

## Starting the selfbot

To start the selfbot, in the command prompt, run the following command:
`node index.js`