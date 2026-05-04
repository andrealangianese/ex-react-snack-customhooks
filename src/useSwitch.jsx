import { useState } from "react"

function useSwitch(valoreIniziale = false) {
    const [isOn, setIsOn] = useState(valoreIniziale)
    function toggle() {
        return (setIsOn(curr => !curr))
    }
    return [isOn, toggle]
}

export default useSwitch