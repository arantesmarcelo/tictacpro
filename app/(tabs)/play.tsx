import { Text, View, TouchableOpacity, Button, Alert} from "react-native";
import { useState, useEffect } from 'react';
import globalStyles from "../styles/global";

export default function Play() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);
  const [gameActive, setGameActive] = useState(false);

  useEffect(() => {
    const winner = calculateWinner(board);
    if (winner) {
      Alert.alert('Game over', 'Winner: ' + winner);
      setGameActive(false);
    } else if (board.every(square => square)) {
      Alert.alert('Game Over', 'It\'s a tie!');
      setGameActive(false);
    }
  }, [board]);

  const handlePress = (index: any) => {
    if (!gameActive || board[index] || calculateWinner(board)) return;
    const newBoard = board.slice();
    newBoard[index] = isXNext ? 'X' : 'O';
    setBoard(newBoard)
    setIsXNext(!isXNext);
  };

  const renderSquare = (index: any) => {
    return (
      <TouchableOpacity 
        style={globalStyles.square} 
        onPress={() => handlePress(index)}
        disabled={!gameActive || board[index]}
      >
        <Text style={globalStyles.squareText}>{board[index]}</Text>
      </TouchableOpacity>
    );
  };

  const calculateWinner = (squares: any) => {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i <lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }

  const restartGame = () => {
    setBoard(Array(9).fill(null));
    setIsXNext(true);
    setGameActive(true);
  };

  const startGame = () => {
    restartGame();
    setGameActive(true);
  }

  const winner = calculateWinner(board);
  const isBoardFull = board.every(square => square !== null);
  const status = !gameActive ? 
    'Click play to start' 
    : winner
    ? 'Winner: ' + winner
    : isBoardFull
    ? 'It\'s a tie!'
    : 'Next Player: ' + (isXNext ? 'X' : 'O');

  return (
    <View style={globalStyles.container}>
      <Text style={globalStyles.status}>{status}</Text>
      {gameActive ? (
        <>
          <View style={globalStyles.boardContainer}>
            <View style={globalStyles.board}>
              <View style={globalStyles.row}>
                {renderSquare(0)}
                {renderSquare(1)}
                {renderSquare(2)}
              </View>
              <View style={globalStyles.row}>
                {renderSquare(3)}
                {renderSquare(4)}
                {renderSquare(5)}
              </View>
              <View style={globalStyles.row}>
                {renderSquare(6)}
                {renderSquare(7)}
                {renderSquare(8)}
              </View>
            </View>
          </View>
          <View style={globalStyles.restartGameButtonContainer}>
            <Button title="Restart Game" onPress={restartGame} />
          </View>
        </>
      ) : (
        <View style={globalStyles.startGameButtonContainer}>
          <Button title="Play" onPress={startGame} />
        </View>
      )}
    </View>
  );
}