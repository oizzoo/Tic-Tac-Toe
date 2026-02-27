import Player from "./components/Player.jsx"

function App() {
  return (
    <main>
      <div id="game-container">
        <ol id="players">
          <Player name="Jakub" symbol="X" />
          <Player name="Shiru" symbol="O" />
        </ol>

        GAME BOARD
      </div>

      LOG
    </main>
  )
}

export default App
