# bun-file-not-closed

This project demonstrates the issue described in [#7957](https://github.com/oven-sh/bun/issues/7957).
Bun version: 1.0.21

## Usage

To install dependencies:

```bash
bun install
```

To run:

```bash
bun run dev
```

Open [http://localhost:8080/files](http://localhost:8080/files) in your browser. It tells you how many file handlers are open.
Open [http://localhost:8080](http://localhost:8080) in your browser to load a sample HTML file.
Refresh [http://localhost:8080/files](http://localhost:8080/files) and you'll see that the number of file handlers has increased.
