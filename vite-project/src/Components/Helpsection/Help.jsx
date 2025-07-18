
function Help() {
    return (
        <div>
            <h1>Help</h1>
            <p>Guess the secret five-letter word in just six tries! After each guess:</p>
                <ul>
                    <li>  🟩 Green = Right letter, right spot</li>
                    <li> 🟨 Yellow = Right letter, wrong spot</li>
                    <li> ⬛ Gray = Not in the word</li>
                </ul>
            <p>Pick smart words, watch the colors, and crack that code. Six guesses. One hidden word. Infinite bragging rights.</p>
            
        </div>
    )
}

export default Help;
