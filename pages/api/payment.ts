import type { NextApiRequest, NextApiResponse } from 'next';
import { operators } from './data/operators';


export default function handler(req: NextApiRequest, res: NextApiResponse) {

  const random: boolean = Math.random() < 0.5;

  random ?  res.status(200).json({message: "Оплата прошла успешно", isTrue: true}) : res.status(200).json({message: "Ошибка при оплате со стороны сервера", isTrue: false});

}
