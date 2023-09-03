export interface SpritesMap {
  sprite:
    | 'burger'
    | 'chevron'
    | 'logo-no-text'
    | 'logo-text-down'
    | 'logo-text-right';
}
export const SPRITES_META = {
  sprite: [
    'burger',
    'chevron',
    'logo-no-text',
    'logo-text-down',
    'logo-text-right',
  ],
} satisfies {
  sprite: Array<
    'burger' | 'chevron' | 'logo-no-text' | 'logo-text-down' | 'logo-text-right'
  >;
};
