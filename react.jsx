/****1/5***/

class App extends React.Component {
	constructor(props) {
		super(props);
		this.state = {
			msg1: ''
		}
		this.handleKeyUp1 = this.handleKeyUp1.bind(this);
	}
	handleKeyUp1(event) {
		console.log('handleKeyUp1');
		this.setState({
			msg1: event.target.value
		})
	}
	
	render() {
		return (
		  <div className="myform">
			<MyForm handleKeyUp={this.handleKeyUp1} msg={this.state.msg1} />
		  </div>
		);
	}
}

function MyForm(props) {
    return <div>
    	<input type="text" 
               placeholder="Text" 
               onKeyUp={props.handleKeyUp} /> <br/>
    	<span>{props.msg}</span>
    </div>;
}

ReactDOM.render(
  <App></App>,
  document.getElementById("app-root")
)



/****2/5***/

class Sum extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
           nr1:"",
           nr2:""
        };
        this.input1 = this.input1.bind(this)
        this.input2 = this.input2.bind(this)
    }
    
    input1 (event) {
        var number1 = event.target.value;
        this.setState({nr1: number1});
    }
    
    input2 (event) {
        var number2 = event.target.value;
        this.setState({nr2: number2});
    }
    
    calculator () {
        return Number(this.state.nr1) + Number(this.state.nr2); 
    };
    
    render () {
        return (
            
            <div>
                    <input 
                        type="text" 
                        placeholder="Skriv en siffra"
                        onChange={this.input1}
                     />
                 
                <div> + </div>
                
                    <input 
                        type="text" 
                        placeholder="Skriv en siffra"
                        onChange={this.input2}
                     />
                
                <div> = </div>
                <div>
                        {this.calculator()}
                </div>
            </div>
        );
    }
}
ReactDOM.render (
        <Sum />,
        document.getElementById('summa')
        );



/****3/5****/

class Btn extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = {
              value1: "",
              value2: "" 
             
        };
        
        this.btn1Value = this.btn1Value.bind(this)
        this.btn2Value = this.btn2Value.bind(this)
    }
    
    btn1Value (event) {
        this.setState({textDisplay: event.target.innerHTML});
        this.setState({value1: event.target.value});
        
       

    }
    btn2Value (event) {
        this.setState({textDisplay: event.target.innerHTML});
        this.setState({value2: event.target.value});
        

    }
   
    render () {
        
        return (
            <div>
                    <button id="kna1" onClick={this.btn1Value}>
                        Första knappen
                    </button>    
                
                
                    <button id="kna2" onClick={this.btn2Value}>
                        Andra knappen
                    </button> 
                 
            <div id="knappar"> Du tryckte på:
                    {this.state.textDisplay}
                    <span style={{display: this.state.spanDisplay1}}>
                         {this.state.value1}
                    </span>
                    <span style={{display: this.state.spanDisplay2}}>
                        {this.state.value2}
                    </span>
            </div>
            </div>        
        );
    }
}
 ReactDOM.render (
        <Btn />,
        document.getElementById('knappar')
        );



