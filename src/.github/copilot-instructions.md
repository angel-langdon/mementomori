<!-- Use this file to provide workspace-specific custom instructions to Copilot. For more details, visit https://code.visualstudio.com/docs/copilot/copilot-customization#_use-a-githubcopilotinstructionsmd-file -->

# GNOME Shell Extension Development Instructions

This is a GNOME Shell extension project for displaying a memento mori countdown in the Ubuntu top bar.

## Key Points:

- Use GObject for class registration in GNOME Shell extensions
- Follow GNOME Shell extension API patterns
- Use St.Label for text display in the panel
- Use imports.mainloop.timeout_add for periodic updates
- Ensure proper cleanup in destroy() methods
- Use ExtensionUtils for settings management
- GSettings schemas must be compiled before use

## Extension Structure:

- `extension.js` - Main extension logic
- `prefs.js` - Preferences UI
- `metadata.json` - Extension metadata
- `schemas/` - GSettings schema files

## Development Tips:

- Test with `gnome-extensions enable/disable`
- Use `journalctl -f` to view extension logs
- Restart GNOME Shell with Alt+F2 → 'r' after changes
