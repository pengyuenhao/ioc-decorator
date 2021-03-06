namespace ioc {
    export interface ICommand {
        commandBinder: ICommandBinder;
        injectBinder: IInjectBinder;
        //执行指令
        execute(...args);
        //本条指令的操作ID，用于在队列中寻找下一条指令
        sequenceId: number;
        data: any;
        args: any;
        deploy();
        clean();
        isClean: boolean;
        isRetain: boolean;
        //执行异步操作时可以使用保留指令
        retain();
        //释放被异步操作锁定的指令
        release();
    }
    export class NCommand implements IConstructorName {
        get constructorName() {
            return "ICommand";
        }
    }
    export class Command implements ICommand {
        // The InjectionBinder for this Context
        @inject(NInjectBinder)
        public injectBinder: IInjectBinder;
        // Back reference to the CommandBinder that instantiated this Commmand
        @inject(NCommandBinder)
        public commandBinder: ICommandBinder;
        public sequenceId;
        public data;
        public args;
        private _clean = false;
        public deploy() {
            this._clean = false;
        }
        public clean() {
            this._clean = true;
        }
        public get isClean() {
            return this._clean;
        };
        private _retain = false;
        //保持指令
        public retain() {
            this._retain = true;
        }
        public release() {
            this._retain = false
        }
        public get isRetain(): boolean {
            return this._retain;
        }
        //重新释放
        public restore() {
            this.injectBinder.getInjector().uninject(this);
            this.clean();
        }
        //执行指令
        public execute(...args) {

        }
    }
}