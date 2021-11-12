import { createFeatureSelector, select } from '@ngrx/store';

import { pipe } from 'rxjs';
import { map } from 'rxjs/operators';

import { User } from '../../../shared/interfaces/user.interface';

const _userInfoSelector = createFeatureSelector<User>('user_info');
export const SelectUserInfo = pipe(
  select(_userInfoSelector),
  map(info => info)
)
