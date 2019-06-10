import { createSelector as ormCreateSelector, ModelWithFields } from 'redux-orm';
import orm, { OrmRootState } from '../store/orm';
import { createSelector } from 'reselect';
import { RootState } from '../reducers';
import { IModal } from '../models';

export const getModals = createSelector<RootState, OrmRootState, Array<ModelWithFields<IModal>>>(
	(state) => state.entities,
	ormCreateSelector(orm, (session) => session.Modal.all().toRefArray())
);
