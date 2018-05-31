// @flow

export function pathPrefix(prefix: string): (location: Location) => boolean {
    return (location: Location): boolean => {
        return location.pathname.startsWith(prefix);
    };
}

