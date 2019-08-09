interface IObject {
  [key: string]: boolean;
}

const condition = (...args: any): string =>
  args
    .flatMap((arg: string | IObject | string[]) =>
      typeof arg === 'string'
        ? arg
        : typeof arg === 'object'
        ? processObject(arg)
        : []
    )
    .join(' ')
    .trim();

// Return the object key based on the condition
const processObject = (obj: IObject | string[]): string[] =>
  Array.isArray(obj)
    ? obj
    : obj !== null
    ? Object.keys(obj).filter((key: string) => obj[key])
    : [];

export default condition;
