export interface SpritesMap {
  sprite:
    | 'alert-circle'
    | 'burger'
    | 'chevron'
    | 'search'
    | 'warning-alert'
    | 'logo-no-text'
    | 'logo-text-down'
    | 'logo-text-right';
}
export const SPRITES_META = {
  sprite: [
    'alert-circle',
    'burger',
    'chevron',
    'search',
    'warning-alert',
    'logo-no-text',
    'logo-text-down',
    'logo-text-right',
  ],
} satisfies {
  sprite: Array<
    | 'alert-circle'
    | 'burger'
    | 'chevron'
    | 'search'
    | 'warning-alert'
    | 'logo-no-text'
    | 'logo-text-down'
    | 'logo-text-right'
  >;
};
