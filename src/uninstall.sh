#!/bin/bash

EXTENSION_UUID="memento-mori-countdown@example.com"

echo "Uninstalling Memento Mori Countdown GNOME Shell Extension..."

gnome-extensions disable "$EXTENSION_UUID" 2>/dev/null

rm -rf "$HOME/.local/share/gnome-shell/extensions/$EXTENSION_UUID"

echo "Extension uninstalled successfully!"
echo "You may need to restart GNOME Shell (Alt+F2, then type 'r') for changes to take effect."
