import React, {Component} from 'react';

class App extends Component {
    private c2 = 0
  constructor(props: {} | Readonly<{}>) {
    super(props)
    this.state = {
      counter: 0
    }
  }
  render() {
    let tempC = 0
    // @ts-ignore
    const c = this.state.counter
    // @ts-ignore
    return (
        <div>
          <button onClick={()=>{
            // @ts-ignore
            this.setState({counter: this.state.counter + 1})
          }}>{c}</button>
          <button onClick={()=>{
            {
              tempC++
            }
          }}>{tempC}</button>
            <button onClick={()=>{
                {
                    this.c2++
                }
            }}>{this.c2}</button>
        </div>
    )
  }
}

export default App;
