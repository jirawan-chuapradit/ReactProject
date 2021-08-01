import React, {Component} from "react"

class Calculator extends Component {

    render() {
        return (
            <div>
                <h1 className="text-end">340.0</h1>
                <hr />

                <ul className="list-unstyled">
                    <li className="text-end text-success  title">
                        บิงซู x 1 = 200.0
                        <button className="btn btn-light btn-sm">X</button>
                    </li>
                    <li className="text-end text-success  title">
                        เฟรนฟราย x 1 = 140.0
                        <button className="btn btn-light btn-sm">X</button>
                    </li>                
                </ul>
                <hr />
                <div class="d-grid gap-2">
                    <button class="btn btn-danger" type="button">ยินยัน</button>
                    <button class="btn btn-secondary" type="button">ยกเลิก</button>
                </div>
            </div>
        )
    }
}


export default Calculator