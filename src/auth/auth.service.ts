import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "../users/users.service";
import * as bcrypt from "bcrypt";
import { RegisterDto } from "./dto/register.dto";
import { JwtResponseDto } from "./dto/jwt-response.dto";
import { User } from "../users/entities/user.entity";

@Injectable()
export class AuthService {
  constructor(
    private usersService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(email: string, password: string): Promise<any> {
    const user = await this.usersService.findByEmail(email);
    if (user && (await bcrypt.compare(password, user.password))) {
      const { password, ...result } = user;
      return result;
    }
    return null;
  }

  async login(user: Partial<User>): Promise<JwtResponseDto> {
    const payload = { email: user.email, sub: user.id };
    return {
      accessToken: this.jwtService.sign(payload),
      user: {
        email: user.email,
        firstName: user.firstName,
        lastName: user.lastName,
        id: user.id,
        createdAt: user.createdAt?.toDateString(),
        updatedAt: user.updatedAt?.toDateString(),
      },
    };
  }

  async register(registerDto: RegisterDto): Promise<Partial<User>> {
    const user = await this.usersService.create(registerDto);
    const { password, ...result } = user;
    return result;
  }
}
