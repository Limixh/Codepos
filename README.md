# Codepos

Codepos is an independent fork of [T3 Code](https://github.com/pingdotgg/t3code), a local and remote interface for coding agents. It runs the provider tools you already have installed, including Codex, Claude Code, Cursor, Grok, OpenCode, and Antigravity.

This repository currently contains the Codepos identity and application artwork. Installers and hosted services for Codepos are not published yet. The desktop, web, and mobile clients can be built from source; inherited T3 Connect integrations may still depend on T3-operated services.

## Build from source

Install [Vite+](https://viteplus.dev/guide/) and Node.js 24.13.1 or later, then run:

```bash
vp i
vp run dev
```

The development runner prints the local web address. For desktop development, run `vp run dev:desktop`. The server and app use a separate Codepos data directory so they can coexist with T3 Code.

## Upstream and license

Codepos preserves the original [MIT license](./LICENSE) and the T3 Code copyright notice. To incorporate upstream changes, add `https://github.com/pingdotgg/t3code.git` as an `upstream` Git remote. The existing [documentation](./docs) describes many inherited features; some installation and hosted-service links still refer to T3 Code.
