/**
 * Array of all of the events that we support
 */
export const HOTKEY_EVENT_NAMES = ['closeModal'] as const
export type HotkeyEventName = (typeof HOTKEY_EVENT_NAMES)[number]

/**
 * Array of all of the hotkeys that we support
 *
 * Space is a special case because its actually ' ' but we name it space here and will handle it separately
 */
export const KEYDOWN_KEYS = [
  'Space',
  'Backspace',
  'Tab',
  'Enter',
  'Escape',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  'a',
  'b',
  'c',
  'd',
  'e',
  'f',
  'g',
  'h',
  'i',
  'j',
  'k',
  'l',
  'm',
  'n',
  'o',
  'p',
  'q',
  'r',
  's',
  't',
  'u',
  'v',
  'w',
  'x',
  'y',
  'z',
  '0',
  '1',
  '2',
  '3',
  '4',
  '5',
  '6',
  '7',
  '8',
  '9',
  '*',
  '+',
  '-',
  '.',
  '/',
  'F1',
  'F2',
  'F3',
  'F4',
  'F5',
  'F6',
  'F7',
  'F8',
  'F9',
  'F10',
  'F11',
  'F12',
  ';',
  '=',
  ',',
  '-',
  '.',
  '/',
  '`',
  '[',
  '\\',
  ']',
  '',
] as const
export type KeydownKey = (typeof KEYDOWN_KEYS)[number]
