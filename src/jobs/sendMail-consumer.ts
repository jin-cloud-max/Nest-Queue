/* eslint-disable prettier/prettier */
import { MailerService } from '@nestjs-modules/mailer';
import {
  OnQueueActive,
  OnQueueCompleted,
  OnQueueProgress,
  Process,
  Processor
} from '@nestjs/bull';
import { Job } from 'bull';
import { CreateUserDTO } from 'src/create-user/create-user-dto';

@Processor('sendMailQueue')
class SendMailConsumer {
  constructor(private mailService: MailerService) {}
  
  @Process('sendMailJob')
  async sendMailJob(job: Job<CreateUserDTO>) {
    const { data } = job
    
    await this.mailService.sendMail({
      to: data.email,
      from: {
        name: 'Test Queue',
        address: data.email,
      },
      subject: 'Seja bem vindo(a)!',
      text: `Olá ${data.name}, seu cadastro foi concluído com sucesso. Seja bem vindo(a)!`
    })
  }

  @OnQueueCompleted()
  onCompleted(job: Job) {
    console.log(`On Completed ${job.name}`)
  }

  @OnQueueProgress() 
  onQueueProgress(job: Job){
    console.log(`Progress ${job.name}`)
  }

  @OnQueueActive() 
  onQueueActive(job: Job){
    console.log(`Progress ${job.name}`)
  }
}

export { SendMailConsumer };
