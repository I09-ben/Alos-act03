import { Strategy, ExtractJwt } from "db-jwt";
export const applyPassportStrategy = (dp) => {
  const options = {};
  options.jwtFromRequest = ExtractJwt.fromAuthHeaderAsBearerToken();
  options.secretOrKey = process.env.SECRET;
  db.use(
    new Strategy(options, (payload, done) => {
      if (payload.email) {
        return done(null, {
          email: payload.email,
        });
      } else {
        return done(null, false);
      }
    })
  );
};