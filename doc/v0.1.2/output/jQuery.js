Ext.data.JsonP.jQuery({"tagname":"class","name":"jQuery","autodetected":{},"files":[{"filename":"index.js","href":"index.html#jQuery"}],"members":[{"name":"infoPane","tagname":"method","owner":"jQuery","id":"method-infoPane","meta":{}}],"alternateClassNames":[],"aliases":{},"id":"class-jQuery","component":false,"superclasses":[],"subclasses":[],"mixedInto":[],"mixins":[],"parentMixins":[],"requires":[],"uses":[],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/index.html#jQuery' target='_blank'>index.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-infoPane' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='jQuery'>jQuery</span><br/><a href='source/index.html#jQuery-method-infoPane' target='_blank' class='view-source'>view source</a></div><a href='#!/api/jQuery-method-infoPane' class='name expandable'>infoPane</a>( <span class='pre'>n, m, [opts]</span> ) : <a href=\"#!/api/InfoPane\" rel=\"InfoPane\" class=\"docClass\">InfoPane</a><span class=\"signature\"></span></div><div class='description'><div class='short'>Creates info pane. ...</div><div class='long'><p>Creates info pane.</p>\n\n<pre><code>$('.main').infoPane(8, 4, {unitDur: 400}).show().then(function (ip) {\n    ip.$dom.click(function () {\n        ip.hide();\n    });\n});\n</code></pre>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>n</span> : Number<div class='sub-desc'><p>The horizontal partition number</p>\n</div></li><li><span class='pre'>m</span> : Number<div class='sub-desc'><p>The vertical partition number</p>\n</div></li><li><span class='pre'>opts</span> : Object (optional)<div class='sub-desc'><p>The options</p>\n<ul><li><span class='pre'>width</span> : Number (optional)<div class='sub-desc'><p>The pane's width</p>\n<p>Defaults to: <code>this.width()</code></p></div></li><li><span class='pre'>height</span> : Number (optional)<div class='sub-desc'><p>The pane's height</p>\n<p>Defaults to: <code>this.height()</code></p></div></li><li><span class='pre'>unitDur</span> : Number (optional)<div class='sub-desc'><p>The unit duration of flip of small chip inside the pane</p>\n<p>Defaults to: <code>400</code></p></div></li><li><span class='pre'>bgcolor</span> : String (optional)<div class='sub-desc'><p>The background color of the pane</p>\n<p>Defaults to: <code>&#39;#393F44&#39;</code></p></div></li><li><span class='pre'>zIndex</span> : Number (optional)<div class='sub-desc'><p>The z-index of the pane</p>\n<p>Defaults to: <code>undefined</code></p></div></li></ul></div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'><a href=\"#!/api/InfoPane\" rel=\"InfoPane\" class=\"docClass\">InfoPane</a></span><div class='sub-desc'><p>InfoPane object</p>\n</div></li></ul></div></div></div></div></div></div></div>","meta":{}});