#!/bin/bash
# Đẩy commit lên GitHub khi nhánh main đang đi trước origin/main.
# Chạy trên máy Mac (dùng đăng nhập GitHub có sẵn của máy), được launchd gọi mỗi phút.
REPO="$(cd "$(dirname "$0")/.." && pwd)"
cd "$REPO" || exit 0
[ -f .git/index.lock ] && exit 0
git fetch -q origin main 2>/dev/null
AHEAD=$(git rev-list --count origin/main..main 2>/dev/null || echo 0)
if [ "$AHEAD" -gt 0 ]; then
  git push -q origin main && echo "$(date '+%F %T') pushed $AHEAD commit(s)" >> "$REPO/scripts/auto-push.log"
fi
