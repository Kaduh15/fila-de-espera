import { PrismaService } from './../../database/PrismaService';
import { Test, TestingModule } from '@nestjs/testing';
import { WaitingLineService } from './waiting-line.service';
import { WaitingLine } from './entities/waiting-line.entity';

describe('WaitingLineService', () => {
  let service: WaitingLineService;
  let prisma: PrismaService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [PrismaService, WaitingLineService],
    }).compile();

    service = module.get<WaitingLineService>(WaitingLineService);
    prisma = module.get<PrismaService>(PrismaService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('startService', () => {
    it('should throw an error if the ID is invalid', async () => {
      const id = 'invalid-id';
      jest
        .spyOn(prisma.waitingLine, 'findUnique')
        .mockImplementation(() => null);

      try {
        await service.startService(id);
      } catch (error) {
        expect(error.message).toBe('Invalid ID');
        expect(error.status).toBe(400);
      }
    });
    it('should throw an error if the status is not WAITING', async () => {
      const id = 'valid-id';
      const client = {
        status: 'IN_PROGRESS',
      } as unknown as WaitingLine;

      jest.spyOn(prisma.waitingLine, 'findUnique').mockResolvedValue(client);

      try {
        await service.startService(id);
      } catch (error) {
        expect(error.message).toBe('Invalid status');
        expect(error.status).toBe(400);
      }
    });
    it('should update the status to IN_PROGRESS', async () => {
      const id = 'valid-id';
      const clientInput = {
        status: 'WAITING',
      } as unknown as WaitingLine;
      const clientOutput = {
        status: 'IN_PROGRESS',
      } as unknown as WaitingLine;

      jest
        .spyOn(prisma.waitingLine, 'findUnique')
        .mockResolvedValue(clientInput);
      jest.spyOn(prisma.waitingLine, 'update').mockResolvedValue(clientOutput);

      const result = await service.startService(id);

      expect(result).toBe(clientOutput);
    });
  });
});
