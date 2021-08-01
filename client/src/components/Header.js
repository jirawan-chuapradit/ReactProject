import React,{Component} from "react"

class Header extends Component {
    constructor(props) {
        super(props)
        this.state = {date : new Date()}
        
        console.log('constructor')
    }

    componentDidMount(){
        this.timerID = setInterval(() => {
            this.tick()
        }, 1000);
        console.log('componentDidMount')
    }

    componentDidUpdate(){
        // console.log('componentDidUpdate')
    }

    componentWillUnmount(){
    clearInterval(this.timerID)        
    }

    tick() {
        this.setState({date : new Date()})
    }
    
    render() {

        return (
        <div className="container-fluid">
            <div className="row">
                <div className="col-md-8 text-left">
                    <h1 className="text-success"><img style={{height : 70}} src="/images/logo/logo.png" atl="" /> เฮลตี้ คาเฟ่ </h1>
                </div>
                <div className="col-md-4 text-end">
                    <h5 className="text-muted mt-4"> {this.state.date.toLocaleTimeString()} </h5>
                </div>
                <hr />
            </div>
        </div>
        )
    }
}
export default Header;