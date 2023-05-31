@echo off
set GIT_FOLDER=D:\WORK\Dev\Github
if not exist %GIT_FOLDER% (
	set GIT_FOLDER=D:\Dev\Projects\Github
)
for /f %%f in ('dir /ad /b %GIT_FOLDER%') do (
	echo Pulling from: %GIT_FOLDER%\%%f
	echo;
	cd /d %GIT_FOLDER%\%%f & call git pull & cd ..
	echo;
)
timeout /t 5 /nobreak
exit
