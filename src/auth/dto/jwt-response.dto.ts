import { ApiProperty } from "@nestjs/swagger";

export class UserDto {
  @ApiProperty({ example: "1", description: "User ID" })
  id: string;

  @ApiProperty({ example: "john@example.com", description: "User email" })
  email: string;

  @ApiProperty({ example: "John", description: "first name" })
  firstName: string;

  @ApiProperty({ example: "Doe", description: "last name" })
  lastName: string;

  @ApiProperty({
    example: "2025-04-30T12:34:56.789Z",
    description: "account creation timestamp",
  })
  createdAt: string;

  @ApiProperty({
    example: "2025-04-30T13:00:00.000Z",
    description: "last update timestamp",
  })
  updatedAt: string;
}

export class JwtResponseDto {
  @ApiProperty({
    description: "JWT access token",
    example: "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9...",
  })
  accessToken: string;

  @ApiProperty({
    description: "Authenticated user data",
    type: () => UserDto,
  })
  user: UserDto;
}
