# Memento Mori Countdown - GNOME Shell Extension

A GNOME Shell extension that displays a seconds countdown in the Ubuntu top bar, inspired by the concept of "memento mori" (remember you will die).

## Features

- Real-time countdown display in the top bar
- Shows seconds with centiseconds precision
- Configurable through GNOME Settings
- Lightweight and performance-optimized
- Based on a 100-year lifespan countdown (2000-2100)

## Installation

### Quick Install

```bash
./install.sh
```

### Manual Installation

1. Copy the extension files to the GNOME Shell extensions directory:

   ```bash
   cp -r * ~/.local/share/gnome-shell/extensions/memento-mori-countdown@example.com/
   ```

2. Compile the GSettings schema:

   ```bash
   glib-compile-schemas ~/.local/share/gnome-shell/extensions/memento-mori-countdown@example.com/schemas/
   ```

3. Restart GNOME Shell:

   - Press `Alt + F2`
   - Type `r` and press Enter
   - Or log out and log back in

4. Enable the extension:
   ```bash
   gnome-extensions enable memento-mori-countdown@example.com
   ```

## Configuration

Access extension preferences through:

- GNOME Extensions app
- Or run: `gnome-extensions prefs memento-mori-countdown@example.com`

Available settings:

- **Update Interval**: How often to refresh the countdown (default: 10ms)
- **Show Centiseconds**: Toggle centiseconds display
- **End Date**: Target date for countdown (default: 2100-06-24)
- **Reference Date**: Starting date for calculations (default: 2000-06-24)

## Uninstallation

```bash
./uninstall.sh
```

Or manually:

```bash
gnome-extensions disable memento-mori-countdown@example.com
rm -rf ~/.local/share/gnome-shell/extensions/memento-mori-countdown@example.com
```

## Development

### File Structure

```
├── extension.js          # Main extension logic
├── prefs.js             # Preferences UI
├── metadata.json        # Extension metadata
├── schemas/             # GSettings schemas
│   └── org.gnome.shell.extensions.memento-mori-countdown.gschema.xml
├── install.sh           # Installation script
├── uninstall.sh         # Uninstallation script
└── README.md           # This file
```

### Testing

- Enable/disable: `gnome-extensions enable/disable memento-mori-countdown@example.com`
- View logs: `journalctl -f`
- Restart GNOME Shell: `Alt + F2` → type `r`

## Compatibility

- GNOME Shell 40+
- Ubuntu 20.04+
- Tested on Ubuntu 22.04 LTS

## Philosophy

This extension serves as a gentle reminder of mortality, encouraging mindful living by displaying the passage of time in real-time. The countdown represents a symbolic 100-year lifespan, helping users maintain perspective on the finite nature of existence.

## License

Free to use and modify. Share the reminder of mortality responsibly.
