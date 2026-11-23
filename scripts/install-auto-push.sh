#!/bin/bash
# Chạy 1 lần trên Mac:  bash ~/Documents/guitar/Guitar/scripts/install-auto-push.sh
# Từ đó, mỗi commit mới trong thư mục này tự được push lên GitHub trong khoảng 1 phút.
# Gỡ:  launchctl unload ~/Library/LaunchAgents/vn.jguitar.autopush.plist && rm ~/Library/LaunchAgents/vn.jguitar.autopush.plist
set -e
REPO="$(cd "$(dirname "$0")/.." && pwd)"
PLIST="$HOME/Library/LaunchAgents/vn.jguitar.autopush.plist"
chmod +x "$REPO/scripts/auto-push.sh"
mkdir -p "$HOME/Library/LaunchAgents"
cat > "$PLIST" <<PL
<?xml version="1.0" encoding="UTF-8"?>
<!DOCTYPE plist PUBLIC "-//Apple//DTD PLIST 1.0//EN" "http://www.apple.com/DTDs/PropertyList-1.0.dtd">
<plist version="1.0"><dict>
  <key>Label</key><string>vn.jguitar.autopush</string>
  <key>ProgramArguments</key><array><string>/bin/bash</string><string>$REPO/scripts/auto-push.sh</string></array>
  <key>StartInterval</key><integer>60</integer>
  <key>RunAtLoad</key><true/>
</dict></plist>
PL
launchctl unload "$PLIST" 2>/dev/null || true
launchctl load "$PLIST"
echo "Đã bật tự động push cho $REPO"
