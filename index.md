## Tlogg, Making Your Stie Look Cool

# tlogg V0.2.9
t-logg is a JS Library that allows a "fake" console to be produced in HTML,<br><br>
![image](https://user-images.githubusercontent.com/71170613/151911503-01a7840d-2897-41b3-9bd8-b13fc007bb4f.png)
# Install Into Your Project
<code>&lt;script src="https://togar.app/libs/t-logg@0.2.9.js" &gt;&lt;script&gt;</code><br>
AVAILABLE SOON (for now the lib will be here: https://togi-cloud.ngrok.io/tlogg-test/t-logg@0.2.9.js)
# Demo Site
## https://togi-cloud.ngrok.io/tlogg-test
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
            

### Support or Contact

Having trouble with Tlogg? Check out our [documentation](https://github.com/TOG11/tlogg) or [contact support](mailto://aiden@togar.media?subject=Support%20Request) and we’ll help you sort it out.
