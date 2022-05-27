export type Pipe<T> = (item: T) => T;

export type Next<T> = {
    pipe: (pipe: Pipe<T>) => Next<T>
};

export const pipe = <T>(before: T) => {
    return (fn?: Pipe<T>): Next<T> => {
        // TODO: closure. mem leaks???
        return {
            pipe: pipe(fn ? fn(before) : before)
        }
    };
};
