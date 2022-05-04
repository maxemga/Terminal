import type { NextApiRequest, NextApiResponse } from 'next';
import operators  from './data/operators.json';



export default function handler(req: NextApiRequest, res: NextApiResponse) {
  res.status(200).json(operators)
}
