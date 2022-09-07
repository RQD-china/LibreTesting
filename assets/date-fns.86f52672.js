function v(e){return function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},a=n.width?String(n.width):e.defaultWidth,t=e.formats[a]||e.formats[e.defaultWidth];return t}}function s(e){return function(n,a){var t=a||{},i=t.context?String(t.context):"standalone",o;if(i==="formatting"&&e.formattingValues){var r=e.defaultFormattingWidth||e.defaultWidth,u=t.width?String(t.width):r;o=e.formattingValues[u]||e.formattingValues[r]}else{var l=e.defaultWidth,d=t.width?String(t.width):e.defaultWidth;o=e.values[d]||e.values[l]}var h=e.argumentCallback?e.argumentCallback(n):n;return o[h]}}function c(e){return function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=n.match(e.matchPattern);if(!t)return null;var i=t[0],o=n.match(e.parsePattern);if(!o)return null;var r=e.valueCallback?e.valueCallback(o[0]):o[0];r=a.valueCallback?a.valueCallback(r):r;var u=n.slice(i.length);return{value:r,rest:u}}}function m(e){return function(n){var a=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=a.width,i=t&&e.matchPatterns[t]||e.matchPatterns[e.defaultMatchWidth],o=n.match(i);if(!o)return null;var r=o[0],u=t&&e.parsePatterns[t]||e.parsePatterns[e.defaultParseWidth],l=Array.isArray(u)?b(u,function(f){return f.test(r)}):g(u,function(f){return f.test(r)}),d;d=e.valueCallback?e.valueCallback(l):l,d=a.valueCallback?a.valueCallback(d):d;var h=n.slice(r.length);return{value:d,rest:h}}}function g(e,n){for(var a in e)if(e.hasOwnProperty(a)&&n(e[a]))return a}function b(e,n){for(var a=0;a<e.length;a++)if(n(e[a]))return a}var y={lessThanXSeconds:{one:"less than a second",other:"less than {{count}} seconds"},xSeconds:{one:"1 second",other:"{{count}} seconds"},halfAMinute:"half a minute",lessThanXMinutes:{one:"less than a minute",other:"less than {{count}} minutes"},xMinutes:{one:"1 minute",other:"{{count}} minutes"},aboutXHours:{one:"about 1 hour",other:"about {{count}} hours"},xHours:{one:"1 hour",other:"{{count}} hours"},xDays:{one:"1 day",other:"{{count}} days"},aboutXWeeks:{one:"about 1 week",other:"about {{count}} weeks"},xWeeks:{one:"1 week",other:"{{count}} weeks"},aboutXMonths:{one:"about 1 month",other:"about {{count}} months"},xMonths:{one:"1 month",other:"{{count}} months"},aboutXYears:{one:"about 1 year",other:"about {{count}} years"},xYears:{one:"1 year",other:"{{count}} years"},overXYears:{one:"over 1 year",other:"over {{count}} years"},almostXYears:{one:"almost 1 year",other:"almost {{count}} years"}},w=function(e,n,a){var t,i=y[e];return typeof i=="string"?t=i:n===1?t=i.one:t=i.other.replace("{{count}}",n.toString()),a!=null&&a.addSuffix?a.comparison&&a.comparison>0?"in "+t:t+" ago":t},p=w,P={full:"EEEE, MMMM do, y",long:"MMMM do, y",medium:"MMM d, y",short:"MM/dd/yyyy"},M={full:"h:mm:ss a zzzz",long:"h:mm:ss a z",medium:"h:mm:ss a",short:"h:mm a"},W={full:"{{date}} 'at' {{time}}",long:"{{date}} 'at' {{time}}",medium:"{{date}}, {{time}}",short:"{{date}}, {{time}}"},S={date:v({formats:P,defaultWidth:"full"}),time:v({formats:M,defaultWidth:"full"}),dateTime:v({formats:W,defaultWidth:"full"})},k=S,D={lastWeek:"'last' eeee 'at' p",yesterday:"'yesterday at' p",today:"'today at' p",tomorrow:"'tomorrow at' p",nextWeek:"eeee 'at' p",other:"P"},F=function(e,n,a,t){return D[e]},C=F,A={narrow:["B","A"],abbreviated:["BC","AD"],wide:["Before Christ","Anno Domini"]},x={narrow:["1","2","3","4"],abbreviated:["Q1","Q2","Q3","Q4"],wide:["1st quarter","2nd quarter","3rd quarter","4th quarter"]},T={narrow:["J","F","M","A","M","J","J","A","S","O","N","D"],abbreviated:["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],wide:["January","February","March","April","May","June","July","August","September","October","November","December"]},j={narrow:["S","M","T","W","T","F","S"],short:["Su","Mo","Tu","We","Th","Fr","Sa"],abbreviated:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],wide:["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"]},V={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"morning",afternoon:"afternoon",evening:"evening",night:"night"}},q={narrow:{am:"a",pm:"p",midnight:"mi",noon:"n",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},abbreviated:{am:"AM",pm:"PM",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"},wide:{am:"a.m.",pm:"p.m.",midnight:"midnight",noon:"noon",morning:"in the morning",afternoon:"in the afternoon",evening:"in the evening",night:"at night"}},z=function(e,n){var a=Number(e),t=a%100;if(t>20||t<10)switch(t%10){case 1:return a+"st";case 2:return a+"nd";case 3:return a+"rd"}return a+"th"},J={ordinalNumber:z,era:s({values:A,defaultWidth:"wide"}),quarter:s({values:x,defaultWidth:"wide",argumentCallback:function(e){return e-1}}),month:s({values:T,defaultWidth:"wide"}),day:s({values:j,defaultWidth:"wide"}),dayPeriod:s({values:V,defaultWidth:"wide",formattingValues:q,defaultFormattingWidth:"wide"})},N=J,L=/^(\d+)(th|st|nd|rd)?/i,X=/\d+/i,O={narrow:/^(b|a)/i,abbreviated:/^(b\.?\s?c\.?|b\.?\s?c\.?\s?e\.?|a\.?\s?d\.?|c\.?\s?e\.?)/i,wide:/^(before christ|before common era|anno domini|common era)/i},R={any:[/^b/i,/^(a|c)/i]},E={narrow:/^[1234]/i,abbreviated:/^q[1234]/i,wide:/^[1234](th|st|nd|rd)? quarter/i},Q={any:[/1/i,/2/i,/3/i,/4/i]},$={narrow:/^[jfmasond]/i,abbreviated:/^(jan|feb|mar|apr|may|jun|jul|aug|sep|oct|nov|dec)/i,wide:/^(january|february|march|april|may|june|july|august|september|october|november|december)/i},Y={narrow:[/^j/i,/^f/i,/^m/i,/^a/i,/^m/i,/^j/i,/^j/i,/^a/i,/^s/i,/^o/i,/^n/i,/^d/i],any:[/^ja/i,/^f/i,/^mar/i,/^ap/i,/^may/i,/^jun/i,/^jul/i,/^au/i,/^s/i,/^o/i,/^n/i,/^d/i]},_={narrow:/^[smtwf]/i,short:/^(su|mo|tu|we|th|fr|sa)/i,abbreviated:/^(sun|mon|tue|wed|thu|fri|sat)/i,wide:/^(sunday|monday|tuesday|wednesday|thursday|friday|saturday)/i},B={narrow:[/^s/i,/^m/i,/^t/i,/^w/i,/^t/i,/^f/i,/^s/i],any:[/^su/i,/^m/i,/^tu/i,/^w/i,/^th/i,/^f/i,/^sa/i]},H={narrow:/^(a|p|mi|n|(in the|at) (morning|afternoon|evening|night))/i,any:/^([ap]\.?\s?m\.?|midnight|noon|(in the|at) (morning|afternoon|evening|night))/i},G={any:{am:/^a/i,pm:/^p/i,midnight:/^mi/i,noon:/^no/i,morning:/morning/i,afternoon:/afternoon/i,evening:/evening/i,night:/night/i}},I={ordinalNumber:c({matchPattern:L,parsePattern:X,valueCallback:function(e){return parseInt(e,10)}}),era:m({matchPatterns:O,defaultMatchWidth:"wide",parsePatterns:R,defaultParseWidth:"any"}),quarter:m({matchPatterns:E,defaultMatchWidth:"wide",parsePatterns:Q,defaultParseWidth:"any",valueCallback:function(e){return e+1}}),month:m({matchPatterns:$,defaultMatchWidth:"wide",parsePatterns:Y,defaultParseWidth:"any"}),day:m({matchPatterns:_,defaultMatchWidth:"wide",parsePatterns:B,defaultParseWidth:"any"}),dayPeriod:m({matchPatterns:H,defaultMatchWidth:"any",parsePatterns:G,defaultParseWidth:"any"})},K=I,U={code:"en-US",formatDistance:p,formatLong:k,formatRelative:C,localize:N,match:K,options:{weekStartsOn:0,firstWeekContainsDate:1}},Z=U,ee=typeof globalThis!="undefined"?globalThis:typeof window!="undefined"?window:typeof global!="undefined"?global:typeof self!="undefined"?self:{};export{ee as c,Z as d};
