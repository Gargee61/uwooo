@echo off
echo Creating Unified Project Structure...

if not exist "Reality_Unified" mkdir "Reality_Unified"
if not exist "Reality_Unified\frontend" mkdir "Reality_Unified\frontend"
if not exist "Reality_Unified\backend" mkdir "Reality_Unified\backend"

echo Copying Frontend (excluding node_modules)...
robocopy "REALITY" "Reality_Unified\frontend" /E /XD node_modules .git /S /NFL /NDL /NJH /NJS
if %ERRORLEVEL% GEQ 8 (
    echo [ERROR] Failed to copy frontend files.
    exit /b 1
)

echo Copying Backend (excluding node_modules)...
robocopy "backend" "Reality_Unified\backend" /E /XD node_modules .git /S /NFL /NDL /NJH /NJS
if %ERRORLEVEL% GEQ 8 (
    echo [ERROR] Failed to copy backend files.
    exit /b 1
)

echo.
echo ========================================================
echo [SUCCESS] Created new unified project at:
echo           d:\REALITY OS\Reality_Unified
echo ========================================================
echo.
echo NOTE: Since your original 'REALITY' folder was locked by open files,
echo       I created this copy. Please use this folder from now on.
echo.
echo NEXT STEPS:
echo 1. Close your current VS Code window.
echo 2. Open 'd:\REALITY OS\Reality_Unified' in VS Code.
echo 3. Open terminal in VS Code:
echo    cd frontend && npm install && npm run dev
echo    (In a new terminal) cd backend && npm install && npm start
echo.
pause
