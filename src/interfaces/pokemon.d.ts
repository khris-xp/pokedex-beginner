export interface IPokemon {
    name: string;
    id: number;
    image: string;
}

export interface IPokemonDetails {
    abilities: IAbility[]
    base_experience: number
    forms: IForm[]
    game_indices: IIndex[]
    height: number
    held_items: any[]
    id: number
    is_default: boolean
    location_area_encounters: string
    moves: IMfe[]
    name: string
    order: number
    past_types: any[]
    species: ISpecies
    sprites: ISprites
    stats: IStat[]
    types: IType[]
    weight: number
}

export interface IAbility {
    ability: IAbility2
    is_hidden: boolean
    slot: number
}

export interface IAbility2 {
    name: string
    url: string
}

export interface IForm {
    name: string
    url: string
}

export interface IIndex {
    game_index: number
    version: IVersion
}

export interface IVersion {
    name: string
    url: string
}

export interface IMfe {
    move: IMove
    version_group_details: IVersionGroupDetail[]
}

export interface IMove {
    name: string
    url: string
}

export interface IVersionGroupDetail {
    level_learned_at: number
    move_learn_method: IMoveLearnMethod
    version_group: IVersionGroup
}

export interface IMoveLearnMethod {
    name: string
    url: string
}

export interface IVersionGroup {
    name: string
    url: string
}

export interface ISpecies {
    name: string
    url: string
}

export interface ISprites {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
    other: IOther
    versions: IVersions
}

export interface IOther {
    dream_world: IDreamWorld
    home: IHome
    "official-artwork": IOfficialArtwork
}

export interface IDreamWorld {
    front_default: string
    front_female: any
}

export interface IHome {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}

export interface IOfficialArtwork {
    front_default: string
    front_shiny: string
}

export interface IVersions {
    "generation-i": IGenerationI
    "generation-ii": IGenerationIi
    "generation-iii": IGenerationIii
    "generation-iv": IGenerationIv
    "generation-v": IGenerationV
    "generation-vi": IGenerationVi
    "generation-vii": IGenerationVii
    "generation-viii": IGenerationViii
}

export interface IGenerationI {
    "red-blue": IRedBlue
    yellow: IYellow
}

export interface IRedBlue {
    back_default: string
    back_gray: string
    back_transparent: string
    front_default: string
    front_gray: string
    front_transparent: string
}

export interface IYellow {
    back_default: string
    back_gray: string
    back_transparent: string
    front_default: string
    front_gray: string
    front_transparent: string
}

export interface IGenerationIi {
    crystal: ICrystal
    gold: IGold
    silver: ISilver
}

export interface ICrystal {
    back_default: string
    back_shiny: string
    back_shiny_transparent: string
    back_transparent: string
    front_default: string
    front_shiny: string
    front_shiny_transparent: string
    front_transparent: string
}

export interface IGold {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    front_transparent: string
}

export interface ISilver {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
    front_transparent: string
}

export interface IGenerationIii {
    emerald: IEmerald
    "firered-leafgreen": IFireredLeafgreen
    "ruby-sapphire": IRubySapphire
}

export interface IEmerald {
    front_default: string
    front_shiny: string
}

export interface IFireredLeafgreen {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
}

export interface IRubySapphire {
    back_default: string
    back_shiny: string
    front_default: string
    front_shiny: string
}

export interface IGenerationIv {
    "diamond-pearl": IDiamondPearl
    "heartgold-soulsilver": IHeartgoldSoulsilver
    platinum: IPlatinum
}

export interface IDiamondPearl {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}

export interface IHeartgoldSoulsilver {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}

export interface IPlatinum {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}

export interface IGenerationV {
    "black-white": IBlackWhite
}

export interface IBlackWhite {
    animated: Animated
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}

export interface IAnimated {
    back_default: string
    back_female: any
    back_shiny: string
    back_shiny_female: any
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}

export interface IGenerationVi {
    "omegaruby-alphasapphire": IOmegarubyAlphasapphire
    "x-y": IXY
}

export interface IOmegarubyAlphasapphire {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}

export interface IXY {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}

export interface IGenerationVii {
    icons: IIcons
    "ultra-sun-ultra-moon": IUltraSunUltraMoon
}

export interface IIcons {
    front_default: string
    front_female: any
}

export interface IUltraSunUltraMoon {
    front_default: string
    front_female: any
    front_shiny: string
    front_shiny_female: any
}

export interface IGenerationViii {
    icons: IIcons2
}

export interface IIcons2 {
    front_default: string
    front_female: any
}

export interface IStat {
    base_stat: number
    effort: number
    stat: Stat2
}

export interface IStat2 {
    name: string
    url: string
}

export interface IType {
    slot: number
    type: IType2
}

export interface IType2 {
    name: string
    url: string
}
