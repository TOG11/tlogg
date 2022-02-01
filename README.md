# tlogg V0.2.9
t-logg is a JS Library that allows a "fake" console to be produced via HTML,<br><br>
![image](https://user-images.githubusercontent.com/71170613/151911503-01a7840d-2897-41b3-9bd8-b13fc007bb4f.png)
# Install Into Your Project
<code>&lt;script src="https://togar.app/libs/t-logg@0.2.9.js" &gt;&lt;script&gt;</code>
AVAILABLE SOON
# TLOG Markdown

&lt;t&gt;TEXT&lt;/t&gt; This element is used to define text within the console. <br><br>
&lt;t&gt;TEXT&lt;/t&gt; Also has attributes, &lt;t c=(color name OR hex) wms=(wait in milliseconds)&gt;TEXT&lt;/t&gt; <br><br>
&lt;t c=#0096FF wms=120&gt;&gt;TEXT&lt;/t&gt; this would produce blue text in the console, and would take 120 milliseconds to appear.<br><br>
&lt;t hidden&gt;Hidden Text&lt;/t&gt;, this type of text wont appear in the console.
  
  ## Use In HTML
  To run the console, run the <code>runTconsole()</code> function. this can be applied to a button/element with <code>onclick="runTconsole()"</code>
  ### The console output element can be set with the ID of <code>console</code> Ex. <code> &lt;div id="console"&gt;&lt;/div&gt;</code>
  ### The console input text/textarea can be set with the ID of <code>tlog</code> Ex. <code> &lt;textarea id="tlog"&gt;&lt;/textarea&gt;</code>
  NOTE: You dont need to use a visible text area. just make a hidden text area and put the TLOG Markdown in there. that is if you want to have a pre-set custom console log.
            
