export { };

declare global {
    interface Array<T> {
        clear(): boolean;
    }
}

Array.prototype.clear = function () {
    const that = this;
    that.length = 0
    return this;
}