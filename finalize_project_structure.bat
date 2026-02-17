@echo off
echo ==========================================
echo    Finalizing Project Structure Merger
echo ==========================================
echo.
echo This script will rename 'REALITY' to 'frontend' and organize your project.
echo.
echo PLEASE ENSURE:
echo 1. You have STOPPED the 'npm run dev' server (Ctrl+C in terminal).
echo 2. You have CLOSED all files in VS Code or other editors.
echo.
pause

echo.
echo Renaming 'REALITY' folder to 'frontend'...
if exist "REALITY" (
    rename "REALITY" "frontend"
    if errorlevel 1 (
        echo [ERROR] Failed to rename 'REALITY'. Please ensure no files are open and server is stopped.
        pause
        exit /b 1
    ) else (
        echo [SUCCESS] Renamed to 'frontend'.
    )
) else (
    if exist "frontend" (
        echo [INFO] 'frontend' folder already exists. Skipping rename.
    ) else (
        echo [ERROR] Could not find 'REALITY' folder to rename.
    )
)

echo.
echo Cleaning up legacy root files...
if not exist "legacy_backup" mkdir "legacy_backup"
if exist "index.html" move "index.html" "legacy_backup\" >nul
if exist "style.css" move "style.css" "legacy_backup\" >nul
if exist "script.js" move "script.js" "legacy_backup\" >nul
if exist "projects.html" move "projects.html" "legacy_backup\" >nul
echo [SUCCESS] Moved old files to 'legacy_backup'.

echo.
echo ==========================================
echo    Project Merge Complete!
echo ==========================================
echo.
echo New Structure:
echo  - frontend/  (React App: Landing Page + Dashboard)
echo  - backend/   (Node/Express API)
echo.
echo To run the frontend:
echo  cd frontend
echo  npm install
echo  npm run dev
echo.
pause
