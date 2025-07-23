import Adw from "gi://Adw";
import Gtk from "gi://Gtk";
import Gio from "gi://Gio";

import { ExtensionPreferences } from "resource:///org/gnome/Shell/Extensions/js/extensions/prefs.js";

export default class MementoMoriPreferences extends ExtensionPreferences {
  fillPreferencesWindow(window) {
    const settings = this.getSettings(
      "org.gnome.shell.extensions.memento-mori-countdown"
    );

    const page = new Adw.PreferencesPage({
      title: "General",
      icon_name: "dialog-information-symbolic",
    });
    window.add(page);

    const group = new Adw.PreferencesGroup({
      title: "Countdown Settings",
      description: "Configure your memento mori countdown",
    });
    page.add(group);

    const updateIntervalRow = new Adw.SpinRow({
      title: "Update Interval (ms)",
      subtitle: "How often to update the countdown display",
      adjustment: new Gtk.Adjustment({
        lower: 10,
        upper: 1000,
        step_increment: 10,
      }),
    });

    settings.bind(
      "update-interval",
      updateIntervalRow,
      "value",
      Gio.SettingsBindFlags.DEFAULT
    );

    group.add(updateIntervalRow);

    const showCentisecondsRow = new Adw.SwitchRow({
      title: "Show Centiseconds",
      subtitle: "Display centiseconds in the countdown",
    });

    settings.bind(
      "show-centiseconds",
      showCentisecondsRow,
      "active",
      Gio.SettingsBindFlags.DEFAULT
    );

    group.add(showCentisecondsRow);

    const endDateRow = new Adw.EntryRow({
      title: "End Date",
      subtitle: "Target date for countdown (YYYY-MM-DD)",
    });

    settings.bind(
      "end-date",
      endDateRow,
      "text",
      Gio.SettingsBindFlags.DEFAULT
    );

    group.add(endDateRow);

    const referenceDateRow = new Adw.EntryRow({
      title: "Reference Date",
      subtitle: "Starting date for percentage calculations (YYYY-MM-DD)",
    });

    settings.bind(
      "reference-date",
      referenceDateRow,
      "text",
      Gio.SettingsBindFlags.DEFAULT
    );

    group.add(referenceDateRow);
  }
}
