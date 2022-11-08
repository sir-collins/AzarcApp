import { UserExistsGuard } from './user-exists.guard';
import { UsersGuard } from './users.guard';

export const guards: any[] = [UserExistsGuard, UsersGuard];

export * from './user-exists.guard';
export * from './users.guard';
