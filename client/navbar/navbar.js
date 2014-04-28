Template.navItem.helpers({
    'activeRouteClass': function (path) {
        var currentRoute = Router.current();
        return currentRoute && currentRoute.lookupTemplate() === path ? 'active' : '';
    }
});
