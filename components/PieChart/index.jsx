import { VictoryPie, VictoryLabel } from 'victory';

const PieChart = ({width, height, data, fontSize, sum}) => {

    return <svg viewBox="0 0 200 200" style={{width: width+'px', height: height+"px"}}>
            <VictoryPie
              standalone={false}
              width={200} height={200}
              data={data}
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
              text={sum}
            />
          </svg>
  
  }
export default PieChart;