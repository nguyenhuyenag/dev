@echo off
setlocal enabledelayedexpansion

:: Current folder
set "GIT_FOLDER=%cd%"

set DIRTY=0

for /f %%f in ('dir /ad /b "%GIT_FOLDER%"') do (
    cd /d "%GIT_FOLDER%\%%f"

    git status --porcelain | findstr . >nul
    if not errorlevel 1 (
        if !DIRTY! == 0 (
            color 0C
            echo =====================================
            echo REPOS WITH UNCOMMITTED CHANGES
            echo =====================================
        )
        set DIRTY=1
        echo /%%f
    )
)

if %DIRTY%==0 (
    color 0A
    echo =====================================
    echo ALL REPOSITORIES ARE CLEAN
    echo =====================================
    timeout /t 5 /nobreak
) else (
    echo.
    echo =====================================
    echo PLEASE COMMIT YOUR CHANGES
    echo =====================================
    pause
)

exit