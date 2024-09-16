import { Injectable, Logger } from '@nestjs/common';
import { SqsMessageHandler } from '@ssut/nestjs-sqs';
import { Message } from '@aws-sdk/client-sqs';

@Injectable()
export class ProcessadorService {
  private readonly logger = new Logger(ProcessadorService.name);

  @SqsMessageHandler('restaurante-enviar-mensagem-cliente', false)
  async handleMessage(message: Message) {
    const sns = JSON.parse(message.Body);
    const msgSns = JSON.parse(sns.Message);

    const pedido = msgSns.pedidoId;
    const nome = msgSns.nome;
    const sobrenome = msgSns.sobrenome;
    const telefone = msgSns.telefone;
    const restaurante = msgSns.restaurante;
    const items = msgSns.items;

    // TODO: salvar pedido no dynamodb
    this.logger.log(`== Novo pedido: ${pedido}`);
    this.logger.log(`Nome: ${JSON.stringify(msgSns)}`);
    this.logger.log(`Mensagem Ok. Pedido: ${pedido}`);
  }
}
