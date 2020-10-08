export let props = {
    'disabled': {
        'default': false
    },

    'padding': {
        'default': undefined
    },

    'value': {
        'default': ''
    }
};

export let data = {
    'popOpen': false,
    'subPop': undefined,

    'popOptions': {
        'left': '0px',
        'top': '0px',
        'zIndex': '0'
    }
};

export let methods = {
    click: function(this: IVueControl, event: MouseEvent): void {
        if (this.disabled) {
            return;
        }
        clickgo.form.hidePop(this);
        this.$parent?.$parent?.$parent?.select(this.value);
        this.cgTap(event);
    },
    controlClick: function(this: IVue, e: MouseEvent): void {
        if (this.disabled) {
            return;
        }
        this.showPop(e);
    },

    showPop: function(this: IVueControl, e: MouseEvent): void {
        if (this.popOpen) {
            // --- 本来就是展开状态，不做处理 ---
            return;
        }
        if (!this.$parent) {
            return;
        }
        // --- 判断别的 item 是否有展开（parent 是 greatselect-list） ---
        if (this.$parent.itemPopShowing) {
            clickgo.form.hidePop(this.$parent.itemPopShowing);
        }
        // --- 所以直接显示本 pop  ---
        this.$parent.itemPopShowing = this;
        this.popOpen = true;
        this.popOptions = clickgo.form.showPop(this, e.pageX, e.pageY);
    },
    hidePop: function(this: IVueControl): void {
        if (!this.popOpen) {
            return;
        }
        this.popOpen = false;
        if (this.$parent?.itemPopShowing === this) {
            this.$parent.itemPopShowing = undefined;
        }
        if (this.subPop?.itemPopShowing) {
            this.subPop.itemPopShowing.hidePop();
        }
    }
};

export let unmounted = function(this: IVue): void {
    if (this.$parent) {
        // --- 如果自己还在上层显示，则取消 ---
        if (this === this.$parent.itemPopShowing) {
            clickgo.form.hidePop(this.itemPopShowing);
        }
    }
};