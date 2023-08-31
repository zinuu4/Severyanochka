export interface SpritesMap {
  sprite: 'burger' | 'logo-no-text' | 'logo-text-down' | 'logo-text-right';
}
export const SPRITES_META = {
  sprite: ['burger', 'logo-no-text', 'logo-text-down', 'logo-text-right'],
} satisfies {
  sprite: Array<
    'burger' | 'logo-no-text' | 'logo-text-down' | 'logo-text-right'
  >;
};
