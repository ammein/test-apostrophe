// in lib/modules/drawer-widgets/public/js/always.js

// Example of a widget manager with a play method

apos.define('drawer-widgets', {
    extend: 'apostrophe-widgets',
    construct: function (self, options) {
        self.play = function ($widget, data, options) {
            $widget.find('[data-drawer-title]').click(function () {
                $widget.find('[data-drawer]').toggle();
                // Stop bubbling and default behavior. ONLY WORKS on jQuery event
                // return false will do both for e.preventDefault() and e.stopPropagation()
                // see this stack overflow https://stackoverflow.com/questions/1357118/event-preventdefault-vs-return-false
                return false;
            });
        };
    }
});