import { Request, Response } from 'express';
import { KENZIFYDB } from '../configs';

const getUsers = (_:any, res: Response) => {
    res.status(200).json(KENZIFYDB)
}
export default getUsers