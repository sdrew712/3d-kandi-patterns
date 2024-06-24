export type Pattern = Plane[];

export type Plane = {
  x: number;
  y: number;
  z?: number;
  color: string;
  location?: Location;
};

//todo: define Location type
export type Location = any;
