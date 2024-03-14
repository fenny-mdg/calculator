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
  const {className, children, onClick = () => {}} = props;

  return (
    <button className={`calculator-key ${className || ''}`} onClick={onClick}>
      {children}
    </button>
  );
}

function App() {
  const handleClick = value => {
    console.log(value);
  };

  return (
    <div className="calculator">
      <div className="calculator-output">0</div>
      <div className="calculator-keys">
        <Button className="calculator-key-operator">+</Button>
        <Button className="calculator-key-operator">-</Button>
        <Button className="calculator-key-operator">&times;</Button>
        <Button className="calculator-key-operator">÷</Button>

        {buttonLabels.map(row =>
          row.map(label => (
            <Button key={label} onClick={() => handleClick(label)}>
              {label}
            </Button>
          )),
        )}
        <Button>.</Button>
        <Button className="calculator-key-reset">AC</Button>
        <Button className="calculator-key-enter">=</Button>
      </div>
    </div>
  );
}

ReactDOM.createRoot(root).render(<App />);
