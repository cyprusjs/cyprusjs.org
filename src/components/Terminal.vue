<template>
  <article class="terminal">
    <header class="top">
        <div class="btns">
            <span class="circle red"></span>
            <span class="circle yellow"></span>
            <span class="circle green"></span>
        </div>
        <div class="title has-text-darker">1. CyprusJS</div>
    </header>
    <pre class="body"><span class="term-user-machine">user@machine</span></span><span class="term-folder">folder</span><code class="term-code">git clone https://github.com/cyprusjs/CyprusJS.git</code></pre>
  </article>
</template>

<script>
export default {
  name: 'Terminal'
}
</script>

<style scoped>
.terminal {
  border-radius: 5px;
  position: relative;
  box-shadow:
   0 20px 30px -15px rgba(0,0,0,0.09),
   0 40px 40px -20px rgba(0,0,0,0.09),
   0 70px 50px -30px rgba(0,0,0,0.06),
   0 40px 60px -5px rgba(0,0,0,0.06);
}
.terminal .top {
  background: #E4E4E5;
  background-image: linear-gradient(0deg, #CCCBCD 0%, #E4E4E5 90%, #F4F5F5 100%);
  color: black;
  border-radius: 5px 5px 0 0;
  padding: 8px;
  border: 1px solid rgba(0, 0, 0, 0.19)
}
.terminal .top .btns {
  top: 6px;
}
.terminal .top .title {
  font-size: 14px;
}
.terminal .btns {
  position: absolute;
  top: 4px;
  left: 5px;
}
.terminal .circle {
  width: 12px;
  height: 12px;
  display: inline-block;
  border-radius: 15px;
  margin-left: 2px;
  border-width: 1px;
  border-style: solid;
}
.title{
  text-align: center;
}
.red {
  background: #EC6A5F; border-color: #D04E42;
}
.green {
  background: #64CC57; border-color: #4EA73B;
}
.yellow{
  background: #F5C04F; border-color: #D6A13D;
}
.clear{
  clear: both;
}
.btns {

}
.btns .red {
  margin-left: 7px;
}
.btns .red,
.btns .yellow {
  margin-right: 6px;
}
.terminal .body {
  background: #012733;
  color: #839396;
  padding: 8px 8px 64px 8px;
  overflow: auto;
  border-radius: 0px 0px 5px 5px;
}
.term-user-machine {
  background-color: #013541;
  position: relative;
	border: 4px solid #013541;
}
.term-user-machine:after,
.term-user-machine:before {
	left: 102%;
	top: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}
.term-user-machine:after {
	border-color: rgba(136, 183, 213, 0);
	border-left-color: #013541;
	border-width: 12px;
	margin-top: -12px;
  z-index: 7000;
}
.term-user-machine:before {
	border-color: rgba(194, 225, 245, 0);
	border-left-color: #013541;
	border-width: 12px;
	margin-top: -12px;
  z-index: 6000;
}
.term-folder {
  background-color: #268AD2;
  position: relative;
	border: 4px solid #268AD2;
  color: #013541;
  padding-left: 18px;
}
.term-folder:after,
.term-folder:before {
	left: 106%;
	top: 50%;
	border: solid transparent;
	content: " ";
	height: 0;
	width: 0;
	position: absolute;
	pointer-events: none;
}
.term-folder:after {
	border-color: rgba(136, 183, 213, 0);
	border-left-color: #268AD2;
	border-width: 12px;
	margin-top: -12px;
}
.term-folder:before {
	border-color: rgba(194, 225, 245, 0);
	border-left-color: #268AD2;
	border-width: 12px;
	margin-top: -12px;
}
code.term-code {
  margin-left: 16px;
}
</style>
