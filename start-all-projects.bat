@echo off
echo Starting all projects on different ports...
echo.

echo Starting Find Carrot Game on port 3000...
start "Find Carrot" cmd /k "cd find-carrot && npm start"

echo Starting Netflix Clone on port 3001...
start "Netflix Clone" cmd /k "cd netflix-clone && npm start"

echo Starting Rabris (Tetris) on port 3002...
start "Rabris" cmd /k "cd rabris && npm start"

echo Starting My Portfolio on port 3100...
start "My Portfolio" cmd /k "cd my-portfolio && npm start"

echo.
echo All projects are starting...
echo Find Carrot: http://localhost:3000
echo Netflix Clone: http://localhost:3001
echo Rabris: http://localhost:3002
echo My Portfolio: http://localhost:3100
echo.
pause 