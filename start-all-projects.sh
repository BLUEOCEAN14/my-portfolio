#!/bin/bash

echo "Starting all projects on different ports..."
echo

echo "Starting Find Carrot Game on port 3000..."
cd find-carrot && PORT=3000 npm start &
sleep 3

echo "Starting Netflix Clone on port 3001..."
cd ../netflix-clone && PORT=3001 npm start &
sleep 3

echo "Starting Rabris (Tetris) on port 3002..."
cd ../rabris && PORT=3002 npm start &
sleep 3

echo "Starting My Portfolio on port 3100..."
cd ../my-portfolio && PORT=3100 npm start &
sleep 3

echo
echo "All projects are starting..."
echo "Find Carrot: http://localhost:3000"
echo "Netflix Clone: http://localhost:3001"
echo "Rabris: http://localhost:3002"
echo "My Portfolio: http://localhost:3100"
echo
echo "Press Ctrl+C to stop all projects"
echo

# Wait for all background processes
wait 