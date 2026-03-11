@echo off

:: Current folder
set "GIT_FOLDER=%cd%"

for /f %%f in ('dir /ad /b %GIT_FOLDER%') do (
	echo Pulling from: %GIT_FOLDER%\%%f
	echo;
	cd /d %GIT_FOLDER%\%%f & call git pull & cd ..
	echo;
)
timeout /t 5 /nobreak
exit
