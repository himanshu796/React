export default function ListPicker({ values }) {
    const randomIdx = Math.floor(Math.random() * values.length);
    const randomElement = values[randomIdx];
    return (
        <div>
            <p>The list of values: {values}</p>
            <p>Random Element is: {randomElement}</p>
        </div>
    );
}