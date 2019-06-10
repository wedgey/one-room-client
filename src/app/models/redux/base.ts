import { Model, ForeignKey } from 'redux-orm';

export class BaseModel<M> extends Model<M> {
	static parse(data: any) {
		let clonedData = { ...data };
		Object.keys(this.fields).forEach((k: string) => {
			if (
				this.fields[k] instanceof ForeignKey &&
				Object.prototype.toString.call(clonedData[k]) === '[object Object]'
			) {
				let field = this.fields[k] as any;
				clonedData[k] = (this.session[field.toModelName] as any).parse(clonedData[k]);
			}
		});
		return this.create(clonedData);
	}
}
