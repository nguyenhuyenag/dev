@echo off

:: Current folder
set "GIT_FOLDER=%cd%"

for /f %%f in ('dir /ad /b "%GIT_FOLDER%"') do (
    cd /d "%GIT_FOLDER%\%%f"

    if exist ".git" (
        echo Repo: /%%f

        :: Commit tất cả nếu có thay đổi
        git add .
        git diff --cached --quiet
        if errorlevel 1 (
            echo Committing changes...
            git commit -m "Auto commit before pull"
        )

        echo Pulling...
        git pull
        echo.
    )

    cd /d "%GIT_FOLDER%"
)

timeout /t 5 /nobreak
exit
