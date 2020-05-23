(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{101:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),i=a(34),o=a.n(i),l=(a(70),a(71),a(17)),s=a(27),c=a(19),m=a(18),h=a(53),u=a.n(h),d=(a(89),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).state={msg:n.props.smallMsg,vidUrl:n.props.smallVidUrl},n}return Object(s.a)(a,[{key:"updatetext",value:function(){window.innerWidth<=820?this.setState({msg:this.props.smallMsg}):this.setState({msg:this.props.bigMsg}),window.innerWidth<=500?this.setState({vidUrl:this.props.smallVidUrl}):this.setState({vidUrl:this.props.bigVidUrl})}},{key:"componentDidMount",value:function(){this.updatetext(),window.addEventListener("resize",this.updatetext.bind(this))}},{key:"render",value:function(){return r.a.createElement("div",{className:"splash"},r.a.createElement("div",{className:"splash-overlay"},r.a.createElement("svg",{className:"splash-svg"},r.a.createElement("defs",null,r.a.createElement("mask",{className:"splash-mask",id:"splash-mask",x:"0",y:"0"},r.a.createElement("rect",{className:"splash-background",x:"0",y:"0",height:"100%",width:"100%"}),r.a.createElement("text",{className:"splash-text",x:"50%",y:"10%",dy:"50%"},this.state.msg))),r.a.createElement("rect",{style:{fill:this.props.maskColor},className:"splash-masker",x:"0",y:"0",height:"100%",width:"100%"}))),r.a.createElement("div",{className:"splash-video"},r.a.createElement(u.a,{className:"splash-bg-video",id:"splash-paralax",url:this.state.vidUrl,playing:!0,loop:!0,muted:!0})))}}]),a}(n.Component)),p=(a(90),function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(s.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"UnsplashPhoto",style:{background:" linear-gradient(to bottom, "+this.props.gradientRGBAfrom+","+this.props.gradientRGBAmid+","+this.props.gradientRGBAto+"),url('"+this.props.imageUrl+"') no-repeat",backgroundSize:"cover"}},this.props.children,r.a.createElement("a",{className:"UnsplashLink",href:this.props.photographerUrl,target:"_blank",rel:"noopener noreferrer",title:"Download free do whatever you want high-resolution photos from "+this.props.photographer},r.a.createElement("span",{className:"UnsplashSpan"},r.a.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 32 32"},r.a.createElement("title",null,"unsplash-logo"),r.a.createElement("path",{d:"M20.8 18.1c0 2.7-2.2 4.8-4.8 4.8s-4.8-2.1-4.8-4.8c0-2.7 2.2-4.8 4.8-4.8 2.7.1 4.8 2.2 4.8 4.8zm11.2-7.4v14.9c0 2.3-1.9 4.3-4.3 4.3h-23.4c-2.4 0-4.3-1.9-4.3-4.3v-15c0-2.3 1.9-4.3 4.3-4.3h3.7l.8-2.3c.4-1.1 1.7-2 2.9-2h8.6c1.2 0 2.5.9 2.9 2l.8 2.4h3.7c2.4 0 4.3 1.9 4.3 4.3zm-8.6 7.5c0-4.1-3.3-7.5-7.5-7.5-4.1 0-7.5 3.4-7.5 7.5s3.3 7.5 7.5 7.5c4.2-.1 7.5-3.4 7.5-7.5z"}))),r.a.createElement("span",{className:"UnsplashSpan"},"Photo by ",this.props.photographer)))}}]),a}(n.Component)),g=a(25),E=a(26),f=a(9),b=(a(91),a(21));var y=function(){return r.a.createElement("div",{id:"AboutMe"},r.a.createElement(p,{imageUrl:"https://images.unsplash.com/photo-1548983965-416c1920352e?ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80",photographerUrl:"https://unsplash.com/@24ameer",photographer:"Ameer Basheers",gradientRGBAfrom:"rgba(4,7,25,1)",gradientRGBAmid:"rgba(4,7,25,0.0)",gradientRGBAto:"rgba(2,2,2,0.95)"},"   ",r.a.createElement("div",{className:"AboutMe"}),r.a.createElement(g.a,null,r.a.createElement(E.a,{style:{padding:"0% 0% 10% 0%"}},r.a.createElement(f.a,{xs:12},r.a.createElement("h1",{style:{color:"white",marginTop:"100px"},className:"float-left"},"About Me")),r.a.createElement(f.a,{xs:12,md:3,style:{marginTop:"50px",overflow:"hidden"}},r.a.createElement(b.a,{src:"/AboutMePhotoFixed.jpg",roundedCircle:!0,fluid:!0})),r.a.createElement(f.a,{xs:12,md:8,style:{marginTop:"50px",color:"white",fontSize:"1.9em"}},"Hi, my name is Michael Naguib. I am a college student pursuing a BS in Computer Science and Mathematics. I currently do research in multi-agent artificial intelligence and have experience with GPU accelerated computing."),r.a.createElement(f.a,{style:{marginTop:"50px",color:"white",fontSize:"1.2em"}},r.a.createElement("div",{className:"text-left"},"Often I will code a project simply because it sounds interesting. The solution to a problem is not always nearly as interesting to me as the process needed to compute the solution. Understanding the fundamental logic and intuitive steps of a process for me is one of the more rewarding aspects of my field of study; understanding the rationality of an individual's choices can inform me as to similar manners of thinking for when I attempt to solve a new problem. I try to work smarter not harder, ironically however when you can't work smarter, the smartest move is to work harder, as figuring it out will let you work smarter when you recognize the same issue in the future.",r.a.createElement("br",null),r.a.createElement("br",null),"In my free time I will often take time to read, program, or hangout with friends. My hobbies include  XC Running \ud83c\udfc3, Coding \ud83d\udc68\u200d\ud83d\udcbb, Drone Racing Quadcopters \u2708\ufe0f, & Boldering \ud83e\uddd7 . I am always up for a challenge whether it be abstract or otherwise."))))))},v=a(104),w=a(62),k=a(23);var x=function(){return r.a.createElement(v.a,{className:"sticky-top",sticky:"top",bg:"dark",variant:"dark",style:{top:"0",position:"fixed",width:"100%"}},r.a.createElement(v.a.Brand,null,r.a.createElement(k.HashLink,{className:"nav-link",to:"/"}," \ud83e\udd94")),r.a.createElement(w.a,{className:"mr-auto"},r.a.createElement(k.HashLink,{className:"nav-link",to:"/#AboutMe"}," About Me"),r.a.createElement(k.HashLink,{className:"nav-link",to:"/#Projects"}," Projects"),r.a.createElement(k.HashLink,{className:"nav-link",to:"/#Contact"}," Contact"),r.a.createElement(k.HashLink,{className:"nav-link",to:"/Demos"}," Demos")))},N=a(4),P=a(60),M=a(31),T=a.n(M);function A(){return r.a.createElement(P.a,{style:{marginTop:"50px",marginBottom:"90px"}},r.a.createElement(N.a,{className:"bg-dark text-white",text:"black"},r.a.createElement("a",{href:"https://github.com/Michael-Naguib/Chaotic-IFS-Fractal",className:"ProjectsLink"},r.a.createElement(N.a.Img,{variant:"top",src:"/Fractal2.png"}),r.a.createElement(N.a.Body,null,r.a.createElement(N.a.Title,null,"Chaotic Iterated Fractals"),r.a.createElement(N.a.Text,null,"Affine Transformation Matrix Based calculation rendered using Datashader")),r.a.createElement(N.a.Text,null,r.a.createElement("small",{className:"text-muted"},"Last updated May 2020 ")))),r.a.createElement(N.a,{className:"bg-dark text-white",text:"black"},r.a.createElement("a",{href:"https://github.com/Michael-Naguib/BoidsSimulation",className:"ProjectsLink"},r.a.createElement(N.a.Img,{variant:"top",src:"/BoidsSimGif.gif"}),r.a.createElement(N.a.Body,{bg:"Dark"},r.a.createElement(N.a.Title,null,"3k Particle Simulation"),r.a.createElement(N.a.Text,null,r.a.createElement(T.a.Provider,null,"An implementation of Craig Renyolds Boids done in ",r.a.createElement(T.a.Node,{inline:!0,formula:"\\mathcal{O}(n\\log{}n)"})," by fractally subdividing space using a KD-Tree to approximate nearest neighbors."))),r.a.createElement(N.a.Text,null,r.a.createElement("small",{className:"text-muted"},"Last updated May 2020 ")))),r.a.createElement(N.a,{className:"bg-dark text-white",text:"black"},r.a.createElement("a",{href:"https://github.com/Michael-Naguib/ChaoticIFSFractal3D",className:"ProjectsLink"},r.a.createElement(N.a.Img,{variant:"top",src:"/3dFractal.gif"}),r.a.createElement(N.a.Body,{bg:"Dark"},r.a.createElement(N.a.Title,null,"Chaotic Fractals in 3D"),r.a.createElement(N.a.Text,null,r.a.createElement(T.a.Provider,null,"Derived the equations for 3D variants of 2D fractals and displayed using GPU acelerated Point Cloud viewer."))),r.a.createElement(N.a.Text,null,r.a.createElement("small",{className:"text-muted"},"Last updated May 2020 ")))),r.a.createElement(N.a,{className:"bg-dark text-white",text:"black"},r.a.createElement("a",{href:"https://github.com/Michael-Naguib/Genetic-Algorithm",className:"ProjectsLink"},r.a.createElement(N.a.Img,{variant:"top",src:"/exampleGA.gif"}),r.a.createElement(N.a.Body,{bg:"Dark"},r.a.createElement(N.a.Title,null,"Genetic Algorithm (on Words)"),r.a.createElement(N.a.Text,null,r.a.createElement(T.a.Provider,null,"Implemented a Genetic based approach for calculating a target phrase..."))),r.a.createElement(N.a.Text,null,r.a.createElement("small",{className:"text-muted"},"Last updated May 2020 ")))),r.a.createElement(N.a,{className:"bg-dark text-white",text:"black"},r.a.createElement("a",{href:"https://github.com/Michael-Naguib/Genetic-Algorithm",className:"ProjectsLink"},r.a.createElement(N.a.Img,{variant:"top",src:"/PiEqn.png"}),r.a.createElement(N.a.Body,{bg:"Dark"},r.a.createElement(N.a.Title,null,"Monte Carlo Pi Simulation"),r.a.createElement(N.a.Text,null,r.a.createElement(T.a.Provider,null,"Derived Pi as a result of a monte carlo simulation computed in N-Dimensions so as to produce and estimate of Pi by running repeated simulations and observing convergence of approximations."))),r.a.createElement(N.a.Text,null,r.a.createElement("small",{className:"text-muted"},"Last updated May 2020 ")))),r.a.createElement(N.a,{className:"bg-dark text-white",text:"black"},r.a.createElement("a",{href:"https://github.com/Michael-Naguib/Simple-Cryptography",className:"ProjectsLink"},r.a.createElement(N.a.Img,{variant:"top",src:"/tenor.gif"}),r.a.createElement(N.a.Body,{bg:"Dark"},r.a.createElement(N.a.Title,null,"Cryptography"),r.a.createElement(N.a.Text,null,"One of my earliest projects where I implemented several encryption algorithms: Vigenere, Hills, Affine & Caesar;  in addition to implementing frequency analysis to automatically break encryption given a corpus of encrypted text.")),r.a.createElement(N.a.Text,null,r.a.createElement("small",{className:"text-muted"},"Last updated May 2020 ")))),r.a.createElement(N.a,{className:"bg-dark text-white",text:"black"},r.a.createElement("a",{href:"https://github.com/Michael-Naguib/ProjectEuler",className:"ProjectsLink"},r.a.createElement(N.a.Img,{variant:"top",src:"/Euler.jpg"}),r.a.createElement(N.a.Body,{bg:"Dark"},r.a.createElement(N.a.Title,null,"Project Euler"),r.a.createElement(N.a.Text,null,"Project Euler a website containing mathematical challenges to solve and implement as you see fit. As I mentioned ... I like to code ... I often find the challenges fun and a great way to learn!")))),r.a.createElement(N.a,{className:"bg-dark text-white",text:"black"},r.a.createElement("a",{href:"https://github.com/Michael-Naguib/",className:"ProjectsLink"},r.a.createElement(N.a.Img,{variant:"top",src:"/Octocat.png"}),r.a.createElement(N.a.Body,{bg:"Dark"},r.a.createElement(N.a.Title,null,"And Many More"),r.a.createElement(N.a.Text,null,"Checkout my github! Although all of my code is open source, I cannot release every side project I am working on until it has reached some level of maturity. These are the tip of the iceberg!")))))}var I=function(){return r.a.createElement("div",{className:"Projects",style:{margin:"0px 0px 0px 0px "},id:"Projects"},r.a.createElement(p,{imageUrl:"/jeremy-bishop-uAfZBP-GtiA-unsplash.jpg",photographerUrl:"https://unsplash.com/@jeremybishop",photographer:"Jeremy Bishop",gradientRGBAfrom:"rgba(2,2,4,1)",gradientRGBAmid:"rgba(2,2,4,0.4)",gradientRGBAto:"rgba(2,2,4,1)"},r.a.createElement(g.a,null,r.a.createElement(E.a,null,r.a.createElement(f.a,{xs:12}," ",r.a.createElement("h1",{className:"text-left",style:{color:"White",marginTop:"100px"}}," Projects")),r.a.createElement(f.a,{xs:12},r.a.createElement(A,null))))))};function j(){return r.a.createElement(g.a,null,r.a.createElement(E.a,null,r.a.createElement(f.a,{xs:6,md:4},r.a.createElement("a",{href:"https://www.linkedin.com/in/michael-naguib-969591170/"},r.a.createElement(b.a,{className:"ContactImage",style:{height:"80px"},src:"/LI-Bug.svg.original.svg"}))),r.a.createElement(f.a,{xs:6,md:4},r.a.createElement("a",{href:"mailto:1Michael.Naguib@gmail.com"},r.a.createElement(b.a,{className:"ContactImage",style:{height:"90px"},src:"/iconfinder_gmail_1220367.svg"}))),r.a.createElement(f.a,{xs:6,md:4},r.a.createElement("a",{href:"https://github.com/Michael-Naguib"},r.a.createElement(b.a,{className:"ContactImage",style:{height:"90px"},src:"/Octocat.png"}))),r.a.createElement(f.a,{xs:6,md:4},r.a.createElement("a",{href:"/MichaelNaguibResume5-3-2020.pdf",download:!0},r.a.createElement(b.a,{className:"ContactImage",style:{height:"90px"},src:"/icons8-document.svg"}))),r.a.createElement(f.a,{xs:6,md:4},r.a.createElement("a",{href:"/Michael Naguib.vcf"},r.a.createElement(b.a,{className:"ContactImage",style:{height:"88px"},src:"/business.svg"}))),r.a.createElement(f.a,{xs:6,md:4},r.a.createElement("a",{href:"tel:919-710-9686"},r.a.createElement(b.a,{className:"ContactImage",style:{height:"90px"},src:"/communications.svg"})))))}var C=function(){return r.a.createElement("div",{id:"Contact"},r.a.createElement(p,{imageUrl:"/newman.JPG",photographerUrl:"#",photographer:"My Friend Ryan Dondalski",gradientRGBAfrom:"rgba(0,0,0,1)",gradientRGBAmid:"rgba(0,0,0,0.0)",gradientRGBAto:"rgba(0,0,0,1)"},r.a.createElement(g.a,null,r.a.createElement(E.a,{style:{padding:"0% 0% 10% 0%"}},r.a.createElement(f.a,{xs:12},r.a.createElement("h1",{style:{color:"white",marginTop:"100px"},className:"float-left"}," Contact ")),r.a.createElement(f.a,{xs:12,md:6,style:{color:"white",fontSize:"100%",paddingTop:"100px"}},"Email: 1Michael.Naguib@gmail.com ",r.a.createElement("br",null),"Cell: 919-710-9686"),r.a.createElement(f.a,{className:"text-left",xs:12,md:6,style:{borderRadius:"0.25em",color:"white",paddingTop:"70px"}},r.a.createElement(j,null)))),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null),r.a.createElement("br",null)))};var B=function(){return r.a.createElement("div",{className:"Footer",style:{background:"Black",color:"white"}},"Site Created & Coded by Michael Naguib, Some Icons & Images provided by:",r.a.createElement("a",{className:"ProjectsLink",href:"https://icons8.com"},"Icons8"),",",r.a.createElement("a",{className:"ProjectsLink",href:"https://www.flaticon.com/authors/pixel-perfect",title:"Pixel perfect"},"Pixel perfect"),",",r.a.createElement("a",{className:"ProjectsLink",href:"https://www.flaticon.com/authors/smashicons",title:"Smashicons"},"Smashicons"))},L=a(63),S=a(105),z=a(103);var U=function(){var e=Object(n.useState)(!0),t=Object(L.a)(e,2),a=t[0],i=t[1];return r.a.createElement("div",{style:{width:"100%",position:"fixed",zIndex:100,bottom:"0"}},r.a.createElement(S.a,{show:a,variant:"success"},r.a.createElement(S.a.Heading,null,"Privacy Notice"),r.a.createElement("p",null,"By Clicking Accept you agree to the cookie and ",r.a.createElement(k.HashLink,{to:"/PrivatePolicy"},"private policy "),"of this site."),r.a.createElement("hr",null),r.a.createElement("div",{className:"d-flex justify-content-end"},r.a.createElement(z.a,{onClick:function(){i(!1),window.policyAccepted=!0,setTimeout((function(){function e(){window.dataLayer.push(arguments)}console.log("Accepted Agreement"),window.dataLayer=window.dataLayer||[],e("js",new Date),e("config","UA-165348245-1")}),1),console.log("exitedFunc")},variant:"outline-success"},"Accept"))))};var D=function(){return r.a.createElement("div",{className:"App",id:"AppTop"},window.policyAccepted?void 0:r.a.createElement(U,null),r.a.createElement(x,null),r.a.createElement(d,{smallMsg:"M",bigMsg:"Michael",smallVidUrl:"/me.mp4",bigVidUrl:"/splash-video-3.mp4",maskColor:"rgb(4,7,25)"}),r.a.createElement(y,null),r.a.createElement(I,null),r.a.createElement(C,null),r.a.createElement(B,null))},R=a(3),G=a(61),O=function(e){Object(c.a)(a,e);var t=Object(m.a)(a);function a(e){var n;Object(l.a)(this,a),(n=t.call(this,e)).handleResize=function(){n.camera.aspect=window.innerWidth/window.innerHeight,n.camera.updateProjectionMatrix(),n.renderer.setSize(window.innerWidth,window.innerHeight)},n.scene=new R.j,n.camera=new R.h(75,window.innerWidth/window.innerHeight,.1,1e3),n.renderer=new R.p,n.renderer.setSize(window.innerWidth,window.innerHeight),n.scene.background=new R.b(16711680),document.body.appendChild(n.renderer.domElement),n.camera.position.z=15,n.geometry=new R.k(1,25,25),n.material=new R.g({color:0}),n.cube=new R.f(n.geometry,n.material),n.scene.add(n.cube);var r=new R.a(30,30,30),i=new R.q(r),o=new R.d(i);return o.material.depthTest=!0,o.material.opacity=1,o.material.transparent=!0,n.scene.add(o),n.renderer.render(n.scene,n.camera),n.controls=new G.a(n.camera,n.renderer.domElement),n.atime=0,n}return Object(s.a)(a,[{key:"componentDidMount",value:function(){var e=this;window.addEventListener("resize",this.handleResize,!1),requestAnimationFrame((function(){e.animate()}))}},{key:"componentWillUnmount",value:function(){window.removeEventListener("resize",this.handleResize,!1)}},{key:"animate",value:function(){var e=this;requestAnimationFrame((function(){e.animate()})),this.cube.rotation.x+=.01,this.cube.rotation.y+=.01;this.cube.position.x=10*Math.sin(2*this.atime),this.cube.position.y=10*Math.cos(2*this.atime),this.cube.position.z+=5*(Math.random()-.5);Math.abs(this.cube.position.x)>15&&(this.cube.position.x=this.cube.position.x%15),Math.abs(this.cube.position.y)>15&&(this.cube.position.y=this.cube.position.y%15),Math.abs(this.cube.position.z)>15&&(this.cube.position.z=this.cube.position.z%15),this.atime+=.01,this.renderer.render(this.scene,this.camera),this.controls.update()}},{key:"render",value:function(){return r.a.createElement("div",{className:"Simulation"})}}]),a}(r.a.Component);var F=function(){return r.a.createElement("div",{className:"ParticleSimulation"},r.a.createElement(x,null),r.a.createElement(O,null))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var W=a(41),H=a(7);o.a.render(r.a.createElement(W.BrowserRouter,null,r.a.createElement(H.g,null,r.a.createElement(H.d,{path:"/",component:D,exact:!0}),r.a.createElement(H.d,{path:"/Demos",component:F}),r.a.createElement(H.d,{path:"/PrivatePolicy",component:function(){return r.a.createElement("div",null,r.a.createElement("h1",null,"Privacy Policy for Michael Naguib"),r.a.createElement("p",null,"At Michael Naguib, accessible from michael-naguib.github.io, one of our main priorities is the privacy of our visitors. This Privacy Policy document contains types of information that is collected and recorded by Michael Naguib and how we use it."),r.a.createElement("p",null,"If you have additional questions or require more information about our Privacy Policy, do not hesitate to contact us."),r.a.createElement("h2",null,"Log Files"),r.a.createElement("p",null,"Michael Naguib follows a standard procedure of using log files. These files log visitors when they visit websites. All hosting companies do this and a part of hosting services' analytics. The information collected by log files include internet protocol (IP) addresses, browser type, Internet Service Provider (ISP), date and time stamp, referring/exit pages, and possibly the number of clicks. These are not linked to any information that is personally identifiable. The purpose of the information is for analyzing trends, administering the site, tracking users' movement on the website, and gathering demographic information."),r.a.createElement("h2",null,"Cookies and Web Beacons"),r.a.createElement("p",null,"Like any other website, Michael Naguib uses 'cookies'. These cookies are used to store information including visitors' preferences, and the pages on the website that the visitor accessed or visited. The information is used to optimize the users' experience by customizing our web page content based on visitors' browser type and/or other information."),r.a.createElement("p",null,'For more general information on cookies, please read the "What Are Cookies" article on ',r.a.createElement("a",{href:"https://www.cookieconsent.com/what-are-cookies/"},"Cookie Consent website"),"."),r.a.createElement("h2",null,"Privacy Policies"),r.a.createElement("p",null,"You may consult this list to find the Privacy Policy for each of the advertising partners of Michael Naguib. Our Privacy Policy was created with the help of the ",r.a.createElement("a",{href:"https://www.privacypolicygenerator.org"},"Free Privacy Policy Generator")," and the ",r.a.createElement("a",{href:"https://www.privacypolicyonline.com/privacy-policy-generator/"},"Privacy Policy Generator Online"),"."),r.a.createElement("p",null,"Third-party ad servers or ad networks uses technologies like cookies, JavaScript, or Web Beacons that are used in their respective advertisements and links that appear on Michael Naguib, which are sent directly to users' browser. They automatically receive your IP address when this occurs. These technologies are used to measure the effectiveness of their advertising campaigns and/or to personalize the advertising content that you see on websites that you visit."),r.a.createElement("p",null,"Note that Michael Naguib has no access to or control over these cookies that are used by third-party advertisers."),r.a.createElement("h2",null,"Third Party Privacy Policies"),r.a.createElement("p",null,"Michael Naguib's Privacy Policy does not apply to other advertisers or websites. Thus, we are advising you to consult the respective Privacy Policies of these third-party ad servers for more detailed information. It may include their practices and instructions about how to opt-out of certain options. "),r.a.createElement("p",null,"You can choose to disable cookies through your individual browser options. To know more detailed information about cookie management with specific web browsers, it can be found at the browsers' respective websites. What Are Cookies?"),r.a.createElement("p",null,"Another part of our priority is adding protection for children while using the internet. We encourage parents and guardians to observe, participate in, and/or monitor and guide their online activity."),r.a.createElement("p",null,"Michael Naguib does not knowingly collect any Personal Identifiable Information from children under the age of 13. If you think that your child provided this kind of information on our website, we strongly encourage you to contact us immediately and we will do our best efforts to promptly remove such information from our records."),r.a.createElement("h2",null,"Online Privacy Policy Only"),r.a.createElement("p",null,"This Privacy Policy applies only to our online activities and is valid for visitors to our website with regards to the information that they shared and/or collect in Michael Naguib. This policy is not applicable to any information collected offline or via channels other than this website."),r.a.createElement("h2",null,"Consent"),r.a.createElement("p",null,"By using our website, you hereby consent to our Privacy Policy and agree to its Terms and Conditions."),r.a.createElement("p",null," The user agrees to any additional terms that the devloper sets forth for this site"))}}),r.a.createElement(H.d,{component:function(){return r.a.createElement("div",null,"ERROR")}}))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},65:function(e,t,a){e.exports=a(101)},70:function(e,t,a){},71:function(e,t,a){},89:function(e,t,a){},90:function(e,t,a){},91:function(e,t,a){}},[[65,1,2]]]);
//# sourceMappingURL=main.ca0cdb57.chunk.js.map