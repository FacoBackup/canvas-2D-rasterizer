
import Engine from "../components/Engine";

export default function Home() {
    return (
        <Engine meshes={['https://raw.githubusercontent.com/facobackup/3D-MODELS/main/cube.obj']} enabledDebug={true}/>
    )
}
