import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { WaitingLineService } from './waiting-line.service';
import { CreateWaitingLineDto } from './dto/create-waiting-line.dto';
import { UpdateWaitingLineDto } from './dto/update-waiting-line.dto';

@Controller('waiting-line')
export class WaitingLineController {
  constructor(private readonly waitingLineService: WaitingLineService) {}

  @Post()
  create(@Body() createWaitingLineDto: CreateWaitingLineDto) {
    return this.waitingLineService.create(createWaitingLineDto);
  }

  @Get()
  findAll() {
    return this.waitingLineService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.waitingLineService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateWaitingLineDto: UpdateWaitingLineDto,
  ) {
    return this.waitingLineService.update(id, updateWaitingLineDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.waitingLineService.remove(id);
  }

  @Patch(':id/start')
  async startService(@Param('id') id: string) {
    return await this.waitingLineService.startService(id);
  }

  @Patch(':id/finish')
  async finishService(@Param('id') id: string) {
    return await this.waitingLineService.finishService(id);
  }

  @Patch(':id/absent')
  async absent(@Param('id') id: string) {
    return await this.waitingLineService.absent(id);
  }
}
