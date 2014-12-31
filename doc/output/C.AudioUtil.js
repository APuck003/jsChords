Ext.data.JsonP.C_AudioUtil({"requires":[],"mixins":[],"parentMixins":[],"uses":[],"alternateClassNames":[],"members":[{"meta":{},"owner":"C.AudioUtil","name":"flen","id":"property-flen","tagname":"property"},{"meta":{},"owner":"C.AudioUtil","name":"analyze","id":"method-analyze","tagname":"method"},{"meta":{},"owner":"C.AudioUtil","name":"calcFinOctave","id":"method-calcFinOctave","tagname":"method"}],"html":"<div><pre class=\"hierarchy\"><h4>Files</h4><div class='dependency'><a href='source/AudioUtil.html#C-AudioUtil' target='_blank'>AudioUtil.js</a></div></pre><div class='doc-contents'>\n</div><div class='members'><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-property'>Properties</h3><div class='subsection'><div id='property-flen' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='C.AudioUtil'>C.AudioUtil</span><br/><a href='source/AudioUtil.html#C-AudioUtil-property-flen' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.AudioUtil-property-flen' class='name expandable'>flen</a> : Object<span class=\"signature\"></span></div><div class='description'><div class='short'><p>Calculate as much stats here as possible</p>\n</div><div class='long'><p>Calculate as much stats here as possible</p>\n</div></div></div></div></div><div class='members-section'><div class='definedBy'>Defined By</div><h3 class='members-title icon-method'>Methods</h3><div class='subsection'><div id='method-analyze' class='member first-child not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='C.AudioUtil'>C.AudioUtil</span><br/><a href='source/AudioUtil.html#C-AudioUtil-method-analyze' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.AudioUtil-method-analyze' class='name expandable'>analyze</a>( <span class='pre'>timeseries, test_frequencies, sample_rate</span> ) : Object<span class=\"signature\"></span></div><div class='description'><div class='short'>Analyzes a given timeseries and returns time and frequency\nproperties. ...</div><div class='long'><p>Analyzes a given timeseries and returns time and frequency\nproperties.</p>\n\n<p>Extended (a bit) version of the pseudo-Fourier found in:\nhttp://jonathan.bergknoff.com/journal/making-a-guitar-tuner-html5</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>timeseries</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>Input data</p>\n</div></li><li><span class='pre'>test_frequencies</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>Frequencies considered in this app</p>\n</div></li><li><span class='pre'>sample_rate</span> : Number<div class='sub-desc'><p>Sample rate of the audio device (in ms)</p>\n</div></li></ul><h3 class='pa'>Returns</h3><ul><li><span class='pre'>Object</span><div class='sub-desc'>\n</div></li></ul></div></div></div><div id='method-calcFinOctave' class='member  not-inherited'><a href='#' class='side expandable'><span>&nbsp;</span></a><div class='title'><div class='meta'><span class='defined-in' rel='C.AudioUtil'>C.AudioUtil</span><br/><a href='source/AudioUtil.html#C-AudioUtil-method-calcFinOctave' target='_blank' class='view-source'>view source</a></div><a href='#!/api/C.AudioUtil-method-calcFinOctave' class='name expandable'>calcFinOctave</a>( <span class='pre'>halfTones, data, test_frequencies</span> )<span class=\"signature\"></span></div><div class='description'><div class='short'>Calculate the average frequency given the data and the\nhalftone range to focus in. ...</div><div class='long'><p>Calculate the average frequency given the data and the\nhalftone range to focus in. This can be used to avoid\novertones and harmonics when large spectrum is considered.</p>\n\n<p>The result is appended in the dataset in:\ndata.frequency.stats.avgFinOctave</p>\n<h3 class=\"pa\">Parameters</h3><ul><li><span class='pre'>halfTones</span> : Number<div class='sub-desc'>\n</div></li><li><span class='pre'>data</span> : Object<div class='sub-desc'><p>as returned by C.Audio.analyze</p>\n</div></li><li><span class='pre'>test_frequencies</span> : <a href=\"#!/api/Array\" rel=\"Array\" class=\"docClass\">Array</a><div class='sub-desc'><p>as returned by <a href=\"#!/api/C-method-getAllFreq\" rel=\"C-method-getAllFreq\" class=\"docClass\">C.getAllFreq</a></p>\n</div></li></ul></div></div></div></div></div></div></div>","aliases":{},"meta":{},"autodetected":{"members":true},"component":false,"files":[{"filename":"AudioUtil.js","href":"AudioUtil.html#C-AudioUtil"}],"name":"C.AudioUtil","superclasses":[],"id":"class-C.AudioUtil","mixedInto":[],"subclasses":[],"tagname":"class"});