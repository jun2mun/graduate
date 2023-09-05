import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js';
import { Line } from "react-chartjs-2";
import styles from "./dashboard.module.css";


ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
  );





export const Dashboard = () =>{
    return (
        <div className={styles.layout}>
            <div className={styles.header}>
                    <img src = '/icons/video-camera.svg' className={styles.header_img}/>
                    <p>카메라 ON</p>
            </div>
            <div className={styles.main}>
                <div className={styles.item} style={{background:'white',boxShadow:'5px 5px 5px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Filter/>
                </div>
                <div className={styles.item} style={{background:'white',boxShadow:'5px 5px 5px',display:'flex',justifyContent:'center',alignItems:'center'}}>
                    <Header/>
                </div>
                <div className={styles.item}>
                    <ScreenTime/>
                </div>
                <div className={styles.item}>
                    <ScreenTime/>
                </div>
                <div className={styles.item}>
                    <Mostused/>
                </div>
                
            </div>
        </div>
    )
}




export const options = {
    responsive: false,
    plugins: {
      legend: {
        position: 'top' as const,
      },
      title: {
        display: true,
        text: 'Chart.js Line Chart',
      },
    },
  };
  
  const labels = ['January', 'February', 'March', 'April', 'May', 'June', 'July']; //x축 기준
  
export const data = {
    labels,
    datasets: [
      {
        label: '분류 1', //그래프 분류되는 항목
        data: [1, 2, 3, 4, 5, 6, 7], //실제 그려지는 데이터(Y축 숫자)
        borderColor: 'rgb(255, 99, 132)', //그래프 선 color
        backgroundColor: 'rgba(255, 99, 132, 0.5)', //마우스 호버시 나타나는 분류네모 표시 bg
      },
      {
        label: '분류 2',
        data: [2, 3, 4, 5, 4, 7, 8],
        borderColor: 'rgb(53, 162, 235)', //실제 그려지는 데이터(Y축 숫자)
        backgroundColor: 'rgba(53, 162, 235, 0.5)',
      },
    ],
  };



const ScreenTime = () => {
    return (
        <>
            <div style={{}}>
                <div>일일 평균 : </div>
                <Line data={data} style={{position:'relative',width:'70%',height:'70%',padding:'30px'}}/>
                <div>총 스크린 타임</div>
            </div>
        </>
    )
}

const Mostused = () => {
    return (
        <>
            <div style={{display:'flex',flexDirection:'row'}}>
                <div>item 1</div>
                <div>item 1</div>
                <div>item 1</div>
            </div>
        </>
    )
}

const Filter = () => {
    return (
        <>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',width:'100%',height:'100%',alignItems:'center'}}>
                <div>item 1</div>
                <div>item 1</div>
                <div>item 1</div>
            </div>
        </>
    )
}

const Header = () => {
    return (
        <>
            <div style={{display:'flex',flexDirection:'row',justifyContent:'space-evenly',width:'100%',height:'100%',alignItems:'center'}}>
                <div style={{borderWidth:'5px',borderStyle:'solid',display:'flex'}}>
                    <div style={{borderWidth:'5px',borderStyle:'solid'}}>
                        <div>Top 1 15min left</div>
                        <div>code</div>
                    </div>
                    
                    <div style={{position:'relative',width:'100%'}}>
                        <img style={{position:'absolute',width:'100%'}} src='/icons/vscode.png'></img>
                    </div>
                </div>
                <div style={{borderWidth:'5px',borderStyle:'solid',display:'flex'}}>
                    <div style={{borderWidth:'5px',borderStyle:'solid'}}>
                        <div>Top 1 15min left</div>
                        <div>code</div>
                    </div>
                    
                    <div style={{position:'relative',width:'100%'}}>
                        <img style={{position:'absolute',width:'100%'}} src='/icons/vscode.png'></img>
                    </div>
                </div>
                <div style={{borderWidth:'5px',borderStyle:'solid',display:'flex'}}>
                    <div style={{borderWidth:'5px',borderStyle:'solid'}}>
                        <div>Top 1 15min left</div>
                        <div>code</div>
                    </div>
                    
                    <div style={{position:'relative',width:'100%'}}>
                        <img style={{position:'absolute',width:'100%'}} src='/icons/vscode.png'></img>
                    </div>
                </div>
                <div style={{borderWidth:'5px',borderStyle:'solid',display:'flex'}}>
                    <div style={{borderWidth:'5px',borderStyle:'solid'}}>
                        <div>Top 1 15min left</div>
                        <div>code</div>
                    </div>
                    
                    <div style={{position:'relative',width:'100%'}}>
                        <img style={{position:'absolute',width:'100%'}} src='/icons/vscode.png'></img>
                    </div>
                </div>
            </div>
        </>
    )
}