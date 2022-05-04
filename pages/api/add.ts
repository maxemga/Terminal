import type { NextApiRequest, NextApiResponse } from 'next';
const fs = require('fs'); 
let operators = require('./data/operators.json');



export default function handler(req: NextApiRequest, res: NextApiResponse) {

    let operator = {
      id: Math.random(),
      title: req.body.title,
    }
    
    operators.push(operator);
    saveData();
    
  res.status(200).json({ message: "Оператора сохранен."} );
}

const saveData = () => {
  fs.writeFileSync('./pages/api/data/operators.json', JSON.stringify(operators, null, 2)); 
}