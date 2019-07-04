Xvfb :19 -screen 0 1024x768x16 &
export DISPLAY=:19
/app/.vscode-test/vscode-1.35.1/VSCode-linux-x64/code /app/testing --extensionDevelopmentPath=/app/ --extensionTestsPath=/app/test --locale=en 

