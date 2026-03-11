@echo off

:: Current folder
set "GIT_FOLDER=%cd%"

for /f %%f in ('dir /ad /b "%GIT_FOLDER%"') do (
    cd /d "%GIT_FOLDER%\%%f"

    if exist ".git" (
        echo Repo: /%%f

        :: Xóa git lock nếu tồn tại
        if exist ".git\index.lock" (
            echo Removing stale git lock...
            del ".git\index.lock"
        )

        :: Commit nếu có thay đổi
        git add .
        git diff --cached --quiet
        if errorlevel 1 (
            git commit -m "Auto commit"
        )

        echo Pulling...
        git pull
        echo.
    )

    cd /d "%GIT_FOLDER%"
)

timeout /t 5 /nobreak
exit
