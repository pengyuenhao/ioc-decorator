namespace ioc {

    export interface ICommandBinder {
        bind(key: any): CommandBinding;
        getRawBinding(): IBinding;
    }
    export class NCommandBinder implements IConstructorName {
        get constructorName() {
            return "ICommandBinder";
        }
    }
}