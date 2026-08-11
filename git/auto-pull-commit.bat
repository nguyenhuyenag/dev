@echo off
chcp 65001 >nul

:: Current folder
set "GIT_FOLDER=%cd%"
set /a COUNT=0

echo.

for /f %%f in ('dir /ad /b "%GIT_FOLDER%"') do (
    call :process_repo "%%f"
)

cd /d "%GIT_FOLDER%"

echo.
timeout /t 3 /nobreak
exit /b

:process_repo
set "REPO=%~1"

cd /d "%GIT_FOLDER%\%REPO%"

if not exist ".git" (
    exit /b
)

set /a COUNT+=1

echo (%COUNT%) Repository: /%REPO%

:: Pull
:: Disable automatic garbage collection
git -c gc.auto=0 pull

if errorlevel 1 (
    echo [ERROR] Pull failed: /%REPO%
    echo.
    exit /b
)

:: Check local changes
git status --porcelain | findstr . >nul

if not errorlevel 1 (
    git add .

    :: Check staged changes
    git diff --cached --quiet

    if errorlevel 1 (
        git commit -m "Auto commit"

        if errorlevel 1 (
            echo [ERROR] Commit failed: /%REPO%
            echo.
            exit /b
        )

        git push

        if errorlevel 1 (
            echo [ERROR] Push failed: /%REPO%
            echo.
            exit /b
        )

        echo Push successful.
    )
)

echo.
exit /b
