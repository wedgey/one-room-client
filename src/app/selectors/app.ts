import { createSelector } from 'reselect';
import { createSelector as ormCreateSelector, ModelWithFields } from 'redux-orm';
import orm, { OrmRootState } from '../store/orm';
import { RootState } from '../reducers';
import { IUser } from '../models';

export const getActiveUser = createSelector<RootState, OrmRootState, RootState['app'], ModelWithFields<IUser>>(
	(state) => state.entities,
	(state) => state.app,
	ormCreateSelector(orm, (session, app) => (app.user === undefined ? undefined : session.User.withId(app.user).ref))
);
