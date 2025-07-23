#!/bin/bash

EXTENSION_UUID="memento-mori-countdown@example.com"
EXTENSION_DIR="$HOME/.local/share/gnome-shell/extensions/$EXTENSION_UUID"

echo "Installing Memento Mori Countdown GNOME Shell Extension..."

mkdir -p "$EXTENSION_DIR"

cp -r * "$EXTENSION_DIR/"

if [ -d "schemas" ]; then
    echo "Compiling GSettings schemas..."
    glib-compile-schemas "$EXTENSION_DIR/schemas/"
fi

echo "Extension installed to: $EXTENSION_DIR"
echo ""
echo "To enable the extension:"
echo "1. Log out and log back in (or restart GNOME Shell with Alt+F2, then type 'r')"
echo "2. Run: gnome-extensions enable $EXTENSION_UUID"
echo "3. Or use GNOME Extensions app to enable it"
echo ""
echo "The countdown should now appear in your top bar!"
