export const getChildren = (children: JSX.Element[][]) => {
    if (!children) {
        return [];
    }

    if (Array.isArray(children)) {
        return (children as JSX.Element[][]).reduce(
            (arr, next) => arr.concat(next),
            [] as JSX.Element[]
        );
    }

    return [children] as JSX.Element[];
};