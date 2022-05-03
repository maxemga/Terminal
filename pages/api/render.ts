import type { NextApiRequest, NextApiResponse } from 'next';
import { operators } from './data/operators';

type Data = {
  name: string
}

export default function handler(req: NextApiRequest, res: NextApiResponse<Data>) {
  res.status(200).json(operators)
}
