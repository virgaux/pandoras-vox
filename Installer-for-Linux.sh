echo "----------------------------------------------------------"
echo "       Welcome to Pandoras Vox created by Virgaux."
echo "  Join the discord server https://discord.gg/ADAdMfug"
echo "           Close this window to stop the bot"
echo "----------------------------------------------------------"
if [-e  node_modules] 
then 
	node index.js
else 
	npm install
	node index.js
fi


if [-e  pandoras-vox-linux] 
then 
	rmdir -rf node_modules
	rm -rf index.js
	rm -rf package.json
	rm -rf package-lock.json
	rm -rf README.md
	rm -rf Installer-for-Windows.bat
	read -p "Installation complete. Press any key to continue ..."
	rm -- "$0"
else
	read -p "Installation failed. Press any key to quit ..."
fi

