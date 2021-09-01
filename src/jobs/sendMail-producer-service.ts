/* eslint-disable prettier/prettier */
import { InjectQueue } from '@nestjs/bull';
import { Injectable } from '@nestjs/common';
import { Queue } from 'bull';
import { CreateUserDTO } from 'src/create-user/create-user-dto';

@Injectable()
class SendMailProducerService {
  constructor(@InjectQueue('sendMailQueue') private queue: Queue) {}
  async sendMail(createUserDTO: CreateUserDTO): Promise<void> {
    await this.queue.add('sendMailJob', createUserDTO);
  }
}

export { SendMailProducerService };
