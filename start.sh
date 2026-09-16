#!/usr/bin/env bash
# ============================================================
#  evorule 本地体验包 一键启动 (Linux / macOS)
#  主服务: 127.0.0.1:18080   治理服务: 127.0.0.1:18081
# ============================================================
set -e
cd "$(dirname "$0")"
mkdir -p data/wal

echo "================================================"
echo "  evorule 本地体验包  |  http://localhost:18080"
echo "================================================"
echo

# --- 预检: 检测 18080 / 18081 端口是否已被占用 ---
if command -v ss >/dev/null 2>&1; then
  BUSY=$(ss -ltn 2>/dev/null | grep -E ':18080 |:18081 ' || true)
else
  BUSY=$(netstat -ltn 2>/dev/null | grep -E ':18080 |:18081 ' || true)
fi
if [ -n "$BUSY" ]; then
  echo "[提示] 检测到 18080 或 18081 端口已被占用。"
  echo "       若 evorule 已在运行，直接访问 http://localhost:18080 即可。"
  exit 0
fi

echo "[1/3] 启动治理服务 evorule-rule-serve (端口 18081) ..."
nohup ./evorule-rule-serve \
  --db ./data/rule.db --port 18081 \
  --secret evorule-demo-secret-2026 \
  --admin-user admin --admin-password evorule-demo \
  --allowed-origins http://localhost:18080,http://127.0.0.1:18080 \
  2>>data/rule-serve-stderr.log &

echo "[2/3] 启动主服务 evorule-server (端口 18080) ..."
nohup ./evorule-server \
  --addr 127.0.0.1:18080 --web-dir web --rules-dir rules \
  --service-registry service_registry.json \
  --core-eval resources/server_eval.json \
  --wal-dir ./data/wal --wal-fsync --insecure-serve \
  2>>data/server-stderr.log &

echo "[3/3] 等待主服务就绪 (最多约 10 秒) ..."
PROBE_OK=0
for i in $(seq 1 10); do
  if curl -s -o /dev/null http://127.0.0.1:18080/api/health; then
    PROBE_OK=1; break
  fi
  sleep 1
done
if [ "$PROBE_OK" != "1" ]; then
  echo "[错误] 主服务在 10 秒内未就绪，请查看 data/server-stderr.log 排查。"
  exit 1
fi

echo
echo "主服务已就绪。请用浏览器访问: http://localhost:18080"
echo
echo "=================================================="
echo "  常见问题:"
echo "    - 启动失败: 查看 data/server-stderr.log 或"
echo "                data/rule-serve-stderr.log"
echo "    - 关闭服务: pkill -f evorule-server ; pkill -f evorule-rule-serve"
echo "=================================================="
