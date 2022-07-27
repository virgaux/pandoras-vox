@echo off
echo ----------------------------------------------------------
echo        Welcome to Pandoras Vox created by Virgaux.
echo   Join the discord server https://discord.gg/UfMfTj2zb8
echo            Close this window to stop the bot
echo ----------------------------------------------------------
pause. >nul | echo. Please press anything to continue the installation.
echo.
echo Installing NodeJS and Git. Please wait.
call winget install OpenJS.NodeJS
if %ERRORLEVEL% NEQ 0 goto installChoco
call npm install -g npm@latest
call winget install --id Git.Git -e --source winget
goto installIndex
echo.

:installChoco
echo.
echo Unable to install NodeJs using winget. Attemping install necessary application using chocolatey. Please Wait.
call cmd /c @"%SystemRoot%\System32\WindowsPowerShell\v1.0\powershell.exe" -NoProfile -InputFormat None -ExecutionPolicy Bypass -Command "[System.Net.ServicePointManager]::SecurityProtocol = 3072; iex ((New-Object System.Net.WebClient).DownloadString('https://community.chocolatey.org/install.ps1'))" && SET "PATH=%PATH%;%ALLUSERSPROFILE%\chocolatey\bin"
call Powershell.exe -Command "& {Start-Process Powershell.exe 'choco install -y powershell git nodejs' -Verb RunAs}"
call npm install -g npm@latest 
echo Installation of applications complete!
echo.
:installIndex
cls
echo ----------------------------------------------------------
echo        Welcome to Pandoras Vox created by Virgaux.
echo   Join the discord server https://discord.gg/UfMfTj2zb8
echo            Close this window to stop the bot
echo ----------------------------------------------------------
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