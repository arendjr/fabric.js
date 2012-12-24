/*! Fabric.js Copyright 2008-2012, Printio (Juriy Zaytsev, Maxim Chernyak) */

var fabric = fabric || { version: "0.9.35" };

fabric.document = document;
fabric.window = window;

/**
 * True when in environment that supports touch events
 * @property isTouchSupported
 * @type boolean
 */
fabric.isTouchSupported = "ontouchstart" in fabric.document.documentElement;
