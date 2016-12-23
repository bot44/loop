interface Loop {
    (fn: () => any, times?: number): Promise<any>;
}

declare const loop: Loop;

export = loop;
