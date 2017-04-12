/****1/5****/

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
    	<input type="text" onKeyUp={props.handleKeyUp} /> <br/>
    	<span>{props.msg}</span>
    </div>;
}

ReactDOM.render(
  <App></App>,
  document.getElementById("app-root")
)



/****2/5****/

class Sum extends React.Component {
	render() {
        var a = Number(nr1.value) + Number (nr2.value)
		return (
		  <div>{a}</div>
			);
	}
}

var nr1 = document.getElementById("nr1");
var nr2 = document.getElementById("nr2");

function plus(event){
    ReactDOM.render(
  <Sum summa = {nr1 + nr2} />,
  document.getElementById('summa')
)
summa.value = "";
    
}

nr1.addEventListener("keyup", plus);
nr2.addEventListener("keyup", plus);



/****3/5****/

class Btn extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ""
    };
    this.btn1Value = this.btn1Value.bind(this);
    this.btn2Value = this.btn2Value.bind(this);
  }
   btn1Value(event){
    this.setState({value:this.state.value = "första knappen"})
    
  }  
  btn2Value(event){
    this.setState({value: this.state.value = "andra knappen"})
    
  }
    
    
  render() {
    return (
    
      <div>
            <button id="kna1" onClick={this.btn1Value}>Första knappen</button>
            <button id="kna2" onClick={this.btn2Value}>Andra knappen</button>
        <span>Du tryckte på: {this.state.value}</span>
      
      </div>
     
    )
  }
}
ReactDOM.render(
    <Btn></Btn>,
  document.getElementById('knappar')
);









/**input ist för html**/

/*** class App extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            text:this.props.initial
        };
         this.handleChange = this.handleChange.bind(this);
    }
    handelChange(event){
        //consloe.log('handelChange')
        this.setState({
            text: event.target.value
        }) 
    }
    
render(){  
    return(<p>
  <input type="text" 
            value={this.state.text}
         onChange={this.handleChange} />  
      </p>)

    }
    } ***/
    


