import { EntityRepository, Repository } from 'typeorm';

import Users from '../models/User';

@EntityRepository(Users)
class UsersRepository extends Repository<Users> {
  public async findByDate(date: Date): Promise<Users | null> {
    const findAppointment = await this.findOne({
      where: { date },
    });
    return findAppointment || null;
  }
}

export default UsersRepository;
