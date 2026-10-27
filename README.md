# My First Discord Bot

An early JavaScript learning project: a small Discord bot with file-based command loading and a handful of moderation commands.

**JavaScript · Discord.js v12 · Historical project (December 2020)**

## Overview

- Ping, kick, ban, and message-clearing commands.
- A simple prefix-based command router.
- Separate command modules loaded from the filesystem.

## Code map

| Path | Responsibility |
| --- | --- |
| `main.js` | Bot startup and message-command routing |
| `commands/` | Individual command modules |
| `environment.js` | Required environment-variable checks |

## Run locally

Install the dependencies:

```sh
npm install
```

Set the required environment variables in your shell or hosting service:

| Variable | Purpose |
| --- | --- |
| `DISCORD_TOKEN` | Token for your own Discord bot |

Start the bot with `npm start`. The blank [`.env.example`](.env.example) lists the required names; this copy does not automatically load a `.env` file.

## Project history and current status

The original repository contains development commits from **December 2020**. This public repository is a sanitized source snapshot published in 2026; it does not import or backdate the private Git history.

This code uses legacy Discord.js APIs. The release preparation checked JavaScript syntax, JSON configuration, environment-variable guards, and embedded credential patterns. It has not been tested as a running bot against the current Discord API. It is presented as historical learning and customization work, rather than a maintained production template.

## Attribution

Existing source credits remain intact. See [ATTRIBUTION.md](ATTRIBUTION.md) and [RELEASE-NOTES.md](RELEASE-NOTES.md) for provenance and license details.
