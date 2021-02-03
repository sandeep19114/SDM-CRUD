const template = document.createElement('template');
template.innerHTML = `
    <style>
        
        .nav-tap{
            top:0;
            z-index: 10;
            border-bottom: 2px solid #000000;
            position: sticky; 
            height: 60px;
            background: #FD9B5D;
            display: flex;
            flex-wrap: wrap;
            align-items: center;
            justify-content: space-between;
            padding: 5px 10px;
            margin: 0%;
        
        }
        
        .nav-tap a{
            padding: 0 10px;
            margin-right: 5%;
            color:#000;
            font-size: 16px;
            font-weight: 800;
            text-align:left;
            line-height: 40px;
            text-decoration: none !important;
        }
        .nav-tap a:hover{
        color:#FEF9F7;
        
        }
        .center {
            border: 1.5px solid #000000;
            width: 50%;
            padding-top: 20px;
            padding-bottom: 20px;
            font-weight: 600;
        }
        #aft {
            text-align: left;
            padding-left: 20px;
            padding-right: 20px;
            display: none;
        }
    
    </style>
    <nav class="nav-tap">
        <a class="logo" href="index.html"><h2>Student DataManagement</h2></a>
        <a href="index.html" >Home</a>
        <a href="attendence.html" >Attendence</a>
        <a href="result.html" >Results</a>
        <a href="notif.html" >Notifications</a>
    </nav> <br/>
`;

class Nav extends HTMLElement {
	constructor() {
		super();
        
        this.attachShadow({mode: 'open'});
        this.shadowRoot.appendChild(template.content.cloneNode(true));

	}
 }
 window.customElements.define('hd-nav', Nav);