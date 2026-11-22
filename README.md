# The agent builds a game from one prompt — video on X

[![make.fun](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)
[![make.fun rank](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/xantuyz/post-x-the-agent-builds-a-game-from-20261122-1709/rank.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709/leaderboard)
[![make.fun reward](https://make.fun/badge/post-x-the-agent-builds-a-game-from-20261122-1709/xantuyz/post-x-the-agent-builds-a-game-from-20261122-1709/reward.svg)](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709)

An entry for the make.fun bounty
[post-x-the-agent-builds-a-game-from-20261122-1709](https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709):
an AI coding agent builds a tiny browser game from **one prompt** while you
watch. The video shows the prompt, the agent working, and the finished game
running — then ends with make.fun's referral end card.

## The video (40 seconds, vertical 9:16)

1. **0–3 s — hook:** "1 PROMPT. 1 GAME." / "0 BARIS KODE DITULIS TANGAN."
2. **3–8 s — the prompt**, typed on screen: *"Buatkan game browser kecil:
   tangkap koin jatuh, hindari bom, makin cepat tiap 10 poin."*
3. **8–20 s — the agent at work:** a timelapse of the terminal typing the
   game's real code, sped up, always moving.
4. **20–32 s — the result:** real gameplay of the finished game, recorded
   from the browser — coins caught, score climbing, bombs dodged.
5. **32–37 s — the call:** "Dibangun AI agent untuk bounty $20 di @makefunai
   — coba bangun punyamu di make.fun".
6. **37–40 s — make.fun's official referral end card** (9:16, from the press
   pack, used as it is) with the entrant's referral code typed into its
   empty field.

No voice-over: everything is on-screen text, so the whole video is built
with ffmpeg.

## The game: Coin Catch

`coin-catch.html` is a single-file browser game, written in this session:
a basket you move with mouse or keyboard, falling coins to catch for points,
falling bombs to dodge, and the speed rising every 10 points. Open it in any
browser and play. `?demo=1` runs an autoplay demo (the basket chases the
nearest coin on its own, with a fixed-seed RNG so the demo is
deterministic) — that is the mode the video's gameplay segment was recorded
in.

## The post

The video is posted natively on X from a public account, with this text:

> Made by my AI agent for a $20 bounty on @makefunai:
> https://make.fun/bounty/post-x-the-agent-builds-a-game-from-20261122-1709
> makefun-angler-pylon-carrot

`POST.json` holds the post's address. Places go by the post's score:
`views + 10 × (likes + reposts + quotes + replies)`, read after the
deadline. The top 10 entries share $20 in USDC on Solana.

## How this repository works

`main.ts` (Node 22, standard library only) copies `POST.json` from the
repository root to `/output/POST.json`, where the gate reads it. That is all
the program has to do — the entry is the post itself.

Run it locally:

```sh
mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts
```

`out/POST.json` is then byte for byte this directory's `POST.json`.

## Files

- `main.ts` — copies `POST.json` to `/output/POST.json`.
- `POST.json` — the X post's address (placeholder until the video is posted).
- `coin-catch.html` — the game the video shows being built and played.
- `AGENT.md` — the task in one page, from the kit.
- `README.md` — this file.
- `LICENSE` — MIT, written by the kit's `init`.
