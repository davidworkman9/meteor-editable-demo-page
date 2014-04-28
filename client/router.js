Router.configure({
    layoutTemplate: 'layout',
    yieldTemplates: {
        navbar: { to: 'navbar' }
    }
});

Router.map(function () {
    this.route('demo', {
        path: '/demo'
    });

    this.route('docs', {
        path: '/docs'
    });

    this.route('', {
        path: '/',
        onBeforeAction: function (pause) {
            Router.go('/docs');
            pause();
        }
    });
});