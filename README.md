# NeverType

**Speak. It types.**

NeverType is a cross-platform, privacy-first dictation app. Press a hotkey, speak — NeverType transcribes your voice and types it anywhere on your screen. No cloud, no subscriptions, everything runs locally on your machine.

## Features

- 🎙️ **Local AI transcription** — Whisper, Parakeet, Moonshine and more
- ⚡ **Blazing fast** — optimised for Apple Silicon, Windows, and Linux
- 🔒 **100% private** — your audio never leaves your device
- 🌍 **40+ languages** supported
- 🖥️ **macOS, Windows, Linux** — all platforms, one app

## Platforms

| Platform | Format |
|---|---|
| macOS (Apple Silicon) | `.dmg` |
| macOS (Intel) | `.dmg` |
| Windows | `.msi` |
| Linux | `.deb` / `.rpm` / `.AppImage` |

## Build from Source

See [BUILD.md](./BUILD.md) for full setup instructions.

```bash
# Install dependencies
bun install

# Development
bun tauri dev

# Production build
bun run tauri build
```

## License

MIT — see [LICENSE](./LICENSE)
