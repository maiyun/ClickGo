"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.methods = exports.computed = exports.watch = exports.data = exports.props = void 0;
exports.props = {
    'disabled': {
        'default': false
    },
    'width': {
        'default': undefined
    },
    'height': {
        'default': 30
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
    'padding': {
        'default': undefined
    },
    'modelValue': {
        'default': ''
    },
    'editable': {
        'default': false
    },
    'data': {
        'default': []
    }
};
exports.data = {
    'valueData': 0,
    'valueIndex': 0
};
exports.watch = {
    'data': {
        handler: function () {
            if (this.dataComp[this.valueIndex]) {
                return;
            }
            this.valueIndex = this.dataComp.length - 1;
            if (!this.editable) {
                this.valueData = this.valueIndex >= 0 ? this.dataComp[this.valueIndex].value : '';
                this.$emit('update:modelValue', this.valueData);
            }
        },
        'deep': true
    },
    'modelValue': {
        handler: function () {
            if (this.valueData === this.modelValue) {
                return;
            }
            this.valueData = this.modelValue;
            for (let i = 0; i < this.dataComp.length; ++i) {
                if (this.dataComp[i].value !== this.modelValue) {
                    continue;
                }
                this.valueIndex = i;
                return;
            }
            this.valueIndex = 0;
            if (!this.editable) {
                this.valueData = this.dataComp[0] ? this.dataComp[0].value : '';
                this.$emit('update:modelValue', this.valueData);
            }
        },
        'immediate': true
    }
};
exports.computed = {
    'editableComp': function () {
        if (typeof this.editable === 'boolean') {
            return this.editable;
        }
        return this.editable === 'true' ? true : false;
    },
    'dataComp': function () {
        let data = [];
        if (Array.isArray(this.data)) {
            for (let i = 0; i < this.data.length; ++i) {
                if (this.data[i].value) {
                    data[i] = this.data[i];
                    continue;
                }
                data[i] = {
                    'value': this.data[i]
                };
            }
            return data;
        }
        else {
            for (let k in this.data) {
                let item = clickgo.tool.clone(this.data[k]);
                if (!item.value) {
                    item.value = k;
                }
                data.push(item);
            }
        }
        return data;
    }
};
exports.methods = {
    updateValue: function (index) {
        this.valueIndex = index;
        this.valueData = this.dataComp[index] ? this.dataComp[index].value : '';
        this.$emit('update:modelValue', this.valueData);
    },
    tinput: function () {
        this.valueData = this.$refs.input.value;
        this.$emit('update:modelValue', this.valueData);
        for (let i = 0; i < this.dataComp.length; ++i) {
            if (this.dataComp[i].value !== this.valueData) {
                continue;
            }
            this.valueIndex = i;
            return;
        }
        this.valueIndex = 0;
    }
};
