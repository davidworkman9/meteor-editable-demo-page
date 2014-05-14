Template.docs.rendered = function () {
    PR.prettyPrint();
};

Template.docs.helpers({
    'example1': function () {
        return '{{> m_editable type="text" value="text" }}';
    },
    'customTemplateExample': function () {
        return '<template name="customEditableTemplate">\n' +
               '     <span class="editable editable-click {{editableEmpty}}">{{displayVal}}</span>\n' +
               '</template>';
    },
    'customTemplateHelper1': function () { return 'editable editable-click {{editableEmpty}}'; },
    'customTemplateHelper2': function () { return '{{displayVal}}'; },
    'example2': function () {
        return "options: function () {\n" +
            "  return {\n" +
            "    type: 'textarea',\n" +
            "    async: true,\n" +
            "    position: 'top',\n" +
            "    value: Session.get('text'),\n" +
            "    onsubmit: function (val, cb) {\n" +
            "      setTimeout(function () {\n" +
            "        Session.set('text', val);\n" +
            "        cb();\n" +
            "      }, 1000);\n" +
            "    }\n" +
            "  };\n" +
            "}\n\n\n\n" +
            "{{> m_editable options}}";
    },
    'options': function () {
        return {
            type: 'textarea',
            async: true,
            position: 'top',
            value: Session.get('text'),
            onsubmit: function (val, cb) {
                setTimeout(function () {
                    Session.set('text', val);
                    cb();
                }, 1000);
            }
        };
    }
});
