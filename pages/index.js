import Engine from "../components/Engine";
import styles from '../styles/Home.module.css'
import {useEffect, useMemo, useState} from "react";
import {Button} from "@f-ui/core";

export default function Home() {
    const [fileNames, setFileNames] = useState([])

    useEffect(() => {
        let response = []
        fetch('https://api.github.com/repos/facobackup/3D-MODELS/git/trees/main?recursive=1').then(r => {
            r.json().then(json => {
                setFileNames(json.tree.map(t => t.path))
            })
        })
    }, [])

    const [currentMesh, setCurrentMesh] = useState('cube.obj')
    return (
        <div style={{display: 'flex', height: 'inherit', width: 'inherit', maxHeight: 'inherit'}}>
            <Engine
                meshes={['https://raw.githubusercontent.com/facobackup/3D-MODELS/main/' + currentMesh]}
                enabledDebug={true}/>
            <div className={styles.meshSelector}>
                <h2 className={styles.header}>
                    <span className={'material-icons-round'}>category</span>
                    Meshes available
                </h2>
                {fileNames.map((name, i) => (
                    <div className={styles.mesh} key={name + '-' + i}
                         style={{outline: currentMesh === name ? '#0095ff 2px solid' : undefined}}>
                        <Button onClick={() => setCurrentMesh(name)} styles={{width: '100%', textAlign: 'left'}}>
                            {name}
                        </Button>
                        <Button>
                            <span className={'material-icons-round'}>
                                info
                            </span>
                        </Button>
                    </div>
                ))}


            </div>
        </div>
    )
}
