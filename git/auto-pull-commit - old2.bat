@echo off
chcp 65001 >nul

:: Current folder
set "GIT_FOLDER=%cd%"

for /f %%f in ('dir /ad /b "%GIT_FOLDER%"') do (
    cd /d "%GIT_FOLDER%\%%f"

    if exist ".git" (
        echo Repository: %%f

        :: Pull trước
        git pull

        :: Kiểm tra thay đổi local sau khi pull
        git status --porcelain | findstr . >nul
        if not errorlevel 1 (
            git add .
            git commit -m "Auto commit"
            git push
        )

        echo.
    )

    cd /d "%GIT_FOLDER%"
)

timeout /t 5 /nobreak
exit