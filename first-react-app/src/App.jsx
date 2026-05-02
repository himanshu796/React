import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Chicken from './Chicken'
import Greeter from './Greeter'
import Dice from './Dice'
import ListPicker from './ListPicker'
import DoubleDice from './DoubleDice'
import Heading from './Heading'
import ShoppingList from './ShoppingList'
import PropertyList from './PropertyList'
import Clicker from './Clicker'

{/*const properties = [
  { id: 1, name: "Desert Eagle", rating: 4.7, price: 300 },
  { id: 2, name: "Mountain Cabin", rating: 4.5, price: 250 },
  { id: 3, name: "Cactus Retreat", rating: 4.3, price: 350 },
  { id: 4, name: "Redwood Treehouse", rating: 4.0, price: 400 },
  { id: 5, name: "Oceanview", rating: 4.9, price: 450 },
  { id: 6, name: "Gold Miner", rating: 4.4, price: 500 },
]

const data = [
  { id: 1, item: "eggs", quantity: 12, completed: false },
  { id: 2, item: "milk", quantity: 1, completed: true },
  { id: 3, item: "paneer", quantity: 10, completed: false },
  { id: 4, item: "carrots", quantity: 8, completed: true },
];*/}

function App() {
  return (
    <div>
      <Clicker message="Hi!!!!" buttontext="Click Me" />
      <Clicker message="Please Stop Clicking Me!!" buttontext="Do not Click " />

      {/*<PropertyList properties={properties} />

      <ShoppingList items={data} />

      <Heading color="teal" text="Welcome" fontSize="20px" />
      <Heading color="orange" text="Thanks" fontSize="40px" />

      <DoubleDice />
      <DoubleDice />

      <ListPicker values={[1, 2, 3]} />
      <ListPicker values={["a", "b", "c"]} />

      <Greeter person="Rohan" />
      <Greeter person="Bagheera" />
      
      <Dice numSides={20} />
      <Dice numSides={6} />*/}
    </div>
  );
}

export default App
