
import Engine from "../components/Engine";

export default function Home() {
    return (
        <Engine meshes={['./models/ship.obj']} enabledDebug={true}/>
    )
}
