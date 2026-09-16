@echo off
chcp 65001 >nul
rem ============================================================
rem  evorule 本地体验包 一键启动 (Windows)
rem  主服务: 127.0.0.1:18080   治理服务: 127.0.0.1:18081
rem ============================================================
cd /d "%~dp0"
if not exist data mkdir data
if not exist data\wal mkdir data\wal

echo ============================================================
echo   evorule 本地体验包   ^|   http://localhost:18080
echo ============================================================
echo.

rem --- 预检: 检测 18080 / 18081 端口是否已被占用 ---
set PORT_IN_USE=0
netstat -ano | findstr ":18080 " | findstr "LISTENING" >nul 2>nul
if not errorlevel 1 set PORT_IN_USE=1
netstat -ano | findstr ":18081 " | findstr "LISTENING" >nul 2>nul
if not errorlevel 1 set PORT_IN_USE=1
if "%PORT_IN_USE%"=="1" (
  echo [提示] 检测到 18080 或 18081 端口已被占用。
  echo        若 evorule 已在运行，直接访问 http://localhost:18080 即可。
  echo        若要重新启动，请先关闭占用端口的程序后再运行本脚本。
  echo.
  start "" "http://localhost:18080"
  pause
  exit /b 0
)

echo [1/3] 启动治理服务 evorule-rule-serve (端口 18081) ...
start "evorule-rule-serve" /min cmd /c "evorule-rule-serve.exe --db .\data\rule.db --port 18081 --secret evorule-demo-secret-2026 --admin-user admin --admin-password evorule-demo --allowed-origins http://localhost:18080,http://127.0.0.1:18080 2>>data\rule-serve-stderr.log"

echo [2/3] 启动主服务 evorule-server (端口 18080) ...
start "evorule-server" /min cmd /c "evorule-server.exe --addr 127.0.0.1:18080 --web-dir web --rules-dir rules --service-registry service_registry.json --core-eval resources\server_eval.json --wal-dir .\data\wal --wal-fsync --insecure-serve 2>>data\server-stderr.log"

echo [3/3] 等待主服务就绪 (最多约 10 秒) ...
set PROBE_OK=0
for /l %%i in (1,1,10) do (
  curl -s -o nul http://127.0.0.1:18080/api/health >nul 2>nul
  if not errorlevel 1 set PROBE_OK=1
  if "%PROBE_OK%"=="1" goto READY
  timeout /t 1 /nobreak >nul
)
:READY
if not "%PROBE_OK%"=="1" (
  echo [错误] 主服务在 10 秒内未就绪，请查看 data\server-stderr.log 排查。
  start notepad data\server-stderr.log
  pause
  exit /b 1
)
echo.
echo 主服务已就绪。正在打开浏览器 http://localhost:18080 ...
start "" "http://localhost:18080"
echo.
echo ============================================================
echo   启动完成。若浏览器未自动打开，请手动访问:
echo        http://localhost:18080
echo.
echo   常见问题:
echo     - 启动失败: 查看 data\server-stderr.log 或
echo                  data\rule-serve-stderr.log
echo     - 关闭服务: 关闭任务栏上标题为
echo                  "evorule-server" 和 "evorule-rule-serve" 的两个最小化窗口
echo ============================================================
echo.
pause
