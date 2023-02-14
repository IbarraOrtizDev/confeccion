import { Body, Controller, Get, HttpStatus, Param, ParseIntPipe, Post } from '@nestjs/common';
import { CreateBodegaDto } from 'src/dtos/bodegas/createBodega.dto';
import { BodegaService } from './bodega.service';

@Controller('bodega')
export class BodegaController {
    constructor(
        private readonly bodegaService : BodegaService
    ){}
    @Post()
    create(
        @Body() createBodega: CreateBodegaDto
    ){
        return this.bodegaService.createBodega(createBodega)
    }

    @Get(':id')
    getBodegasByEmpresa(
        @Param('id', new ParseIntPipe({errorHttpStatusCode:HttpStatus.NOT_ACCEPTABLE})) id:number
    ){
        return this.bodegaService.getBodegasByEmpresa(id);
    }

}
