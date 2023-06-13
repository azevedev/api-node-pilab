
const objForEach = <T>(obj: T, f: (k: keyof T, v: T[keyof T]) => void): void => {
    for (const k in obj) {
        if (Object.prototype.hasOwnProperty.call(obj, k)) {
            f(k, obj[k]);
        }
    }
};

export { objForEach };