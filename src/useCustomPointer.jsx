import { useEffect, useState } from "react";

export default function useCustomPointer(component) {
    const [position, setPosition] = useState({ x: 0, y: 0 })
    useEffect(() => {
        function mouseMove(e) {
            setPosition({ x: e.clientX, y: e.clientY })
        }
        document.addEventListener('mousemove', mouseMove)
        return () => document.removeEventListener('mousemove', mouseMove)
    }, [])
    return (
        <div
            style={{
                position: "fixed",
                top: position.y,
                left: position.x,
                cursor: "none",
                transform: "translate(-50%,-50%)"
            }}>
            {component}
        </div>
    )
}