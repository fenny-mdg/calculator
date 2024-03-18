const root = document.getElementById('root');

function chunckArray(arr, chunkSize) {
  if (chunkSize <= 0) throw 'Invalid chunk size';

  const res = [];
  for (let i = 0, len = arr.length; i < len; i += chunkSize) {
    res.push(arr.slice(i, i + chunkSize));
  }

  return res;
}

const buttonLabels = chunckArray(
  Array.from({length: 10}, (_, i) => i).reverse(),
  3,
).map(chunck => chunck.reverse());

function Button(props) {
  const {className, children, disabled = false, onClick = () => {}} = props;

  return (
    <button
      className={`calculator-key ${className || ''}`}
      onClick={onClick}
      disabled={disabled}
    >
      {children}
    </button>
  );
}

const operatorLabels = ['+', '-', '*', '/'];

class App extends React.Component {
  state = {
    output: '0',
  };

  handleReset = () => {
    this.setState({output: '0'});
  };

  handleButtonClick = value => {
    const newOutput = `${
      this.state.output === '0' && !Number.isNaN(value) ? '' : this.state.output
    }${value}`;
    const matched = newOutput.match(
      /^\d+(.)?(.\d+)?(([\+\-\*\/])?(\d+)?(.)?(.\d+)?)+$/,
    );

    if (matched) {
      this.setState({output: newOutput});
    }
  };

  handleComputeValue = () => {
    if (this.state.output.match(/^\d+(.\d+)?([\+\-\*\/])?(\d+)?(.\d+)?$/)) {
      this.setState({output: eval(this.state.output)});
    }
  };

  getComputeValueStatus = () => {
    switch (true) {
      case this.state.output === '0':
      case operatorLabels.includes(
        this.state.output[this.state.output.length - 1],
      ):
        return 'disabled';
      default:
        return 'enabled';
    }
  };

  render() {
    return (
      <div className="calculator">
        <div className="calculator-output">{this.state.output}</div>
        <div className="calculator-keys">
          {operatorLabels.map(operator => (
            <Button
              key={operator}
              className="calculator-key-operator"
              onClick={() => this.handleButtonClick(operator)}
            >
              {operator}
            </Button>
          ))}

          {buttonLabels.map(row =>
            row.map(label => (
              <Button key={label} onClick={() => this.handleButtonClick(label)}>
                {label}
              </Button>
            )),
          )}
          <Button onClick={() => this.handleButtonClick('.')}>.</Button>
          <Button className="calculator-key-reset" onClick={this.handleReset}>
            AC
          </Button>
          <Button
            className="calculator-key-enter"
            onClick={this.handleComputeValue}
            disabled={this.getComputeValueStatus() === 'disabled'}
          >
            =
          </Button>
        </div>
      </div>
    );
  }
}

ReactDOM.createRoot(root).render(<App />);
