@echo off
chcp 65001 >nul

:: Fix credential helper sai path
git config --global credential.helper manager >nul 2>&1

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
            git commit -m "Auto commit %date% %time%"
            git push
        ) else (
            :: Pull và kiểm tra kết quả
            git pull > temp_pull.txt

            findstr /C:"Already up to date." temp_pull.txt >nul
            if not errorlevel 1 (
                echo [OK] Already up to date.
            ) else (
                type temp_pull.txt
            )

            del temp_pull.txt
        )

        echo.
    )

    cd /d "%GIT_FOLDER%"
)

timeout /t 5 /nobreak
exit
