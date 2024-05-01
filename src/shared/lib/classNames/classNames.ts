export type Mods = Record<string, boolean | string | undefined>;
export type Argument = string | Mods | Array<string | undefined> | undefined;

export function classNames(...args: Array<Argument>): string {
    return args
        .map((arg) => {
            if (typeof arg === 'string') {
                return arg;
            }

            if (Array.isArray(arg)) {
                return arg.filter(Boolean).join(' ');
            }

            if (typeof arg === 'object') {
                return Object.entries(arg)
                    .filter(([_, value]) => !!value)
                    .map(([className]) => className)
                    .join(' ');
            }
            return '';
        })
        .join(' ');
}
