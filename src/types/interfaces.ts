export interface PokemonType {
  type: {
    name: string;
  };
}

export interface Pokemon {
  id: number;
  name: string;
  height: number;
  weight: number;
  types: PokemonType[];
}

export interface CardProps {
  children: React.ReactNode;
}

export interface DetailRowProps {
  title: string;
  value?: string;
}

export interface ErrorMessageProps {
  message: string;
}

export interface HeaderProps {
  title: string;
}
