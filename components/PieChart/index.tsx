import { color } from '@mui/system';
import { VictoryPie, VictoryLabel } from 'victory';
import { CategoryType, PieChartType } from '../../redux/utils/types';

const PieChart:React.FC<PieChartType> = ({width, height, data, fontSize}) => {
    const parsePurchaseData = () => {
      return data.filter((p:CategoryType) => +p.sum > 0).map((p:CategoryType, index:number) => ({x: index+1, y: +p.sum, color: p.color}))
    } 
    const getPurchasesSum = () => data.reduce((p: number, c: CategoryType) => p += Number.parseFloat(String(c.sum ?? 0)), 0);
    return <svg viewBox="0 0 200 200" style={{width: width+'px', height: height+"px"}}>
            <VictoryPie
              standalone={false}
              width={200} height={200}
              data={parsePurchaseData()}
              innerRadius={60} labelRadius={90}
              style={{ labels: { fontSize: 0, fill: "white" },
                data: {
                  fill: ({datum}) => {
                    return datum?.color ?? 'grey'
                  }
                }
              }}
            />
            <VictoryLabel
              textAnchor="middle"
              style={{ fontSize: fontSize }}
              x={100} y={100}
              text={getPurchasesSum()}
            />
          </svg>
  
  }
export default PieChart;