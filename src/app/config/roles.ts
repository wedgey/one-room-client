export enum RoleTitles {
	Admin = 'Admin',
	Member = 'Member',
	System = 'System'
}

const AllRoles = Object.values(RoleTitles);
export const RoleGroups = {
	All: [undefined, ...AllRoles],
	Guest: [undefined],
	Member: [...AllRoles],
	Admin: [RoleTitles.Admin]
};
