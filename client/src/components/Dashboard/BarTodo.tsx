import React, { useEffect, useState } from 'react';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from 'chart.js';
import { Bar } from 'react-chartjs-2';

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: 'top' as const,
    },
    title: {
      display: true,
      text: 'Chart.js Bar Chart',
    },
  },
};

export default function TodoChart({todos}:any) {
    const [todoData, setTodoData] = useState<any>({
        datasets:[]
    });

    useEffect(() => {
      updateTodoData(todos)
    }, [todos]);
  
    const updateTodoData = (todos:any) => {
      const todoCounts:any = {};
      todos.forEach((todo:any) => {
        const date = todo.date;
        if (todoCounts[date]) {
          todoCounts[date]++;
        } else {
          todoCounts[date] = 1;
        }
      });

  
      const labels = Object.keys(todoCounts);
      const data = Object.values(todoCounts);
  
      setTodoData({
        labels: labels,
        datasets: [
          {
            label: 'Todos per Day',
            data: data,
            backgroundColor: 'rgba(75,192,192,0.2)',
            borderColor: 'rgba(75,192,192,1)',
            borderWidth: 1,
          },
        ],
      });
    };
  
  return <Bar options={options} data={todoData} />;
}
