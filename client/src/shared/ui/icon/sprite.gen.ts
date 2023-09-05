export interface SpritesMap {
  sprite:
    | 'burger'
    | 'chevron'
    | 'warning-alert'
    | 'logo-no-text'
    | 'logo-text-down'
    | 'logo-text-right';
}
export const SPRITES_META = {
  sprite: [
    'burger',
    'chevron',
    'warning-alert',
    'logo-no-text',
    'logo-text-down',
    'logo-text-right',
  ],
} satisfies {
  sprite: Array<
    | 'burger'
    | 'chevron'
    | 'warning-alert'
    | 'logo-no-text'
    | 'logo-text-down'
    | 'logo-text-right'
  >;
};
