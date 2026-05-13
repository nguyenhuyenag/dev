@echo off
setlocal

set INPUT_FILE=input.txt
set OUTPUT_FILE=output.txt

if exist "%OUTPUT_FILE%" del "%OUTPUT_FILE%"

REM Bỏ qua dòng đầu tiên
for /f "usebackq skip=1 tokens=1,2,3,4 delims=," %%a in ("%INPUT_FILE%") do (

    REM Kiểm tra file jar tồn tại
    if exist "%~dp0%%a" (
        echo Installing %%a ...
        mvn install:install-file ^
        -Dfile="%~dp0%%a" ^
        -DgroupId=%%b ^
        -DartifactId=%%c ^
        -Dversion=%%d ^
        -Dpackaging=jar

        (
            echo ^<dependency^>
            echo     ^<groupId^>%%b^</groupId^>
            echo     ^<artifactId^>%%c^</artifactId^>
            echo     ^<version^>%%d^</version^>
            echo     ^<scope^>system^</scope^>
            echo     ^<systemPath^>${basedir}/lib/%%a^</systemPath^>
            echo ^</dependency^>
            echo.
        )>> "%OUTPUT_FILE%"

    ) else (
        echo [WARNING] File not found: %%a
    )
)

echo.
echo Done!
pause