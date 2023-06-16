@echo off

:: Get the parent directory
for %%I in ("%CD%") do set "parentFolder=%%~dpI"
for %%I in ("%CD%\..\") do set "grandparent=%%~fI"

echo Current folder: %CD%
echo Parent folder: %parentFolder%
echo Parent folder: %grandparent%

timeout /t 10 /nobreak
exit
