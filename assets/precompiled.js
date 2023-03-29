export const sectionTemplate = {
    "1": function (container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "                <div class=\"experience\">\n                    <h3 class=\"with-underline text-experience-title\">\n                        <span style=\"font-weight: 500;\">"
            + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0, "title") : depth0), depth0))
            + "</span> - "
            + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0, "subtitle") : depth0), depth0))
            + "\n                    </h3>\n                    <div class=\"experience-subinfo text-subtitle\">\n                        <div class=\"experience-date\">"
            + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0, "date") : depth0), depth0))
            + "</div>\n                        <div class=\"location\">"
            + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0, "location") : depth0), depth0))
            + "</div>\n                    </div>\n                    <ul class=\"experience-list text-body\">\n"
            + ((stack1 = lookupProperty(helpers, "with").call(depth0 != null ? depth0 : (container.nullContext || {}), depth0, { "name": "with", "hash": {}, "fn": container.program(2, data, 0), "inverse": container.noop, "data": data, "loc": { "start": { "line": 13, "column": 24 }, "end": { "line": 17, "column": 33 } } })) != null ? stack1 : "")
            + "                    </ul>\n                </div>\n";
    }, "2": function (container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : (container.nullContext || {}), (depth0 != null ? lookupProperty(depth0, "items") : depth0), { "name": "each", "hash": {}, "fn": container.program(3, data, 0), "inverse": container.noop, "data": data, "loc": { "start": { "line": 14, "column": 28 }, "end": { "line": 16, "column": 37 } } })) != null ? stack1 : "");
    }, "3": function (container, depth0, helpers, partials, data) {
        return "                                <li>"
            + container.escapeExpression(container.lambda(depth0, depth0))
            + "</li>\n";
    }, "compiler": [8, ">= 4.3.0"], "main": function (container, depth0, helpers, partials, data) {
        var stack1, helper, lookupProperty = container.lookupProperty || function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "\n            <h2 class=\"section-title text-section-title\">"
            + container.escapeExpression(((helper = (helper = lookupProperty(helpers, "title") || (depth0 != null ? lookupProperty(depth0, "title") : depth0)) != null ? helper : container.hooks.helperMissing), (typeof helper === "function" ? helper.call(depth0 != null ? depth0 : (container.nullContext || {}), { "name": "title", "hash": {}, "data": data, "loc": { "start": { "line": 2, "column": 57 }, "end": { "line": 2, "column": 66 } } }) : helper)))
            + "</h2>\n"
            + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : (container.nullContext || {}), (depth0 != null ? lookupProperty(depth0, "experience") : depth0), { "name": "each", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data, "loc": { "start": { "line": 3, "column": 12 }, "end": { "line": 20, "column": 21 } } })) != null ? stack1 : "")
            + "        ";
    }, "useData": true
}

export const skillsTemplate = {
    "1": function (container, depth0, helpers, partials, data) {
        var lookupProperty = container.lookupProperty || function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "            <div class=\"skills-item\">\n                <div class=\"skills-level-box\" style=\"background: var(--color-skill-"
            + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0, "skillLevel") : depth0), depth0))
            + ")\"></div>\n                <div class=\"skills-label\">"
            + container.escapeExpression(container.lambda((depth0 != null ? lookupProperty(depth0, "label") : depth0), depth0))
            + "</div>\n            </div>\n";
    }, "compiler": [8, ">= 4.3.0"], "main": function (container, depth0, helpers, partials, data) {
        var stack1, lookupProperty = container.lookupProperty || function (parent, propertyName) {
            if (Object.prototype.hasOwnProperty.call(parent, propertyName)) {
                return parent[propertyName];
            }
            return undefined
        };

        return "\n"
            + ((stack1 = lookupProperty(helpers, "each").call(depth0 != null ? depth0 : (container.nullContext || {}), (depth0 != null ? lookupProperty(depth0, "skill") : depth0), { "name": "each", "hash": {}, "fn": container.program(1, data, 0), "inverse": container.noop, "data": data, "loc": { "start": { "line": 2, "column": 8 }, "end": { "line": 7, "column": 17 } } })) != null ? stack1 : "")
            + "        ";
    }, "useData": true
}