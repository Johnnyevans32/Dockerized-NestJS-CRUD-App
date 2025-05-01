import { Entity, Column, PrimaryGeneratedColumn, CreateDateColumn, UpdateDateColumn } from 'typeorm';
import { Exclude } from 'class-transformer';
import { ApiProperty } from '@nestjs/swagger';

@Entity('users')
export class User {
  @ApiProperty({
    description: 'The unique identifier of the user',
    example: '123e4567-e89b-12d3-a456-426614174000',
  })
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @ApiProperty({
    description: 'The email of the user',
    example: 'user@example.com',
  })
  @Column({ unique: true })
  email: string;

  @ApiProperty({
    description: 'The first name of the user',
    example: 'John',
  })
  @Column()
  firstName: string;

  @ApiProperty({
    description: 'The last name of the user',
    example: 'Doe',
  })
  @Column()
  lastName: string;

  @Exclude()
  @Column()
  password: string;

  @ApiProperty({
    description: 'When the user was created',
    example: '2023-01-01T00:00:00Z',
  })
  @CreateDateColumn()
  createdAt: Date;

  @ApiProperty({
    description: 'When the user was last updated',
    example: '2023-01-02T00:00:00Z',
  })
  @UpdateDateColumn()
  updatedAt: Date;
} 