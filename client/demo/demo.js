Session.setDefault('simpleText', 'superuser');
Session.setDefault('sex', 0);
Session.setDefault('select2Tags', ['meteor', 'js']);
Template.demo.helpers({
    'simpleTextOps': function () {
        return {
            template: Template.custom_editable,
            type: 'text',
            value: Session.get('simpleText'),
            title: 'Enter username',
            async: true,
            onsubmit: function (val, cb) {
                setTimeout(function () {
                    Session.set('simpleText', val);
                    cb();
                }, 1000);
            }
        }
    },
    'emptyTextOps': function () {
        return {
            type: 'text',
            value: Session.get('emptyText'),
            title: 'Enter your first name',
            onsubmit: function (val) {
                Session.set('emptyText', val);
            }
        }
    },
    'selectOps': function () {
        return {
            type: 'select',
            source: [
                { text: 'not selected', value: 0 },
                { text: 'Male', value: 'm' },
                { text: 'Female', value: 'f' }
            ],
            value: Session.get('sex'),
            title: 'Select sex',
            showbuttons: false,
            onsubmit: function (val) {
                Session.set('sex', val);
            }
        };
    },
    'selectOptGroupOps': function () {
        return {
            type: 'select',
            source: [{
                    text: 'Alaskan/Hawaiian Time Zone',
                    children: [
                        { text: 'Alaska', value: 'AK'},
                        { text: 'Hawaii', value: 'HI' }
                    ]
                }, {
                    text: 'Pacific Time Zone',
                    children: [
                        { text: 'California', value: 'CA'},
                        { text: 'Nevada', value: 'NV' },
                        { text: 'Oregon', value: 'OR' },
                        { text: 'Washington', value: 'WA' }
                    ]
                }
            ],
            value: Session.get('selectOpGroups'),
            title: 'Select state',
            showbuttons: false,
            onsubmit: function (val) {
                Session.set('selectOpGroups', val);
            }
        };
    },
    'dateOps': function () {
        return {
            type: 'date',
            value: Session.get('date'),
            title: 'Select birthdate',
            showbuttons: false,
            display: function (val) {
                return val instanceof Date ? moment(val).format('MMM DD YYYY') : '';
            },
            onsubmit: function (val) {
                Session.set('date', val);
            }
        }
    },
    'datetimeOps': function () {
        return {
            type: 'datetime',
            value: Session.get('datetime'),
            title: 'Select event time',
            showbuttons: false,
            display: function (val) {
                return val instanceof Date ? moment(val).format('MMM DD YYYY h:mm A') : '';
            },
            onsubmit: function (val) {
                Session.set('datetime', val);
            }
        }
    },

    'textareaOps': function () {
        return {
            type: 'textarea',
            value: Session.get('textarea'),
            title: 'Comments',
            onsubmit: function (val) {
                Session.set('textarea', val);
            }
        };
    },
    'select2TagsOps': function () {
        return {
            type: 'select2',
            select2: { multiple: true },
            source: [
                { text: 'JS', value: 'js' },
                { text: 'HTML5', value: 'html5' },
                { text: 'Meteor', value: 'meteor' },
                { text: 'CSS3', value: 'css3' }
            ],
            value: Session.get('select2Tags'),
            title: 'Enter Tags',
            onsubmit: function (val) {
                Session.set('select2Tags', val);
            }
        }
    },
    'select2WithOpGroups': function () {
        return {
            type: 'select2',
            source: [{
                text: 'Alaskan/Hawaiian Time Zone',
                children: [
                    { text: 'Alaska', value: 'AK'},
                    { text: 'Hawaii', value: 'HI' }
                ]
            }, {
                text: 'Pacific Time Zone',
                children: [
                    { text: 'California', value: 'CA'},
                    { text: 'Nevada', value: 'NV' },
                    { text: 'Oregon', value: 'OR' },
                    { text: 'Washington', value: 'WA' }
                ]
            }
            ],
            value: Session.get('select2OpGroups'),
            title: 'Select state',
            showbuttons: false,
            onsubmit: function (val) {
                Session.set('select2OpGroups', val);
            }
        };
    },
    'html5Inputs': function () { return ['Password', 'Number', 'Email', 'URL', 'tel', 'Range', 'Time']; },
    'inputOps': function () {
        var type = this.toString().toLowerCase();
        return {
            type: type,
            value: Session.get(type),
            title: this.toString(),
            onsubmit: function (val) {
                Session.set(type, val);
            }
        }
    }
});
