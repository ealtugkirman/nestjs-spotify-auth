// src/auth/strategies/spotify.strategy.ts
import { PassportStrategy } from '@nestjs/passport';
import { Profile, Strategy } from 'passport-spotify';
import { Injectable } from '@nestjs/common';

@Injectable()
export class SpotifyStrategy extends PassportStrategy(Strategy, 'spotify') {
  constructor() {
    super({
      clientID: process.env.SPOTIFY_CLIENT_ID,
      clientSecret: process.env.SPOTIFY_CLIENT_SECRET,
      callbackURL: 'http://localhost:3000/auth/redirect',
      scope: ['user-read-email', 'user-read-private'],
    });
  }

  async validate(
    accessToken: string,
    refreshToken: string,
    profile: Profile,
    done: (error: any, user?: any) => void,
  ) {
    const user = {
      accessToken,
      refreshToken,
      profile,
    };
    done(null, user);
  }
}
