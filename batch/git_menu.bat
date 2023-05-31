@echo off
set GIT_FOLDER=D:\WORK\Dev\Github
if not exist %GIT_FOLDER% (
    set GIT_FOLDER=D:\Dev\Projects\Github
)

:menu
cls
echo ====================================
echo Git Menu
echo ====================================
echo 1. Git pull all
echo 2. Git push all
echo ====================================
set /p choice=Enter choice (1 or 2): 

if "%choice%"=="1" (
    for /f %%f in ('dir /ad /b %GIT_FOLDER%') do (
        echo Pulling from: %GIT_FOLDER%\%%f
        echo;
        cd /d %GIT_FOLDER%\%%f & call git pull & cd ..
        echo;
    )
) else if "%choice%"=="2" (
    for /f %%f in ('dir /ad /b %GIT_FOLDER%') do (
        echo Pushing to: %GIT_FOLDER%\%%f
        echo;
        cd /d %GIT_FOLDER%\%%f & call git push & cd ..
        echo;
    )
) else (
    echo Invalid choice!
    goto menu
)

timeout /t 5 /nobreak
exit
