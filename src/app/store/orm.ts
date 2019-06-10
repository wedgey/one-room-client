import { ORM, ORMCommonState, TableState, ORMId } from 'redux-orm';
import { Modal, User } from '../models';
// import { User, IUser, IPlayer, Player, IVideo, Video, IPlaylist, Playlist } from '../models';

// type IBasicOrmModel = TableState<ORMId>;

export interface OrmRootState extends ORMCommonState {
	// Player: TableState<IPlayer, ORMId>,
	// Playlist: TableState<IPlaylist, ORMId>,
	Modal: TableState<Modal, ORMId>;
	User: TableState<User, ORMId>;
	// Video: TableState<IVideo, ORMId>
}

interface IORMModels {
	// Player: typeof Player,
	// Playlist: typeof Playlist,
	Modal: typeof Modal;
	User: typeof User;
	// Video: typeof Video
}

const orm = new ORM<OrmRootState>();
orm.register<IORMModels>(Modal, User);
// orm.register<IORMModels>(Player, Playlist, User, Video);
export default orm;
