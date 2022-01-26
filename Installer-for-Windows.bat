@echo off
echo ----------------------------------------------------------
echo        Welcome to Pandoras Vox created by Virgaux.
echo   Join the discord server https://discord.gg/ADAdMfug
echo            Close this window to stop the bot
echo ----------------------------------------------------------
pause. >nul | echo. Please press anything to continue the installation.
echo.

if exist node_modules (
  call node index.js
) else (
  call npm install
  call node index.js
)

if exist pandoras-vox-windows (
	rmdir /s /q node_modules
	DEL index.js
	DEL package.json
	DEL package-lock.json
	DEL README.md
	DEL Installer-for-Linux.sh
	PAUSE
	del %0
) else (
  echo Installation failed. 
  echo.
  pause. >nul | echo. Press anything to exit.
)