declare module "*.jpg" {
  const value: string;
  export = value;
}

declare module "*.jpeg" {
  const value: string;
  export = value;
}

declare module "*.gif" {
  const value: string;
  export = value;
}

declare module "*.svg" {
  const value: string;
  export = value;
}

declare module "*.png" {
  const value: string;
  export = value;
}

declare module "*.css" {
  const classes: { [key: string]: string };
  export = classes;
}

declare module "*.scss" {
  const classes: { [key: string]: string };
  export = classes;
}

declare module "*.module.css" {
  const classes: { [key: string]: string };
  export = classes;
}

declare module "*.module.scss" {
  const classes: { [key: string]: string };
  export = classes;
}

declare module "*.ico" {
  const value: any;
  export = value;
}
