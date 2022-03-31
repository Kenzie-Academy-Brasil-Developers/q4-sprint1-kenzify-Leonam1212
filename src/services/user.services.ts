import jsonwebtoken from 'jsonwebtoken';
import bcrypt from 'bcrypt';
import { KENZIFYDB, config, User } from '../configs';

const userLoginService = async (
    password: string,
    { username }: User
  ): Promise<string | undefined> => {
    const user: User | undefined = KENZIFYDB.find((_) => _.username === username);

    if (!user) {
      return undefined // Exibir json de error
    }
  
    const hashedPassword: boolean = await bcrypt.compare(password, user.password);
  
    if (!hashedPassword) {
      return undefined; // Exibir json de error
    }
  
    const token = jsonwebtoken.sign({ username }, config.secretKey, {
      expiresIn: config.expiresIn,
    });
  
    
    // console.log(token)
    return token;
  };
  
  export default userLoginService;