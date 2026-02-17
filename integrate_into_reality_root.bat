@echo off
setlocal
echo ==========================================
echo    Integrating FRONTEND and BACKEND into REALITY
echo ==========================================
echo.
echo This script will reorganize your project structure as follows:
echo.
echo   Current:
echo     d:\REALITY OS\REALITY  (Frontend Code)
echo     d:\REALITY OS\backend  (Backend Code)
echo.
echo   Target:
echo     d:\REALITY OS\REALITY\frontend
echo     d:\REALITY OS\REALITY\backend
echo.
echo ------------------------------------------
echo CRITICAL: 
echo 1. Stop 'npm run dev' (Ctrl+C) if running.
echo 2. Close ALL files/editors open in 'd:\REALITY OS'.
echo ------------------------------------------
echo.
pause

cd /d "d:\REALITY OS"

:: Check if target structure already exists partially
if exist "REALITY\frontend" (
    echo [INFO] 'REALITY\frontend' already exists. Skipping some steps.
    goto :CHECK_BACKEND
)

:: Step 1: Rename current REALITY folder (which is frontend code) to a temp name
if exist "REALITY" (
    echo Renaming current 'REALITY' folder to 'frontend_temp'...
    ren "REALITY" "frontend_temp"
    if errorlevel 1 (
        echo [ERROR] Failed to rename 'REALITY'. Please close all open files and stop servers!
        pause
        exit /b 1
    )
) else (
    echo [ERROR] 'REALITY' folder not found!
    pause
    exit /b 1
)

:: Step 2: Create new REALITY container folder
if not exist "REALITY" mkdir "REALITY"

:: Step 3: Move frontend_temp into new REALITY folder as 'frontend'
if exist "frontend_temp" (
    echo Moving frontend code into 'REALITY\frontend'...
    move "frontend_temp" "REALITY\frontend"
    if errorlevel 1 (
        echo [ERROR] Failed to move frontend.
        pause
        exit /b 1
    )
)

:CHECK_BACKEND
:: Step 4: Move backend folder into REALITY
if exist "backend" (
    echo Moving 'backend' folder into 'REALITY\backend'...
    move "backend" "REALITY\"
    if errorlevel 1 (
        echo [ERROR] Failed to move backend.
        pause
        exit /b 1
    )
) else (
    if exist "REALITY\backend" (
        echo [INFO] Backend already inside REALITY.
    ) else (
        echo [WARNING] 'backend' folder not found at root.
    )
)

echo.
echo ==========================================
echo    Integration Complete!
echo ==========================================
echo.
echo New Project Structure:
echo   d:\REALITY OS\REALITY\frontend
echo   d:\REALITY OS\REALITY\backend
echo.
echo You can now open 'd:\REALITY OS\REALITY' in VS Code.
echo To run the app:
echo   cd "REALITY\frontend"
echo   npm install
echo   npm run dev
echo.
pause
