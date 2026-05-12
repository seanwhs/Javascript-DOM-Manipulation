/**
 * PROJECT 06: THE REACT WAY
 * 
 * ⚠️ IMPORTANT:
 * If you are loading this file via <script src="script.jsx">, 
 * you MUST use a local server (like VS Code Live Server).
 * 
 * Why? Browsers block local file requests (file:///) due to CORS 
 * (Cross-Origin Resource Sharing) security policies. 
 * Using 'Go Live' creates a http://localhost server which allows the file to load.
 */

function App() {
    // 1. Define State (The 'What')
    // isVisible = current boolean value
    // setIsVisible = function to update that value
    const [isVisible, setIsVisible] = React.useState(false);

    // 2. The 'UI' (Declarative)
    // We describe WHAT the UI should look like based on 'isVisible'
    return (
        <div className="card">
            <h1>React State Demo</h1>
            
            {/* We don't manually hide/show the div; we just toggle the data */}
            <button onClick={() => setIsVisible(!isVisible)}>
                {isVisible ? "Hide Message" : "Show Message"}
            </button>

            {/* If isVisible is true, React automatically inserts this into the DOM */}
            {isVisible && (
                <div className="message">
                    Hello, React! 🚀
                </div>
            )}
        </div>
    );
}

// 3. Mount the React application
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(<App />);