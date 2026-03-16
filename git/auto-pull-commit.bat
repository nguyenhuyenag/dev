@echo off

:: Current folder
set "GIT_FOLDER=%cd%"

for /f %%f in ('dir /ad /b "%GIT_FOLDER%"') do (
    cd /d "%GIT_FOLDER%\%%f"

    if exist ".git" (
        echo Repository: /%%f

        :: Kiểm tra thay đổi local
        git status --porcelain | findstr . >nul
        if not errorlevel 1 (
            git add .
            git commit -m "Auto commit"
            git push
        ) else (
            :: Pull và kiểm tra kết quả
            git pull
        )

        echo.
    )

    cd /d "%GIT_FOLDER%"
)

timeout /t 5 /nobreak
exit
