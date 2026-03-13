@echo off
chcp 65001 >nul
setlocal enabledelayedexpansion

:: Current folder
set "GIT_FOLDER=%cd%"

for /f %%f in ('dir /ad /b "%GIT_FOLDER%"') do (
    cd /d "%GIT_FOLDER%\%%f"

    if exist ".git" (
        echo Repository: /%%f

        :: Kiểm tra thay đổi local
        git status --porcelain >nul 2>&1
        for /f %%a in ('git status --porcelain') do set changed=1

        if defined changed (
            echo [COMMIT] Local changes detected
            git add .
            git commit -m "Auto commit %date% %time%"
            git push
            set changed=
        ) else (
            echo [SYNC] Pulling...
            git pull
        )

        echo.
    )

    cd /d "%GIT_FOLDER%"
)

timeout /t 5 /nobreak >nul
exit
