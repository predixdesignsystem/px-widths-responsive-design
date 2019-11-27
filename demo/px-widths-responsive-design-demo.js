/*
Copyright (c) 2018, General Electric

Licensed under the Apache License, Version 2.0 (the "License");
you may not use this file except in compliance with the License.
You may obtain a copy of the License at

    http://www.apache.org/licenses/LICENSE-2.0

Unless required by applicable law or agreed to in writing, software
distributed under the License is distributed on an "AS IS" BASIS,
WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and
limitations under the License.
*/
/* Common imports */
/* Common demo imports */
/* Demo DOM module */
/* 6: Handle selectedOptions, update demo */
/*
  FIXME(polymer-modulizer): the above comments were extracted
  from HTML and may be out of place here. Review them and
  then delete this comment!
*/
import '@polymer/polymer/polymer-legacy.js';

import 'px-sass-doc/px-sass-doc.js';
import '../css/px-widths-responsive-design-demo-styles.js';
import { Polymer } from '@polymer/polymer/lib/legacy/polymer-fn.js';
import { html } from '@polymer/polymer/lib/utils/html-tag.js';
Polymer({
  _template: html`
  <!-- 0: Import the styles-->
  <style include="px-widths-responsive-design-demo-styles" is="custom-style"></style>

<!-- 1: Describe Module -->
<px-sass-doc module-name="px-widths-responsive-design" description="The Predix UI Widths Responsive module is an extension of the default px-widths-design module and provides breakpoint-based classes for widths on elements." layer="trumps" sassdoc-path="sassdoc.json" dependencies="[
    &quot;https://github.com/PredixDev/px-widths-design&quot;,
    &quot;https://github.com/PredixDev/px-helpers-design&quot;
  ]" selected-options="{{selectedOptions}}">

<!-- 2: Set Options -->
<px-sass-doc-option slot="options" option-name="Width" choose-with="dropdown" choices="[
    &quot;whole&quot;,
    &quot;half&quot;,
    &quot;third&quot;,
    &quot;quarter&quot;,
    &quot;sixth&quot;
  ]" default-choice="whole">
</px-sass-doc-option>

<px-sass-doc-option slot="options" option-name="Breakpoint" choose-with="dropdown" choices="[
    &quot;desk&quot;,
    &quot;portable&quot;,
    &quot;lap-and-up&quot;,
    &quot;lap&quot;,
    &quot;palm&quot;
  ]" default-choice="desk">
</px-sass-doc-option>

<!-- 3: Make HTML Demo -->
<section slot="demo-html">
<div class\$="{{divClasses}}">{{widthString}}</div>
</section>

<!-- 4: Set Import Slot -->
<section slot="import">
{{importCode}}
</section>

<!-- 5: Set Usage HTML -->
<section slot="usage">
The Predix UI Widths Responsive module is an extension of the default [px-widths-design](https://predix-ui.com/#/px-widths-design) module and provides breakpoint-based classes for widths on elements. This module is a fork of InuitCSS's [widths-responsive](https://github.com/inuitcss/trumps.widths-responsive) module.

The Widths Responsive module loops through the breakpoints defined in px-helper-design's [\$breakpoints list](https://github.com/PredixDev/px-helpers-design) to generate prefixed breakpoint-based classes. If you are using the default breakpoints, you will be given classes like \`u-1/4-lap-and-up\`, or \`u-1-of-2-desk\`, etc.

Widths Responsive will inherit the same settings used for the Widths module (i.e. namespaces and fraction vs. spoken-word format).

For example, with a \`\$breakpoint\` named \`desk\` (which defines a media-query for viewports wider than 1024 pixels), the class \`.u-1/2-desk\` would apply a width of 50% on an element with a viewport above 1024 pixels. At narrower viewports \`.u-1/2-desk\` would be ignored and has no effect.

Classes can be combined to define the responsive behavior of a component based on multiple device viewports, like so (resize your screen or view on multiple devices for best effect):
\`\`\`
<!-- Parent with flex--wrap in order to reflow components -->
<div class="flex flex--wrap">

  <!-- 25% on a large screen, 50% on a smaller screen, and 100% on mobile -->
  <div class="u-1/4-desk u-1/2-lap u-1/1-palm">1</div>
  <div class="u-1/4-desk u-1/2-lap u-1/1-palm">2</div>
  <div class="u-1/4-desk u-1/2-lap u-1/1-palm">3</div>
  <div class="u-1/4-desk u-1/2-lap u-1/1-palm">4</div>

</div>
\`\`\`
<div style="text-align:center;line-height:45px;font-size:15px;" class="flex flex--wrap">
<div style="height:45px;border-color:black;border-width:1px;border-style:solid;background-color:#888;" class="u-1/4-desk u-1/2-lap u-1/1-palm">1</div>
<div style="height:45px;border-color:black;border-width:1px;border-style:solid;background-color:#888;" class="u-1/4-desk u-1/2-lap u-1/1-palm">2</div>
<div style="height:45px;border-color:black;border-width:1px;border-style:solid;background-color:#888;" class="u-1/4-desk u-1/2-lap u-1/1-palm">3</div>
<div style="height:45px;border-color:black;border-width:1px;border-style:solid;background-color:#888;" class="u-1/4-desk u-1/2-lap u-1/1-palm">4</div>
</div>
</section>

</px-sass-doc>
`,

  is: 'px-widths-responsive-design-demo',

  attached : function(){
    var boundHandler = this._handleOptionsUpdated.bind(this);
    this.addEventListener('px-sass-doc-options-updated', boundHandler)
  },

  detached : function(){
    this.removeEventListener('px-sass-doc-options-updated', boundHandler);
  },

  _handleOptionsUpdated: function(evt) {
    this.importCode = this._importCode();
    this.divClasses = this._divClasses();

    // Wait, then tell the highlighter to run after dom-if restamps
    this.async(function(){ this.fire('px-sass-doc-demo-updated', {}) }, 10);
  },

  _divClasses: function() {
    var opts = this.selectedOptions || {}, classString = "";
    if(opts.Width === "whole")     classString = "u-1/1-";
    if(opts.Width === "half")      classString = "u-1/2-";
    if(opts.Width === "third")     classString = "u-1/3-";
    if(opts.Width === "quarter")   classString = "u-1/4-";
    if(opts.Width === "sixth")     classString = "u-1/6-";
    this.widthString = opts.Width;
    return classString += opts.Breakpoint;
  },

  _importCode: function() {
    return '@import "px-widths-responsive-design/_trumps.widths-responsive.scss";';
  }
});
