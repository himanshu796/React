export default function Clicker({ buttontext, message }) {
    const handleClick = () => {
        alert(message);
    };
    return <button onClick={handleClick}>{buttontext}</button>;
}