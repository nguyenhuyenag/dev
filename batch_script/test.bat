@echo off

REM Get the parent directory
for %%I in ("%CD%") do set "parentFolder=%%~dpI"

echo Current folder: %CD%
echo Parent folder: %parentFolder%

pause