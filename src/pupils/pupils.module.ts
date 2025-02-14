import { Module } from '@nestjs/common';
import { PupilsService } from './pupils.service';
import { PupilsController } from './pupils.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Pupil, PupilSchema } from './schemas/pupils.schema';
import { PupilFactoryImpl } from './schemas/factories/pupil.factory';
import { Subject, SubjectSchema } from 'src/subjects/schemas/subject.schema';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: Pupil.name, schema: PupilSchema }]),
    MongooseModule.forFeature([{ name: Subject.name, schema: SubjectSchema }]),
  ],
  controllers: [PupilsController],
  providers: [PupilsService,
    { provide: 'PupilFactory', useClass: PupilFactoryImpl }
  ],
})

export class PupilsModule { }
