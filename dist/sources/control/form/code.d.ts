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
};
export declare let data: {
    stateMaxData: boolean;
    stateMinData: boolean;
    stateAbs: boolean;
    iconData: string;
    widthData: number;
    heightData: number;
    leftData: number;
    topData: number;
    zIndexData: number;
    historyLocationMove: {
        width: number;
        height: number;
        left: number;
        top: number;
    };
    historyLocationMax: {
        width: number;
        height: number;
        left: number;
        top: number;
    };
    historyLocationMin: {
        width: number;
        height: number;
        left: number;
        top: number;
    };
};
export declare let watch: {
    icon: {
        handler: (this: IVue) => Promise<void>;
        immediate: boolean;
    };
    title: (this: IVue) => void;
    stateMin: (this: IVue) => void;
    stateMax: (this: IVue) => void;
    width: (this: IVue) => void;
    height: (this: IVue) => void;
    left: (this: IVue) => void;
    top: (this: IVue) => void;
    zIndex: (this: IVue) => void;
};
export declare let methods: {
    moveMethod: (this: IVue, e: MouseEvent | TouchEvent) => void;
    minMethod: (this: IVue) => boolean;
    maxMethod: (this: IVue) => boolean;
    closeMethod: (this: IVue) => void;
    resizeMethod: (this: IVue, e: MouseEvent | TouchEvent, dir: TBorderDir) => void;
    setPropData: (this: IVue, name: string, val: number, mode?: string) => void;
};
export declare let mounted: (this: IVue) => void;