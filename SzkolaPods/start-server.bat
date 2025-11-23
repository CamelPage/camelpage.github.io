@echo off

start https://0992fm89-3000.euw.devtunnels.ms/

start https://0992fm89-3000.euw.devtunnels.ms/logs/

color 0A

echo Starting server

set "current_time=%TIME%"

set "hour=%current_time:~0,2%"
set "minute=%current_time:~3,2%"
set "second=%current_time:~6,2%"

set "LogTime=%date%-%hour%.%minute%.%second%"

echo INFO  Accepting connections at http://localhost:3000

if not exist "latest.log" (
    echo nil> logs/latest.log
) else (
    echo INFO Renaming logs/Latest.log
    rename logs/latest.log "%LogTime%.log"
    echo nil> logs/latest.log
)

serve -l 3000 >> logs/latest.log

