@echo off

:: Current folder
set "GIT_FOLDER=%cd%"

for /f %%f in ('dir /ad /b "%GIT_FOLDER%"') do (
    cd /d "%GIT_FOLDER%\%%f"

    if exist ".git" (
        echo Repository: /%%f

        :: Kiểm tra thay đổi
        git status --porcelain > temp_status.txt

        for %%A in (temp_status.txt) do set size=%%~zA

        if %size% GTR 0 (
            echo [INFO] Changes detected. Auto commit & push...

            git add .
            git commit -m "Auto commit"
            git push
        ) else (
            echo [INFO] No local changes. Pulling...

            git pull > temp_pull.txt

            findstr /C:"Already up to date." temp_pull.txt >nul
            if not errorlevel 1 (
                echo [OK] Already up to date.
            ) else (
                type temp_pull.txt
            )

            del temp_pull.txt
        )

        del temp_status.txt
        echo.
    )

    cd /d "%GIT_FOLDER%"
)

timeout /t 5 /nobreak
exit
