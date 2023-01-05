# tlogg V0.2.9
t-logg is a JS Library that allows a "fake" console to be produced in HTML,<br><br>
![image](https://user-images.githubusercontent.com/71170613/151911503-01a7840d-2897-41b3-9bd8-b13fc007bb4f.png)
# Install Into Your Project
<code>&lt;script src="http://tlogg.tog1.me:5667/t-logg@0.2.9.js" &gt;&lt;/script&gt;</code><br>
# Demo Site
## http://tlogg.tog1.me:5667/tlogg-demo
# TLOGG Markdown

&lt;t&gt;TEXT&lt;/t&gt; This element is used to define text within the console. <br><br>
&lt;t&gt;TEXT&lt;/t&gt; Also has attributes, &lt;t c=(color name OR hex) wms=(wait in milliseconds)&gt;TEXT&lt;/t&gt; <br><br>
&lt;t c=#0096FF wms=120&gt;&gt;TEXT&lt;/t&gt; this would produce blue text in the console, and would take 120 milliseconds to appear.<br><br>
&lt;t hidden&gt;Hidden Text&lt;/t&gt;, this type of text wont appear in the console.<br>
&lt;br&gt; will create a new line for the console.
  
  ## Use In HTML
  To run the console, run the <code>runTconsole()</code> function. this can be applied to a button/element with <code>onclick="runTconsole()"</code>
  ### The console output element can be set with the ID of <code>console</code> Ex. <code> &lt;div id="console"&gt;&lt;/div&gt;</code>
  ### The console input text/textarea can be set with the ID of <code>tlog</code> Ex. <code> &lt;textarea id="tlog"&gt;&lt;/textarea&gt;</code>
  ##### [TEXTAREA ONLY] There is a Autocomplete function that is still in the works, however if youd like to use it, add this attribute to the textarea <code>oninput="autoTFinish(this)"</code>
  NOTE: You dont need to use a visible text area. just make a hidden text area and put the TLOG Markdown in there. that is if you want to have a pre-set custom console log.
  <br><br>
  you can also style the console text with <code>.tlog-console-text{font: coolfont;}</code> this effects the console text globaly 
  # Example
  
  ```html
<!DOCTYPE html>
<html>
    <head>
        <script src="http://tlogg.tog1.me:5667/t-logg@0.2.9.js" ></script>
        <script>
        //load text-line-number
const TLN={eventList:{},update_line_numbers:function(e,n){let t=e.value.split("\n").length-n.children.length;if(t>0){const e=document.createDocumentFragment();for(;t>0;){const n=document.createElement("span");n.className="tln-line",e.appendChild(n),t--}n.appendChild(e)}for(;t<0;)n.removeChild(n.lastChild),t++},append_line_numbers:function(e){const n=document.getElementById(e);if(null==n)return console.warn("[tln.js] Couldn't find textarea of id '"+e+"'");if(-1!=n.className.indexOf("tln-active"))return console.warn("[tln.js] textarea of id '"+e+"' is already numbered");n.classList.add("tln-active"),n.style={};const t=document.createElement("div");t.className="tln-wrapper",n.parentNode.insertBefore(t,n),TLN.update_line_numbers(n,t),TLN.eventList[e]=[];const l=["propertychange","input","keydown","keyup"],o=function(e,n){return function(t){(10!=+e.scrollLeft||37!=t.keyCode&&37!=t.which&&"ArrowLeft"!=t.code&&"ArrowLeft"!=t.key)&&36!=t.keyCode&&36!=t.which&&"Home"!=t.code&&"Home"!=t.key&&13!=t.keyCode&&13!=t.which&&"Enter"!=t.code&&"Enter"!=t.key&&"NumpadEnter"!=t.code||(e.scrollLeft=0),TLN.update_line_numbers(e,n)}}(n,t);for(let t=l.length-1;t>=0;t--)n.addEventListener(l[t],o),TLN.eventList[e].push({evt:l[t],hdlr:o});const r=["change","mousewheel","scroll"],s=function(e,n){return function(){n.scrollTop=e.scrollTop}}(n,t);for(let t=r.length-1;t>=0;t--)n.addEventListener(r[t],s),TLN.eventList[e].push({evt:r[t],hdlr:s})},remove_line_numbers:function(e){const n=document.getElementById(e);if(null==n)return console.warn("[tln.js] Couldn't find textarea of id '"+e+"'");if(-1==n.className.indexOf("tln-active"))return console.warn("[tln.js] textarea of id '"+e+"' isn't numbered");n.classList.remove("tln-active");const t=n.previousSibling;if("tln-wrapper"==t.className&&t.remove(),TLN.eventList[e]){for(let t=TLN.eventList[e].length-1;t>=0;t--){const l=TLN.eventList[e][t];n.removeEventListener(l.evt,l.hdlr)}delete TLN.eventList[e]}}};window.addEventListener("load",e=>{TLN.append_line_numbers("tlog")});
            </script>
<style>
.tln-active,.tln-wrapper,.tln-line{margin:0;border:0;padding:0;outline:0;box-sizing:border-box;vertical-align:left;list-style:none}.tln-active{display:inline-block;padding:.625em;width:calc(100% - 3em);height:100%;word-break:break-all;border:1px solid #aeaeae;background-color:#fff;resize:none;overflow-wrap:normal;overflow-x:auto;white-space:pre;font:1em/1.5 "Roboto Mono",monospace}.tln-wrapper{width:3em;padding:.6875em .3125em 2.1875em;height:100%;word-break:break-all;overflow:hidden;display:inline-block;counter-reset:line}.tln-line{width:100%;display:block;text-align:right;line-height:1.5;font-size:1em;color:#aeaeae}.tln-line::before{counter-increment:line;content:counter(line);font-size:1em;user-select:none}textarea{resize:none}body{font-family:Arial,Helvetica,sans-serif}.run{position:relative;width:502px;font-size:30px;bottom:502px;left:2px}#tlog-wrap{border:1px solid #000;height:500px;width:500px}#console{background-color:#000;width:502px;height:500px;position:relative;bottom:502px;left:602px;display:inline-flex}.tlog-console-text{color:#fff;position:relative;left:15px;font-family:monospace;font-size:18px}h1{position:relative;bottom:502px;left:2px}
</style>
    </head>
    <body>
     <!-- TLOG ELEMENTS -->
        <div id="tlog-wrap">
<textarea id="tlog" cols="40" rows="10" style="resize: none;" oninput="autoTFinish(this)">
</textarea>
        </div>
        <div id="console">
        </div>
        <br><br>
        <button class="run" onclick="runTconsole()">Run!</button>
        <!--END OF TLOG ELEMENTS -->
    </body>
</html>
  ```
  # Styles
  (these styles are used on the demo page, with their positions moved to be side-by-side)
  ```css
      .run {
        width: 502px;
        font-size: 30px;
    }
    #tlog-wrap {
        border:1px solid rgb(0, 0, 0);
        height:500px;width:500px;
        }
        #console {
            background-color: black;
            width: 502px;
            height: 500px;
            display:inline-flex
        }
        .tlog-console-text {
            color: white;
            position: relative;
            left: 15px;
            font-family:monospace;
            font-size: 18px;
        }
  ```

