import { Extension } from "resource:///org/gnome/shell/extensions/extension.js";
import * as Main from "resource:///org/gnome/shell/ui/main.js";
import { Button } from "resource:///org/gnome/shell/ui/panelMenu.js";

import GObject from "gi://GObject";
import St from "gi://St";
import Clutter from "gi://Clutter";
import GLib from "gi://GLib";

const MILLISECONDS_PER_SECOND = 1000;
const CENTISECONDS_DIVISOR = 10;

const END_TIMESTAMP = new Date(2099, 1, 1, 0, 0, 0).getTime();

const CountdownIndicator = GObject.registerClass(
  class CountdownIndicator extends Button {
    _init() {
      super._init(0.0, "Memento Mori Countdown");

      this._label = new St.Label({
        text: "Loading...",
        y_align: Clutter.ActorAlign.CENTER,
        style_class: "countdown-label",
      });

      this.add_child(this._label);

      this._timeout = null;
      this._updateCountdown();
    }

    _updateCountdown() {
      const currentTime = Date.now();
      const milliseconds = END_TIMESTAMP - currentTime;

      if (milliseconds < 0) {
        this._label.set_text("TIME'S UP!");
        return false;
      }

      const seconds = Math.floor(milliseconds / MILLISECONDS_PER_SECOND);
      const centiseconds = Math.floor(
        (milliseconds % MILLISECONDS_PER_SECOND) / CENTISECONDS_DIVISOR
      );

      const formattedSeconds = seconds.toLocaleString();
      const formattedCentiseconds = centiseconds.toString().padStart(2, "0");

      this._label.set_text(`${formattedSeconds}.${formattedCentiseconds}`);

      this._timeout = GLib.timeout_add(GLib.PRIORITY_DEFAULT, 10, () => {
        this._updateCountdown();
        return false;
      });

      return false;
    }

    destroy() {
      if (this._timeout) {
        GLib.source_remove(this._timeout);
        this._timeout = null;
      }
      super.destroy();
    }
  }
);

export default class MementoMoriExtension extends Extension {
  constructor(metadata) {
    super(metadata);
    this._indicator = null;
  }

  enable() {
    this._indicator = new CountdownIndicator();
    Main.panel.addToStatusArea(this.uuid, this._indicator);
  }

  disable() {
    if (this._indicator) {
      this._indicator.destroy();
      this._indicator = null;
    }
  }
}
