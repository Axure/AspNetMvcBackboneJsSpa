var Application;
(function (Application) {
    (function (Views) {
        var animationDuration = 600;
        Views.Activable = {
            activate: function () {
                var _this = this;
                this.clearAnimationTimer();
                this.animationTimer = _.defer(function () {
                    var el = _this.$el;
                    el.show().css({
                        marginLeft: el.outerWidth()
                    }).hide().show(function () {
                        el.animate({
                            marginLeft: 0
                        }, animationDuration, function () {
                            _this.animationTimer = null;
                            if(_.isFunction(_this.onActivate)) {
                                _this.onActivate();
                            }
                        });
                    });
                });
            },
            deactivate: function () {
                if(_.isFunction(this.onDeactivate)) {
                    this.onDeactivate();
                }
                this.$el.hide();
                this.clearAnimationTimer();
            },
            clearAnimationTimer: function () {
                if(this.animationTimer) {
                    clearTimeout(this.animationTimer);
                    this.animationTimer = null;
                }
            }
        };
    })(Application.Views || (Application.Views = {}));
    var Views = Application.Views;
})(Application || (Application = {}));
