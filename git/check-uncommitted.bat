@echo off
setlocal enabledelayedexpansion

set GIT_FOLDER=E:\Dev\Projects\Github
if not exist %GIT_FOLDER% (
    set GIT_FOLDER=D:\WORK\Dev\Github
)

set DIRTY=0

for /f %%f in ('dir /ad /b %GIT_FOLDER%') do (
    cd /d %GIT_FOLDER%\%%f
    git status --porcelain >nul 2>nul
    for /f %%a in ('git status --porcelain') do (
        set DIRTY=1
        goto :DIRTY_FOUND
    )
)

:CHECK_DONE
if "!DIRTY!"=="0" (
    color 0A
    echo =====================================
    echo ALL REPOSITORIES ARE CLEAN
    echo =====================================
    timeout /t 5 /nobreak
    exit
)

:DIRTY_FOUND
color 0C
echo =====================================
echo ERROR: SOME REPOSITORY HAS UNCOMMITTED CODE
echo Repo: %GIT_FOLDER%\%%f
echo =====================================
pause
exit