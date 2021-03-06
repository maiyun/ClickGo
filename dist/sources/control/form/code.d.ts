export declare let props: {
    icon: {
        default: string;
    };
    title: {
        default: string;
    };
    min: {
        default: boolean;
    };
    max: {
        default: boolean;
    };
    close: {
        default: boolean;
    };
    stateMax: {
        default: boolean;
    };
    stateMin: {
        default: boolean;
    };
    width: {
        default: number;
    };
    height: {
        default: number;
    };
    left: {
        default: number;
    };
    top: {
        default: number;
    };
    zIndex: {
        default: number;
    };
    minWidth: {
        default: number;
    };
    minHeight: {
        default: number;
    };
    resize: {
        default: boolean;
    };
    border: {
        default: string;
    };
    background: {
        default: undefined;
    };
    padding: {
        default: undefined;
    };
    direction: {
        default: string;
    };
};
export declare let data: {
    stateMaxData: boolean;
    stateMinData: boolean;
    stateAbs: boolean;
    iconData: undefined;
    widthData: number;
    heightData: number;
    leftData: number;
    topData: number;
    zIndexData: number;
    historyLocation: {
        width: number;
        height: number;
        left: number;
        top: number;
    };
    maskFor: undefined;
    maskFrom: undefined;
    flashTimer: undefined;
};
export declare let watch: {
    icon: {
        handler: (this: IVueControl) => Promise<void>;
        immediate: boolean;
    };
    title: (this: IVueControl) => void;
    stateMin: (this: IVueControl) => void;
    stateMax: (this: IVueControl) => void;
    width: (this: IVueControl) => void;
    height: (this: IVueControl) => void;
    left: (this: IVueControl) => void;
    top: (this: IVueControl) => void;
    zIndex: (this: IVueControl) => void;
};
export declare let methods: {
    moveMethod: (this: IVueControl, e: MouseEvent | TouchEvent) => void;
    minMethod: (this: IVueControl) => boolean;
    maxVMethod: (this: IVueControl, dbl: boolean) => void;
    maxMethod: (this: IVueControl) => boolean;
    closeMethod: (this: IVueControl) => void;
    resizeMethod: (this: IVueControl, e: MouseEvent | TouchEvent, border: TCGBorder) => void;
    maskDown: (this: IVueControl, e: MouseEvent | TouchEvent) => void;
    setPropData: (this: IVueControl, name: string, val: number, mode?: string) => void;
};
export declare let mounted: (this: IVueControl) => void;
