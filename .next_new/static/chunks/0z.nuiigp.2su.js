(globalThis.TURBOPACK||(globalThis.TURBOPACK=[])).push(["object"==typeof document?document.currentScript:void 0,75393,a=>{"use strict";var t=a.i(43476),e=a.i(71645);a.s(["default",0,function(){let a=(0,e.useMemo)(()=>Array.from({length:40},(a,t)=>({id:t,left:`${100*Math.random()}%`,top:`${100*Math.random()}%`,size:1+3*Math.random(),delay:`${5*Math.random()}s`,duration:`${2+4*Math.random()}s`,opacity:.3+.7*Math.random()})),[]),r=(0,e.useMemo)(()=>Array.from({length:8},(a,t)=>({id:t,left:`${8+84*Math.random()}%`,top:`${10+70*Math.random()}%`,size:8+24*Math.random(),delay:`${4*Math.random()}s`,duration:`${5+5*Math.random()}s`})),[]),s=(0,e.useMemo)(()=>Array.from({length:4},(a,t)=>({id:t,left:`${10+14*t}%`,delay:`${.7*t}s`,duration:`${5+t%3}s`,height:`${35+30*Math.random()}%`})),[]);return(0,t.jsxs)("div",{className:"absolute inset-0 w-full h-full overflow-hidden bg-[#02040a] text-white z-0 pointer-events-none",children:[(0,t.jsx)("style",{children:`
        @keyframes drift {
          0% { transform: translate3d(0, 0, 0) scale(1); }
          50% { transform: translate3d(0, -10px, 0) scale(1.03); }
          100% { transform: translate3d(0, 0, 0) scale(1); }
        }

        @keyframes twinkle {
          0%, 100% { opacity: 0.2; transform: scale(0.9); }
          50% { opacity: 1; transform: scale(1.25); }
        }

        @keyframes orbitSpin {
          from { transform: translate(-50%, -50%) rotate(0deg); }
          to { transform: translate(-50%, -50%) rotate(360deg); }
        }

        @keyframes orbitSpinReverse {
          from { transform: translate(-50%, -50%) rotate(360deg); }
          to { transform: translate(-50%, -50%) rotate(0deg); }
        }

        @keyframes pulseCore {
          0%, 100% { transform: translate(-50%, -50%) scale(1); opacity: 0.85; }
          50% { transform: translate(-50%, -50%) scale(1.08); opacity: 1; }
        }

        @keyframes beamMove {
          0% { transform: translateY(24px); opacity: 0; }
          20% { opacity: 0.4; }
          50% { opacity: 0.9; }
          100% { transform: translateY(-24px); opacity: 0; }
        }

        @keyframes gridShift {
          from { transform: perspective(700px) rotateX(74deg) translateY(0); }
          to { transform: perspective(700px) rotateX(74deg) translateY(40px); }
        }

        @keyframes floatNode {
          0%, 100% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-14px) rotate(16deg); }
        }

        @keyframes sweep {
          0% { transform: translateX(-120%) skewX(-18deg); opacity: 0; }
          20% { opacity: 0.18; }
          50% { opacity: 0.3; }
          100% { transform: translateX(220%) skewX(-18deg); opacity: 0; }
        }
      `}),(0,t.jsx)("div",{className:"absolute inset-0 bg-[radial-gradient(circle_at_50%_18%,rgba(56,189,248,0.18),transparent_24%),radial-gradient(circle_at_20%_10%,rgba(59,130,246,0.18),transparent_22%),radial-gradient(circle_at_80%_22%,rgba(34,211,238,0.12),transparent_20%),linear-gradient(180deg,#02040a_0%,#030712_54%,#02050d_100%)]"}),(0,t.jsx)("div",{className:"absolute inset-0 opacity-90",children:a.map(a=>(0,t.jsx)("span",{className:"absolute rounded-full bg-cyan-100",style:{left:a.left,top:a.top,width:`${a.size}px`,height:`${a.size}px`,opacity:a.opacity,animation:`twinkle ${a.duration} ease-in-out infinite`,animationDelay:a.delay,boxShadow:"0 0 12px rgba(186,230,253,0.9)"}},a.id))}),(0,t.jsx)("div",{className:"absolute inset-x-0 bottom-[-18%] h-[52%] overflow-hidden opacity-60",children:(0,t.jsx)("div",{className:"absolute left-1/2 top-0 h-[180%] w-[140%] -translate-x-1/2",style:{backgroundImage:"linear-gradient(rgba(56,189,248,0.22) 1px, transparent 1px), linear-gradient(90deg, rgba(56,189,248,0.18) 1px, transparent 1px)",backgroundSize:"58px 58px",animation:"gridShift 4s linear infinite",transformOrigin:"center top",maskImage:"linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 20%, black 60%)",WebkitMaskImage:"linear-gradient(to bottom, transparent 0%, rgba(0,0,0,0.7) 20%, black 60%)"}})}),(0,t.jsx)("div",{className:"absolute inset-0",children:s.map(a=>(0,t.jsx)("div",{className:"absolute bottom-[20%] w-px bg-gradient-to-t from-transparent via-cyan-300 to-transparent",style:{left:a.left,height:a.height,boxShadow:"0 0 18px rgba(34,211,238,0.7)",animation:`beamMove ${a.duration} linear infinite`,animationDelay:a.delay}},a.id))}),(0,t.jsx)("div",{className:"absolute inset-0 pointer-events-none",style:{animation:"drift 7s ease-in-out infinite"},children:(0,t.jsxs)("div",{className:"absolute left-1/2 top-[43%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2",children:[(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-[120px] w-[120px] rounded-full",style:{transform:"translate(-50%, -50%)",background:"radial-gradient(circle, rgba(186,230,253,1) 0%, rgba(56,189,248,0.95) 28%, rgba(14,116,144,0.65) 52%, rgba(6,12,24,0) 72%)",filter:"blur(2px)",boxShadow:"0 0 45px rgba(34,211,238,0.45), 0 0 120px rgba(59,130,246,0.25)",animation:"pulseCore 3.2s ease-in-out infinite"}}),(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-[170px] w-[170px] rounded-full border border-cyan-200/30",style:{transform:"translate(-50%, -50%)",boxShadow:"0 0 28px rgba(103,232,249,0.18) inset"}}),(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-[220px] w-[220px] rounded-full border border-cyan-300/50",style:{animation:"orbitSpin 10s linear infinite",boxShadow:"0 0 28px rgba(34,211,238,0.16)"},children:(0,t.jsx)("span",{className:"absolute left-1/2 top-0 h-3 w-3 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyan-200 shadow-[0_0_18px_rgba(103,232,249,1)]"})}),(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-[320px] w-[180px] rounded-full border border-sky-400/35",style:{animation:"orbitSpinReverse 13s linear infinite",boxShadow:"0 0 24px rgba(59,130,246,0.16)"},children:(0,t.jsx)("span",{className:"absolute right-[12%] top-[8%] h-2.5 w-2.5 rounded-full bg-sky-300 shadow-[0_0_16px_rgba(125,211,252,1)]"})}),(0,t.jsx)("div",{className:"absolute left-1/2 top-1/2 h-[170px] w-[360px] rounded-full border border-cyan-300/30",style:{animation:"orbitSpin 16s linear infinite",boxShadow:"0 0 26px rgba(34,211,238,0.12)"},children:(0,t.jsx)("span",{className:"absolute left-[10%] top-1/2 h-2 w-2 -translate-y-1/2 rounded-full bg-cyan-100 shadow-[0_0_18px_rgba(207,250,254,1)]"})}),(0,t.jsxs)("svg",{className:"absolute inset-0 h-full w-full",viewBox:"0 0 520 520",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[(0,t.jsx)("circle",{cx:"260",cy:"260",r:"102",stroke:"rgba(125,211,252,0.18)",strokeWidth:"1",strokeDasharray:"6 8"}),(0,t.jsx)("circle",{cx:"260",cy:"260",r:"146",stroke:"rgba(56,189,248,0.14)",strokeWidth:"1",strokeDasharray:"3 9"}),(0,t.jsx)("path",{d:"M120 270C160 190 240 160 332 176C390 186 430 220 456 272",stroke:"rgba(186,230,253,0.2)",strokeWidth:"1.2",strokeDasharray:"4 10"}),(0,t.jsx)("path",{d:"M86 322C144 366 228 386 304 372C376 359 432 320 460 252",stroke:"rgba(34,211,238,0.18)",strokeWidth:"1.2",strokeDasharray:"7 11"})]})]})}),(0,t.jsx)("div",{className:"absolute inset-0 overflow-hidden",children:r.map(a=>(0,t.jsx)("div",{className:"absolute rounded-md border border-cyan-200/30 bg-cyan-300/10 backdrop-blur-sm",style:{left:a.left,top:a.top,width:`${a.size}px`,height:`${a.size}px`,animation:`floatNode ${a.duration} ease-in-out infinite`,animationDelay:a.delay,boxShadow:"0 0 18px rgba(34,211,238,0.12)"}},a.id))}),(0,t.jsx)("div",{className:"absolute inset-y-0 left-[-20%] w-[30%] bg-gradient-to-r from-transparent via-cyan-200/10 to-transparent",style:{animation:"sweep 7s linear infinite"}})]})}])},48215,a=>{a.n(a.i(75393))}]);