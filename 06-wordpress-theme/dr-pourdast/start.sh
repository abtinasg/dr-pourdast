#!/bin/bash
cd "$(dirname "$0")"

PORT="${1:-8080}"
URL="http://127.0.0.1:$PORT"

echo ""
echo "  Dr. Pourdast — local server"
echo "  ---------------------------"
echo "  Open in browser: $URL"
echo ""
echo "  Press Ctrl+C to stop."
echo ""

if command -v npx >/dev/null 2>&1; then
  exec npx --yes serve -l "$PORT" .
else
  exec python3 -m http.server "$PORT" --bind 127.0.0.1
fi
