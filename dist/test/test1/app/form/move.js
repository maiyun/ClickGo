"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = exports.data = void 0;
exports.data = {
    'b1p': {
        'left': 0,
        'top': 0
    },
    'b2p': {
        'left': 0,
        'top': 0
    },
    'b2po': {
        'left': 0,
        'top': 0
    },
    'b3p': {
        'left': 0,
        'top': 0
    },
};
exports.methods = {
    b1Down: function (e) {
        clickgo.dom.bindMove(e, {
            'areaObject': this.$refs.o1,
            'object': this.$refs.b1,
            'move': (ox, oy) => {
                this.b1p.left += ox;
                this.b1p.top += oy;
            }
        });
    },
    b2Down: function (e) {
        let r = this.$refs.b2.$el.getBoundingClientRect();
        let rectWidth = 0, rectHeight = 0;
        let rect = clickgo.dom.bindMove(e, {
            'areaObject': this.$refs.o2,
            'object': this.$refs.b2,
            'move': (ox, oy) => {
                this.b2po.left += ox;
                this.b2po.top += oy;
                this.b2p.left = this.b2po.left / rectWidth * 100;
                this.b2p.top = this.b2po.top / rectHeight * 100;
            }
        });
        rectWidth = rect.right - rect.left;
        rectHeight = rect.bottom - rect.top;
        this.b2po.left = r.left - rect.left;
        this.b2po.top = r.top - rect.top;
    },
    b3Down: function (e) {
        clickgo.dom.bindMove(e, {
            'areaObject': this.$refs.o3,
            'object': this.$refs.b3,
            'move': (ox, oy) => {
                this.b3p.left += ox;
                this.b3p.top += oy;
            }
        });
    }
};
