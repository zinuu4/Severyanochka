export interface SpritesMap {
  sprite: 'logo-no-text' | 'logo-text-down' | 'logo-text-right';
}
export const SPRITES_META = {
  sprite: ['logo-no-text', 'logo-text-down', 'logo-text-right'],
} satisfies {
  sprite: Array<'logo-no-text' | 'logo-text-down' | 'logo-text-right'>;
};
