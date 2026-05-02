export default function Dice({ numSides }) {
    const roll = Math.floor(Math.random() * numSides) + 1;
    return (
        <p>
            {numSides} - sided Dice roll: {roll}
        </p>
    );
}