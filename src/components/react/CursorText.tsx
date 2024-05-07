import useMousePosition from './hooks/useMousePosition'

const CursorText = () => {
    const mouseposition = useMousePosition()
    return (
        <div>
            <h1>Cursor Text</h1>
        </div>
    )
}

export default CursorText
