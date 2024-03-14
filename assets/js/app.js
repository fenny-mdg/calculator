const root = document.getElementById("root");

const app = (
    <div className="calculator">
        <div className="calculator-output">0</div>
        <div className="calculator-keys">
            <button className="calculator-key calculator-key-operator">+</button>
            <button className="calculator-key calculator-key-operator">-</button>
            <button className="calculator-key calculator-key-operator">&times;</button>
            <button className="calculator-key calculator-key-operator">÷</button>
            <button className="calculator-key">7</button>
            <button className="calculator-key">8</button>
            <button className="calculator-key">9</button>
            <button className="calculator-key">4</button>
            <button className="calculator-key">5</button>
            <button className="calculator-key">6</button>
            <button className="calculator-key">1</button>
            <button className="calculator-key">2</button>
            <button className="calculator-key">3</button>
            <button className="calculator-key">0</button>
            <button className="calculator-key">.</button>
            <button className="calculator-key calculator-key-reset">AC</button>
            <button className="calculator-key calculator-key-enter">=</button>
        </div>
    </div>
);

ReactDOM.createRoot(root).render(app);
