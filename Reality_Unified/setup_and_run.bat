@echo off
echo ===================================================
echo   Setting up and Running Reality Unified Project
echo ===================================================

cd /d "%~dp0"

echo.
echo [1/4] Checking Frontend dependencies...
if not exist "frontend\node_modules" (
    echo Installing frontend dependencies (this may take a minute)...
    cd frontend
    call npm install
    cd ..
) else (
    echo Frontend dependencies already installed.
)

echo.
echo [2/4] Checking Backend dependencies...
if not exist "backend\node_modules" (
    echo Installing backend dependencies...
    cd backend
    call npm install
    cd ..
) else (
    echo Backend dependencies already installed.
)

echo.
echo [3/4] Starting Backend Server...
start "REALITY Backend" cmd /k "cd backend && npm start"

echo.
echo [4/4] Starting Frontend Server...
start "REALITY Frontend" cmd /k "cd frontend && npm run dev"

echo.
echo ===================================================
echo   Project is Running!
echo   - Backend: Check the 'REALITY Backend' window.
echo   - Frontend: Check the 'REALITY Frontend' window.
echo ===================================================
pause
