script_dir=$(dirname "$0")
cmd.exe /c start chrome --new-window --window-size=800,200 --user-data-dir="C:\Temp\chrome_temp2" "$script_dir/countdown.html"