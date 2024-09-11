type Props = {
  letters: string[]
  onLetterClick: (letter: string) => void
}

const ALPHABET = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

export default function LetterOptions({ letters, onLetterClick }: Props) {
  return (
    <div>
      {ALPHABET.map(letter => (
        <button
          key={letter}
          onClick={() => onLetterClick(letter)}
          disabled={letters.includes(letter)}
        >
          {letter}
        </button>
      ))}
    </div>
  )
}