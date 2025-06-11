import { useState } from "react"
import Counter from "./Counter"

export default function App() {


  // DUMB VARIABLE: let color = "yellow"
  // const [state, setState] = useState(INITIAL_VALUE)
  const [color, setColor] = useState("white")

  const makeItPink = () => {
    // BLASPHEMY: color = "pink"
    setColor("pink")
  }

  const makeItBlue = () => {
    // BLASPHEMY: color = "blue"
    setColor("blue")
  }


  // a piece of state called amount that starts at 0
  const [amount, setAmount] = useState(0)

  const increment = () => {
    setAmount(amount + 1)
  }

  const decrement = () => {
    setAmount(amount - 1)
  }

  
  const [resources, setResources] = useState([
    {
      id: 0,
      name: "Bears",
    },
    {
      id: 1,
      name: "Elk",
    },
    {
      id: 2,
      name: "Fish",
    },
  ])

  const addHawks = () => {
    const hawks = { id: 5, name: "Hawks" } // hard coded because we don't have forms yet

    // BLASPHEMY
    // resources.push(hawks)

    // Show them what we want the resources array to look like WITHOUT CHANGING THE RESOURCES ARRAY
    // A copy of the resources array with the hawks

    // More lines but maybe easier to understand
    // const copyOfResources = [...resources] // resources.slice()
    // copyOfResources.push(hawks)
    // setResources(copyOfResources)

    // Professional streamlined way
    setResources([...resources, hawks])
  }

  const deleteResource = (deleteId: number) => {
    // Professional streamlined way
    // set the resources to a copy of resources with everything but the one we want to delete
    setResources(resources.filter(resource => resource.id !== deleteId))
  }

  return (
    <div className="mb-3 p-4" style={{
      backgroundColor: color
    }}>
      <button onClick={addHawks}>Add Hawks</button>
      <button onClick={makeItPink}>Make it Pink</button>
      <button onClick={makeItBlue}>Make it Blue</button>

      {resources.map(resource => (
        <Counter key={resource.name}
          label={resource.name}
          id={resource.id}
          // I would normally call this the same (amount, increment, decrement)
          count={amount}
          add={increment}
          subtract={decrement}
          // This is what I would normally do
          deleteResource={deleteResource}
        />
      ))}
      Total Resources: {amount * 3}
      {/* 
        <Counter label="Bears" count={} add={} subtract={}/>
        <Counter label="Elk" count={} add={} subtract={}/>
        <Counter label="Fish" count={} add={} subtract={}/> 
      */}
    </div>
  )
}

// Cosplaying as HTML
// <Counter label="Fish" amount={1}/>
// Translate it from HTML attributes to a Javascript object with properties
// Counter({
//   label: "Bears",
//   count: 0,
//   add: () => { setAmount(amount + 1) }
//   subtract: () => { setAmount(amount - 1) }
//   deleteResource: () => { fdsfdsfds }
// })


// Props are parameters cosplaying as HTML attributes