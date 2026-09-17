'use client';

/**
 * Disabled: this used to attach a cursor-follow "magnetic" pull to CTA buttons
 * and /contact links on every page, but the drift read as jittery/unstable
 * rather than polished, so buttons and links now stay static on hover
 * everywhere. Kept as a no-op component (rather than removed from
 * PublicShell) so it's a one-line revert if a subtler version is wanted later.
 */
export function GlobalMagnetic() {
  return null;
}
