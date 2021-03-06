"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.mounted = exports.methods = exports.watch = exports.computed = exports.data = exports.props = void 0;
exports.props = {
    'width': {
        'default': undefined
    },
    'height': {
        'default': undefined
    },
    'left': {
        'default': 0
    },
    'top': {
        'default': 0
    },
    'zIndex': {
        'default': 0
    },
    'flex': {
        'default': ''
    },
    'direction': {
        'default': 'v'
    },
    'scrollOffset': {
        'default': 0
    }
};
exports.data = {
    'scrollOffsetEmit': 0,
    'clientEmit': 0,
    'lengthEmit': 0
};
exports.computed = {
    'widthPx': function () {
        var _a;
        if (this.width !== undefined) {
            return this.width + 'px';
        }
        if (this.flex !== '') {
            return ((_a = this.$parent) === null || _a === void 0 ? void 0 : _a.direction) ? (this.$parent.direction === 'v' ? undefined : '0') : undefined;
        }
    },
    'heightPx': function () {
        var _a;
        if (this.height !== undefined) {
            return this.height + 'px';
        }
        if (this.flex !== '') {
            return ((_a = this.$parent) === null || _a === void 0 ? void 0 : _a.direction) ? (this.$parent.direction === 'v' ? '0' : undefined) : undefined;
        }
    }
};
exports.watch = {
    'scrollOffset': {
        handler: function () {
            let so = parseInt(this.scrollOffset);
            if (so === this.scrollOffsetEmit) {
                return;
            }
            if (this.direction === 'v') {
                this.$refs.wrap.scrollTop = this.scrollOffset;
            }
            else {
                this.$refs.wrap.scrollLeft = this.scrollOffset;
            }
        }
    }
};
exports.methods = {
    scroll: function () {
        if (!this.$refs.wrap) {
            return;
        }
        let scroll = this.direction === 'v' ? this.$refs.wrap.scrollTop : this.$refs.wrap.scrollLeft;
        if (scroll < 0) {
            scroll = 0;
        }
        let maxScroll = (this.direction === 'v' ? (this.$refs.wrap.scrollHeight - this.$refs.wrap.clientHeight) : (this.$refs.wrap.scrollWidth - this.$refs.wrap.clientWidth));
        if (scroll > maxScroll) {
            scroll = maxScroll;
        }
        this.scrollOffsetEmit = scroll;
        this.$emit('update:scrollOffset', this.scrollOffsetEmit);
    },
    wheel: function (e) {
        if (this.direction === 'v') {
            return;
        }
        if (e.deltaX !== 0) {
            return;
        }
        e.preventDefault();
        this.$refs.wrap.scrollLeft += e.deltaY;
    },
    touchmove: function (e) {
        e.stopPropagation();
    }
};
exports.mounted = function () {
    clickgo.dom.watchSize(this.$refs.wrap, () => {
        let client = this.direction === 'v' ? this.$refs.wrap.clientHeight : this.$refs.wrap.clientWidth;
        if (this.clientEmit !== client) {
            this.clientEmit = client;
            this.$emit('resize', client);
        }
    });
    let client = this.direction === 'v' ? this.$refs.wrap.clientHeight : this.$refs.wrap.clientWidth;
    this.clientEmit = client;
    this.$emit('resize', client);
    clickgo.dom.watchDom(this.$refs.wrap, () => {
        let length = this.direction === 'v' ? this.$refs.wrap.scrollHeight : this.$refs.wrap.scrollWidth;
        if (this.lengthEmit !== length) {
            this.lengthEmit = length;
            this.$emit('change', length);
        }
    }, 'default', true);
    if (this.direction === 'v') {
        this.$refs.wrap.scrollTop = this.scrollOffset;
    }
    else {
        this.$refs.wrap.scrollLeft = this.scrollOffset;
    }
};
