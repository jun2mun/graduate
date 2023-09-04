import styles from "./dashboard.module.css";

export const Dashboard = () =>{
    return (
        <div className={styles.layout}>
            <div className={styles.header}>카메라</div>
            <div className={styles.content}>
                <div>1</div>
                <div>2</div>
                <Mostused/>
            </div>
        </div>
    )
}





export const data = {

}
export const options = {

}


const screenTime = () => {
    return (
        <>
        
        </>
    )
}

const Mostused = () => {
    return (
        <>
            <div className="container"> {/* 큰틀 */}
                <div className={styles.item}>
                    item 1
                </div>
                
                <div>item 2</div>
                
                <div>item 3</div>
                <div>item 4</div>
                
                <div>item 5</div>
                <div>item 6</div>
            </div>
        </>
    )
}