var ioc;
(function (ioc) {
    var Item = /** @class */ (function () {
        function Item(value, next) {
            if (next === void 0) { next = null; }
            this._value = value;
            this._next = next;
        }
        Object.defineProperty(Item.prototype, "value", {
            get: function () {
                return this._value;
            },
            set: function (value) {
                this._value = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Item.prototype, "next", {
            get: function () {
                return this._next;
            },
            set: function (next) {
                this._next = next;
            },
            enumerable: true,
            configurable: true
        });
        return Item;
    }());
    ioc.Item = Item;
    var Stack = /** @class */ (function () {
        function Stack() {
            this._size = 0;
            this._header = new Item(null);
        }
        Stack.prototype.top = function () {
            if (this._size === 0) {
                return null;
            }
            return this._header.next.value;
        };
        /**
         * 入栈
         * @param item 添加的元素
         * 将header的下一个元素的引用赋值给新元素的next
         * 再将新元素赋值给header的next
         */
        Stack.prototype.push = function (item) {
            var newItem = new Item(item);
            newItem.next = this._header.next;
            this._header.next = newItem;
            this._size++;
        };
        /**
         * 出栈
         * 将header之后的第一个元素移除
         * 同时修改header的next到下一个元素
         */
        Stack.prototype.pop = function () {
            if (this._size === 0) {
                return null;
            }
            var item = this._header.next;
            this._header.next = item.next;
            this._size--;
            item.next = null; //清除引用
            return item.value;
        };
        Stack.prototype.clear = function () {
            var item;
            var tmp = this._header;
            while (this._size !== 0) {
                item = tmp.next;
                tmp = item;
                item.next = null;
                this._size--;
            }
            this._header = null;
        };
        Object.defineProperty(Stack.prototype, "isEmpty", {
            get: function () {
                return this._size === 0;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Stack.prototype, "size", {
            get: function () {
                return this._size;
            },
            enumerable: true,
            configurable: true
        });
        return Stack;
    }());
    ioc.Stack = Stack;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,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QUssQ0FBQztZQUN0QixDQUFDOzs7V0FBQTtRQUNMLFlBQUM7SUFBRCxDQTNEQSxBQTJEQyxJQUFBO0lBM0RZLFNBQUssUUEyRGpCLENBQUE7QUFDTCxDQUFDLEVBbEdTLEdBQUcsS0FBSCxHQUFHLFFBa0daIiwiZmlsZSI6IlN0YWNrLmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGlvYyB7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJU3RhY2sgPCBUID4ge1xyXG4gICAgICAgIC8v6I635Y+W5qCI6aG25YWD57SgXHJcbiAgICAgICAgdG9wKCk6IFQ7XHJcbiAgICAgICAgLy/ljovmoIhcclxuICAgICAgICBwdXNoKGl0ZW06IFQpO1xyXG4gICAgICAgIC8v5Ye65qCIXHJcbiAgICAgICAgcG9wKCk6IFQ7XHJcbiAgICAgICAgLy/muIXnqbpcclxuICAgICAgICBjbGVhcigpO1xyXG4gICAgICAgIC8v5piv5ZCm56m65qCIXHJcbiAgICAgICAgaXNFbXB0eTogYm9vbGVhbjtcclxuICAgICAgICAvL+agiOWkp+Wwj1xyXG4gICAgICAgIHNpemU6IG51bWJlcjtcclxuICAgIH1cclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSXRlbSA8IFQgPiB7XHJcbiAgICAgICAgcHJpdmF0ZSBfdmFsdWU6IFQ7XHJcbiAgICAgICAgcHJpdmF0ZSBfbmV4dDogSXRlbSA8IFQgPiA7XHJcbiAgICAgICAgY29uc3RydWN0b3IodmFsdWU6IFQsIG5leHQ6IEl0ZW0gPCBUID4gPSBudWxsKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHRoaXMuX25leHQgPSBuZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBzZXQgdmFsdWUodmFsdWU6IFQpIHtcclxuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZ2V0IHZhbHVlKCk6IFQge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHNldCBuZXh0KG5leHQ6IEl0ZW0gPCBUID4gKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX25leHQgPSBuZXh0O1xyXG4gICAgICAgIH1cclxuICAgICAgICBnZXQgbmV4dCgpOiBJdGVtIDwgVCA+IHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25leHQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG5cclxuICAgIGV4cG9ydCBjbGFzcyBTdGFjayA8IFQgPiBpbXBsZW1lbnRzIElTdGFjayA8IFQgPiB7XHJcbiAgICAgICAgcHJpdmF0ZSBfaGVhZGVyOiBJdGVtIDwgVCA+IDtcclxuICAgICAgICBwcml2YXRlIF9zaXplOiBudW1iZXIgPSAwO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9oZWFkZXIgPSBuZXcgSXRlbSA8IFQgPiAobnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHRvcCgpOiBUIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NpemUgPT09IDApIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9oZWFkZXIubmV4dC52YWx1ZTtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWFpeagiFxyXG4gICAgICAgICAqIEBwYXJhbSBpdGVtIOa3u+WKoOeahOWFg+e0oFxyXG4gICAgICAgICAqIOWwhmhlYWRlcueahOS4i+S4gOS4quWFg+e0oOeahOW8leeUqOi1i+WAvOe7meaWsOWFg+e0oOeahG5leHRcclxuICAgICAgICAgKiDlho3lsIbmlrDlhYPntKDotYvlgLznu5loZWFkZXLnmoRuZXh0XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVzaChpdGVtOiBUKSB7XHJcbiAgICAgICAgICAgIGxldCBuZXdJdGVtID0gbmV3IEl0ZW0gPCBUID4gKGl0ZW0pO1xyXG4gICAgICAgICAgICBuZXdJdGVtLm5leHQgPSB0aGlzLl9oZWFkZXIubmV4dDtcclxuICAgICAgICAgICAgdGhpcy5faGVhZGVyLm5leHQgPSBuZXdJdGVtO1xyXG4gICAgICAgICAgICB0aGlzLl9zaXplKys7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlh7rmoIhcclxuICAgICAgICAgKiDlsIZoZWFkZXLkuYvlkI7nmoTnrKzkuIDkuKrlhYPntKDnp7vpmaRcclxuICAgICAgICAgKiDlkIzml7bkv67mlLloZWFkZXLnmoRuZXh05Yiw5LiL5LiA5Liq5YWD57SgXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcG9wKCk6IFQge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fc2l6ZSA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGl0ZW0gPSB0aGlzLl9oZWFkZXIubmV4dDtcclxuICAgICAgICAgICAgdGhpcy5faGVhZGVyLm5leHQgPSBpdGVtLm5leHQ7XHJcbiAgICAgICAgICAgIHRoaXMuX3NpemUtLTtcclxuICAgICAgICAgICAgaXRlbS5uZXh0ID0gbnVsbDsgLy/muIXpmaTlvJXnlKhcclxuICAgICAgICAgICAgcmV0dXJuIGl0ZW0udmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGNsZWFyKCkge1xyXG4gICAgICAgICAgICBsZXQgaXRlbTtcclxuICAgICAgICAgICAgbGV0IHRtcCA9IHRoaXMuX2hlYWRlcjtcclxuICAgICAgICAgICAgd2hpbGUgKHRoaXMuX3NpemUgIT09IDApIHtcclxuICAgICAgICAgICAgICAgIGl0ZW0gPSB0bXAubmV4dDtcclxuICAgICAgICAgICAgICAgIHRtcCA9IGl0ZW07XHJcbiAgICAgICAgICAgICAgICBpdGVtLm5leHQgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZS0tO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRoaXMuX2hlYWRlciA9IG51bGw7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGdldCBpc0VtcHR5KCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc2l6ZSA9PT0gMDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIGdldCBzaXplKCk6IG51bWJlciB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==

var ioc;
(function (ioc) {
    /**
     * 通用枚举类型
    */
    var CommonEnum;
    (function (CommonEnum) {
        CommonEnum["Context"] = "Context";
        CommonEnum["Root"] = "Root";
    })(CommonEnum = ioc.CommonEnum || (ioc.CommonEnum = {}));
    var IocError;
    (function (IocError) {
        IocError.IC_ERROR = "can't implement class that is only as interface";
    })(IocError = ioc.IocError || (ioc.IocError = {}));
    var IConstructorName = /** @class */ (function () {
        function IConstructorName() {
        }
        return IConstructorName;
    }());
    ioc.IConstructorName = IConstructorName;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Jb2NDb25zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FjWjtBQWRELFdBQVUsR0FBRztJQUNUOztNQUVFO0lBQ0YsSUFBWSxVQUdYO0lBSEQsV0FBWSxVQUFVO1FBQ2xCLGlDQUFtQixDQUFBO1FBQ25CLDJCQUFhLENBQUE7SUFDakIsQ0FBQyxFQUhXLFVBQVUsR0FBVixjQUFVLEtBQVYsY0FBVSxRQUdyQjtJQUNELElBQWMsUUFBUSxDQUVyQjtJQUZELFdBQWMsUUFBUTtRQUNMLGlCQUFRLEdBQUcsaURBQWlELENBQUM7SUFDOUUsQ0FBQyxFQUZhLFFBQVEsR0FBUixZQUFRLEtBQVIsWUFBUSxRQUVyQjtJQUNEO1FBQUE7UUFFQSxDQUFDO1FBQUQsdUJBQUM7SUFBRCxDQUZBLEFBRUMsSUFBQTtJQUZxQixvQkFBZ0IsbUJBRXJDLENBQUE7QUFDTCxDQUFDLEVBZFMsR0FBRyxLQUFILEdBQUcsUUFjWiIsImZpbGUiOiJJb2NDb25zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBpb2Mge1xyXG4gICAgLyoqXHJcbiAgICAgKiDpgJrnlKjmnprkuL7nsbvlnotcclxuICAgICovXHJcbiAgICBleHBvcnQgZW51bSBDb21tb25FbnVte1xyXG4gICAgICAgIENvbnRleHQgPSBcIkNvbnRleHRcIixcclxuICAgICAgICBSb290ID0gXCJSb290XCIsXHJcbiAgICB9XHJcbiAgICBleHBvcnQgbW9kdWxlIElvY0Vycm9yIHtcclxuICAgICAgICBleHBvcnQgY29uc3QgSUNfRVJST1IgPSBcImNhbid0IGltcGxlbWVudCBjbGFzcyB0aGF0IGlzIG9ubHkgYXMgaW50ZXJmYWNlXCI7XHJcbiAgICB9XHJcbiAgICBleHBvcnQgYWJzdHJhY3QgY2xhc3MgSUNvbnN0cnVjdG9yTmFtZSB7XHJcbiAgICAgICAgYWJzdHJhY3QgZ2V0IGNvbnN0cnVjdG9yTmFtZSgpOiBzdHJpbmc7XHJcbiAgICB9XHJcbn0iXX0=

var ioc;
(function (ioc) {
    /**
     * 原型缓存字典，用于检测一个对象的基类
     */
    var Prototype = /** @class */ (function () {
        function Prototype() {
        }
        /**
         * 基类检测函数
         * @param instance 实例
         * @param prototype 基类
         */
        Prototype.isProtetype = function (type, prototype) {
            //let b = type instanceof prototype;
            return type instanceof prototype;
            /*         if(!(type instanceof Object))return false;
                    let constructor = type.constructor;
                    if(this.prototypeMap.has(constructor)){
                        let sett = this.prototypeMap.get(constructor);
                        if(sett.has(prototype)){
                            return true;
                        }else{
                            return false;
                        }
                    }
                    return false; */
        };
        /**
         * 获取继承列表
         * @param instance 实例
         */
        Prototype.getPrototypeList = function (target) {
            var that = this;
            if (!this.hasPrototypeList(target)) {
                var extendsList = void 0;
                //获取继承列表
                extendsList = [];
                //用构造函数代替类型来使用
                var types = [];
                //types.push(target.constructor);
                //继承类型
                var prototype = target.__proto__;
                //构造函数
                var constructor_1;
                while (true) {
                    //如果继承存在
                    if (prototype) {
                        //因为压缩代码会把所有对象的名称都压缩掉，所以这里使用构造函数作为键值
                        constructor_1 = prototype.constructor;
                        //搜索到基类一层
                        if (constructor_1 === Object)
                            break;
                        //排除以N_开头模拟接口的临时替代类型
                        if (!constructor_1.name.startsWith("N")) {
                            extendsList.push(constructor_1);
                            types.push(constructor_1);
                            //为每一个类都添加继承关系
                            types.forEach(function (type) {
                                that.AddPrototype(type, constructor_1);
                            });
                        }
                        prototype = prototype.__proto__;
                    }
                    else {
                        break;
                    }
                }
            }
            var values = this.prototypeMap.get(target.constructor);
            return Array.from(values);
        };
        /**
         * 添加继承关系
         */
        Prototype.AddPrototype = function (tpye, prototype) {
            var extendSet;
            if (this.prototypeMap.has(tpye)) {
                extendSet = this.prototypeMap.get(tpye);
            }
            else {
                extendSet = new Set();
                this.prototypeMap.set(tpye, extendSet);
            }
            //为继承队列加入新的继承
            extendSet.add(prototype);
        };
        /**
         * 是否存在继承列表
         * @param instance 实例
         */
        Prototype.hasPrototypeList = function (target) {
            if (this.prototypeMap.has(target.constructor)) {
                return true;
            }
            else {
                return false;
            }
        };
        //继承映射表
        Prototype.prototypeMap = new Map();
        return Prototype;
    }());
    ioc.Prototype = Prototype;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Qcm90b3R5cGUudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxHQUFHLENBaUdaO0FBakdELFdBQVUsR0FBRztJQUVUOztPQUVHO0lBQ0g7UUFBQTtRQTJGQSxDQUFDO1FBeEZHOzs7O1dBSUc7UUFDVyxxQkFBVyxHQUF6QixVQUEwQixJQUFJLEVBQUUsU0FBUztZQUNyQyxvQ0FBb0M7WUFDcEMsT0FBTyxJQUFJLFlBQVksU0FBUyxDQUFDO1lBQ2pDOzs7Ozs7Ozs7O29DQVV3QjtRQUM1QixDQUFDO1FBQ0Q7OztXQUdHO1FBQ1csMEJBQWdCLEdBQTlCLFVBQStCLE1BQU07WUFDakMsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLElBQUksQ0FBQyxJQUFJLENBQUMsZ0JBQWdCLENBQUMsTUFBTSxDQUFDLEVBQUU7Z0JBQ2hDLElBQUksV0FBVyxTQUFBLENBQUM7Z0JBQ2hCLFFBQVE7Z0JBQ1IsV0FBVyxHQUFHLEVBQUUsQ0FBQztnQkFDakIsY0FBYztnQkFDZCxJQUFJLEtBQUssR0FBRyxFQUFFLENBQUM7Z0JBQ2YsaUNBQWlDO2dCQUNqQyxNQUFNO2dCQUNOLElBQUksU0FBUyxHQUFHLE1BQU0sQ0FBQyxTQUFTLENBQUM7Z0JBQ2pDLE1BQU07Z0JBQ04sSUFBSSxhQUFXLENBQUM7Z0JBQ2hCLE9BQU8sSUFBSSxFQUFFO29CQUNULFFBQVE7b0JBQ1IsSUFBSSxTQUFTLEVBQUU7d0JBQ1gsb0NBQW9DO3dCQUNwQyxhQUFXLEdBQUcsU0FBUyxDQUFDLFdBQVcsQ0FBQzt3QkFDcEMsU0FBUzt3QkFDVCxJQUFJLGFBQVcsS0FBSyxNQUFNOzRCQUFFLE1BQU07d0JBQ2xDLG9CQUFvQjt3QkFDcEIsSUFBSSxDQUFDLGFBQVcsQ0FBQyxJQUFJLENBQUMsVUFBVSxDQUFDLEdBQUcsQ0FBQyxFQUFFOzRCQUNuQyxXQUFXLENBQUMsSUFBSSxDQUFDLGFBQVcsQ0FBQyxDQUFDOzRCQUM5QixLQUFLLENBQUMsSUFBSSxDQUFDLGFBQVcsQ0FBQyxDQUFDOzRCQUN4QixjQUFjOzRCQUNkLEtBQUssQ0FBQyxPQUFPLENBQUMsVUFBQSxJQUFJO2dDQUNkLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxFQUFFLGFBQVcsQ0FBQyxDQUFDOzRCQUN6QyxDQUFDLENBQUMsQ0FBQzt5QkFDTjt3QkFDRCxTQUFTLEdBQUcsU0FBUyxDQUFDLFNBQVMsQ0FBQztxQkFDbkM7eUJBQU07d0JBQ0gsTUFBTTtxQkFDVDtpQkFDSjthQUVKO1lBQ0QsSUFBSSxNQUFNLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO1lBQ3ZELE9BQU8sS0FBSyxDQUFDLElBQUksQ0FBQyxNQUFNLENBQUMsQ0FBQztRQUM5QixDQUFDO1FBQ0Q7O1dBRUc7UUFDVyxzQkFBWSxHQUExQixVQUEyQixJQUFJLEVBQUUsU0FBUztZQUN0QyxJQUFJLFNBQXlCLENBQUU7WUFDL0IsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtnQkFDN0IsU0FBUyxHQUFHLElBQUksQ0FBQyxZQUFZLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzNDO2lCQUFNO2dCQUNILFNBQVMsR0FBRyxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUN0QixJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxJQUFJLEVBQUUsU0FBUyxDQUFDLENBQUM7YUFDMUM7WUFDRCxhQUFhO1lBQ2IsU0FBUyxDQUFDLEdBQUcsQ0FBQyxTQUFTLENBQUMsQ0FBQztRQUM3QixDQUFDO1FBQ0Q7OztXQUdHO1FBQ1csMEJBQWdCLEdBQTlCLFVBQStCLE1BQU07WUFDakMsSUFBSSxJQUFJLENBQUMsWUFBWSxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsV0FBVyxDQUFDLEVBQUU7Z0JBQzNDLE9BQU8sSUFBSSxDQUFDO2FBQ2Y7aUJBQU07Z0JBQ0gsT0FBTyxLQUFLLENBQUM7YUFDaEI7UUFDTCxDQUFDO1FBekZELE9BQU87UUFDUSxzQkFBWSxHQUFHLElBQUksR0FBRyxFQUE2QixDQUFDO1FBeUZ2RSxnQkFBQztLQTNGRCxBQTJGQyxJQUFBO0lBM0ZZLGFBQVMsWUEyRnJCLENBQUE7QUFDTCxDQUFDLEVBakdTLEdBQUcsS0FBSCxHQUFHLFFBaUdaIiwiZmlsZSI6IlByb3RvdHlwZS5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBpb2Mge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5Y6f5Z6L57yT5a2Y5a2X5YW477yM55So5LqO5qOA5rWL5LiA5Liq5a+56LGh55qE5Z+657G7XHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBQcm90b3R5cGUge1xyXG4gICAgICAgIC8v57un5om/5pig5bCE6KGoXHJcbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgcHJvdG90eXBlTWFwID0gbmV3IE1hcCA8IE9iamVjdCwgU2V0IDwgT2JqZWN0ID4+ICgpO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWfuuexu+ajgOa1i+WHveaVsFxyXG4gICAgICAgICAqIEBwYXJhbSBpbnN0YW5jZSDlrp7kvotcclxuICAgICAgICAgKiBAcGFyYW0gcHJvdG90eXBlIOWfuuexu1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaXNQcm90ZXR5cGUodHlwZSwgcHJvdG90eXBlKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIC8vbGV0IGIgPSB0eXBlIGluc3RhbmNlb2YgcHJvdG90eXBlO1xyXG4gICAgICAgICAgICByZXR1cm4gdHlwZSBpbnN0YW5jZW9mIHByb3RvdHlwZTtcclxuICAgICAgICAgICAgLyogICAgICAgICBpZighKHR5cGUgaW5zdGFuY2VvZiBPYmplY3QpKXJldHVybiBmYWxzZTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgY29uc3RydWN0b3IgPSB0eXBlLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKHRoaXMucHJvdG90eXBlTWFwLmhhcyhjb25zdHJ1Y3Rvcikpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBsZXQgc2V0dCA9IHRoaXMucHJvdG90eXBlTWFwLmdldChjb25zdHJ1Y3Rvcik7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHNldHQuaGFzKHByb3RvdHlwZSkpe1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1lbHNle1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTsgKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6I635Y+W57un5om/5YiX6KGoXHJcbiAgICAgICAgICogQHBhcmFtIGluc3RhbmNlIOWunuS+i1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZ2V0UHJvdG90eXBlTGlzdCh0YXJnZXQpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuaGFzUHJvdG90eXBlTGlzdCh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgZXh0ZW5kc0xpc3Q7XHJcbiAgICAgICAgICAgICAgICAvL+iOt+WPlue7p+aJv+WIl+ihqFxyXG4gICAgICAgICAgICAgICAgZXh0ZW5kc0xpc3QgPSBbXTtcclxuICAgICAgICAgICAgICAgIC8v55So5p6E6YCg5Ye95pWw5Luj5pu/57G75Z6L5p2l5L2/55SoXHJcbiAgICAgICAgICAgICAgICBsZXQgdHlwZXMgPSBbXTtcclxuICAgICAgICAgICAgICAgIC8vdHlwZXMucHVzaCh0YXJnZXQuY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgLy/nu6fmib/nsbvlnotcclxuICAgICAgICAgICAgICAgIGxldCBwcm90b3R5cGUgPSB0YXJnZXQuX19wcm90b19fO1xyXG4gICAgICAgICAgICAgICAgLy/mnoTpgKDlh73mlbBcclxuICAgICAgICAgICAgICAgIGxldCBjb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgICAgIHdoaWxlICh0cnVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lpoLmnpznu6fmib/lrZjlnKhcclxuICAgICAgICAgICAgICAgICAgICBpZiAocHJvdG90eXBlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5Zug5Li65Y6L57yp5Luj56CB5Lya5oqK5omA5pyJ5a+56LGh55qE5ZCN56ew6YO95Y6L57yp5o6J77yM5omA5Lul6L+Z6YeM5L2/55So5p6E6YCg5Ye95pWw5L2c5Li66ZSu5YC8XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gcHJvdG90eXBlLmNvbnN0cnVjdG9yO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+aQnOe0ouWIsOWfuuexu+S4gOWxglxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoY29uc3RydWN0b3IgPT09IE9iamVjdCkgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5o6S6Zmk5LulTl/lvIDlpLTmqKHmi5/mjqXlj6PnmoTkuLTml7bmm7/ku6PnsbvlnotcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKCFjb25zdHJ1Y3Rvci5uYW1lLnN0YXJ0c1dpdGgoXCJOXCIpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBleHRlbmRzTGlzdC5wdXNoKGNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzLnB1c2goY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/kuLrmr4/kuIDkuKrnsbvpg73mt7vliqDnu6fmib/lhbPns7tcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHR5cGVzLmZvckVhY2godHlwZSA9PiB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5BZGRQcm90b3R5cGUodHlwZSwgY29uc3RydWN0b3IpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgcHJvdG90eXBlID0gcHJvdG90eXBlLl9fcHJvdG9fXztcclxuICAgICAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcblxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGxldCB2YWx1ZXMgPSB0aGlzLnByb3RvdHlwZU1hcC5nZXQodGFyZ2V0LmNvbnN0cnVjdG9yKTtcclxuICAgICAgICAgICAgcmV0dXJuIEFycmF5LmZyb20odmFsdWVzKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5re75Yqg57un5om/5YWz57O7XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBBZGRQcm90b3R5cGUodHB5ZSwgcHJvdG90eXBlKSB7XHJcbiAgICAgICAgICAgIGxldCBleHRlbmRTZXQ6IFNldCA8IE9iamVjdCA+IDtcclxuICAgICAgICAgICAgaWYgKHRoaXMucHJvdG90eXBlTWFwLmhhcyh0cHllKSkge1xyXG4gICAgICAgICAgICAgICAgZXh0ZW5kU2V0ID0gdGhpcy5wcm90b3R5cGVNYXAuZ2V0KHRweWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgZXh0ZW5kU2V0ID0gbmV3IFNldCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5wcm90b3R5cGVNYXAuc2V0KHRweWUsIGV4dGVuZFNldCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/kuLrnu6fmib/pmJ/liJfliqDlhaXmlrDnmoTnu6fmib9cclxuICAgICAgICAgICAgZXh0ZW5kU2V0LmFkZChwcm90b3R5cGUpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmmK/lkKblrZjlnKjnu6fmib/liJfooahcclxuICAgICAgICAgKiBAcGFyYW0gaW5zdGFuY2Ug5a6e5L6LXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIHN0YXRpYyBoYXNQcm90b3R5cGVMaXN0KHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAodGhpcy5wcm90b3R5cGVNYXAuaGFzKHRhcmdldC5jb25zdHJ1Y3RvcikpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19

/* import { IConstructorName } from "../IocConst"; */
var ioc;
(function (ioc) {
    var NBinding = /** @class */ (function () {
        function NBinding() {
        }
        Object.defineProperty(NBinding.prototype, "constructorName", {
            get: function () {
                return "IBinding";
            },
            enumerable: true,
            configurable: true
        });
        return NBinding;
    }());
    ioc.NBinding = NBinding;
    var Binding = /** @class */ (function () {
        function Binding(resolver) {
            this._resolver = resolver;
            this._key = null;
            this._value = null;
            this._name = null;
        }
        Object.defineProperty(Binding.prototype, "key", {
            get: function () {
                return this._key;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Binding.prototype, "value", {
            get: function () {
                return this._value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Binding.prototype, "name", {
            get: function () {
                return this._name;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 绑定标志到键值，返回此时的绑定状态。
         * @param key 标志值，可以是需要执行的全局信号名称或枚举
         */
        Binding.prototype.bind = function (key) {
            this._key = Binding.checkAbstract(key);
            return this;
        };
        /**
         * 从正在绑定状态映射到实例，返回此时的绑定状态。
         * @param value 绑定映射的值
         */
        Binding.prototype.to = function (value) {
            this._value = value;
            if (this._resolver != null)
                this._resolver(this);
            return this;
        };
        /**
         * 实例的别名，用于区分不同的实例，返回此时的绑定状态。
         * @param name 实例的别名
         */
        Binding.prototype.toName = function (name) {
            this._name = name;
            if (this._resolver != null)
                this._resolver(this);
            return this;
        };
        Object.defineProperty(Binding.prototype, "isKeyConstructor", {
            //判断是否为构造函数
            get: function () {
                return Binding.isConstructor(this._key);
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Binding.prototype, "isValueConstructor", {
            //判断是否为构造函数
            get: function () {
                return Binding.isConstructor(this._value);
            },
            enumerable: true,
            configurable: true
        });
        Binding.isConstructor = function (value) {
            //如果不是一个函数则绝对不是构造函数
            if (typeof value !== "function") {
                return false;
            }
            //如果不能直接获取原型则不是构造函数
            if (!value.prototype) {
                return false;
            }
            return true;
        };
        Binding.checkAbstract = function (key) {
            //检查被绑定的对象是否为虚类
            var constructorName;
            if (key.constructorName !== null && key.constructorName !== undefined) {
                constructorName = key.constructorName;
                //console.info("[转化虚拟类]"+ constructorName);
            }
            else {
                constructorName = key;
                //console.info("[非虚拟类]"+ constructorName.constructor.name);
            }
            return constructorName;
        };
        return Binding;
    }());
    ioc.Binding = Binding;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CaW5kL0JpbmRpbmcudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEscURBQXFEO0FBRXJELElBQVUsR0FBRyxDQW1HWjtBQW5HRCxXQUFVLEdBQUc7SUFTVDtRQUFBO1FBSUEsQ0FBQztRQUhHLHNCQUFJLHFDQUFlO2lCQUFuQjtnQkFDSSxPQUFPLFVBQVUsQ0FBQztZQUN0QixDQUFDOzs7V0FBQTtRQUNMLGVBQUM7SUFBRCxDQUpBLEFBSUMsSUFBQTtJQUpZLFlBQVEsV0FJcEIsQ0FBQTtJQUNEO1FBZ0JJLGlCQUFZLFFBQWE7WUFDckIsSUFBSSxDQUFDLFNBQVMsR0FBRyxRQUFRLENBQUM7WUFFMUIsSUFBSSxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDakIsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDbkIsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7UUFDdEIsQ0FBQztRQWhCRCxzQkFBVyx3QkFBRztpQkFBZDtnQkFDSSxPQUFPLElBQUksQ0FBQyxJQUFJLENBQUM7WUFDckIsQ0FBQzs7O1dBQUE7UUFDRCxzQkFBVywwQkFBSztpQkFBaEI7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsTUFBTSxDQUFDO1lBQ3ZCLENBQUM7OztXQUFBO1FBQ0Qsc0JBQVcseUJBQUk7aUJBQWY7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO1lBQ3RCLENBQUM7OztXQUFBO1FBVUQ7OztXQUdHO1FBQ0gsc0JBQUksR0FBSixVQUFLLEdBQUc7WUFDSixJQUFJLENBQUMsSUFBSSxHQUFHLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDdkMsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNEOzs7V0FHRztRQUNILG9CQUFFLEdBQUYsVUFBRyxLQUFLO1lBQ0osSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7WUFDcEIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUk7Z0JBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVEOzs7V0FHRztRQUNILHdCQUFNLEdBQU4sVUFBTyxJQUFJO1lBQ1AsSUFBSSxDQUFDLEtBQUssR0FBRyxJQUFJLENBQUM7WUFDbEIsSUFBSSxJQUFJLENBQUMsU0FBUyxJQUFJLElBQUk7Z0JBQ3RCLElBQUksQ0FBQyxTQUFTLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUVELHNCQUFXLHFDQUFnQjtZQUQzQixXQUFXO2lCQUNYO2dCQUNJLE9BQU8sT0FBTyxDQUFDLGFBQWEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDNUMsQ0FBQzs7O1dBQUE7UUFFRCxzQkFBVyx1Q0FBa0I7WUFEN0IsV0FBVztpQkFDWDtnQkFDSSxPQUFPLE9BQU8sQ0FBQyxhQUFhLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDO1lBQzlDLENBQUM7OztXQUFBO1FBQ2EscUJBQWEsR0FBM0IsVUFBNEIsS0FBYTtZQUNyQyxtQkFBbUI7WUFDbkIsSUFBSSxPQUFPLEtBQUssS0FBSyxVQUFVLEVBQUU7Z0JBQzdCLE9BQU8sS0FBSyxDQUFDO2FBQ2hCO1lBQ0QsbUJBQW1CO1lBQ25CLElBQUksQ0FBQyxLQUFLLENBQUMsU0FBUyxFQUFFO2dCQUNsQixPQUFPLEtBQUssQ0FBQzthQUNoQjtZQUNELE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDYSxxQkFBYSxHQUEzQixVQUE0QixHQUFHO1lBQzNCLGVBQWU7WUFDZixJQUFJLGVBQWUsQ0FBQztZQUNwQixJQUFJLEdBQUcsQ0FBQyxlQUFlLEtBQUcsSUFBSSxJQUFFLEdBQUcsQ0FBQyxlQUFlLEtBQUcsU0FBUyxFQUFFO2dCQUM3RCxlQUFlLEdBQUcsR0FBRyxDQUFDLGVBQWUsQ0FBQztnQkFDdEMsMkNBQTJDO2FBQzlDO2lCQUFNO2dCQUNILGVBQWUsR0FBRyxHQUFHLENBQUM7Z0JBQ3RCLDJEQUEyRDthQUM5RDtZQUNELE9BQU8sZUFBZSxDQUFDO1FBQzNCLENBQUM7UUFDTCxjQUFDO0lBQUQsQ0FwRkEsQUFvRkMsSUFBQTtJQXBGWSxXQUFPLFVBb0ZuQixDQUFBO0FBQ0wsQ0FBQyxFQW5HUyxHQUFHLEtBQUgsR0FBRyxRQW1HWiIsImZpbGUiOiJCaW5kL0JpbmRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpbXBvcnQgeyBJQ29uc3RydWN0b3JOYW1lIH0gZnJvbSBcIi4uL0lvY0NvbnN0XCI7ICovXHJcblxyXG5uYW1lc3BhY2UgaW9jIHtcclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUJpbmRpbmcge1xyXG4gICAgICAgIG5hbWU6IGFueTtcclxuICAgICAgICBrZXk6IGFueTtcclxuICAgICAgICB2YWx1ZTogYW55O1xyXG4gICAgICAgIGJpbmQoazogYW55KTogSUJpbmRpbmc7XHJcbiAgICAgICAgdG8odjogYW55KTogSUJpbmRpbmc7XHJcbiAgICAgICAgdG9OYW1lKG46IGFueSk6IElCaW5kaW5nO1xyXG4gICAgfVxyXG4gICAgZXhwb3J0IGNsYXNzIE5CaW5kaW5nIGltcGxlbWVudHMgSUNvbnN0cnVjdG9yTmFtZSB7XHJcbiAgICAgICAgZ2V0IGNvbnN0cnVjdG9yTmFtZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiSUJpbmRpbmdcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgY2xhc3MgQmluZGluZyBpbXBsZW1lbnRzIElCaW5kaW5nIHtcclxuICAgICAgICBwcm90ZWN0ZWQgX2tleTogYW55O1xyXG4gICAgICAgIHByb3RlY3RlZCBfdmFsdWU6IGFueTtcclxuICAgICAgICBwcm90ZWN0ZWQgX25hbWU6IGFueTtcclxuICAgICAgICBwcm90ZWN0ZWQgX3Jlc29sdmVyOiBhbnk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQga2V5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fa2V5O1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgZ2V0IHZhbHVlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBnZXQgbmFtZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX25hbWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcihyZXNvbHZlcjogYW55KSB7XHJcbiAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVyID0gcmVzb2x2ZXI7XHJcblxyXG4gICAgICAgICAgICB0aGlzLl9rZXkgPSBudWxsO1xyXG4gICAgICAgICAgICB0aGlzLl92YWx1ZSA9IG51bGw7XHJcbiAgICAgICAgICAgIHRoaXMuX25hbWUgPSBudWxsO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog57uR5a6a5qCH5b+X5Yiw6ZSu5YC877yM6L+U5Zue5q2k5pe255qE57uR5a6a54q25oCB44CCXHJcbiAgICAgICAgICogQHBhcmFtIGtleSDmoIflv5flgLzvvIzlj6/ku6XmmK/pnIDopoHmiafooYznmoTlhajlsYDkv6Hlj7flkI3np7DmiJbmnprkuL5cclxuICAgICAgICAgKi9cclxuICAgICAgICBiaW5kKGtleSk6IElCaW5kaW5nIHtcclxuICAgICAgICAgICAgdGhpcy5fa2V5ID0gQmluZGluZy5jaGVja0Fic3RyYWN0KGtleSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDku47mraPlnKjnu5HlrprnirbmgIHmmKDlsITliLDlrp7kvovvvIzov5Tlm57mraTml7bnmoTnu5HlrprnirbmgIHjgIJcclxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg57uR5a6a5pig5bCE55qE5YC8XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdG8odmFsdWUpOiBJQmluZGluZyB7XHJcbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdmFsdWU7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9yZXNvbHZlciAhPSBudWxsKVxyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZXIodGhpcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5a6e5L6L55qE5Yir5ZCN77yM55So5LqO5Yy65YiG5LiN5ZCM55qE5a6e5L6L77yM6L+U5Zue5q2k5pe255qE57uR5a6a54q25oCB44CCXHJcbiAgICAgICAgICogQHBhcmFtIG5hbWUg5a6e5L6L55qE5Yir5ZCNXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdG9OYW1lKG5hbWUpOiBJQmluZGluZyB7XHJcbiAgICAgICAgICAgIHRoaXMuX25hbWUgPSBuYW1lO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVzb2x2ZXIgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVyKHRoaXMpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbkuLrmnoTpgKDlh73mlbBcclxuICAgICAgICBwdWJsaWMgZ2V0IGlzS2V5Q29uc3RydWN0b3IoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiBCaW5kaW5nLmlzQ29uc3RydWN0b3IodGhpcy5fa2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/liKTmlq3mmK/lkKbkuLrmnoTpgKDlh73mlbBcclxuICAgICAgICBwdWJsaWMgZ2V0IGlzVmFsdWVDb25zdHJ1Y3RvcigpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIEJpbmRpbmcuaXNDb25zdHJ1Y3Rvcih0aGlzLl92YWx1ZSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaXNDb25zdHJ1Y3Rvcih2YWx1ZTogb2JqZWN0KTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5LiN5piv5LiA5Liq5Ye95pWw5YiZ57ud5a+55LiN5piv5p6E6YCg5Ye95pWwXHJcbiAgICAgICAgICAgIGlmICh0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5LiN6IO955u05o6l6I635Y+W5Y6f5Z6L5YiZ5LiN5piv5p6E6YCg5Ye95pWwXHJcbiAgICAgICAgICAgIGlmICghdmFsdWUucHJvdG90eXBlKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgY2hlY2tBYnN0cmFjdChrZXkpIHtcclxuICAgICAgICAgICAgLy/mo4Dmn6Xooqvnu5HlrprnmoTlr7nosaHmmK/lkKbkuLromZrnsbtcclxuICAgICAgICAgICAgbGV0IGNvbnN0cnVjdG9yTmFtZTtcclxuICAgICAgICAgICAgaWYgKGtleS5jb25zdHJ1Y3Rvck5hbWUhPT1udWxsJiZrZXkuY29uc3RydWN0b3JOYW1lIT09dW5kZWZpbmVkKSB7XHJcbiAgICAgICAgICAgICAgICBjb25zdHJ1Y3Rvck5hbWUgPSBrZXkuY29uc3RydWN0b3JOYW1lO1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmluZm8oXCJb6L2s5YyW6Jma5ouf57G7XVwiKyBjb25zdHJ1Y3Rvck5hbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3JOYW1lID0ga2V5O1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmluZm8oXCJb6Z2e6Jma5ouf57G7XVwiKyBjb25zdHJ1Y3Rvck5hbWUuY29uc3RydWN0b3IubmFtZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGNvbnN0cnVjdG9yTmFtZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=

/* import { IBinding,Binding } from "./Binding"
import {IConstructorName} from "../IocConst"
import { BindingConst } from "./BindConst"; */
//export namespace ioc{
var ioc;
(function (ioc) {
    var NBinder = /** @class */ (function () {
        function NBinder() {
        }
        Object.defineProperty(NBinder.prototype, "constructorName", {
            get: function () {
                return "IBinder";
            },
            enumerable: true,
            configurable: true
        });
        return NBinder;
    }());
    ioc.NBinder = NBinder;
    var Binder = /** @class */ (function () {
        //绑定状态白名单
        //protected _bindingWhitelist : Array<object> ;
        function Binder() {
            this.init();
        }
        /**
         * 初始化函数，通过重写该函数指定映射字典的实例
         */
        Binder.prototype.init = function () {
            //初始化绑定状态映射
            this._bindings = new Map();
        };
        /**
         * 解析器，将正在绑定中的状态信息解析，使之成为可存储的数据绑定到映射字典。
         * @param binding 绑定的状态
         */
        Binder.prototype.resolver = function (binding) {
            var key = binding.key;
            this.resolveBinding(binding, key);
        };
        /**
         * 解析绑定状态
         * @param binding 绑定状态
         * @param key 键值
         */
        Binder.prototype.resolveBinding = function (binding, key) {
            //检查绑定状态是否存在别名
            var bindingName = (binding.name == null) ? ioc.BindingConst.NULL : binding.name;
            var dict;
            //检查绑定状态字典已经存在键值
            if ((this._bindings.has(key))) {
                //获取绑定映射
                dict = this._bindings.get(key);
                //检查绑定映射是否存在别名
                if (dict.has(bindingName)) {
                    //获取已经存在的绑定映射
                    var existingBinding = dict.get(bindingName);
                    //检查合法性
                    if (existingBinding != binding) {
                        //如果绑定值为空
                        if (!existingBinding.value) {
                            //移除无效的绑定别名
                            dict.delete(bindingName);
                        }
                    }
                }
            }
            else {
                //创建绑定映射
                dict = new Map();
                //添加绑定映射
                this._bindings.set(key, dict);
            }
            //如果存在默认绑定状态并且等于当前绑定状态
            if (dict.has(ioc.BindingConst.NULL) && dict.get(ioc.BindingConst.NULL) === binding) {
                //删除默认绑定
                dict.delete(ioc.BindingConst.NULL);
            }
            //添加或覆盖绑定状态
            if (!dict.has(bindingName)) {
                dict.set(bindingName, binding);
            }
        };
        /**
         * 绑定信号容器
         * @param key 键值，可以是需要执行的全局信号名称或枚举
         */
        Binder.prototype.bind = function (key) {
            //创建一个绑定中状态
            var binding = this.getRawBinding();
            //绑定标志
            binding.bind(key);
            return binding;
        };
        /**
         * 解除绑定信号容器
         * @param key 键值，需要绑定的键值
         * @param name 别名，被绑定变量的别名
         */
        Binder.prototype.unbind = function (key, name) {
            var checkKey = ioc.Binding.checkAbstract(key);
            //如果绑定映射字典内包含键值
            if (this._bindings.has(checkKey)) {
                //直接获取键值映射的值
                var dict = this._bindings.get(checkKey);
                //检查是否存指定别名
                var bindingName = void 0;
                if (name) {
                    bindingName = name;
                }
                else {
                    bindingName = ioc.BindingConst.NULL;
                }
                if (dict.has(bindingName)) {
                    dict.delete(bindingName);
                }
            }
        };
        /**
         * 生成默认的绑定状态
         */
        Binder.prototype.getRawBinding = function () {
            return new ioc.Binding(this.resolver.bind(this));
        };
        /**
         * 根据键值和别名获取绑定器中的绑定状态
         * @param key 键值
         * @param name 别名
         */
        Binder.prototype.getBinding = function (key, name) {
            //查找是否存在键值
            if (this._bindings.has(key)) {
                var dict = this._bindings.get(key);
                //如果别名不存在则使用默认值
                if (!name) {
                    name = ioc.BindingConst.NULL;
                }
                //查找绑定状态是否存在别名
                if (dict.has(name)) {
                    return dict.get(name);
                }
                else {
                    return null;
                }
            }
        };
        /**
         * 获取绑定状态映射表，返回键值的所有绑定状态
         * @param key 被绑定的键值
         */
        Binder.prototype.getBindingMap = function (key) {
            if (this._bindings.has(key)) {
                return this._bindings.get(key);
            }
        };
        return Binder;
    }());
    ioc.Binder = Binder;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CaW5kL0JpbmRlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTs7OENBRThDO0FBQzlDLHVCQUF1QjtBQUN2QixJQUFVLEdBQUcsQ0E0Slo7QUE1SkQsV0FBVSxHQUFHO0lBV1Q7UUFBQTtRQUlBLENBQUM7UUFIRyxzQkFBSSxvQ0FBZTtpQkFBbkI7Z0JBQ0ksT0FBTyxTQUFTLENBQUM7WUFDckIsQ0FBQzs7O1dBQUE7UUFDTCxjQUFDO0lBQUQsQ0FKQSxBQUlDLElBQUE7SUFKWSxXQUFPLFVBSW5CLENBQUE7SUFDRDtRQUdJLFNBQVM7UUFDVCwrQ0FBK0M7UUFDL0M7WUFDSSxJQUFJLENBQUMsSUFBSSxFQUFFLENBQUM7UUFDaEIsQ0FBQztRQUNEOztXQUVHO1FBQ0gscUJBQUksR0FBSjtZQUNJLFdBQVc7WUFDWCxJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksR0FBRyxFQUFpQyxDQUFDO1FBQzlELENBQUM7UUFDRDs7O1dBR0c7UUFDSCx5QkFBUSxHQUFSLFVBQVMsT0FBaUI7WUFDdEIsSUFBSSxHQUFHLEdBQUcsT0FBTyxDQUFDLEdBQUcsQ0FBQztZQUN0QixJQUFJLENBQUMsY0FBYyxDQUFDLE9BQU8sRUFBRSxHQUFHLENBQUMsQ0FBQztRQUN0QyxDQUFDO1FBQ0Q7Ozs7V0FJRztRQUNILCtCQUFjLEdBQWQsVUFBZSxPQUFpQixFQUFFLEdBQVE7WUFDdEMsY0FBYztZQUNkLElBQUksV0FBVyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBQSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzVFLElBQUksSUFBMkIsQ0FBRTtZQUNqQyxnQkFBZ0I7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNCLFFBQVE7Z0JBQ1IsSUFBSSxHQUFHLElB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QWU7Z0JBQ2YsSUFBSSxDQUFDLElBQUksRUFBRTtvQkFDUCxJQUFJLEdBQUcsSUFBQSxZQUFZLENBQUMsSUFBSSxDQUFBO2lCQUMzQjtnQkFDRCxjQUFjO2dCQUNkLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxJQUFJLENBQUMsRUFBRTtvQkFDaEIsT0FBTyxJQUFJLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO2lCQUN6QjtxQkFBTTtvQkFDSCxPQUFPLElBQUksQ0FBQztpQkFDZjthQUNKO1FBQ0wsQ0FBQztRQUNEOzs7V0FHRztRQUNILDhCQUFhLEdBQWIsVUFBYyxHQUFRO1lBQ2xCLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQ3pCLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQyxHQUFHLENBQUMsR0FBRyxDQUFDLENBQUM7YUFDbEM7UUFDTCxDQUFDO1FBQ0wsYUFBQztJQUFELENBM0lBLEFBMklDLElBQUE7SUEzSVksVUFBTSxTQTJJbEIsQ0FBQTtBQUNMLENBQUMsRUE1SlMsR0FBRyxLQUFILEdBQUcsUUE0SloiLCJmaWxlIjoiQmluZC9CaW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpbXBvcnQgeyBJQmluZGluZyxCaW5kaW5nIH0gZnJvbSBcIi4vQmluZGluZ1wiXHJcbmltcG9ydCB7SUNvbnN0cnVjdG9yTmFtZX0gZnJvbSBcIi4uL0lvY0NvbnN0XCJcclxuaW1wb3J0IHsgQmluZGluZ0NvbnN0IH0gZnJvbSBcIi4vQmluZENvbnN0XCI7ICovXHJcbi8vZXhwb3J0IG5hbWVzcGFjZSBpb2N7XHJcbm5hbWVzcGFjZSBpb2Mge1xyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJQmluZGVyIHtcclxuICAgICAgICBiaW5kKGtleSk6IElCaW5kaW5nO1xyXG4gICAgICAgIHVuYmluZChrZXksIG5hbWUpO1xyXG4gICAgICAgIC8v5qC55o2u57uR5a6a5Zmo5a6e5L6L55Sf5oiQ5LiA5Liq56m655qE57uR5a6a54q25oCBXHJcbiAgICAgICAgZ2V0UmF3QmluZGluZygpOiBJQmluZGluZztcclxuICAgICAgICAvL+iOt+WPlue7keWumueKtuaAgVxyXG4gICAgICAgIGdldEJpbmRpbmcoa2V5OiBhbnksIG5hbWU6IGFueSk6IElCaW5kaW5nO1xyXG4gICAgICAgIGdldEJpbmRpbmdNYXAoa2V5OiBhbnkpOiBNYXAgPCBhbnksIElCaW5kaW5nID4gO1xyXG4gICAgICAgIHJlc29sdmVCaW5kaW5nKGJpbmRpbmc6IElCaW5kaW5nLCBrZXk6IGFueSk7XHJcbiAgICB9XHJcbiAgICBleHBvcnQgY2xhc3MgTkJpbmRlciBpbXBsZW1lbnRzIElDb25zdHJ1Y3Rvck5hbWUge1xyXG4gICAgICAgIGdldCBjb25zdHJ1Y3Rvck5hbWUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIklCaW5kZXJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgY2xhc3MgQmluZGVyIGltcGxlbWVudHMgSUJpbmRlciB7XHJcbiAgICAgICAgLy/nu5HlrprnirbmgIHmmKDlsITlrZflhbhcclxuICAgICAgICBwcm90ZWN0ZWQgX2JpbmRpbmdzOiBhbnk7XHJcbiAgICAgICAgLy/nu5HlrprnirbmgIHnmb3lkI3ljZVcclxuICAgICAgICAvL3Byb3RlY3RlZCBfYmluZGluZ1doaXRlbGlzdCA6IEFycmF5PG9iamVjdD4gO1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCkge1xyXG4gICAgICAgICAgICB0aGlzLmluaXQoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5Yid5aeL5YyW5Ye95pWw77yM6YCa6L+H6YeN5YaZ6K+l5Ye95pWw5oyH5a6a5pig5bCE5a2X5YW455qE5a6e5L6LXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgaW5pdCgpIHtcclxuICAgICAgICAgICAgLy/liJ3lp4vljJbnu5HlrprnirbmgIHmmKDlsIRcclxuICAgICAgICAgICAgdGhpcy5fYmluZGluZ3MgPSBuZXcgTWFwIDwgYW55LCBNYXAgPCBhbnksIElCaW5kaW5nID4+ICgpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDop6PmnpDlmajvvIzlsIbmraPlnKjnu5HlrprkuK3nmoTnirbmgIHkv6Hmga/op6PmnpDvvIzkvb/kuYvmiJDkuLrlj6/lrZjlgqjnmoTmlbDmja7nu5HlrprliLDmmKDlsITlrZflhbjjgIJcclxuICAgICAgICAgKiBAcGFyYW0gYmluZGluZyDnu5HlrprnmoTnirbmgIFcclxuICAgICAgICAgKi9cclxuICAgICAgICByZXNvbHZlcihiaW5kaW5nOiBJQmluZGluZykge1xyXG4gICAgICAgICAgICBsZXQga2V5ID0gYmluZGluZy5rZXk7XHJcbiAgICAgICAgICAgIHRoaXMucmVzb2x2ZUJpbmRpbmcoYmluZGluZywga2V5KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6Kej5p6Q57uR5a6a54q25oCBXHJcbiAgICAgICAgICogQHBhcmFtIGJpbmRpbmcg57uR5a6a54q25oCBXHJcbiAgICAgICAgICogQHBhcmFtIGtleSDplK7lgLxcclxuICAgICAgICAgKi9cclxuICAgICAgICByZXNvbHZlQmluZGluZyhiaW5kaW5nOiBJQmluZGluZywga2V5OiBhbnkpIHtcclxuICAgICAgICAgICAgLy/mo4Dmn6Xnu5HlrprnirbmgIHmmK/lkKblrZjlnKjliKvlkI1cclxuICAgICAgICAgICAgbGV0IGJpbmRpbmdOYW1lID0gKGJpbmRpbmcubmFtZSA9PSBudWxsKSA/IEJpbmRpbmdDb25zdC5OVUxMIDogYmluZGluZy5uYW1lO1xyXG4gICAgICAgICAgICBsZXQgZGljdDogTWFwIDwgYW55LCBJQmluZGluZyA+IDtcclxuICAgICAgICAgICAgLy/mo4Dmn6Xnu5HlrprnirbmgIHlrZflhbjlt7Lnu4/lrZjlnKjplK7lgLxcclxuICAgICAgICAgICAgaWYgKCh0aGlzLl9iaW5kaW5ncy5oYXMoa2V5KSkpIHtcclxuICAgICAgICAgICAgICAgIC8v6I635Y+W57uR5a6a5pig5bCEXHJcbiAgICAgICAgICAgICAgICBkaWN0ID0gdGhpcy5fYmluZGluZ3MuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgICAgICAvL+ajgOafpee7keWumuaYoOWwhOaYr+WQpuWtmOWcqOWIq+WQjVxyXG4gICAgICAgICAgICAgICAgaWYgKGRpY3QuaGFzKGJpbmRpbmdOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6I635Y+W5bey57uP5a2Y5Zyo55qE57uR5a6a5pig5bCEXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGV4aXN0aW5nQmluZGluZyA9IGRpY3QuZ2V0KGJpbmRpbmdOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAvL+ajgOafpeWQiOazleaAp1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChleGlzdGluZ0JpbmRpbmcgIT0gYmluZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WmguaenOe7keWumuWAvOS4uuepulxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV4aXN0aW5nQmluZGluZy52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/np7vpmaTml6DmlYjnmoTnu5HlrprliKvlkI1cclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpY3QuZGVsZXRlKGJpbmRpbmdOYW1lKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v5Yib5bu657uR5a6a5pig5bCEXHJcbiAgICAgICAgICAgICAgICBkaWN0ID0gbmV3IE1hcCA8IGFueSwgSUJpbmRpbmcgPiAoKTtcclxuICAgICAgICAgICAgICAgIC8v5re75Yqg57uR5a6a5pig5bCEXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9iaW5kaW5ncy5zZXQoa2V5LCBkaWN0KTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgLy/lpoLmnpzlrZjlnKjpu5jorqTnu5HlrprnirbmgIHlubbkuJTnrYnkuo7lvZPliY3nu5HlrprnirbmgIFcclxuICAgICAgICAgICAgaWYgKGRpY3QuaGFzKEJpbmRpbmdDb25zdC5OVUxMKSAmJiBkaWN0LmdldChCaW5kaW5nQ29uc3QuTlVMTCkgPT09IGJpbmRpbmcpIHtcclxuICAgICAgICAgICAgICAgIC8v5Yig6Zmk6buY6K6k57uR5a6aXHJcbiAgICAgICAgICAgICAgICBkaWN0LmRlbGV0ZShCaW5kaW5nQ29uc3QuTlVMTCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5re75Yqg5oiW6KaG55uW57uR5a6a54q25oCBXHJcbiAgICAgICAgICAgIGlmICghZGljdC5oYXMoYmluZGluZ05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICBkaWN0LnNldChiaW5kaW5nTmFtZSwgYmluZGluZyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOe7keWumuS/oeWPt+WuueWZqFxyXG4gICAgICAgICAqIEBwYXJhbSBrZXkg6ZSu5YC877yM5Y+v5Lul5piv6ZyA6KaB5omn6KGM55qE5YWo5bGA5L+h5Y+35ZCN56ew5oiW5p6a5Li+XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgYmluZChrZXkpOiBJQmluZGluZyB7XHJcbiAgICAgICAgICAgIC8v5Yib5bu65LiA5Liq57uR5a6a5Lit54q25oCBXHJcbiAgICAgICAgICAgIGxldCBiaW5kaW5nID0gdGhpcy5nZXRSYXdCaW5kaW5nKCk7XHJcblxyXG4gICAgICAgICAgICAvL+e7keWumuagh+W/l1xyXG4gICAgICAgICAgICBiaW5kaW5nLmJpbmQoa2V5KTtcclxuICAgICAgICAgICAgcmV0dXJuIGJpbmRpbmc7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOino+mZpOe7keWumuS/oeWPt+WuueWZqFxyXG4gICAgICAgICAqIEBwYXJhbSBrZXkg6ZSu5YC877yM6ZyA6KaB57uR5a6a55qE6ZSu5YC8XHJcbiAgICAgICAgICogQHBhcmFtIG5hbWUg5Yir5ZCN77yM6KKr57uR5a6a5Y+Y6YeP55qE5Yir5ZCNXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdW5iaW5kKGtleSwgbmFtZSkge1xyXG4gICAgICAgICAgICBsZXQgY2hlY2tLZXkgPSBCaW5kaW5nLmNoZWNrQWJzdHJhY3Qoa2V5KTtcclxuICAgICAgICAgICAgLy/lpoLmnpznu5HlrprmmKDlsITlrZflhbjlhoXljIXlkKvplK7lgLxcclxuICAgICAgICAgICAgaWYgKHRoaXMuX2JpbmRpbmdzLmhhcyhjaGVja0tleSkpIHtcclxuICAgICAgICAgICAgICAgIC8v55u05o6l6I635Y+W6ZSu5YC85pig5bCE55qE5YC8XHJcbiAgICAgICAgICAgICAgICBsZXQgZGljdCA9IHRoaXMuX2JpbmRpbmdzLmdldChjaGVja0tleSk7XHJcbiAgICAgICAgICAgICAgICAvL+ajgOafpeaYr+WQpuWtmOaMh+WumuWIq+WQjVxyXG4gICAgICAgICAgICAgICAgbGV0IGJpbmRpbmdOYW1lO1xyXG4gICAgICAgICAgICAgICAgaWYgKG5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBiaW5kaW5nTmFtZSA9IG5hbWU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmdOYW1lID0gQmluZGluZ0NvbnN0Lk5VTEw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoZGljdC5oYXMoYmluZGluZ05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZGljdC5kZWxldGUoYmluZGluZ05hbWUpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOeUn+aIkOm7mOiupOeahOe7keWumueKtuaAgVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIGdldFJhd0JpbmRpbmcoKTogSUJpbmRpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IEJpbmRpbmcodGhpcy5yZXNvbHZlci5iaW5kKHRoaXMpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog5qC55o2u6ZSu5YC85ZKM5Yir5ZCN6I635Y+W57uR5a6a5Zmo5Lit55qE57uR5a6a54q25oCBXHJcbiAgICAgICAgICogQHBhcmFtIGtleSDplK7lgLxcclxuICAgICAgICAgKiBAcGFyYW0gbmFtZSDliKvlkI1cclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRCaW5kaW5nKGtleTogYW55LCBuYW1lOiBhbnkpOiBJQmluZGluZyB7XHJcbiAgICAgICAgICAgIC8v5p+l5om+5piv5ZCm5a2Y5Zyo6ZSu5YC8XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9iaW5kaW5ncy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpY3QgPSB0aGlzLl9iaW5kaW5ncy5nZXQoa2V5KTtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c5Yir5ZCN5LiN5a2Y5Zyo5YiZ5L2/55So6buY6K6k5YC8XHJcbiAgICAgICAgICAgICAgICBpZiAoIW5hbWUpIHtcclxuICAgICAgICAgICAgICAgICAgICBuYW1lID0gQmluZGluZ0NvbnN0Lk5VTExcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIC8v5p+l5om+57uR5a6a54q25oCB5piv5ZCm5a2Y5Zyo5Yir5ZCNXHJcbiAgICAgICAgICAgICAgICBpZiAoZGljdC5oYXMobmFtZSkpIHtcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGljdC5nZXQobmFtZSk7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiOt+WPlue7keWumueKtuaAgeaYoOWwhOihqO+8jOi/lOWbnumUruWAvOeahOaJgOaciee7keWumueKtuaAgVxyXG4gICAgICAgICAqIEBwYXJhbSBrZXkg6KKr57uR5a6a55qE6ZSu5YC8XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgZ2V0QmluZGluZ01hcChrZXk6IGFueSk6IGFueSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9iaW5kaW5ncy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdzLmdldChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19

var ioc;
(function (ioc) {
    var BindingConst;
    (function (BindingConst) {
        //定义空常量
        BindingConst.NULL = Symbol("NULL");
    })(BindingConst = ioc.BindingConst || (ioc.BindingConst = {}));
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9CaW5kL0JpbmRDb25zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FLWjtBQUxELFdBQVUsR0FBRztJQUNULElBQWMsWUFBWSxDQUd6QjtJQUhELFdBQWMsWUFBWTtRQUN0QixPQUFPO1FBQ00saUJBQUksR0FBRyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7SUFDdkMsQ0FBQyxFQUhhLFlBQVksR0FBWixnQkFBWSxLQUFaLGdCQUFZLFFBR3pCO0FBQ0wsQ0FBQyxFQUxTLEdBQUcsS0FBSCxHQUFHLFFBS1oiLCJmaWxlIjoiQmluZC9CaW5kQ29uc3QuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgaW9je1xyXG4gICAgZXhwb3J0IG1vZHVsZSBCaW5kaW5nQ29uc3R7XHJcbiAgICAgICAgLy/lrprkuYnnqbrluLjph49cclxuICAgICAgICBleHBvcnQgY29uc3QgTlVMTCA9IFN5bWJvbChcIk5VTExcIik7XHJcbiAgICB9XHJcbn0iXX0=

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* import { Binding } from "../Bind/Binding"; */
var ioc;
(function (ioc) {
    var DecoratorClassBinding = /** @class */ (function (_super) {
        __extends(DecoratorClassBinding, _super);
        function DecoratorClassBinding() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(DecoratorClassBinding.prototype, "property", {
            get: function () {
                return this._property;
            },
            enumerable: true,
            configurable: true
        });
        /**
         * 从正在绑定状态映射到属性，返回此时的绑定状态。
         * @param property 绑定映射的值
         */
        DecoratorClassBinding.prototype.toProperty = function (property) {
            this._property = property;
            if (this._resolver != null)
                this._resolver(this);
            return this;
        };
        //重写绑定到值
        DecoratorClassBinding.prototype.to = function (value) {
            return _super.prototype.to.call(this, value);
        };
        //重写绑定别名
        DecoratorClassBinding.prototype.toName = function (name) {
            return _super.prototype.toName.call(this, name);
        };
        return DecoratorClassBinding;
    }(ioc.Binding));
    ioc.DecoratorClassBinding = DecoratorClassBinding;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EZWNvcmF0b3IvRGVjb3JhdG9yQ2xhc3NCaW5kaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBZ0Q7QUFDaEQsSUFBVSxHQUFHLENBMEJaO0FBMUJELFdBQVUsR0FBRztJQUNUO1FBQTJDLHlDQUFPO1FBQWxEOztRQXdCQSxDQUFDO1FBdEJHLHNCQUFXLDJDQUFRO2lCQUFuQjtnQkFDSSxPQUFPLElBQUksQ0FBQyxTQUFTLENBQUM7WUFDMUIsQ0FBQzs7O1dBQUE7UUFFRDs7O1dBR0c7UUFDSCwwQ0FBVSxHQUFWLFVBQVcsUUFBYTtZQUNwQixJQUFJLENBQUMsU0FBUyxHQUFHLFFBQVEsQ0FBQztZQUMxQixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSTtnQkFDdEIsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsQ0FBQztZQUN6QixPQUFPLElBQUksQ0FBQztRQUNoQixDQUFDO1FBQ0QsUUFBUTtRQUNSLGtDQUFFLEdBQUYsVUFBRyxLQUFVO1lBQ1QsT0FBTyxpQkFBTSxFQUFFLFlBQUMsS0FBSyxDQUEwQixDQUFDO1FBQ3BELENBQUM7UUFDRCxRQUFRO1FBQ1Isc0NBQU0sR0FBTixVQUFPLElBQVM7WUFDWixPQUFPLGlCQUFNLE1BQU0sWUFBQyxJQUFJLENBQTBCLENBQUM7UUFDdkQsQ0FBQztRQUNMLDRCQUFDO0lBQUQsQ0F4QkEsQUF3QkMsQ0F4QjBDLElBQUEsT0FBTyxHQXdCakQ7SUF4QlkseUJBQXFCLHdCQXdCakMsQ0FBQTtBQUNMLENBQUMsRUExQlMsR0FBRyxLQUFILEdBQUcsUUEwQloiLCJmaWxlIjoiRGVjb3JhdG9yL0RlY29yYXRvckNsYXNzQmluZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCB7IEJpbmRpbmcgfSBmcm9tIFwiLi4vQmluZC9CaW5kaW5nXCI7ICovXHJcbm5hbWVzcGFjZSBpb2Mge1xyXG4gICAgZXhwb3J0IGNsYXNzIERlY29yYXRvckNsYXNzQmluZGluZyBleHRlbmRzIEJpbmRpbmcge1xyXG4gICAgICAgIHByb3RlY3RlZCBfcHJvcGVydHk6IGFueTtcclxuICAgICAgICBwdWJsaWMgZ2V0IHByb3BlcnR5KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fcHJvcGVydHk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDku47mraPlnKjnu5HlrprnirbmgIHmmKDlsITliLDlsZ7mgKfvvIzov5Tlm57mraTml7bnmoTnu5HlrprnirbmgIHjgIJcclxuICAgICAgICAgKiBAcGFyYW0gcHJvcGVydHkg57uR5a6a5pig5bCE55qE5YC8XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgdG9Qcm9wZXJ0eShwcm9wZXJ0eTogYW55KTogRGVjb3JhdG9yQ2xhc3NCaW5kaW5nIHtcclxuICAgICAgICAgICAgdGhpcy5fcHJvcGVydHkgPSBwcm9wZXJ0eTtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Jlc29sdmVyICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICB0aGlzLl9yZXNvbHZlcih0aGlzKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6YeN5YaZ57uR5a6a5Yiw5YC8XHJcbiAgICAgICAgdG8odmFsdWU6IGFueSk6IERlY29yYXRvckNsYXNzQmluZGluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci50byh2YWx1ZSkgYXMgRGVjb3JhdG9yQ2xhc3NCaW5kaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mHjeWGmee7keWumuWIq+WQjVxyXG4gICAgICAgIHRvTmFtZShuYW1lOiBhbnkpOiBEZWNvcmF0b3JDbGFzc0JpbmRpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIudG9OYW1lKG5hbWUpIGFzIERlY29yYXRvckNsYXNzQmluZGluZztcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* import {Binder} from "../Bind/Binder";
import {BindingConst} from "../Bind/BindConst";
import {DecoratorClass} from "./DecoratorClass";
import {DecoratorClassBinding} from "./DecoratorClassBinding";
import {IBinding, Binding} from "../Bind/Binding";
import { Prototype } from "../Prototype" */
var ioc;
(function (ioc) {
    var DecoratorClassBinder = /** @class */ (function (_super) {
        __extends(DecoratorClassBinder, _super);
        function DecoratorClassBinder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        //重写初始化函数
        DecoratorClassBinder.prototype.init = function () {
            //初始化绑定状态映射
            this._bindings = new Map();
            //初始化缓存映射
            this._decoratorClassBufferMap = new Map();
        };
        //检查是否存在指定的键值
        DecoratorClassBinder.prototype.has = function (key) {
            return this._bindings.has(key);
        };
        //获取需要注入的类型数据
        DecoratorClassBinder.prototype.get = function (target) {
            //检查是否为实例
            if (!(target instanceof Object))
                throw new Error("proto must is a object but" + target + "is not");
            //检查是否存在缓存
            if (!this._decoratorClassBufferMap.has(target)) {
                //获取继承列表
                var extendsList = ioc.Prototype.getPrototypeList(target);
                var injectClass = new ioc.DecoratorClass();
                var list = [];
                var dict = void 0;
                var that = this;
                var bindingMaps_1 = [];
                if (extendsList && extendsList.length > 0) {
                    for (var i = 0; i < extendsList.length; i++) {
                        dict = that.getBindingMap(extendsList[i]);
                        if (dict && dict.size > 0) {
                            dict.forEach(function (inside) {
                                bindingMaps_1.push(inside);
                            });
                        }
                    }
                }
                var inside = void 0;
                if (bindingMaps_1 && bindingMaps_1.length > 0) {
                    for (var i = 0; i < bindingMaps_1.length; i++) {
                        inside = bindingMaps_1[i];
                        if (inside && inside.size > 0) {
                            var values = inside.values();
                            for (var j = 0; j < inside.size; j++) {
                                var binding = values.next();
                                list.push(binding.value);
                            }
                        }
                    }
                }
                injectClass.list = list;
                //添加缓存
                this._decoratorClassBufferMap.set(target, injectClass);
            }
            //从缓存映射中获取对应的列表
            return this._decoratorClassBufferMap.get(target);
        };
        //重写绑定方法
        DecoratorClassBinder.prototype.bind = function (key) {
            return _super.prototype.bind.call(this, key);
        };
        //重写获取绑定状态方法
        DecoratorClassBinder.prototype.getBinding = function (key, name) {
            return _super.prototype.getBinding.call(this, key, name);
        };
        //重写绑定获取方法
        DecoratorClassBinder.prototype.getRawBinding = function () {
            return new ioc.DecoratorClassBinding(this.resolver.bind(this));
        };
        //重写解析器
        DecoratorClassBinder.prototype.resolver = function (binding) {
            _super.prototype.resolver.call(this, binding);
        };
        /**
         * 重写解析绑定状态
         * @param binding 绑定状态
         * @param key 键值
         */
        DecoratorClassBinder.prototype.resolveBinding = function (binding, key) {
            //绑定状态必须有属性名
            if (!binding.property)
                return;
            //检查绑定状态是否存在别名
            var bindingName = (binding.name == null) ? ioc.BindingConst.NULL : binding.name;
            var dict;
            //检查绑定状态字典已经存在键值
            if ((this._bindings.has(key))) {
                //获取绑定映射
                dict = this._bindings.get(key);
                //检查绑定映射是否存在别名
                if (dict.has(bindingName)) {
                    //获取内部映射
                    var insideDict_1 = dict.get(bindingName);
                    //检查映射内是否存在属性名
                    if (insideDict_1.has(binding.property)) {
                        var existingBinding = insideDict_1.get(binding.property);
                        //如果存在绑定状态
                        if (existingBinding) {
                            //检查存在对应状态绑定是否于当前相等
                            if (existingBinding != binding) {
                                //如果绑定值为空
                                if (!existingBinding.value) {
                                    //移除无效的绑定别名
                                    dict.delete(bindingName);
                                }
                            }
                        }
                    }
                }
            }
            else {
                //创建绑定映射Map< 别名, Map< 属性名, 绑定状态 >
                dict = new Map();
                //添加绑定映射
                this._bindings.set(key, dict);
            }
            //如果存在默认绑定状态并且等于当前绑定状态
            if (dict.has(ioc.BindingConst.NULL)) {
                var insideDic = dict.get(ioc.BindingConst.NULL);
                if (insideDic.has(binding.property)) {
                    var existingBinding = insideDic.get(binding.property);
                    if (binding.property === binding) {
                        //删除默认绑定
                        insideDic.delete(ioc.BindingConst.NULL);
                    }
                }
            }
            var insideDict;
            //添加或覆盖绑定状态
            if (!dict.has(bindingName)) {
                //创建内部映射
                insideDict = new Map();
                //映射绑定状态
                insideDict.set(binding.property, binding);
                //映射绑定
                dict.set(bindingName, insideDict);
            }
            else {
                //获取内部映射
                insideDict = dict.get(bindingName);
                //检查是否存在属性名映射
                if (!insideDict.has(binding.property)) {
                    //映射绑定
                    insideDict.set(binding.property, binding);
                }
            }
        };
        /**
         * 重写获取绑定状态映射表，返回键值的所有绑定状态
         * @param key 被绑定的键值
         */
        DecoratorClassBinder.prototype.getBindingMap = function (key) {
            if (this._bindings.has(key)) {
                return this._bindings.get(key);
            }
        };
        return DecoratorClassBinder;
    }(ioc.Binder));
    ioc.DecoratorClassBinder = DecoratorClassBinder;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EZWNvcmF0b3IvRGVjb3JhdG9yQ2xhc3NCaW5kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBOzs7OzsyQ0FLMkM7QUFDM0MsSUFBVSxHQUFHLENBaUtaO0FBaktELFdBQVUsR0FBRztJQUVUO1FBQTBDLHdDQUFNO1FBQWhEOztRQThKQSxDQUFDO1FBekpHLFNBQVM7UUFDVCxtQ0FBSSxHQUFKO1lBQ0ksV0FBVztZQUNYLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxHQUFHLEVBQTBELENBQUM7WUFDbkYsU0FBUztZQUNULElBQUksQ0FBQyx3QkFBd0IsR0FBRyxJQUFJLEdBQUcsRUFBMkIsQ0FBQztRQUN2RSxDQUFDO1FBQ0QsYUFBYTtRQUNOLGtDQUFHLEdBQVYsVUFBVyxHQUFHO1lBQ1YsT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsQ0FBQztRQUNuQyxDQUFDO1FBQ0QsYUFBYTtRQUNOLGtDQUFHLEdBQVYsVUFBVyxNQUFXO1lBQ2xCLFNBQVM7WUFDVCxJQUFJLENBQUMsQ0FBQyxNQUFNLFlBQVksTUFBTSxDQUFDO2dCQUFFLE1BQU0sSUFBSSxLQUFLLENBQUMsNEJBQTRCLEdBQUcsTUFBTSxHQUFHLFFBQVEsQ0FBQyxDQUFDO1lBQ25HLFVBQVU7WUFDVixJQUFJLENBQUMsSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDNUMsUUFBUTtnQkFDUixJQUFJLFdBQVcsR0FBRyxJQUFBLFNBQVMsQ0FBQyxnQkFBZ0IsQ0FBQyxNQUFNLENBQUMsQ0FBQztnQkFFckQsSUFBSSxXQUFXLEdBQW1CLElBQUksSUFBQSxjQUFjLEVBQUUsQ0FBQztnQkFDdkQsSUFBSSxJQUFJLEdBQUcsRUFBRSxDQUFDO2dCQUNkLElBQUksSUFBSSxTQUFnRCxDQUFFO2dCQUMxRCxJQUFJLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ2hCLElBQUksYUFBVyxHQUFHLEVBQUUsQ0FBQztnQkFDckIsSUFBSSxXQUFXLElBQUksV0FBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxXQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUN6QyxJQUFJLEdBQUcsSUFBSSxDQUFDLGFBQWEsQ0FBQyxXQUFXLENBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQzt3QkFDMUMsSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLElBQUksR0FBRyxDQUFDLEVBQUU7NEJBQ3ZCLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBVSxNQUFNO2dDQUN6QixhQUFXLENBQUMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxDQUFDOzRCQUM3QixDQUFDLENBQUMsQ0FBQzt5QkFDTjtxQkFDSjtpQkFDSjtnQkFDRCxJQUFJLE1BQU0sU0FBb0MsQ0FBRTtnQkFDaEQsSUFBSSxhQUFXLElBQUksYUFBVyxDQUFDLE1BQU0sR0FBRyxDQUFDLEVBQUU7b0JBQ3ZDLEtBQUssSUFBSSxDQUFDLEdBQUcsQ0FBQyxFQUFFLENBQUMsR0FBRyxhQUFXLENBQUMsTUFBTSxFQUFFLENBQUMsRUFBRSxFQUFFO3dCQUN6QyxNQUFNLEdBQUcsYUFBVyxDQUFDLENBQUMsQ0FBQyxDQUFDO3dCQUN4QixJQUFJLE1BQU0sSUFBSSxNQUFNLENBQUMsSUFBSSxHQUFHLENBQUMsRUFBRTs0QkFDM0IsSUFBSSxNQUFNLEdBQUcsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDOzRCQUM3QixLQUFLLElBQUksQ0FBQyxHQUFHLENBQUMsRUFBRSxDQUFDLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDLEVBQUUsRUFBRTtnQ0FDbEMsSUFBSSxPQUFPLEdBQUcsTUFBTSxDQUFDLElBQUksRUFBRSxDQUFDO2dDQUM1QixJQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxLQUFLLENBQUMsQ0FBQzs2QkFDNUI7eUJBQ0o7cUJBQ0o7aUJBQ0o7Z0JBQ0QsV0FBVyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7Z0JBQ3hCLE1BQU07Z0JBQ04sSUFBSSxDQUFDLHdCQUF3QixDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsV0FBVyxDQUFDLENBQUM7YUFDMUQ7WUFDRCxlQUFlO1lBQ2YsT0FBTyxJQUFJLENBQUMsd0JBQXdCLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxDQUFDO1FBQ3JELENBQUM7UUFDRCxRQUFRO1FBQ0QsbUNBQUksR0FBWCxVQUFZLEdBQVE7WUFDaEIsT0FBTyxpQkFBTSxJQUFJLFlBQUMsR0FBRyxDQUEwQixDQUFDO1FBQ3BELENBQUM7UUFDRCxZQUFZO1FBQ0wseUNBQVUsR0FBakIsVUFBa0IsR0FBRyxFQUFFLElBQUk7WUFDdkIsT0FBTyxpQkFBTSxVQUFVLFlBQUMsR0FBRyxFQUFFLElBQUksQ0FBMEIsQ0FBQTtRQUMvRCxDQUFDO1FBQ0QsVUFBVTtRQUNILDRDQUFhLEdBQXBCO1lBQ0ksT0FBTyxJQUFJLElBQUEscUJBQXFCLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQztRQUMvRCxDQUFDO1FBQ0QsT0FBTztRQUNBLHVDQUFRLEdBQWYsVUFBZ0IsT0FBaUI7WUFDN0IsaUJBQU0sUUFBUSxZQUFDLE9BQU8sQ0FBQyxDQUFDO1FBQzVCLENBQUM7UUFDRDs7OztXQUlHO1FBQ0gsNkNBQWMsR0FBZCxVQUFlLE9BQThCLEVBQUUsR0FBUTtZQUNuRCxZQUFZO1lBQ1osSUFBSSxDQUFDLE9BQU8sQ0FBQyxRQUFRO2dCQUFFLE9BQU87WUFDOUIsY0FBYztZQUNkLElBQUksV0FBVyxHQUFHLENBQUMsT0FBTyxDQUFDLElBQUksSUFBSSxJQUFJLENBQUMsQ0FBQyxDQUFDLENBQUMsSUFBQSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDO1lBQzVFLElBQUksSUFBb0QsQ0FBRTtZQUMxRCxnQkFBZ0I7WUFDaEIsSUFBSSxDQUFDLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDLEVBQUU7Z0JBQzNCLFFBQVE7Z0JBQ1IsSUFBSSxHQUFHLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2dCQUMvQixjQUFjO2dCQUNkLElBQUksSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTtvQkFDdkIsUUFBUTtvQkFDUixJQUFJLFlBQVUsR0FBRyxJQUFJLENBQUMsR0FBRyxDQUFDLFdBQVcsQ0FBQyxDQUFDO29CQUN2QyxjQUFjO29CQUNkLElBQUksWUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7d0JBQ2xDLElBQUksZUFBZSxHQUFHLFlBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO3dCQUN2RCxVQUFVO3dCQUNWLElBQUksZUFBZSxFQUFFOzRCQUNqQixtQkFBbUI7NEJBQ25CLElBQUksZUFBZSxJQUFJLE9BQU8sRUFBRTtnQ0FDNUIsU0FBUztnQ0FDVCxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRTtvQ0FDeEIsV0FBVztvQ0FDWCxJQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsQ0FBQyxDQUFDO2lDQUM1Qjs2QkFDSjt5QkFDSjtxQkFDSjtpQkFDSjthQUNKO2lCQUFNO2dCQUNILGlDQUFpQztnQkFDakMsSUFBSSxHQUFHLElBQUksR0FBRyxFQUE4QyxDQUFDO2dCQUM3RCxRQUFRO2dCQUNSLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsRUFBRSxJQUFJLENBQUMsQ0FBQzthQUNqQztZQUVELHNCQUFzQjtZQUN0QixJQUFJLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBQSxZQUFZLENBQUMsSUFBSSxDQUFDLEVBQUU7Z0JBQzdCLElBQUksU0FBUyxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsSUFBQSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7Z0JBQzVDLElBQUksU0FBUyxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxDQUFDLEVBQUU7b0JBQ2pDLElBQUksZUFBZSxHQUFHLFNBQVMsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDO29CQUN0RCxJQUFJLE9BQU8sQ0FBQyxRQUFRLEtBQUssT0FBTyxFQUFFO3dCQUM5QixRQUFRO3dCQUNSLFNBQVMsQ0FBQyxNQUFNLENBQUMsSUFBQSxZQUFZLENBQUMsSUFBSSxDQUFDLENBQUM7cUJBQ3ZDO2lCQUNKO2FBRUo7WUFDRCxJQUFJLFVBQVUsQ0FBQztZQUNmLFdBQVc7WUFDWCxJQUFJLENBQUMsSUFBSSxDQUFDLEdBQUcsQ0FBQyxXQUFXLENBQUMsRUFBRTtnQkFDeEIsUUFBUTtnQkFDUixVQUFVLEdBQUcsSUFBSSxHQUFHLEVBQWtDLENBQUM7Z0JBQ3ZELFFBQVE7Z0JBQ1IsVUFBVSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsUUFBUSxFQUFFLE9BQU8sQ0FBQyxDQUFDO2dCQUMxQyxNQUFNO2dCQUNOLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxFQUFFLFVBQVUsQ0FBQyxDQUFDO2FBQ3JDO2lCQUFNO2dCQUNILFFBQVE7Z0JBQ1IsVUFBVSxHQUFHLElBQUksQ0FBQyxHQUFHLENBQUMsV0FBVyxDQUFDLENBQUM7Z0JBQ25DLGFBQWE7Z0JBQ2IsSUFBSSxDQUFDLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsQ0FBQyxFQUFFO29CQUNuQyxNQUFNO29CQUNOLFVBQVUsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLFFBQVEsRUFBRSxPQUFPLENBQUMsQ0FBQTtpQkFDNUM7YUFDSjtRQUNMLENBQUM7UUFDRDs7O1dBR0c7UUFDSCw0Q0FBYSxHQUFiLFVBQWMsR0FBUTtZQUNsQixJQUFJLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxFQUFFO2dCQUN6QixPQUFPLElBQUksQ0FBQyxTQUFTLENBQUMsR0FBRyxDQUFDLEdBQUcsQ0FBQyxDQUFDO2FBQ2xDO1FBQ0wsQ0FBQztRQUNMLDJCQUFDO0lBQUQsQ0E5SkEsQUE4SkMsQ0E5SnlDLElBQUEsTUFBTSxHQThKL0M7SUE5Slksd0JBQW9CLHVCQThKaEMsQ0FBQTtBQUNMLENBQUMsRUFqS1MsR0FBRyxLQUFILEdBQUcsUUFpS1oiLCJmaWxlIjoiRGVjb3JhdG9yL0RlY29yYXRvckNsYXNzQmluZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW1wb3J0IHtCaW5kZXJ9IGZyb20gXCIuLi9CaW5kL0JpbmRlclwiO1xyXG5pbXBvcnQge0JpbmRpbmdDb25zdH0gZnJvbSBcIi4uL0JpbmQvQmluZENvbnN0XCI7XHJcbmltcG9ydCB7RGVjb3JhdG9yQ2xhc3N9IGZyb20gXCIuL0RlY29yYXRvckNsYXNzXCI7XHJcbmltcG9ydCB7RGVjb3JhdG9yQ2xhc3NCaW5kaW5nfSBmcm9tIFwiLi9EZWNvcmF0b3JDbGFzc0JpbmRpbmdcIjtcclxuaW1wb3J0IHtJQmluZGluZywgQmluZGluZ30gZnJvbSBcIi4uL0JpbmQvQmluZGluZ1wiO1xyXG5pbXBvcnQgeyBQcm90b3R5cGUgfSBmcm9tIFwiLi4vUHJvdG90eXBlXCIgKi9cclxubmFtZXNwYWNlIGlvYyB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIERlY29yYXRvckNsYXNzQmluZGVyIGV4dGVuZHMgQmluZGVyIHtcclxuICAgICAgICAvL+mHjeWGmee7keWumueKtuaAgeaYoOWwhOWtl+WFuE1hcDwg6KKr5rOo5YWl55qE57G75ZCNLCBNYXA8IOWxnuaAp+WQjSDvvIxNYXA8IOWxnuaAp+WIq+WQjSAsIOe7keWumueKtuaAgT4+PlxyXG4gICAgICAgIHByb3RlY3RlZCBfYmluZGluZ3M6IE1hcCA8IGFueSwgTWFwIDwgYW55LCBNYXAgPCBhbnksIERlY29yYXRvckNsYXNzQmluZGluZyA+Pj4gO1xyXG4gICAgICAgIHByaXZhdGUgX2RlY29yYXRvckNsYXNzQnVmZmVyTWFwOiBNYXAgPCBhbnksIERlY29yYXRvckNsYXNzID4gO1xyXG5cclxuICAgICAgICAvL+mHjeWGmeWIneWni+WMluWHveaVsFxyXG4gICAgICAgIGluaXQoKSB7XHJcbiAgICAgICAgICAgIC8v5Yid5aeL5YyW57uR5a6a54q25oCB5pig5bCEXHJcbiAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdzID0gbmV3IE1hcCA8IGFueSwgTWFwIDwgYW55LCBNYXAgPCBhbnksIERlY29yYXRvckNsYXNzQmluZGluZyA+Pj4gKCk7XHJcbiAgICAgICAgICAgIC8v5Yid5aeL5YyW57yT5a2Y5pig5bCEXHJcbiAgICAgICAgICAgIHRoaXMuX2RlY29yYXRvckNsYXNzQnVmZmVyTWFwID0gbmV3IE1hcCA8IGFueSwgRGVjb3JhdG9yQ2xhc3MgPiAoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/mo4Dmn6XmmK/lkKblrZjlnKjmjIflrprnmoTplK7lgLxcclxuICAgICAgICBwdWJsaWMgaGFzKGtleSk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ3MuaGFzKGtleSk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6I635Y+W6ZyA6KaB5rOo5YWl55qE57G75Z6L5pWw5o2uXHJcbiAgICAgICAgcHVibGljIGdldCh0YXJnZXQ6IGFueSk6IERlY29yYXRvckNsYXNzIHtcclxuICAgICAgICAgICAgLy/mo4Dmn6XmmK/lkKbkuLrlrp7kvotcclxuICAgICAgICAgICAgaWYgKCEodGFyZ2V0IGluc3RhbmNlb2YgT2JqZWN0KSkgdGhyb3cgbmV3IEVycm9yKFwicHJvdG8gbXVzdCBpcyBhIG9iamVjdCBidXRcIiArIHRhcmdldCArIFwiaXMgbm90XCIpO1xyXG4gICAgICAgICAgICAvL+ajgOafpeaYr+WQpuWtmOWcqOe8k+WtmFxyXG4gICAgICAgICAgICBpZiAoIXRoaXMuX2RlY29yYXRvckNsYXNzQnVmZmVyTWFwLmhhcyh0YXJnZXQpKSB7XHJcbiAgICAgICAgICAgICAgICAvL+iOt+WPlue7p+aJv+WIl+ihqFxyXG4gICAgICAgICAgICAgICAgbGV0IGV4dGVuZHNMaXN0ID0gUHJvdG90eXBlLmdldFByb3RvdHlwZUxpc3QodGFyZ2V0KTtcclxuXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5qZWN0Q2xhc3M6IERlY29yYXRvckNsYXNzID0gbmV3IERlY29yYXRvckNsYXNzKCk7XHJcbiAgICAgICAgICAgICAgICBsZXQgbGlzdCA9IFtdO1xyXG4gICAgICAgICAgICAgICAgbGV0IGRpY3Q6IE1hcCA8IGFueSwgTWFwIDwgYW55LCBEZWNvcmF0b3JDbGFzc0JpbmRpbmcgPj4gO1xyXG4gICAgICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgbGV0IGJpbmRpbmdNYXBzID0gW107XHJcbiAgICAgICAgICAgICAgICBpZiAoZXh0ZW5kc0xpc3QgJiYgZXh0ZW5kc0xpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGZvciAobGV0IGkgPSAwOyBpIDwgZXh0ZW5kc0xpc3QubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgZGljdCA9IHRoYXQuZ2V0QmluZGluZ01hcChleHRlbmRzTGlzdFtpXSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkaWN0ICYmIGRpY3Quc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGRpY3QuZm9yRWFjaChmdW5jdGlvbiAoaW5zaWRlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYmluZGluZ01hcHMucHVzaChpbnNpZGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBsZXQgaW5zaWRlOiBNYXAgPCBhbnksIERlY29yYXRvckNsYXNzQmluZGluZyA+IDtcclxuICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nTWFwcyAmJiBiaW5kaW5nTWFwcy5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBiaW5kaW5nTWFwcy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBpbnNpZGUgPSBiaW5kaW5nTWFwc1tpXTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGluc2lkZSAmJiBpbnNpZGUuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBpbnNpZGUudmFsdWVzKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBqID0gMDsgaiA8IGluc2lkZS5zaXplOyBqKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBsZXQgYmluZGluZyA9IHZhbHVlcy5uZXh0KCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGlzdC5wdXNoKGJpbmRpbmcudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgaW5qZWN0Q2xhc3MubGlzdCA9IGxpc3Q7XHJcbiAgICAgICAgICAgICAgICAvL+a3u+WKoOe8k+WtmFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fZGVjb3JhdG9yQ2xhc3NCdWZmZXJNYXAuc2V0KHRhcmdldCwgaW5qZWN0Q2xhc3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5LuO57yT5a2Y5pig5bCE5Lit6I635Y+W5a+55bqU55qE5YiX6KGoXHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9kZWNvcmF0b3JDbGFzc0J1ZmZlck1hcC5nZXQodGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ph43lhpnnu5Hlrprmlrnms5VcclxuICAgICAgICBwdWJsaWMgYmluZChrZXk6IGFueSk6IERlY29yYXRvckNsYXNzQmluZGluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5iaW5kKGtleSkgYXMgRGVjb3JhdG9yQ2xhc3NCaW5kaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mHjeWGmeiOt+WPlue7keWumueKtuaAgeaWueazlVxyXG4gICAgICAgIHB1YmxpYyBnZXRCaW5kaW5nKGtleSwgbmFtZSk6IERlY29yYXRvckNsYXNzQmluZGluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci5nZXRCaW5kaW5nKGtleSwgbmFtZSkgYXMgRGVjb3JhdG9yQ2xhc3NCaW5kaW5nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6YeN5YaZ57uR5a6a6I635Y+W5pa55rOVXHJcbiAgICAgICAgcHVibGljIGdldFJhd0JpbmRpbmcoKTogSUJpbmRpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gbmV3IERlY29yYXRvckNsYXNzQmluZGluZyh0aGlzLnJlc29sdmVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mHjeWGmeino+aekOWZqFxyXG4gICAgICAgIHB1YmxpYyByZXNvbHZlcihiaW5kaW5nOiBJQmluZGluZykge1xyXG4gICAgICAgICAgICBzdXBlci5yZXNvbHZlcihiaW5kaW5nKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6YeN5YaZ6Kej5p6Q57uR5a6a54q25oCBXHJcbiAgICAgICAgICogQHBhcmFtIGJpbmRpbmcg57uR5a6a54q25oCBXHJcbiAgICAgICAgICogQHBhcmFtIGtleSDplK7lgLxcclxuICAgICAgICAgKi9cclxuICAgICAgICByZXNvbHZlQmluZGluZyhiaW5kaW5nOiBEZWNvcmF0b3JDbGFzc0JpbmRpbmcsIGtleTogYW55KSB7XHJcbiAgICAgICAgICAgIC8v57uR5a6a54q25oCB5b+F6aG75pyJ5bGe5oCn5ZCNXHJcbiAgICAgICAgICAgIGlmICghYmluZGluZy5wcm9wZXJ0eSkgcmV0dXJuO1xyXG4gICAgICAgICAgICAvL+ajgOafpee7keWumueKtuaAgeaYr+WQpuWtmOWcqOWIq+WQjVxyXG4gICAgICAgICAgICBsZXQgYmluZGluZ05hbWUgPSAoYmluZGluZy5uYW1lID09IG51bGwpID8gQmluZGluZ0NvbnN0Lk5VTEwgOiBiaW5kaW5nLm5hbWU7XHJcbiAgICAgICAgICAgIGxldCBkaWN0OiBNYXAgPCBhbnksIE1hcCA8IGFueSwgRGVjb3JhdG9yQ2xhc3NCaW5kaW5nID4+IDtcclxuICAgICAgICAgICAgLy/mo4Dmn6Xnu5HlrprnirbmgIHlrZflhbjlt7Lnu4/lrZjlnKjplK7lgLxcclxuICAgICAgICAgICAgaWYgKCh0aGlzLl9iaW5kaW5ncy5oYXMoa2V5KSkpIHtcclxuICAgICAgICAgICAgICAgIC8v6I635Y+W57uR5a6a5pig5bCEXHJcbiAgICAgICAgICAgICAgICBkaWN0ID0gdGhpcy5fYmluZGluZ3MuZ2V0KGtleSk7XHJcbiAgICAgICAgICAgICAgICAvL+ajgOafpee7keWumuaYoOWwhOaYr+WQpuWtmOWcqOWIq+WQjVxyXG4gICAgICAgICAgICAgICAgaWYgKGRpY3QuaGFzKGJpbmRpbmdOYW1lKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6I635Y+W5YaF6YOo5pig5bCEXHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGluc2lkZURpY3QgPSBkaWN0LmdldChiaW5kaW5nTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mo4Dmn6XmmKDlsITlhoXmmK/lkKblrZjlnKjlsZ7mgKflkI1cclxuICAgICAgICAgICAgICAgICAgICBpZiAoaW5zaWRlRGljdC5oYXMoYmluZGluZy5wcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgbGV0IGV4aXN0aW5nQmluZGluZyA9IGluc2lkZURpY3QuZ2V0KGJpbmRpbmcucHJvcGVydHkpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL+WmguaenOWtmOWcqOe7keWumueKtuaAgVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoZXhpc3RpbmdCaW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+ajgOafpeWtmOWcqOWvueW6lOeKtuaAgee7keWumuaYr+WQpuS6juW9k+WJjeebuOetiVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKGV4aXN0aW5nQmluZGluZyAhPSBiaW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy/lpoLmnpznu5HlrprlgLzkuLrnqbpcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWV4aXN0aW5nQmluZGluZy52YWx1ZSkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvL+enu+mZpOaXoOaViOeahOe7keWumuWIq+WQjVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkaWN0LmRlbGV0ZShiaW5kaW5nTmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/liJvlu7rnu5HlrprmmKDlsIRNYXA8IOWIq+WQjSwgTWFwPCDlsZ7mgKflkI0sIOe7keWumueKtuaAgSA+XHJcbiAgICAgICAgICAgICAgICBkaWN0ID0gbmV3IE1hcCA8IGFueSwgTWFwIDwgYW55LCBEZWNvcmF0b3JDbGFzc0JpbmRpbmcgPj4gKCk7XHJcbiAgICAgICAgICAgICAgICAvL+a3u+WKoOe7keWumuaYoOWwhFxyXG4gICAgICAgICAgICAgICAgdGhpcy5fYmluZGluZ3Muc2V0KGtleSwgZGljdCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8v5aaC5p6c5a2Y5Zyo6buY6K6k57uR5a6a54q25oCB5bm25LiU562J5LqO5b2T5YmN57uR5a6a54q25oCBXHJcbiAgICAgICAgICAgIGlmIChkaWN0LmhhcyhCaW5kaW5nQ29uc3QuTlVMTCkpIHtcclxuICAgICAgICAgICAgICAgIGxldCBpbnNpZGVEaWMgPSBkaWN0LmdldChCaW5kaW5nQ29uc3QuTlVMTCk7XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5zaWRlRGljLmhhcyhiaW5kaW5nLnByb3BlcnR5KSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBleGlzdGluZ0JpbmRpbmcgPSBpbnNpZGVEaWMuZ2V0KGJpbmRpbmcucHJvcGVydHkpO1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nLnByb3BlcnR5ID09PSBiaW5kaW5nKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIC8v5Yig6Zmk6buY6K6k57uR5a6aXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGluc2lkZURpYy5kZWxldGUoQmluZGluZ0NvbnN0Lk5VTEwpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgbGV0IGluc2lkZURpY3Q7XHJcbiAgICAgICAgICAgIC8v5re75Yqg5oiW6KaG55uW57uR5a6a54q25oCBXHJcbiAgICAgICAgICAgIGlmICghZGljdC5oYXMoYmluZGluZ05hbWUpKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WIm+W7uuWGhemDqOaYoOWwhFxyXG4gICAgICAgICAgICAgICAgaW5zaWRlRGljdCA9IG5ldyBNYXAgPCBhbnksIERlY29yYXRvckNsYXNzQmluZGluZyA+ICgpO1xyXG4gICAgICAgICAgICAgICAgLy/mmKDlsITnu5HlrprnirbmgIFcclxuICAgICAgICAgICAgICAgIGluc2lkZURpY3Quc2V0KGJpbmRpbmcucHJvcGVydHksIGJpbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgLy/mmKDlsITnu5HlrppcclxuICAgICAgICAgICAgICAgIGRpY3Quc2V0KGJpbmRpbmdOYW1lLCBpbnNpZGVEaWN0KTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIC8v6I635Y+W5YaF6YOo5pig5bCEXHJcbiAgICAgICAgICAgICAgICBpbnNpZGVEaWN0ID0gZGljdC5nZXQoYmluZGluZ05hbWUpO1xyXG4gICAgICAgICAgICAgICAgLy/mo4Dmn6XmmK/lkKblrZjlnKjlsZ7mgKflkI3mmKDlsIRcclxuICAgICAgICAgICAgICAgIGlmICghaW5zaWRlRGljdC5oYXMoYmluZGluZy5wcm9wZXJ0eSkpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+aYoOWwhOe7keWumlxyXG4gICAgICAgICAgICAgICAgICAgIGluc2lkZURpY3Quc2V0KGJpbmRpbmcucHJvcGVydHksIGJpbmRpbmcpXHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6YeN5YaZ6I635Y+W57uR5a6a54q25oCB5pig5bCE6KGo77yM6L+U5Zue6ZSu5YC855qE5omA5pyJ57uR5a6a54q25oCBXHJcbiAgICAgICAgICogQHBhcmFtIGtleSDooqvnu5HlrprnmoTplK7lgLxcclxuICAgICAgICAgKi9cclxuICAgICAgICBnZXRCaW5kaW5nTWFwKGtleTogYW55KTogTWFwIDwgYW55LCBNYXAgPCBhbnksIERlY29yYXRvckNsYXNzQmluZGluZyA+PiB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9iaW5kaW5ncy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2JpbmRpbmdzLmdldChrZXkpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19

/* import { DecoratorClassBinder } from "./DecoratorClassBinder"; */
var ioc;
(function (ioc) {
    var DecoratorConst;
    (function (DecoratorConst) {
        /**
         * 全局注册接入点
         * 使用属性的类型和属性的别名识别被注入的属性
         */
        DecoratorConst.DECORATOR_CLASS_BINDER = new ioc.DecoratorClassBinder();
    })(DecoratorConst = ioc.DecoratorConst || (ioc.DecoratorConst = {}));
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EZWNvcmF0b3IvRGVjb3JhdG9yQ29uc3QudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsb0VBQW9FO0FBQ3BFLElBQVUsR0FBRyxDQVFaO0FBUkQsV0FBVSxHQUFHO0lBQ1QsSUFBYyxjQUFjLENBTTNCO0lBTkQsV0FBYyxjQUFjO1FBQ3hCOzs7V0FHRztRQUNVLHFDQUFzQixHQUFHLElBQUksSUFBQSxvQkFBb0IsRUFBRSxDQUFDO0lBQ3JFLENBQUMsRUFOYSxjQUFjLEdBQWQsa0JBQWMsS0FBZCxrQkFBYyxRQU0zQjtBQUNMLENBQUMsRUFSUyxHQUFHLEtBQUgsR0FBRyxRQVFaIiwiZmlsZSI6IkRlY29yYXRvci9EZWNvcmF0b3JDb25zdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCB7IERlY29yYXRvckNsYXNzQmluZGVyIH0gZnJvbSBcIi4vRGVjb3JhdG9yQ2xhc3NCaW5kZXJcIjsgKi9cclxubmFtZXNwYWNlIGlvYyB7XHJcbiAgICBleHBvcnQgbW9kdWxlIERlY29yYXRvckNvbnN0IHtcclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlhajlsYDms6jlhozmjqXlhaXngrlcclxuICAgICAgICAgKiDkvb/nlKjlsZ7mgKfnmoTnsbvlnovlkozlsZ7mgKfnmoTliKvlkI3or4bliKvooqvms6jlhaXnmoTlsZ7mgKdcclxuICAgICAgICAgKi9cclxuICAgICAgICBleHBvcnQgY29uc3QgREVDT1JBVE9SX0NMQVNTX0JJTkRFUiA9IG5ldyBEZWNvcmF0b3JDbGFzc0JpbmRlcigpO1xyXG4gICAgfVxyXG59Il19

/* import { InjectBinding } from "./InjectBinding";
import {InjectConst} from "./InjectConst";
import { Binding } from "../Bind/Binding"; */
var ioc;
(function (ioc) {
    /**
     * 注入工厂，负责从给定的构造函数创建对象
     * 可以创建单例
     */
    var InjectFactory = /** @class */ (function () {
        function InjectFactory() {
        }
        /**
         * 根据绑定状态和指定的参数创建或获取实例对象
         * @param binding 绑定状态
         * @param args 参数
         */
        InjectFactory.prototype.get = function (binding, args) {
            //检查绑定状态是否有效
            if (binding == null) {
                throw new Error("InjectorFactory cannot act on null binding");
            }
            //判断注入状态类型
            var bindingType = binding.getBindingType();
            //根据不同的类型创建
            switch (bindingType) {
                case "Singleton" /* SINGLETON */:
                    return this.singletonOf(binding, args);
                    break;
                case "Value" /* VALUE */:
                    return this.getValueOf(binding);
                    break;
                default:
                    break;
            }
            return this.instanceOf(binding, args);
        };
        // 生成一个新的实例
        InjectFactory.prototype.instanceOf = function (binding, args) {
            if (binding.value != null) {
                return this.createFromValue(binding.value, args);
            }
            var value = this.generateImplicit(binding.key, args);
            return this.createFromValue(value, args);
        };
        // Call the Activator to attempt instantiation the given object
        InjectFactory.prototype.createFromValue = function (c, args) {
            var instance = null;
            try {
                if (args == null || args.length == 0) {
                    instance = new c();
                }
                else {
                    instance = new c(args);
                }
            }
            catch (_a) {
                //No-op
            }
            //if(instance)console.info("[实例化]"+instance.constructor.name);
            return instance;
        };
        InjectFactory.prototype.generateImplicit = function (key, args) {
            //如果无法直接转换键值为构造函数
            if (!key)
                return null;
            //检查键值是否为构造函数
            if (ioc.Binding.isConstructor(key)) {
                return this.createFromValue(key, args);
            }
            throw new Error("InjectorFactory can't instantiate an Interface or Abstract Class. Class: " + key.ToString());
        };
        // Generate a Singleton instance
        InjectFactory.prototype.singletonOf = function (binding, args) {
            if (binding.value != null) {
                var o = this.createFromValue(binding.value, args);
                if (o == null)
                    return null;
                binding.setValue(o);
            }
            else {
                binding.setValue(this.generateImplicit(binding.key, args));
            }
            return binding.value;
        };
        InjectFactory.prototype.getValueOf = function (binding) {
            return binding.value;
        };
        return InjectFactory;
    }());
    ioc.InjectFactory = InjectFactory;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbmplY3Rvci9JbmplY3RGYWN0b3J5LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBOzs2Q0FFNkM7QUFDN0MsSUFBVSxHQUFHLENBbUZaO0FBbkZELFdBQVUsR0FBRztJQUVUOzs7T0FHRztJQUNIO1FBQ0k7UUFFQSxDQUFDO1FBQ0Q7Ozs7V0FJRztRQUNJLDJCQUFHLEdBQVYsVUFBVyxPQUFzQixFQUFFLElBQVc7WUFDMUMsWUFBWTtZQUNaLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO2FBQ2pFO1lBQ0QsVUFBVTtZQUNWLElBQUksV0FBVyxHQUE0QixPQUFPLENBQUMsY0FBYyxFQUFFLENBQUM7WUFDcEUsV0FBVztZQUNYLFFBQVEsV0FBVyxFQUFFO2dCQUNqQjtvQkFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO29CQUN2QyxNQUFNO2dCQUNWO29CQUNJLE9BQU8sSUFBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQztvQkFDaEMsTUFBTTtnQkFDVjtvQkFDSSxNQUFNO2FBQ2I7WUFDRCxPQUFPLElBQUksQ0FBQyxVQUFVLENBQUMsT0FBTyxFQUFFLElBQUksQ0FBQyxDQUFDO1FBQzFDLENBQUM7UUFDRCxXQUFXO1FBQ0Qsa0NBQVUsR0FBcEIsVUFBcUIsT0FBc0IsRUFBRSxJQUFXO1lBQ3BELElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxPQUFPLENBQUMsS0FBSyxFQUFFLElBQUksQ0FBQyxDQUFDO2FBQ3BEO1lBQ0QsSUFBSSxLQUFLLEdBQVEsSUFBSSxDQUFDLGdCQUFnQixDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7WUFDMUQsT0FBTyxJQUFJLENBQUMsZUFBZSxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztRQUM3QyxDQUFDO1FBQ0QsK0RBQStEO1FBQ3JELHVDQUFlLEdBQXpCLFVBQTBCLENBQXNCLEVBQUUsSUFBVztZQUN6RCxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUM7WUFDcEIsSUFBSTtnQkFDQSxJQUFJLElBQUksSUFBSSxJQUFJLElBQUksSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLEVBQUU7b0JBQ2xDLFFBQVEsR0FBRyxJQUFJLENBQUMsRUFBRSxDQUFDO2lCQUN0QjtxQkFBTTtvQkFDSCxRQUFRLEdBQUcsSUFBSSxDQUFDLENBQUMsSUFBSSxDQUFDLENBQUM7aUJBQzFCO2FBQ0o7WUFBQyxXQUFNO2dCQUNKLE9BQU87YUFDVjtZQUNELDhEQUE4RDtZQUM5RCxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDO1FBQ1Msd0NBQWdCLEdBQTFCLFVBQTJCLEdBQVEsRUFBRSxJQUFXO1lBQzVDLGlCQUFpQjtZQUNqQixJQUFJLENBQUMsR0FBRztnQkFBRSxPQUFPLElBQUksQ0FBQztZQUN0QixhQUFhO1lBQ2IsSUFBSSxJQUFBLE9BQU8sQ0FBQyxhQUFhLENBQUMsR0FBRyxDQUFDLEVBQUU7Z0JBQzVCLE9BQU8sSUFBSSxDQUFDLGVBQWUsQ0FBQyxHQUFHLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDMUM7WUFDRCxNQUFNLElBQUksS0FBSyxDQUFDLDJFQUEyRSxHQUFHLEdBQUcsQ0FBQyxRQUFRLEVBQUUsQ0FBQyxDQUFDO1FBQ2xILENBQUM7UUFDRCxnQ0FBZ0M7UUFDdEIsbUNBQVcsR0FBckIsVUFBc0IsT0FBc0IsRUFBRSxJQUFXO1lBQ3JELElBQUksT0FBTyxDQUFDLEtBQUssSUFBSSxJQUFJLEVBQUU7Z0JBQ3ZCLElBQUksQ0FBQyxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsT0FBTyxDQUFDLEtBQUssRUFBRSxJQUFJLENBQUMsQ0FBQztnQkFDbEQsSUFBSSxDQUFDLElBQUksSUFBSTtvQkFDVCxPQUFPLElBQUksQ0FBQztnQkFDaEIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxDQUFDLENBQUMsQ0FBQzthQUN2QjtpQkFBTTtnQkFDSCxPQUFPLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxnQkFBZ0IsQ0FBQyxPQUFPLENBQUMsR0FBRyxFQUFFLElBQUksQ0FBQyxDQUFDLENBQUM7YUFDOUQ7WUFDRCxPQUFPLE9BQU8sQ0FBQyxLQUFLLENBQUM7UUFDekIsQ0FBQztRQUNTLGtDQUFVLEdBQXBCLFVBQXFCLE9BQXNCO1lBQ3ZDLE9BQU8sT0FBTyxDQUFDLEtBQUssQ0FBQztRQUN6QixDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQTVFQSxBQTRFQyxJQUFBO0lBNUVZLGlCQUFhLGdCQTRFekIsQ0FBQTtBQUNMLENBQUMsRUFuRlMsR0FBRyxLQUFILEdBQUcsUUFtRloiLCJmaWxlIjoiSW5qZWN0b3IvSW5qZWN0RmFjdG9yeS5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCB7IEluamVjdEJpbmRpbmcgfSBmcm9tIFwiLi9JbmplY3RCaW5kaW5nXCI7XHJcbmltcG9ydCB7SW5qZWN0Q29uc3R9IGZyb20gXCIuL0luamVjdENvbnN0XCI7XHJcbmltcG9ydCB7IEJpbmRpbmcgfSBmcm9tIFwiLi4vQmluZC9CaW5kaW5nXCI7ICovXHJcbm5hbWVzcGFjZSBpb2Mge1xyXG5cclxuICAgIC8qKlxyXG4gICAgICog5rOo5YWl5bel5Y6C77yM6LSf6LSj5LuO57uZ5a6a55qE5p6E6YCg5Ye95pWw5Yib5bu65a+56LGhXHJcbiAgICAgKiDlj6/ku6XliJvlu7rljZXkvotcclxuICAgICAqL1xyXG4gICAgZXhwb3J0IGNsYXNzIEluamVjdEZhY3Rvcnkge1xyXG4gICAgICAgIGNvbnN0cnVjdG9yKCl7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmoLnmja7nu5HlrprnirbmgIHlkozmjIflrprnmoTlj4LmlbDliJvlu7rmiJbojrflj5blrp7kvovlr7nosaFcclxuICAgICAgICAgKiBAcGFyYW0gYmluZGluZyDnu5HlrprnirbmgIFcclxuICAgICAgICAgKiBAcGFyYW0gYXJncyDlj4LmlbBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgZ2V0KGJpbmRpbmc6IEluamVjdEJpbmRpbmcsIGFyZ3M6IGFueVtdKTogb2JqZWN0IHtcclxuICAgICAgICAgICAgLy/mo4Dmn6Xnu5HlrprnirbmgIHmmK/lkKbmnInmlYhcclxuICAgICAgICAgICAgaWYgKGJpbmRpbmcgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhyb3cgbmV3IEVycm9yKFwiSW5qZWN0b3JGYWN0b3J5IGNhbm5vdCBhY3Qgb24gbnVsbCBiaW5kaW5nXCIpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5Yik5pat5rOo5YWl54q25oCB57G75Z6LXHJcbiAgICAgICAgICAgIGxldCBiaW5kaW5nVHlwZTogSW5qZWN0Q29uc3QuQmluZGluZ1R5cGUgPSBiaW5kaW5nLmdldEJpbmRpbmdUeXBlKCk7XHJcbiAgICAgICAgICAgIC8v5qC55o2u5LiN5ZCM55qE57G75Z6L5Yib5bu6XHJcbiAgICAgICAgICAgIHN3aXRjaCAoYmluZGluZ1R5cGUpIHtcclxuICAgICAgICAgICAgICAgIGNhc2UgSW5qZWN0Q29uc3QuQmluZGluZ1R5cGUuU0lOR0xFVE9OOlxyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnNpbmdsZXRvbk9mKGJpbmRpbmcsIGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgY2FzZSBJbmplY3RDb25zdC5CaW5kaW5nVHlwZS5WQUxVRTpcclxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5nZXRWYWx1ZU9mKGJpbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICAgICAgZGVmYXVsdDpcclxuICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZU9mKGJpbmRpbmcsIGFyZ3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyDnlJ/miJDkuIDkuKrmlrDnmoTlrp7kvotcclxuICAgICAgICBwcm90ZWN0ZWQgaW5zdGFuY2VPZihiaW5kaW5nOiBJbmplY3RCaW5kaW5nLCBhcmdzOiBhbnlbXSk6IGFueSB7XHJcbiAgICAgICAgICAgIGlmIChiaW5kaW5nLnZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUZyb21WYWx1ZShiaW5kaW5nLnZhbHVlLCBhcmdzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgdmFsdWU6IGFueSA9IHRoaXMuZ2VuZXJhdGVJbXBsaWNpdChiaW5kaW5nLmtleSwgYXJncyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUZyb21WYWx1ZSh2YWx1ZSwgYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vIENhbGwgdGhlIEFjdGl2YXRvciB0byBhdHRlbXB0IGluc3RhbnRpYXRpb24gdGhlIGdpdmVuIG9iamVjdFxyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVGcm9tVmFsdWUoYzogbmV3KC4uLmFyZ3MpID0+IGFueSwgYXJnczogYW55W10pOiBhbnkge1xyXG4gICAgICAgICAgICBsZXQgaW5zdGFuY2UgPSBudWxsO1xyXG4gICAgICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGFyZ3MgPT0gbnVsbCB8fCBhcmdzLmxlbmd0aCA9PSAwKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2UgPSBuZXcgYygpO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IG5ldyBjKGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9IGNhdGNoIHtcclxuICAgICAgICAgICAgICAgIC8vTm8tb3BcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL2lmKGluc3RhbmNlKWNvbnNvbGUuaW5mbyhcIlvlrp7kvovljJZdXCIraW5zdGFuY2UuY29uc3RydWN0b3IubmFtZSk7XHJcbiAgICAgICAgICAgIHJldHVybiBpbnN0YW5jZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdlbmVyYXRlSW1wbGljaXQoa2V5OiBhbnksIGFyZ3M6IGFueVtdKTogYW55IHtcclxuICAgICAgICAgICAgLy/lpoLmnpzml6Dms5Xnm7TmjqXovazmjaLplK7lgLzkuLrmnoTpgKDlh73mlbBcclxuICAgICAgICAgICAgaWYgKCFrZXkpIHJldHVybiBudWxsO1xyXG4gICAgICAgICAgICAvL+ajgOafpemUruWAvOaYr+WQpuS4uuaehOmAoOWHveaVsFxyXG4gICAgICAgICAgICBpZiAoQmluZGluZy5pc0NvbnN0cnVjdG9yKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmNyZWF0ZUZyb21WYWx1ZShrZXksIGFyZ3MpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluamVjdG9yRmFjdG9yeSBjYW4ndCBpbnN0YW50aWF0ZSBhbiBJbnRlcmZhY2Ugb3IgQWJzdHJhY3QgQ2xhc3MuIENsYXNzOiBcIiArIGtleS5Ub1N0cmluZygpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy8gR2VuZXJhdGUgYSBTaW5nbGV0b24gaW5zdGFuY2VcclxuICAgICAgICBwcm90ZWN0ZWQgc2luZ2xldG9uT2YoYmluZGluZzogSW5qZWN0QmluZGluZywgYXJnczogYW55W10pIHtcclxuICAgICAgICAgICAgaWYgKGJpbmRpbmcudmFsdWUgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IG8gPSB0aGlzLmNyZWF0ZUZyb21WYWx1ZShiaW5kaW5nLnZhbHVlLCBhcmdzKTtcclxuICAgICAgICAgICAgICAgIGlmIChvID09IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICBiaW5kaW5nLnNldFZhbHVlKG8pO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgYmluZGluZy5zZXRWYWx1ZSh0aGlzLmdlbmVyYXRlSW1wbGljaXQoYmluZGluZy5rZXksIGFyZ3MpKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gYmluZGluZy52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJvdGVjdGVkIGdldFZhbHVlT2YoYmluZGluZzogSW5qZWN0QmluZGluZykge1xyXG4gICAgICAgICAgICByZXR1cm4gYmluZGluZy52YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=

var ioc;
(function (ioc) {
    var Injector = /** @class */ (function () {
        function Injector() {
            this.factory = null;
            this.binder = null;
            this.injectClassBinder = null;
            this.factory = new ioc.InjectFactory();
        }
        Injector.prototype.uninject = function (target) {
            if (!this.binder || !target)
                throw new Error("Attempt to inject into Injector without a Binder or null instance");
            //排除一些不能被注入的类型
            var type = typeof target;
            if (type === "string" || type === "boolean" || type === "number" || type === "symbol" || type === "undefined" || type === "function") {
                return target;
            }
            //获取注入类
            var injectClass = this.injectClassBinder.get(target);
            this.decoratorUnInject(target, injectClass);
        };
        Injector.prototype.decoratorUnInject = function (target, injectClass) {
            var that = this;
            //遍历注入类
            injectClass.list.forEach(function (binding) {
                //尝试获绑定状态
                var injectBinding = that.binder.getBinding(binding.value, binding.name);
                //不能注入一个未绑定的值
                if (injectBinding) {
                    //将注入值赋给目标对象
                    target[binding.property] = null;
                }
            });
        };
        //实例化对象
        Injector.prototype.instantiate = function (binding, tryInjectHere) {
            //检查是否具备注入条件
            if (!this.binder || !this.factory)
                throw new Error("Attempt to instantiate from Injector without a Binder or inject into Injector without a Factory");
            //构造函数
            var constructor = null;
            //实例对象
            var instance = null;
            //检查绑定状态的值是否为构造函数
            if (binding.isValueConstructor) {
                //传入构造函数
                constructor = binding.value;
            }
            else {
                //直接赋值
                instance = binding.value;
            }
            //如果没有设置注入值但是键值是一个构造函数
            if (!constructor && binding.isKeyConstructor) {
                //指定绑定状态的键值为构造函数
                constructor = binding.key;
            }
            //如果没有直接赋值实例并且存在构造函数
            if (!instance && constructor) {
                //参数
                var args = binding.getArgs();
                instance = this.factory.get(binding, args);
                //如果尝试在这里直接注入
                if (tryInjectHere) {
                    this.tryInject(binding, instance);
                }
            }
            return instance;
        };
        Injector.prototype.tryInject = function (binding, target) {
            //如果工厂不能创建实例则这里直接返回
            if (target != null) {
                if (binding.isInject()) {
                    target = this.inject(target, false);
                }
                if (binding.getBindingType() == "Singleton" /* SINGLETON */ || binding.getBindingType() == "Value" /* VALUE */) {
                    //prevent double-injection
                    binding.toInject(false);
                }
            }
            return target;
        };
        //注入目标中所有被@Inject标记的属性
        Injector.prototype.inject = function (target, attemptConstructorInjection) {
            if (!this.binder || !target)
                throw new Error("Attempt to inject into Injector without a Binder or null instance");
            //排除一些不能被注入的类型
            var type = typeof target;
            if (type === "string" || type === "boolean" || type === "number" || type === "symbol" || type === "undefined" || type === "function") {
                return target;
            }
            //因为TS中无法获得类型名称，所以使用目标的构造函数名称代替类型名称
            //let typeName : string = target.constructor;
            //获取注入类
            var injectClass = this.injectClassBinder.get(target);
            //是否允许使用构造器注入
            if (attemptConstructorInjection) {
                //target = performConstructorInject(target, reflection);
            }
            this.decoratorInject(target, injectClass);
            //performSetterInject(target, reflection);
            //postInject(target, reflection);
            return target;
        };
        /**
         * 装饰器注入，使用注入类进行注入
         */
        Injector.prototype.decoratorInject = function (target, injectClass) {
            var that = this;
            //遍历注入类
            injectClass.list.forEach(function (binding) {
                //console.info("[装饰器注入]"+binding.value + "[别名]"+binding.name);
                //尝试获绑定状态
                var injectBinding = that.binder.getBinding(binding.value, binding.name);
                //不能注入一个未绑定的值
                if (injectBinding) {
                    var instance = that.getInjectValue(injectBinding.key, injectBinding.name);
                    //将注入值赋给目标对象
                    target[binding.property] = instance;
                }
            });
        };
        /**
         * 获取需要注入的值，这个过程会递归调用
         * @see 注意循环依赖会严重消耗性能
         */
        Injector.prototype.getInjectValue = function (type, name) {
            //尝试获取绑定状态
            var binding = this.binder.getBinding(type, name);
            if (!binding)
                return null;
            //if(binding.key.name)console.info("[获取注入值]"+binding.key.name+"[别名]"+name+"[绑定状态]"+binding.bindingType + ","+binding.isInject);
            //else console.info("[获取注入值]"+binding.key+"[别名]"+name+"[绑定状态]"+binding.bindingType + "[需要注入]"+binding.isInject);
            //如果是值类型绑定
            if (binding.getBindingType() === "Value" /* VALUE */) {
                //如果需要注入
                if (binding.isInject()) {
                    var injv = this.inject(binding.value, false);
                    //值类型完成一次注入后不再进行注入
                    binding.toInject(false);
                    return injv;
                }
                else {
                    return binding.value;
                }
                //如果是单例注入
            }
            else if (binding.getBindingType() == "Singleton" /* SINGLETON */) {
                //如果绑定状态的值是一个构造函数
                if (binding.isValueConstructor || binding.value == null) {
                    this.instantiate(binding, true);
                }
                return binding.value;
            }
            else {
                return this.instantiate(binding, true);
            }
        };
        return Injector;
    }());
    ioc.Injector = Injector;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbmplY3Rvci9JbmplY3Rvci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FxS1o7QUFyS0QsV0FBVSxHQUFHO0lBRVQ7UUFLSTtZQUpPLFlBQU8sR0FBa0IsSUFBSSxDQUFDO1lBQzlCLFdBQU0sR0FBaUIsSUFBSSxDQUFDO1lBQzVCLHNCQUFpQixHQUF5QixJQUFJLENBQUM7WUFHbEQsSUFBSSxDQUFDLE9BQU8sR0FBRyxJQUFJLElBQUEsYUFBYSxFQUFFLENBQUM7UUFDdkMsQ0FBQztRQUNNLDJCQUFRLEdBQWYsVUFBZ0IsTUFBTTtZQUNsQixJQUFJLENBQUMsSUFBSSxDQUFDLE1BQU0sSUFBSSxDQUFDLE1BQU07Z0JBQUUsTUFBTSxJQUFJLEtBQUssQ0FBQyxtRUFBbUUsQ0FBQyxDQUFDO1lBQ2xILGNBQWM7WUFDZCxJQUFJLElBQUksR0FBUSxPQUFPLE1BQU0sQ0FBQztZQUM5QixJQUFJLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxLQUFLLFNBQVMsSUFBSSxJQUFJLEtBQUssUUFBUSxJQUFJLElBQUksS0FBSyxRQUFRLElBQUksSUFBSSxLQUFLLFdBQVcsSUFBSSxJQUFJLEtBQUssVUFBVSxFQUFFO2dCQUNsSSxPQUFPLE1BQU0sQ0FBQzthQUNqQjtZQUNELE9BQU87WUFDUCxJQUFJLFdBQVcsR0FBbUIsSUFBSSxDQUFDLGlCQUFpQixDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsQ0FBQztZQUNyRSxJQUFJLENBQUMsaUJBQWlCLENBQUMsTUFBTSxFQUFFLFdBQVcsQ0FBQyxDQUFDO1FBQ2hELENBQUM7UUFDTyxvQ0FBaUIsR0FBekIsVUFBMEIsTUFBVyxFQUFFLFdBQTJCO1lBQzlELElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztZQUNoQixPQUFPO1lBQ1AsV0FBVyxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsVUFBQyxPQUFPO2dCQUM3QixTQUFTO2dCQUNULElBQUksYUFBYSxHQUFHLElBQUks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QUFPLENBQUMsY0FBYyxFQUFFLHdCQUFrQyxFQUFFO2dCQUM1RCxRQUFRO2dCQUNSLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFO29CQUNwQixJQUFJLElBQUksR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxLQUFLLEVBQUUsS0FBSyxDQUFDLENBQUM7b0JBQzdDLGtCQUFrQjtvQkFDbEIsT0FBTyxDQUFDLFFBQVEsQ0FBQyxLQUFLLENBQUMsQ0FBQztvQkFDeEIsT0FBTyxJQUFJLENBQUM7aUJBQ2Y7cUJBQU07b0JBQ0gsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDO2lCQUN4QjtnQkFDRCxTQUFTO2FBQ1o7aUJBQU0sSUFBSSxPQUFPLENBQUMsY0FBYyxFQUFFLCtCQUFxQyxFQUFFO2dCQUN0RSxpQkFBaUI7Z0JBQ2pCLElBQUksT0FBTyxDQUFDLGtCQUFrQixJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO29CQUNyRCxJQUFJLENBQUMsV0FBVyxDQUFDLE9BQU8sRUFBRSxJQUFJLENBQUMsQ0FBQztpQkFDbkM7Z0JBQ0QsT0FBTyxPQUFPLENBQUMsS0FBSyxDQUFDO2FBQ3hCO2lCQUFNO2dCQUNILE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsSUFBSSxDQUFDLENBQUM7YUFDMUM7UUFDTCxDQUFDO1FBYUwsZUFBQztJQUFELENBbEtBLEFBa0tDLElBQUE7SUFsS1ksWUFBUSxXQWtLcEIsQ0FBQTtBQUNMLENBQUMsRUFyS1MsR0FBRyxLQUFILEdBQUcsUUFxS1oiLCJmaWxlIjoiSW5qZWN0b3IvSW5qZWN0b3IuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgaW9jIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSW5qZWN0b3Ige1xyXG4gICAgICAgIHB1YmxpYyBmYWN0b3J5OiBJbmplY3RGYWN0b3J5ID0gbnVsbDtcclxuICAgICAgICBwdWJsaWMgYmluZGVyOiBJbmplY3RCaW5kZXIgPSBudWxsO1xyXG4gICAgICAgIHB1YmxpYyBpbmplY3RDbGFzc0JpbmRlcjogRGVjb3JhdG9yQ2xhc3NCaW5kZXIgPSBudWxsO1xyXG5cclxuICAgICAgICBjb25zdHJ1Y3RvcigpIHtcclxuICAgICAgICAgICAgdGhpcy5mYWN0b3J5ID0gbmV3IEluamVjdEZhY3RvcnkoKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHVuaW5qZWN0KHRhcmdldCkge1xyXG4gICAgICAgICAgICBpZiAoIXRoaXMuYmluZGVyIHx8ICF0YXJnZXQpIHRocm93IG5ldyBFcnJvcihcIkF0dGVtcHQgdG8gaW5qZWN0IGludG8gSW5qZWN0b3Igd2l0aG91dCBhIEJpbmRlciBvciBudWxsIGluc3RhbmNlXCIpO1xyXG4gICAgICAgICAgICAvL+aOkumZpOS4gOS6m+S4jeiDveiiq+azqOWFpeeahOexu+Wei1xyXG4gICAgICAgICAgICBsZXQgdHlwZTogYW55ID0gdHlwZW9mIHRhcmdldDtcclxuICAgICAgICAgICAgaWYgKHR5cGUgPT09IFwic3RyaW5nXCIgfHwgdHlwZSA9PT0gXCJib29sZWFuXCIgfHwgdHlwZSA9PT0gXCJudW1iZXJcIiB8fCB0eXBlID09PSBcInN5bWJvbFwiIHx8IHR5cGUgPT09IFwidW5kZWZpbmVkXCIgfHwgdHlwZSA9PT0gXCJmdW5jdGlvblwiKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGFyZ2V0O1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v6I635Y+W5rOo5YWl57G7XHJcbiAgICAgICAgICAgIGxldCBpbmplY3RDbGFzczogRGVjb3JhdG9yQ2xhc3MgPSB0aGlzLmluamVjdENsYXNzQmluZGVyLmdldCh0YXJnZXQpO1xyXG4gICAgICAgICAgICB0aGlzLmRlY29yYXRvclVuSW5qZWN0KHRhcmdldCwgaW5qZWN0Q2xhc3MpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcml2YXRlIGRlY29yYXRvclVuSW5qZWN0KHRhcmdldDogYW55LCBpbmplY3RDbGFzczogRGVjb3JhdG9yQ2xhc3MpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICAvL+mBjeWOhuazqOWFpeexu1xyXG4gICAgICAgICAgICBpbmplY3RDbGFzcy5saXN0LmZvckVhY2goKGJpbmRpbmcpID0+IHtcclxuICAgICAgICAgICAgICAgIC8v5bCd6K+V6I6357uR5a6a54q25oCBXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5qZWN0QmluZGluZyA9IHRoYXQuYmluZGVyLmdldEJpbmRpbmcoYmluZGluZy52YWx1ZSwgYmluZGluZy5uYW1lKTtcclxuICAgICAgICAgICAgICAgIC8v5LiN6IO95rOo5YWl5LiA5Liq5pyq57uR5a6a55qE5YC8XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5qZWN0QmluZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5bCG5rOo5YWl5YC86LWL57uZ55uu5qCH5a+56LGhXHJcbiAgICAgICAgICAgICAgICAgICAgdGFyZ2V0W2JpbmRpbmcucHJvcGVydHldID0gbnVsbDtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/lrp7kvovljJblr7nosaFcclxuICAgICAgICBwdWJsaWMgaW5zdGFudGlhdGUoYmluZGluZzogSW5qZWN0QmluZGluZywgdHJ5SW5qZWN0SGVyZTogYm9vbGVhbik6IG9iamVjdCB7XHJcbiAgICAgICAgICAgIC8v5qOA5p+l5piv5ZCm5YW35aSH5rOo5YWl5p2h5Lu2XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5iaW5kZXIgfHwgIXRoaXMuZmFjdG9yeSkgdGhyb3cgbmV3IEVycm9yKFwiQXR0ZW1wdCB0byBpbnN0YW50aWF0ZSBmcm9tIEluamVjdG9yIHdpdGhvdXQgYSBCaW5kZXIgb3IgaW5qZWN0IGludG8gSW5qZWN0b3Igd2l0aG91dCBhIEZhY3RvcnlcIik7XHJcbiAgICAgICAgICAgIC8v5p6E6YCg5Ye95pWwXHJcbiAgICAgICAgICAgIGxldCBjb25zdHJ1Y3RvciA9IG51bGw7XHJcbiAgICAgICAgICAgIC8v5a6e5L6L5a+56LGhXHJcbiAgICAgICAgICAgIGxldCBpbnN0YW5jZTogb2JqZWN0ID0gbnVsbDtcclxuICAgICAgICAgICAgLy/mo4Dmn6Xnu5HlrprnirbmgIHnmoTlgLzmmK/lkKbkuLrmnoTpgKDlh73mlbBcclxuICAgICAgICAgICAgaWYgKGJpbmRpbmcuaXNWYWx1ZUNvbnN0cnVjdG9yKSB7XHJcbiAgICAgICAgICAgICAgICAvL+S8oOWFpeaehOmAoOWHveaVsFxyXG4gICAgICAgICAgICAgICAgY29uc3RydWN0b3IgPSBiaW5kaW5nLnZhbHVlO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/nm7TmjqXotYvlgLxcclxuICAgICAgICAgICAgICAgIGluc3RhbmNlID0gYmluZGluZy52YWx1ZTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+WmguaenOayoeacieiuvue9ruazqOWFpeWAvOS9huaYr+mUruWAvOaYr+S4gOS4quaehOmAoOWHveaVsFxyXG4gICAgICAgICAgICBpZiAoIWNvbnN0cnVjdG9yICYmIGJpbmRpbmcuaXNLZXlDb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICAgICAgLy/mjIflrprnu5HlrprnirbmgIHnmoTplK7lgLzkuLrmnoTpgKDlh73mlbBcclxuICAgICAgICAgICAgICAgIGNvbnN0cnVjdG9yID0gYmluZGluZy5rZXk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/lpoLmnpzmsqHmnInnm7TmjqXotYvlgLzlrp7kvovlubbkuJTlrZjlnKjmnoTpgKDlh73mlbBcclxuICAgICAgICAgICAgaWYgKCFpbnN0YW5jZSAmJiBjb25zdHJ1Y3Rvcikge1xyXG4gICAgICAgICAgICAgICAgLy/lj4LmlbBcclxuICAgICAgICAgICAgICAgIGxldCBhcmdzID0gYmluZGluZy5nZXRBcmdzKCk7XHJcbiAgICAgICAgICAgICAgICBpbnN0YW5jZSA9IHRoaXMuZmFjdG9yeS5nZXQoYmluZGluZywgYXJncyk7XHJcbiAgICAgICAgICAgICAgICAvL+WmguaenOWwneivleWcqOi/memHjOebtOaOpeazqOWFpVxyXG4gICAgICAgICAgICAgICAgaWYgKHRyeUluamVjdEhlcmUpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLnRyeUluamVjdChiaW5kaW5nLCBpbnN0YW5jZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgdHJ5SW5qZWN0KGJpbmRpbmc6IEluamVjdEJpbmRpbmcsIHRhcmdldDogYW55KSB7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5bel5Y6C5LiN6IO95Yib5bu65a6e5L6L5YiZ6L+Z6YeM55u05o6l6L+U5ZueXHJcbiAgICAgICAgICAgIGlmICh0YXJnZXQgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgaWYgKGJpbmRpbmcuaXNJbmplY3QoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRhcmdldCA9IHRoaXMuaW5qZWN0KHRhcmdldCwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nLmdldEJpbmRpbmdUeXBlKCkgPT0gSW5qZWN0Q29uc3QuQmluZGluZ1R5cGUuU0lOR0xFVE9OIHx8IGJpbmRpbmcuZ2V0QmluZGluZ1R5cGUoKSA9PSBJbmplY3RDb25zdC5CaW5kaW5nVHlwZS5WQUxVRSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vcHJldmVudCBkb3VibGUtaW5qZWN0aW9uXHJcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZy50b0luamVjdChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ms6jlhaXnm67moIfkuK3miYDmnInooqtASW5qZWN05qCH6K6w55qE5bGe5oCnXHJcbiAgICAgICAgcHVibGljIGluamVjdCh0YXJnZXQ6IG9iamVjdCwgYXR0ZW1wdENvbnN0cnVjdG9ySW5qZWN0aW9uPzogYm9vbGVhbik6IGFueSB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5iaW5kZXIgfHwgIXRhcmdldCkgdGhyb3cgbmV3IEVycm9yKFwiQXR0ZW1wdCB0byBpbmplY3QgaW50byBJbmplY3RvciB3aXRob3V0IGEgQmluZGVyIG9yIG51bGwgaW5zdGFuY2VcIik7XHJcbiAgICAgICAgICAgIC8v5o6S6Zmk5LiA5Lqb5LiN6IO96KKr5rOo5YWl55qE57G75Z6LXHJcbiAgICAgICAgICAgIGxldCB0eXBlOiBhbnkgPSB0eXBlb2YgdGFyZ2V0O1xyXG4gICAgICAgICAgICBpZiAodHlwZSA9PT0gXCJzdHJpbmdcIiB8fCB0eXBlID09PSBcImJvb2xlYW5cIiB8fCB0eXBlID09PSBcIm51bWJlclwiIHx8IHR5cGUgPT09IFwic3ltYm9sXCIgfHwgdHlwZSA9PT0gXCJ1bmRlZmluZWRcIiB8fCB0eXBlID09PSBcImZ1bmN0aW9uXCIpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0YXJnZXQ7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgLy/lm6DkuLpUU+S4reaXoOazleiOt+W+l+exu+Wei+WQjeensO+8jOaJgOS7peS9v+eUqOebruagh+eahOaehOmAoOWHveaVsOWQjeensOS7o+abv+exu+Wei+WQjeensFxyXG4gICAgICAgICAgICAvL2xldCB0eXBlTmFtZSA6IHN0cmluZyA9IHRhcmdldC5jb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgLy/ojrflj5bms6jlhaXnsbtcclxuICAgICAgICAgICAgbGV0IGluamVjdENsYXNzOiBEZWNvcmF0b3JDbGFzcyA9IHRoaXMuaW5qZWN0Q2xhc3NCaW5kZXIuZ2V0KHRhcmdldCk7XHJcbiAgICAgICAgICAgIC8v5piv5ZCm5YWB6K645L2/55So5p6E6YCg5Zmo5rOo5YWlXHJcbiAgICAgICAgICAgIGlmIChhdHRlbXB0Q29uc3RydWN0b3JJbmplY3Rpb24pIHtcclxuICAgICAgICAgICAgICAgIC8vdGFyZ2V0ID0gcGVyZm9ybUNvbnN0cnVjdG9ySW5qZWN0KHRhcmdldCwgcmVmbGVjdGlvbik7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgdGhpcy5kZWNvcmF0b3JJbmplY3QodGFyZ2V0LCBpbmplY3RDbGFzcyk7XHJcbiAgICAgICAgICAgIC8vcGVyZm9ybVNldHRlckluamVjdCh0YXJnZXQsIHJlZmxlY3Rpb24pO1xyXG4gICAgICAgICAgICAvL3Bvc3RJbmplY3QodGFyZ2V0LCByZWZsZWN0aW9uKTtcclxuICAgICAgICAgICAgcmV0dXJuIHRhcmdldDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6KOF6aWw5Zmo5rOo5YWl77yM5L2/55So5rOo5YWl57G76L+b6KGM5rOo5YWlXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBkZWNvcmF0b3JJbmplY3QodGFyZ2V0OiBhbnksIGluamVjdENsYXNzOiBEZWNvcmF0b3JDbGFzcykge1xyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIC8v6YGN5Y6G5rOo5YWl57G7XHJcbiAgICAgICAgICAgIGluamVjdENsYXNzLmxpc3QuZm9yRWFjaCgoYmluZGluZykgPT4ge1xyXG4gICAgICAgICAgICAgICAgLy9jb25zb2xlLmluZm8oXCJb6KOF6aWw5Zmo5rOo5YWlXVwiK2JpbmRpbmcudmFsdWUgKyBcIlvliKvlkI1dXCIrYmluZGluZy5uYW1lKTtcclxuICAgICAgICAgICAgICAgIC8v5bCd6K+V6I6357uR5a6a54q25oCBXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5qZWN0QmluZGluZyA9IHRoYXQuYmluZGVyLmdldEJpbmRpbmcoYmluZGluZy52YWx1ZSwgYmluZGluZy5uYW1lKTtcclxuICAgICAgICAgICAgICAgIC8v5LiN6IO95rOo5YWl5LiA5Liq5pyq57uR5a6a55qE5YC8XHJcbiAgICAgICAgICAgICAgICBpZiAoaW5qZWN0QmluZGluZykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbnN0YW5jZSA9IHRoYXQuZ2V0SW5qZWN0VmFsdWUoaW5qZWN0QmluZGluZy5rZXksIGluamVjdEJpbmRpbmcubmFtZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/lsIbms6jlhaXlgLzotYvnu5nnm67moIflr7nosaFcclxuICAgICAgICAgICAgICAgICAgICB0YXJnZXRbYmluZGluZy5wcm9wZXJ0eV0gPSBpbnN0YW5jZTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6I635Y+W6ZyA6KaB5rOo5YWl55qE5YC877yM6L+Z5Liq6L+H56iL5Lya6YCS5b2S6LCD55SoXHJcbiAgICAgICAgICogQHNlZSDms6jmhI/lvqrnjq/kvp3otZbkvJrkuKXph43mtojogJfmgKfog71cclxuICAgICAgICAgKi9cclxuICAgICAgICBwcml2YXRlIGdldEluamVjdFZhbHVlKHR5cGUsIG5hbWUpOiBvYmplY3Qge1xyXG4gICAgICAgICAgICAvL+WwneivleiOt+WPlue7keWumueKtuaAgVxyXG4gICAgICAgICAgICBsZXQgYmluZGluZyA9IHRoaXMuYmluZGVyLmdldEJpbmRpbmcodHlwZSwgbmFtZSk7XHJcbiAgICAgICAgICAgIGlmICghYmluZGluZykgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgIC8vaWYoYmluZGluZy5rZXkubmFtZSljb25zb2xlLmluZm8oXCJb6I635Y+W5rOo5YWl5YC8XVwiK2JpbmRpbmcua2V5Lm5hbWUrXCJb5Yir5ZCNXVwiK25hbWUrXCJb57uR5a6a54q25oCBXVwiK2JpbmRpbmcuYmluZGluZ1R5cGUgKyBcIixcIitiaW5kaW5nLmlzSW5qZWN0KTtcclxuICAgICAgICAgICAgLy9lbHNlIGNvbnNvbGUuaW5mbyhcIlvojrflj5bms6jlhaXlgLxdXCIrYmluZGluZy5rZXkrXCJb5Yir5ZCNXVwiK25hbWUrXCJb57uR5a6a54q25oCBXVwiK2JpbmRpbmcuYmluZGluZ1R5cGUgKyBcIlvpnIDopoHms6jlhaVdXCIrYmluZGluZy5pc0luamVjdCk7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5piv5YC857G75Z6L57uR5a6aXHJcbiAgICAgICAgICAgIGlmIChiaW5kaW5nLmdldEJpbmRpbmdUeXBlKCkgPT09IEluamVjdENvbnN0LkJpbmRpbmdUeXBlLlZBTFVFKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WmguaenOmcgOimgeazqOWFpVxyXG4gICAgICAgICAgICAgICAgaWYgKGJpbmRpbmcuaXNJbmplY3QoKSkge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBpbmp2ID0gdGhpcy5pbmplY3QoYmluZGluZy52YWx1ZSwgZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5YC857G75Z6L5a6M5oiQ5LiA5qyh5rOo5YWl5ZCO5LiN5YaN6L+b6KGM5rOo5YWlXHJcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZy50b0luamVjdChmYWxzZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGluanY7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBiaW5kaW5nLnZhbHVlO1xyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgLy/lpoLmnpzmmK/ljZXkvovms6jlhaVcclxuICAgICAgICAgICAgfSBlbHNlIGlmIChiaW5kaW5nLmdldEJpbmRpbmdUeXBlKCkgPT0gSW5qZWN0Q29uc3QuQmluZGluZ1R5cGUuU0lOR0xFVE9OKSB7XHJcbiAgICAgICAgICAgICAgICAvL+WmguaenOe7keWumueKtuaAgeeahOWAvOaYr+S4gOS4quaehOmAoOWHveaVsFxyXG4gICAgICAgICAgICAgICAgaWYgKGJpbmRpbmcuaXNWYWx1ZUNvbnN0cnVjdG9yIHx8IGJpbmRpbmcudmFsdWUgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuaW5zdGFudGlhdGUoYmluZGluZywgdHJ1ZSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gYmluZGluZy52YWx1ZTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmluc3RhbnRpYXRlKGJpbmRpbmcsIHRydWUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qICAgICAvL+aehOmAoOWZqOazqOWFpe+8jOacquWunueOsFxyXG4gICAgICAgIHByaXZhdGUgcGVyZm9ybUNvbnN0cnVjdG9ySW5qZWN0KCl7XHJcblxyXG4gICAgICAgIH0gKi9cclxuICAgICAgICAvKiAvL+WxnuaAp+iuvue9ruWZqOazqOWFpe+8jOacquWunueOsFxyXG4gICAgICAgIHBlcmZvcm1TZXR0ZXJJbmplY3QoKXtcclxuXHJcbiAgICAgICAgfSAqL1xyXG4gICAgICAgIC8qICAgICAvL+aWueazleazqOWFpe+8jOacquWunueOsFxyXG4gICAgICAgIHBvc3RJbmplY3QoKXtcclxuXHJcbiAgICAgICAgfSAqL1xyXG4gICAgfVxyXG59Il19

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* import { Binding } from "../Bind/Binding";
import {InjectConst} from "./InjectConst"; */
var ioc;
(function (ioc) {
    var InjectBinding = /** @class */ (function (_super) {
        __extends(InjectBinding, _super);
        function InjectBinding() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            _this._isUnbind = false;
            //默认绑定状态
            _this._bindingType = "Default" /* DEFAULT */;
            //默认自动注入
            _this._isInject = true;
            return _this;
        }
        /*     //键值是否为构造函数
            protected _isKeyConstructor = false;
            //值是否为构造函数
            protected _isValueConstructor = false; */
        /*     public get isKeyConstructor(){
                return this._isKeyConstructor;
            }
            public get isValueConstructor(){
                return this._isValueConstructor;
            } */
        InjectBinding.prototype.isInject = function () {
            return this._isInject;
        };
        //参数列表
        InjectBinding.prototype.getArgs = function () {
            return this._args;
        };
        InjectBinding.prototype.getBindingType = function () {
            return this._bindingType;
        };
        InjectBinding.prototype.isUnbind = function () {
            return this._isUnbind;
        };
        /**
         * 参数列表
         */
        InjectBinding.prototype.toArgs = function () {
            this._args = arguments;
            if (this._resolver != null) {
                this._resolver(this);
            }
            return this;
        };
        /**
         * 设置为单例模式时，每次都会得到相同的实例
         */
        InjectBinding.prototype.toSingleton = function () {
            //如果已经存在一个值了, 那么这次映射就被视为多余的
            if (this._bindingType === "Value" /* VALUE */) {
                return this;
            }
            //设定为单例注入
            this._bindingType = "Singleton" /* SINGLETON */;
            if (this._resolver != null) {
                this._resolver(this);
            }
            return this;
        };
        /**
         * 设置为解绑时，调用解绑方法将会解绑所有被标记的绑定状态
         */
        InjectBinding.prototype.unBind = function () {
            this._isUnbind = true;
            return this;
        };
        InjectBinding.prototype.toValue = function (value) {
            this._bindingType = "Value" /* VALUE */;
            this.setValue(value);
            return this;
        };
        InjectBinding.prototype.setValue = function (o) {
            this.to(o);
            return this;
        };
        InjectBinding.prototype.toInject = function (value) {
            this._isInject = value;
            return this;
        };
        //重写基类的赋值函数
        InjectBinding.prototype.to = function (value) {
            return _super.prototype.to.call(this, value);
        };
        InjectBinding.prototype.toName = function (name) {
            return _super.prototype.toName.call(this, name);
        };
        return InjectBinding;
    }(ioc.Binding));
    ioc.InjectBinding = InjectBinding;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbmplY3Rvci9JbmplY3RCaW5kaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQTs2Q0FDNkM7QUFDN0MsSUFBVSxHQUFHLENBdUZaO0FBdkZELFdBQVUsR0FBRztJQUVUO1FBQW1DLGlDQUFPO1FBQTFDO1lBQUEscUVBb0ZDO1lBbkZhLGVBQVMsR0FBWSxLQUFLLENBQUM7WUFDckMsUUFBUTtZQUNFLGtCQUFZLDJCQUE0RDtZQUNsRixRQUFRO1lBQ0UsZUFBUyxHQUFZLElBQUksQ0FBQzs7UUErRXhDLENBQUM7UUE1RUc7OztxREFHNkM7UUFFN0M7Ozs7O2dCQUtRO1FBQ0QsZ0NBQVEsR0FBZjtZQUNJLE9BQU8sSUFBSSxDQUFDLFNBQVMsQ0FBQztRQUMxQixDQUFDO1FBQ0QsTUFBTTtRQUNDLCtCQUFPLEdBQWQ7WUFDSSxPQUFPLElBQUksQ0FBQyxLQUFLLENBQUM7UUFDdEIsQ0FBQztRQUNNLHNDQUFjLEdBQXJCO1lBQ0ksT0FBTyxJQUFJLENBQUMsWUFBWSxDQUFDO1FBQzdCLENBQUM7UUFDTSxnQ0FBUSxHQUFmO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7UUFDRDs7V0FFRztRQUNJLDhCQUFNLEdBQWI7WUFDSSxJQUFJLENBQUMsS0FBSyxHQUFHLFNBQVMsQ0FBQztZQUN2QixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNEOztXQUVHO1FBQ0ksbUNBQVcsR0FBbEI7WUFDSSwyQkFBMkI7WUFDM0IsSUFBSSxJQUFJLENBQUMsWUFBWSx3QkFBa0MsRUFBRTtnQkFDckQsT0FBTyxJQUFJLENBQUM7YUFDZjtZQUNELFNBQVM7WUFDVCxJQUFJLENBQUMsWUFBWSw4QkFBb0MsQ0FBQztZQUN0RCxJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxFQUFFO2dCQUN4QixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQ3hCO1lBQ0QsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNEOztXQUVHO1FBQ0ksOEJBQU0sR0FBYjtZQUNJLElBQUksQ0FBQyxTQUFTLEdBQUcsSUFBSSxDQUFDO1lBQ3RCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDTSwrQkFBTyxHQUFkLFVBQWUsS0FBVTtZQUNyQixJQUFJLENBQUMsWUFBWSxzQkFBZ0MsQ0FBQztZQUNsRCxJQUFJLENBQUMsUUFBUSxDQUFDLEtBQUssQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDTSxnQ0FBUSxHQUFmLFVBQWdCLENBQU07WUFDbEIsSUFBSSxDQUFDLEVBQUUsQ0FBQyxDQUFDLENBQUMsQ0FBQztZQUNYLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDTSxnQ0FBUSxHQUFmLFVBQWdCLEtBQWM7WUFDMUIsSUFBSSxDQUFDLFNBQVMsR0FBRyxLQUFLLENBQUM7WUFDdkIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELFdBQVc7UUFDSiwwQkFBRSxHQUFULFVBQVUsS0FBVTtZQUNoQixPQUFPLGlCQUFNLEVBQUUsWUFBQyxLQUFLLENBQWtCLENBQUM7UUFDNUMsQ0FBQztRQUNNLDhCQUFNLEdBQWIsVUFBYyxJQUFTO1lBQ25CLE9BQU8saUJBQU0sTUFBTSxZQUFDLElBQUksQ0FBa0IsQ0FBQztRQUMvQyxDQUFDO1FBQ0wsb0JBQUM7SUFBRCxDQXBGQSxBQW9GQyxDQXBGa0MsSUFBQSxPQUFPLEdBb0Z6QztJQXBGWSxpQkFBYSxnQkFvRnpCLENBQUE7QUFDTCxDQUFDLEVBdkZTLEdBQUcsS0FBSCxHQUFHLFFBdUZaIiwiZmlsZSI6IkluamVjdG9yL0luamVjdEJpbmRpbmcuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpbXBvcnQgeyBCaW5kaW5nIH0gZnJvbSBcIi4uL0JpbmQvQmluZGluZ1wiO1xyXG5pbXBvcnQge0luamVjdENvbnN0fSBmcm9tIFwiLi9JbmplY3RDb25zdFwiOyAqL1xyXG5uYW1lc3BhY2UgaW9jIHtcclxuXHJcbiAgICBleHBvcnQgY2xhc3MgSW5qZWN0QmluZGluZyBleHRlbmRzIEJpbmRpbmcge1xyXG4gICAgICAgIHByb3RlY3RlZCBfaXNVbmJpbmQ6IGJvb2xlYW4gPSBmYWxzZTtcclxuICAgICAgICAvL+m7mOiupOe7keWumueKtuaAgVxyXG4gICAgICAgIHByb3RlY3RlZCBfYmluZGluZ1R5cGU6IEluamVjdENvbnN0LkJpbmRpbmdUeXBlID0gSW5qZWN0Q29uc3QuQmluZGluZ1R5cGUuREVGQVVMVDtcclxuICAgICAgICAvL+m7mOiupOiHquWKqOazqOWFpVxyXG4gICAgICAgIHByb3RlY3RlZCBfaXNJbmplY3Q6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgIC8v5Y+C5pWwXHJcbiAgICAgICAgcHJvdGVjdGVkIF9hcmdzOiBhbnk7XHJcbiAgICAgICAgLyogICAgIC8v6ZSu5YC85piv5ZCm5Li65p6E6YCg5Ye95pWwXHJcbiAgICAgICAgICAgIHByb3RlY3RlZCBfaXNLZXlDb25zdHJ1Y3RvciA9IGZhbHNlO1xyXG4gICAgICAgICAgICAvL+WAvOaYr+WQpuS4uuaehOmAoOWHveaVsFxyXG4gICAgICAgICAgICBwcm90ZWN0ZWQgX2lzVmFsdWVDb25zdHJ1Y3RvciA9IGZhbHNlOyAqL1xyXG5cclxuICAgICAgICAvKiAgICAgcHVibGljIGdldCBpc0tleUNvbnN0cnVjdG9yKCl7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faXNLZXlDb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBwdWJsaWMgZ2V0IGlzVmFsdWVDb25zdHJ1Y3Rvcigpe1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzVmFsdWVDb25zdHJ1Y3RvcjtcclxuICAgICAgICAgICAgfSAqL1xyXG4gICAgICAgIHB1YmxpYyBpc0luamVjdCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzSW5qZWN0O1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+WPguaVsOWIl+ihqFxyXG4gICAgICAgIHB1YmxpYyBnZXRBcmdzKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXJncztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGdldEJpbmRpbmdUeXBlKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYmluZGluZ1R5cGU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBpc1VuYmluZCgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzVW5iaW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDlj4LmlbDliJfooahcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdG9BcmdzKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9hcmdzID0gYXJndW1lbnRzO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5fcmVzb2x2ZXIgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZXIodGhpcyk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOiuvue9ruS4uuWNleS+i+aooeW8j+aXtu+8jOavj+asoemDveS8muW+l+WIsOebuOWQjOeahOWunuS+i1xyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyB0b1NpbmdsZXRvbigpOiBJbmplY3RCaW5kaW5nIHtcclxuICAgICAgICAgICAgLy/lpoLmnpzlt7Lnu4/lrZjlnKjkuIDkuKrlgLzkuoYsIOmCo+S5iOi/measoeaYoOWwhOWwseiiq+inhuS4uuWkmuS9meeahFxyXG4gICAgICAgICAgICBpZiAodGhpcy5fYmluZGluZ1R5cGUgPT09IEluamVjdENvbnN0LkJpbmRpbmdUeXBlLlZBTFVFKSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+iuvuWumuS4uuWNleS+i+azqOWFpVxyXG4gICAgICAgICAgICB0aGlzLl9iaW5kaW5nVHlwZSA9IEluamVjdENvbnN0LkJpbmRpbmdUeXBlLlNJTkdMRVRPTjtcclxuICAgICAgICAgICAgaWYgKHRoaXMuX3Jlc29sdmVyICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuX3Jlc29sdmVyKHRoaXMpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDorr7nva7kuLrop6Pnu5Hml7bvvIzosIPnlKjop6Pnu5Hmlrnms5XlsIbkvJrop6Pnu5HmiYDmnInooqvmoIforrDnmoTnu5HlrprnirbmgIFcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgdW5CaW5kKCk6IEluamVjdEJpbmRpbmcge1xyXG4gICAgICAgICAgICB0aGlzLl9pc1VuYmluZCA9IHRydWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgdG9WYWx1ZSh2YWx1ZTogYW55KTogSW5qZWN0QmluZGluZyB7XHJcbiAgICAgICAgICAgIHRoaXMuX2JpbmRpbmdUeXBlID0gSW5qZWN0Q29uc3QuQmluZGluZ1R5cGUuVkFMVUU7XHJcbiAgICAgICAgICAgIHRoaXMuc2V0VmFsdWUodmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHNldFZhbHVlKG86IGFueSk6IEluamVjdEJpbmRpbmcge1xyXG4gICAgICAgICAgICB0aGlzLnRvKG8pO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHRvSW5qZWN0KHZhbHVlOiBib29sZWFuKTogSW5qZWN0QmluZGluZyB7XHJcbiAgICAgICAgICAgIHRoaXMuX2lzSW5qZWN0ID0gdmFsdWU7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mHjeWGmeWfuuexu+eahOi1i+WAvOWHveaVsFxyXG4gICAgICAgIHB1YmxpYyB0byh2YWx1ZTogYW55KTogSW5qZWN0QmluZGluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci50byh2YWx1ZSkgYXMgSW5qZWN0QmluZGluZztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHRvTmFtZShuYW1lOiBhbnkpOiBJbmplY3RCaW5kaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLnRvTmFtZShuYW1lKSBhcyBJbmplY3RCaW5kaW5nO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var ioc;
(function (ioc) {
    //全局注入数据绑定器
    var ClassBinder = ioc.DecoratorConst.DECORATOR_CLASS_BINDER;
    var NInjectBinder = /** @class */ (function () {
        function NInjectBinder() {
        }
        Object.defineProperty(NInjectBinder.prototype, "constructorName", {
            get: function () {
                return "IInjectBinder";
            },
            enumerable: true,
            configurable: true
        });
        return NInjectBinder;
    }());
    ioc.NInjectBinder = NInjectBinder;
    var InjectBinder = /** @class */ (function (_super) {
        __extends(InjectBinder, _super);
        function InjectBinder() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        InjectBinder.prototype.init = function () {
            _super.prototype.init.call(this);
            this._injector = new ioc.Injector();
            this._injector.binder = this;
            this._injector.injectClassBinder = ClassBinder;
        };
        InjectBinder.prototype.getInjector = function () {
            return this._injector;
        };
        //绑定状态映射字典
        InjectBinder.prototype.getInstance = function (key, name) {
            //如果未设置别名则使用默认设置
            if (!name)
                name = ioc.BindingConst.NULL;
            //获取绑定状态
            var binding = this.getBinding(ioc.Binding.checkAbstract(key), name);
            //尝试获取一个未绑定的键值对时抛出绑定失败异常
            if (binding == null) {
                throw new Error("InjectionBinder has no binding for:\n\tkey: " + key + "\nname: " + name);
            }
            //根据绑定状态从注入器中获取实例
            //console.info("[实例化]"+binding.key);
            var instance = this._injector.instantiate(binding, false);
            //console.info("[尝试注入]"+Binding.checkAbstract(binding.key));
            this._injector.tryInject(binding, instance);
            return instance;
        };
        /**
         * 调用注入者的注入方法对目标对象进行注入
         * @param target
         * @param attemptConstructorInjection
         */
        InjectBinder.prototype.inject = function (target, attemptConstructorInjection) {
            this.getInjector().inject(target);
        };
        //重写获取绑定状态方法
        InjectBinder.prototype.getBinding = function (key, name) {
            return _super.prototype.getBinding.call(this, key, name);
        };
        //重写基类的绑定函数
        InjectBinder.prototype.bind = function (key) {
            return _super.prototype.bind.call(this, key);
        };
        InjectBinder.prototype.getRawBinding = function () {
            return new ioc.InjectBinding(this.resolver.bind(this));
        };
        InjectBinder.prototype.unbindAllMark = function () {
            var that = this;
            var unbinds = [];
            this._bindings.forEach(function (dict) {
                dict.forEach(function (binding) {
                    if (binding.isUnbind()) {
                        unbinds.push(binding);
                    }
                });
            });
            //解除被标记的绑定
            unbinds.forEach(function (binding) {
                that.unbind(binding.key, binding.name);
            });
        };
        return InjectBinder;
    }(ioc.Binder));
    ioc.InjectBinder = InjectBinder;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbmplY3Rvci9JbmplY3RCaW5kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7OztBQUFBLElBQVUsR0FBRyxDQXNGWjtBQXRGRCxXQUFVLEdBQUc7SUFFVCxXQUFXO0lBQ1gsSUFBTSxXQUFXLEdBQUcsSUFBQSxjQUFjLENBQUMsc0JBQXNCLENBQUM7SUFhMUQ7UUFBQTtRQUlBLENBQUM7UUFIRyxzQkFBSSwwQ0FBZTtpQkFBbkI7Z0JBQ0ksT0FBTyxlQUFlLENBQUM7WUFDM0IsQ0FBQzs7O1dBQUE7UUFDTCxvQkFBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBSlksaUJBQWEsZ0JBSXpCLENBQUE7SUFDRDtRQUFrQyxnQ0FBTTtRQUF4Qzs7UUFnRUEsQ0FBQztRQTVEVSwyQkFBSSxHQUFYO1lBQ0ksaUJBQU0sSUFBSSxXQUFFLENBQUM7WUFDYixJQUFJLENBQUMsU0FBUyxHQUFHLElBQUksSUFBQSxRQUFRLEVBQUUsQ0FBQztZQUNoQyxJQUFJLENBQUMsU0FBUyxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUM7WUFDN0IsSUFBSSxDQUFDLFNBQVMsQ0FBQyxpQkFBaUIsR0FBRyxXQUFXLENBQUM7UUFDbkQsQ0FBQztRQUNNLGtDQUFXLEdBQWxCO1lBQ0ksT0FBTyxJQUFJLENBQUMsU0FBUyxDQUFDO1FBQzFCLENBQUM7UUFDRCxVQUFVO1FBQ0gsa0NBQVcsR0FBbEIsVUFBbUIsR0FBRyxFQUFFLElBQUk7WUFDeEIsZ0JBQWdCO1lBQ2hCLElBQUksQ0FBQyxJQUFJO2dCQUFFLElBQUksR0FBRyxJQUFBLFlBQVksQ0FBQyxJQUFJLENBQUM7WUFDcEMsUUFBUTtZQUNSLElBQUksT0FBTyxHQUFrQixJQUFJLENBQUMsVUFBVSxDQUFDLElBQUEsT0FBTyxDQUFDLGFBQWEsQ0FBQyxHQUFHLENBQUMsRUFBRSxJQUFJLENBQWtCLENBQUM7WUFDaEcsd0JBQXdCO1lBQ3hCLElBQUksT0FBTyxJQUFJLElBQUksRUFBRTtnQkFDakIsTUFBTSxJQUFJLEtBQUssQ0FBQyw4Q0FBOEMsR0FBRyxHQUFHLEdBQUcsVUFBVSxHQUFHLElBQUksQ0FBQyxDQUFDO2FBQzdGO1lBQ0QsaUJBQWlCO1lBQ2pCLG9DQUFvQztZQUNwQyxJQUFJLFFBQVEsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLFdBQVcsQ0FBQyxPQUFPLEVBQUUsS0FBSyxDQUFDLENBQUM7WUFDMUQsNERBQTREO1lBQzVELElBQUksQ0FBQyxTQUFTLENBQUMsU0FBUyxDQUFDLE9BQU8sRUFBRSxRQUFRLENBQUMsQ0FBQztZQUM1QyxPQUFPLFFBQVEsQ0FBQztRQUNwQixDQUFDO1FBQ0Q7Ozs7V0FJRztRQUNJLDZCQUFNLEdBQWIsVUFBYyxNQUFhLEVBQUMsMkJBQW9DO1lBQzVELElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLENBQUM7UUFDdEMsQ0FBQztRQUNELFlBQVk7UUFDTCxpQ0FBVSxHQUFqQixVQUFrQixHQUFHLEVBQUUsSUFBSTtZQUN2QixPQUFPLGlCQUFNLFVBQVUsWUFBQyxHQUFHLEVBQUUsSUFBSSxDQUFrQixDQUFBO1FBQ3ZELENBQUM7UUFDRCxXQUFXO1FBQ0osMkJBQUksR0FBWCxVQUFZLEdBQVE7WUFDaEIsT0FBTyxpQkFBTSxJQUFJLFlBQUMsR0FBRyxDQUFrQixDQUFDO1FBQzVDLENBQUM7UUFDTSxvQ0FBYSxHQUFwQjtZQUNJLE9BQU8sSUFBSSxJQUFBLGFBQWEsQ0FBQyxJQUFJLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsQ0FBQyxDQUFDO1FBQ3ZELENBQUM7UUFDTSxvQ0FBYSxHQUFwQjtZQUNJLElBQUksSUFBSSxHQUFHLElBQUksQ0FBQztZQUNoQixJQUFJLE9BQU8sR0FBRyxFQUFFLENBQUM7WUFDaEIsSUFBSSxDQUFDLFNBQXFELENBQUMsT0FBTyxDQUFDLFVBQUEsSUFBSTtnQkFDcEUsSUFBSSxDQUFDLE9BQU8sQ0FBQyxVQUFBLE9BQU87b0JBQ2hCLElBQUksT0FBTyxDQUFDLFFBQVEsRUFBRSxFQUFFO3dCQUNwQixPQUFPLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxDQUFDO3FCQUN6QjtnQkFDTCxDQUFDLENBQUMsQ0FBQTtZQUNOLENBQUMsQ0FBQyxDQUFDO1lBQ0gsVUFBVTtZQUNWLE9BQU8sQ0FBQyxPQUFPLENBQUMsVUFBQSxPQUFPO2dCQUNuQixJQUFJLENBQUMsTUFBTSxDQUFDLE9BQU8sQ0FBQyxHQUFHLEVBQUUsT0FBTyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQzNDLENBQUMsQ0FBQyxDQUFBO1FBQ04sQ0FBQztRQUNMLG1CQUFDO0lBQUQsQ0FoRUEsQUFnRUMsQ0FoRWlDLElBQUEsTUFBTSxHQWdFdkM7SUFoRVksZ0JBQVksZUFnRXhCLENBQUE7QUFDTCxDQUFDLEVBdEZTLEdBQUcsS0FBSCxHQUFHLFFBc0ZaIiwiZmlsZSI6IkluamVjdG9yL0luamVjdEJpbmRlci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBpb2Mge1xyXG5cclxuICAgIC8v5YWo5bGA5rOo5YWl5pWw5o2u57uR5a6a5ZmoXHJcbiAgICBjb25zdCBDbGFzc0JpbmRlciA9IERlY29yYXRvckNvbnN0LkRFQ09SQVRPUl9DTEFTU19CSU5ERVI7XHJcblxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJSW5qZWN0QmluZGVyIGV4dGVuZHMgSUJpbmRlciB7XHJcbiAgICAgICAgZ2V0SW5qZWN0b3IoKTogSW5qZWN0b3I7XHJcbiAgICAgICAgZ2V0SW5zdGFuY2Uoa2V5LCBuYW1lKTogYW55O1xyXG4gICAgICAgIGdldEJpbmRpbmcoa2V5LCBuYW1lKTogSW5qZWN0QmluZGluZztcclxuICAgICAgICBpbmplY3QodGFyZ2V0Om9iamVjdCxhdHRlbXB0Q29uc3RydWN0b3JJbmplY3Rpb24/OmJvb2xlYW4pO1xyXG4gICAgICAgIGJpbmQoa2V5OiBhbnkpOiBJbmplY3RCaW5kaW5nO1xyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOino+e7keaJgOacieiiq+agh+iusOS6humcgOimgeino+e7keeahOeKtuaAgVxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHVuYmluZEFsbE1hcmsoKTtcclxuICAgIH1cclxuICAgIGV4cG9ydCBjbGFzcyBOSW5qZWN0QmluZGVyIGltcGxlbWVudHMgSUNvbnN0cnVjdG9yTmFtZSB7XHJcbiAgICAgICAgZ2V0IGNvbnN0cnVjdG9yTmFtZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiSUluamVjdEJpbmRlclwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV4cG9ydCBjbGFzcyBJbmplY3RCaW5kZXIgZXh0ZW5kcyBCaW5kZXIgaW1wbGVtZW50cyBJSW5qZWN0QmluZGVyIHtcclxuICAgICAgICAvL+azqOWFpeWZqFxyXG4gICAgICAgIHByaXZhdGUgX2luamVjdG9yOiBJbmplY3RvciA7XHJcblxyXG4gICAgICAgIHB1YmxpYyBpbml0KCl7XHJcbiAgICAgICAgICAgIHN1cGVyLmluaXQoKTtcclxuICAgICAgICAgICAgdGhpcy5faW5qZWN0b3IgPSBuZXcgSW5qZWN0b3IoKTtcclxuICAgICAgICAgICAgdGhpcy5faW5qZWN0b3IuYmluZGVyID0gdGhpcztcclxuICAgICAgICAgICAgdGhpcy5faW5qZWN0b3IuaW5qZWN0Q2xhc3NCaW5kZXIgPSBDbGFzc0JpbmRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGdldEluamVjdG9yKCk6IEluamVjdG9yIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luamVjdG9yO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+e7keWumueKtuaAgeaYoOWwhOWtl+WFuFxyXG4gICAgICAgIHB1YmxpYyBnZXRJbnN0YW5jZShrZXksIG5hbWUpOiBhbnkge1xyXG4gICAgICAgICAgICAvL+WmguaenOacquiuvue9ruWIq+WQjeWImeS9v+eUqOm7mOiupOiuvue9rlxyXG4gICAgICAgICAgICBpZiAoIW5hbWUpIG5hbWUgPSBCaW5kaW5nQ29uc3QuTlVMTDtcclxuICAgICAgICAgICAgLy/ojrflj5bnu5HlrprnirbmgIFcclxuICAgICAgICAgICAgbGV0IGJpbmRpbmc6IEluamVjdEJpbmRpbmcgPSB0aGlzLmdldEJpbmRpbmcoQmluZGluZy5jaGVja0Fic3RyYWN0KGtleSksIG5hbWUpIGFzIEluamVjdEJpbmRpbmc7XHJcbiAgICAgICAgICAgIC8v5bCd6K+V6I635Y+W5LiA5Liq5pyq57uR5a6a55qE6ZSu5YC85a+55pe25oqb5Ye657uR5a6a5aSx6LSl5byC5bi4XHJcbiAgICAgICAgICAgIGlmIChiaW5kaW5nID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkluamVjdGlvbkJpbmRlciBoYXMgbm8gYmluZGluZyBmb3I6XFxuXFx0a2V5OiBcIiArIGtleSArIFwiXFxubmFtZTogXCIgKyBuYW1lKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+agueaNrue7keWumueKtuaAgeS7juazqOWFpeWZqOS4reiOt+WPluWunuS+i1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUuaW5mbyhcIlvlrp7kvovljJZdXCIrYmluZGluZy5rZXkpO1xyXG4gICAgICAgICAgICBsZXQgaW5zdGFuY2UgPSB0aGlzLl9pbmplY3Rvci5pbnN0YW50aWF0ZShiaW5kaW5nLCBmYWxzZSk7XHJcbiAgICAgICAgICAgIC8vY29uc29sZS5pbmZvKFwiW+WwneivleazqOWFpV1cIitCaW5kaW5nLmNoZWNrQWJzdHJhY3QoYmluZGluZy5rZXkpKTtcclxuICAgICAgICAgICAgdGhpcy5faW5qZWN0b3IudHJ5SW5qZWN0KGJpbmRpbmcsIGluc3RhbmNlKTtcclxuICAgICAgICAgICAgcmV0dXJuIGluc3RhbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDosIPnlKjms6jlhaXogIXnmoTms6jlhaXmlrnms5Xlr7nnm67moIflr7nosaHov5vooYzms6jlhaVcclxuICAgICAgICAgKiBAcGFyYW0gdGFyZ2V0IFxyXG4gICAgICAgICAqIEBwYXJhbSBhdHRlbXB0Q29uc3RydWN0b3JJbmplY3Rpb24gXHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHVibGljIGluamVjdCh0YXJnZXQ6b2JqZWN0LGF0dGVtcHRDb25zdHJ1Y3RvckluamVjdGlvbj86Ym9vbGVhbil7XHJcbiAgICAgICAgICAgIHRoaXMuZ2V0SW5qZWN0b3IoKS5pbmplY3QodGFyZ2V0KTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ph43lhpnojrflj5bnu5HlrprnirbmgIHmlrnms5VcclxuICAgICAgICBwdWJsaWMgZ2V0QmluZGluZyhrZXksIG5hbWUpOiBJbmplY3RCaW5kaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLmdldEJpbmRpbmcoa2V5LCBuYW1lKSBhcyBJbmplY3RCaW5kaW5nXHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6YeN5YaZ5Z+657G755qE57uR5a6a5Ye95pWwXHJcbiAgICAgICAgcHVibGljIGJpbmQoa2V5OiBhbnkpOiBJbmplY3RCaW5kaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIHN1cGVyLmJpbmQoa2V5KSBhcyBJbmplY3RCaW5kaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgZ2V0UmF3QmluZGluZygpOiBJQmluZGluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiBuZXcgSW5qZWN0QmluZGluZyh0aGlzLnJlc29sdmVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgdW5iaW5kQWxsTWFyaygpIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG4gICAgICAgICAgICBsZXQgdW5iaW5kcyA9IFtdO1xyXG4gICAgICAgICAgICAodGhpcy5fYmluZGluZ3MgYXMgTWFwIDwgYW55LCBNYXAgPCBhbnksIEluamVjdEJpbmRpbmcgPj4gKS5mb3JFYWNoKGRpY3QgPT4ge1xyXG4gICAgICAgICAgICAgICAgZGljdC5mb3JFYWNoKGJpbmRpbmcgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nLmlzVW5iaW5kKCkpIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdW5iaW5kcy5wdXNoKGJpbmRpbmcpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAvL+ino+mZpOiiq+agh+iusOeahOe7keWumlxyXG4gICAgICAgICAgICB1bmJpbmRzLmZvckVhY2goYmluZGluZyA9PiB7XHJcbiAgICAgICAgICAgICAgICB0aGF0LnVuYmluZChiaW5kaW5nLmtleSwgYmluZGluZy5uYW1lKTtcclxuICAgICAgICAgICAgfSlcclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=

var ioc;
(function (ioc) {
    //全局注入数据绑定器
    var ClassBinder = ioc.DecoratorConst.DECORATOR_CLASS_BINDER;
    /**
     * 使用默认的方式注入属性值
     */
    //export function inject<T>(_target: Object, _key: any, _desc ? : any) : void;
    //利用重载的形式定义注入属性的方法
    function inject() {
        switch (arguments.length) {
            case 0:
                break;
            case 1:
                return injectNoNameFunc(arguments[0]);
                break;
            case 2:
                return injectToNameFunc(arguments[0], arguments[1]);
                break;
            case 3:
                break;
        }
    }
    ioc.inject = inject;
    /**
     * 无别名的属性装饰器
     * @param _constructor 类型T的构造函数
     */
    var injectNoNameFunc = function (_constructor) {
        return function (_target, _property) {
            injectFunc(_target, _constructor, _property);
        };
    };
    /**
     * 带别名的属性装饰器
     * @param _constructor 类型T的构造函数
     */
    var injectToNameFunc = function (_constructor, _name) {
        return function (_target, _property) {
            injectFunc(_target, _constructor, _property, _name);
        };
    };
    /**
     *
     * @param _target 被注入的目标类
     * @param _constructor 注入的类
     * @param _property 注入的类的属性名
     * @param _name 注入的类的别名
     */
    function injectFunc(_target, _constructor, _property, _name) {
        //所有实现了IConstructorName的类都属于虚类，这里获取虚类对应的接口名作为键值传递给绑定器
        //因为压缩代码会把所有对象的名称都压缩掉，所以这里使用构造函数作为键值
        ClassBinder.bind(_target.constructor).to(ioc.Binding.checkAbstract(_constructor)).toProperty(_property).toName(_name);
    }
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbmplY3Rvci9JbmplY3REZWNvcmF0b3IudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsSUFBVSxHQUFHLENBK0VaO0FBL0VELFdBQVUsR0FBRztJQUNULFdBQVc7SUFDWCxJQUFNLFdBQVcsR0FBRyxJQUFBLGNBQWMsQ0FBQyxzQkFBc0IsQ0FBQztJQTBCMUQ7O09BRUc7SUFDSCw4RUFBOEU7SUFFOUUsa0JBQWtCO0lBQ2xCLFNBQWdCLE1BQU07UUFDbEIsUUFBUSxTQUFTLENBQUMsTUFBTSxFQUFFO1lBQ3RCLEtBQUssQ0FBQztnQkFDRixNQUFNO1lBQ1YsS0FBSyxDQUFDO2dCQUNGLE9BQU8sZ0JBQWdCLENBQVEsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUM7Z0JBQzdDLE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsT0FBTyxnQkFBZ0IsQ0FBUSxTQUFTLENBQUMsQ0FBQyxDQUFDLEVBQUUsU0FBUyxDQUFDLENBQUMsQ0FBQyxDQUFDLENBQUE7Z0JBQzFELE1BQU07WUFDVixLQUFLLENBQUM7Z0JBQ0YsTUFBTTtTQUNiO0lBQ0wsQ0FBQztJQWJlLFVBQU0sU0FhckIsQ0FBQTtJQUNEOzs7T0FHRztJQUNILElBQU0sZ0JBQWdCLEdBQUcsVUFBTyxZQUFpQztRQUM3RCxPQUFPLFVBQVUsT0FBWSxFQUFFLFNBQWlCO1lBQzVDLFVBQVUsQ0FBQyxPQUFPLEVBQUUsWUFBWSxFQUFFLFNBQVMsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQTtJQUNMLENBQUMsQ0FBQTtJQUNEOzs7T0FHRztJQUNILElBQU0sZ0JBQWdCLEdBQUcsVUFBTyxZQUFpQyxFQUFFLEtBQVU7UUFDekUsT0FBTyxVQUFVLE9BQVksRUFBRSxTQUFpQjtZQUM1QyxVQUFVLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBSyxDQUFDLENBQUM7UUFDeEQsQ0FBQyxDQUFBO0lBRUwsQ0FBQyxDQUFBO0lBQ0Q7Ozs7OztPQU1HO0lBQ0gsU0FBUyxVQUFVLENBQUMsT0FBTyxFQUFFLFlBQVksRUFBRSxTQUFTLEVBQUUsS0FBTztRQUN6RCxxREFBcUQ7UUFDckQsb0NBQW9DO1FBQ3BDLFdBQVcsQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLFdBQVcsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxJQUFBLE9BQU8sQ0FBQyxhQUFhLENBQUMsWUFBWSxDQUFDLENBQUMsQ0FBQyxVQUFVLENBQUMsU0FBUyxDQUFDLENBQUMsTUFBTSxDQUFDLEtBQUssQ0FBQyxDQUFDO0lBQ3RILENBQUM7QUFDTCxDQUFDLEVBL0VTLEdBQUcsS0FBSCxHQUFHLFFBK0VaIiwiZmlsZSI6IkluamVjdG9yL0luamVjdERlY29yYXRvci5qcyIsInNvdXJjZXNDb250ZW50IjpbIm5hbWVzcGFjZSBpb2Mge1xyXG4gICAgLy/lhajlsYDms6jlhaXmlbDmja7nu5HlrprlmahcclxuICAgIGNvbnN0IENsYXNzQmluZGVyID0gRGVjb3JhdG9yQ29uc3QuREVDT1JBVE9SX0NMQVNTX0JJTkRFUjtcclxuICAgIC8qKlxyXG4gICAgICog5rOo5YWl6KOF6aWw5Zmo5qih5Z2XXHJcbiAgICAgKiDlm6DkuLpUU+eahOexu+Wei+ezu+e7n+S7heWPr+S7peeUqOS6juajgOafpeivreazlemUmeivr++8jOiAjOWcqOe8luivkeS4ukpT5ZCO5LiN5YaN5pyJ57G75Z6L57O757uf77yM5omA5Lul5peg5rOV5ZyoVFPkuK3lrZjlgqjnsbvlnovmlbDmja5cclxuICAgICAqIOW5tuS4lOWcqOW+ruS/oeeOr+Wig+S4i+aYr+aXoOazleS9v+eUqOWPjeWwhOW6k+WSjOWKqOaAgeS7o+egge+8jOiHs+WwkeeOsOWcqOi/mOS4jeihjOOAglxyXG4gICAgICog5Li65LqG5a6e546w5rOo5YWl5Yqf6IO977yM6L+Z6YeM6YeH55So57G755qE5p6E6YCg5Ye95pWw5L2c5Li657G75Z6L5pWw5o2u77yM5Lul5p6E6YCg5Ye95pWw55qEbmFtZeWxnuaAp+S9nOS4uuexu+Wei+eahOWQjeensO+8jOWPiOWboOaOpeWPo+ayoeacieaehOmAoOWHveaVsFxyXG4gICAgICog5omA5Lul57uf5LiA6YeH55So5re75YqgIE4g5YmN57yA55qE5qih5ouf5o6l5Y+j5ZCN5pa55byP6Ze05o6l5a2Y5YKo5o6l5Y+j5pWw5o2u77yM5Zug5Li66KOF6aWw5Zmo5Lya5Zyo56iL5bqP6L+Q6KGM55qE6LW35aeL6Zi25q615omn6KGM77yM5omA5Lul5L2/55So5LiA5Liq5YWo5bGA5Y+Y6YeP5a2Y5YKo6L+Z5Lqb5pWw5o2uXHJcbiAgICAgKiBAc2VlIOazqOaEj++8muaJgOacieeahE7nsbvlnYfpnIDopoHlrp7njrBJQ29uc3RydWN0b3JOYW1l5o6l5Y+jXHJcbiAgICAgKiBAZXhhbXBsZVxyXG4gICAgICogY2xhc3N7XHJcbiAgICAgKiAgQGluamVjdChjb25zdHJ1Y3RvcilcclxuICAgICAqICBhbnljbGFzczpUO1xyXG4gICAgICogfVxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gaW5qZWN0IDwgVCA+IChzdHI6IHN0cmluZyk6IEZ1bmN0aW9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiDlsZ7mgKflgLzms6jlhaXoo4XppbDlmahcclxuICAgICAqIEBwYXJhbSBjIOaehOmAoOWHveaVsFxyXG4gICAgICovXHJcbiAgICBleHBvcnQgZnVuY3Rpb24gaW5qZWN0IDwgVCA+IChjOiBuZXcoKSA9PiBUKTogRnVuY3Rpb247XHJcbiAgICAvKipcclxuICAgICAqIOS9v+eUqOWIq+WQjeeahOaWueW8j+azqOWFpeWxnuaAp+WAvFxyXG4gICAgICogQHBhcmFtIG5hbWUg5bGe5oCn5YC85Yir5ZCNXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBmdW5jdGlvbiBpbmplY3QgPCBUID4gKGM6IG5ldygpID0+IFQsIG5hbWU6IGFueSk6IEZ1bmN0aW9uO1xyXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGluamVjdCA8IFQgPiAoc3RyOiBzdHJpbmcsIG5hbWU6IGFueSk6IEZ1bmN0aW9uO1xyXG4gICAgLyoqXHJcbiAgICAgKiDkvb/nlKjpu5jorqTnmoTmlrnlvI/ms6jlhaXlsZ7mgKflgLxcclxuICAgICAqL1xyXG4gICAgLy9leHBvcnQgZnVuY3Rpb24gaW5qZWN0PFQ+KF90YXJnZXQ6IE9iamVjdCwgX2tleTogYW55LCBfZGVzYyA/IDogYW55KSA6IHZvaWQ7XHJcblxyXG4gICAgLy/liKnnlKjph43ovb3nmoTlvaLlvI/lrprkuYnms6jlhaXlsZ7mgKfnmoTmlrnms5VcclxuICAgIGV4cG9ydCBmdW5jdGlvbiBpbmplY3QgPCBUID4gKCk6IGFueSB7XHJcbiAgICAgICAgc3dpdGNoIChhcmd1bWVudHMubGVuZ3RoKSB7XHJcbiAgICAgICAgICAgIGNhc2UgMDpcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDE6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0Tm9OYW1lRnVuYyA8IFQgPiAoYXJndW1lbnRzWzBdKTtcclxuICAgICAgICAgICAgICAgIGJyZWFrO1xyXG4gICAgICAgICAgICBjYXNlIDI6XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gaW5qZWN0VG9OYW1lRnVuYyA8IFQgPiAoYXJndW1lbnRzWzBdLCBhcmd1bWVudHNbMV0pXHJcbiAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgY2FzZSAzOlxyXG4gICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiDml6DliKvlkI3nmoTlsZ7mgKfoo4XppbDlmahcclxuICAgICAqIEBwYXJhbSBfY29uc3RydWN0b3Ig57G75Z6LVOeahOaehOmAoOWHveaVsFxyXG4gICAgICovXHJcbiAgICBjb25zdCBpbmplY3ROb05hbWVGdW5jID0gPCBUID4gKF9jb25zdHJ1Y3RvcjogbmV3KCkgPT4gVCB8IHN0cmluZykgPT4ge1xyXG4gICAgICAgIHJldHVybiBmdW5jdGlvbiAoX3RhcmdldDogYW55LCBfcHJvcGVydHk6IHN0cmluZykge1xyXG4gICAgICAgICAgICBpbmplY3RGdW5jKF90YXJnZXQsIF9jb25zdHJ1Y3RvciwgX3Byb3BlcnR5KTtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICAvKipcclxuICAgICAqIOW4puWIq+WQjeeahOWxnuaAp+ijhemlsOWZqFxyXG4gICAgICogQHBhcmFtIF9jb25zdHJ1Y3RvciDnsbvlnotU55qE5p6E6YCg5Ye95pWwXHJcbiAgICAgKi9cclxuICAgIGNvbnN0IGluamVjdFRvTmFtZUZ1bmMgPSA8IFQgPiAoX2NvbnN0cnVjdG9yOiBuZXcoKSA9PiBUIHwgc3RyaW5nLCBfbmFtZTogYW55KSA9PiB7XHJcbiAgICAgICAgcmV0dXJuIGZ1bmN0aW9uIChfdGFyZ2V0OiBhbnksIF9wcm9wZXJ0eTogc3RyaW5nKSB7XHJcbiAgICAgICAgICAgIGluamVjdEZ1bmMoX3RhcmdldCwgX2NvbnN0cnVjdG9yLCBfcHJvcGVydHksIF9uYW1lKTtcclxuICAgICAgICB9XHJcblxyXG4gICAgfVxyXG4gICAgLyoqXHJcbiAgICAgKiBcclxuICAgICAqIEBwYXJhbSBfdGFyZ2V0IOiiq+azqOWFpeeahOebruagh+exu1xyXG4gICAgICogQHBhcmFtIF9jb25zdHJ1Y3RvciDms6jlhaXnmoTnsbtcclxuICAgICAqIEBwYXJhbSBfcHJvcGVydHkg5rOo5YWl55qE57G755qE5bGe5oCn5ZCNXHJcbiAgICAgKiBAcGFyYW0gX25hbWUg5rOo5YWl55qE57G755qE5Yir5ZCNXHJcbiAgICAgKi9cclxuICAgIGZ1bmN0aW9uIGluamVjdEZ1bmMoX3RhcmdldCwgX2NvbnN0cnVjdG9yLCBfcHJvcGVydHksIF9uYW1lID8gKSB7XHJcbiAgICAgICAgLy/miYDmnInlrp7njrDkuoZJQ29uc3RydWN0b3JOYW1l55qE57G76YO95bGe5LqO6Jma57G777yM6L+Z6YeM6I635Y+W6Jma57G75a+55bqU55qE5o6l5Y+j5ZCN5L2c5Li66ZSu5YC85Lyg6YCS57uZ57uR5a6a5ZmoXHJcbiAgICAgICAgLy/lm6DkuLrljovnvKnku6PnoIHkvJrmiormiYDmnInlr7nosaHnmoTlkI3np7Dpg73ljovnvKnmjonvvIzmiYDku6Xov5nph4zkvb/nlKjmnoTpgKDlh73mlbDkvZzkuLrplK7lgLxcclxuICAgICAgICBDbGFzc0JpbmRlci5iaW5kKF90YXJnZXQuY29uc3RydWN0b3IpLnRvKEJpbmRpbmcuY2hlY2tBYnN0cmFjdChfY29uc3RydWN0b3IpKS50b1Byb3BlcnR5KF9wcm9wZXJ0eSkudG9OYW1lKF9uYW1lKTtcclxuICAgIH1cclxufSJdfQ==

/// <reference path="Injector/InjectDecorator.ts" />
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ioc;
(function (ioc) {
    var PoolOverflowBehavior;
    (function (PoolOverflowBehavior) {
        /// Requesting more than the fixed size will throw an exception.
        PoolOverflowBehavior[PoolOverflowBehavior["EXCEPTION"] = 0] = "EXCEPTION";
        /// Requesting more than the fixed size will throw a warning.
        PoolOverflowBehavior[PoolOverflowBehavior["WARNING"] = 1] = "WARNING";
        /// Requesting more than the fixed size will return null and not throw an error.
        PoolOverflowBehavior[PoolOverflowBehavior["IGNORE"] = 2] = "IGNORE";
    })(PoolOverflowBehavior = ioc.PoolOverflowBehavior || (ioc.PoolOverflowBehavior = {}));
    var BindingConstraintType;
    (function (BindingConstraintType) {
        /// Constrains a SemiBinding to carry no more than one item in its Value
        BindingConstraintType[BindingConstraintType["ONE"] = 0] = "ONE";
        /// Constrains a SemiBinding to carry a list of items in its Value
        BindingConstraintType[BindingConstraintType["MANY"] = 1] = "MANY";
        /// Instructs the Binding to apply a Pool instead of a SemiBinding
        BindingConstraintType[BindingConstraintType["POOL"] = 2] = "POOL";
    })(BindingConstraintType = ioc.BindingConstraintType || (ioc.BindingConstraintType = {}));
    var PoolInflationType;
    (function (PoolInflationType) {
        /// When a dynamic pool inflates, add one to the pool.
        PoolInflationType[PoolInflationType["INCREMENT"] = 0] = "INCREMENT";
        /// When a dynamic pool inflates, double the size of the pool
        PoolInflationType[PoolInflationType["DOUBLE"] = 1] = "DOUBLE";
    })(PoolInflationType = ioc.PoolInflationType || (ioc.PoolInflationType = {}));
    var NInstanceProvider = /** @class */ (function () {
        function NInstanceProvider() {
        }
        Object.defineProperty(NInstanceProvider.prototype, "constructorName", {
            //getInstance<T>() : T{return;} 
            get: function () {
                return "IInstanceProvider";
            },
            enumerable: true,
            configurable: true
        });
        return NInstanceProvider;
    }());
    ioc.NInstanceProvider = NInstanceProvider;
    var Pool = /** @class */ (function () {
        function Pool() {
            /// Stack of instances still in the Pool.
            this.instancesAvailable = new ioc.Stack();
            /// A HashSet of the objects checked out of the Pool.
            this.instancesInUse = new Set();
        }
        Pool.prototype.Pool = function () {
            this.size = 0;
            this.constraint = BindingConstraintType.POOL;
            this.uniqueValues = true;
            this.overflowBehavior = PoolOverflowBehavior.EXCEPTION;
            this.inflationType = PoolInflationType.DOUBLE;
        };
        Pool.prototype.bind = function (type) {
            this.poolType = type;
        };
        Pool.prototype.add = function (value) {
            //检查对象原型是否相同
            this.failIf(!ioc.Prototype.isProtetype(value, this.poolType), " Pool Type mismatch. Pools must consist of a common concrete type.\n\t\tPool type: " + this.poolType + "\n\t\tMismatch type: " + value);
            this._instanceCount++;
            this.instancesAvailable.push(value);
            return this;
        };
        Pool.prototype.addList = function (list) {
            var _this = this;
            if (list && list.length > 0) {
                list.forEach(function (item) {
                    _this.add(item);
                });
            }
            return this;
        };
        Pool.prototype.remove = function (value) {
            this._instanceCount--;
            this.removeInstance(value);
            return this;
        };
        Pool.prototype.removeList = function (list) {
            var _this = this;
            if (list && list.length > 0) {
                list.forEach(function (item) {
                    _this.remove(item);
                });
            }
            return this;
        };
        Object.defineProperty(Pool.prototype, "value", {
            get: function () {
                return this.getInstance();
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Pool.prototype, "instanceCount", {
            /// The object Type of the first object added to the pool.
            /// Pool objects must be of the same concrete type. This property enforces that requirement. 
            get: function () {
                return this._instanceCount;
            },
            enumerable: true,
            configurable: true
        });
        Pool.prototype.getInstance = function () {
            // Is an instance available?
            if (this.instancesAvailable.size > 0) {
                var retv = this.instancesAvailable.pop();
                this.instancesInUse.add(retv);
                return retv;
            }
            var instancesToCreate = 0;
            //New fixed-size pool. Populate.
            if (this.size > 0) {
                if (this.instanceCount == 0) {
                    //New pool. Add instances.
                    instancesToCreate = this.size;
                }
                else {
                    //Illegal overflow. Report and return null
                    this.failIf(this.overflowBehavior == PoolOverflowBehavior.EXCEPTION, "A pool has overflowed its limit.\n\t\tPool type: " + this.poolType);
                    if (this.overflowBehavior == PoolOverflowBehavior.WARNING) {
                        //console.warn ("WARNING: A pool has overflowed its limit.\n\t\tPool type: " + this.poolType);
                    }
                    return null;
                }
            }
            else {
                //Zero-sized pools will expand.
                if (this.instanceCount == 0 || this.inflationType == PoolInflationType.INCREMENT) {
                    instancesToCreate = 1;
                }
                else {
                    instancesToCreate = this.instanceCount;
                }
            }
            if (instancesToCreate > 0) {
                this.failIf(this.instanceProvider == null, "A Pool of type: " + this.poolType + " has no instance provider.");
                for (var a = 0; a < instancesToCreate; a++) {
                    var newInstance = this.instanceProvider.getInstance(this.poolType);
                    this.add(newInstance);
                }
                return this.getInstance();
            }
            //If not, return null
            return null;
        };
        Pool.prototype.returnInstance = function (value) {
            if (this.instancesInUse.has(value)) {
                /* if (value extends IPoolable)
                {
                    (value as IPoolable).Restore ();
                } */
                value.restore();
                this.instancesInUse.delete(value);
                this.instancesAvailable.push(value);
            }
        };
        Pool.prototype.clean = function () {
            this.instancesAvailable.clear();
            this.instancesInUse = new Set();
            this._instanceCount = 0;
        };
        Object.defineProperty(Pool.prototype, "available", {
            get: function () {
                return this.instancesAvailable.size;
            },
            enumerable: true,
            configurable: true
        });
        Pool.prototype.restore = function () {
            this.clean();
            this.size = 0;
        };
        Pool.prototype.retain = function () {
            this.isRetain = true;
        };
        Pool.prototype.release = function () {
            this.isRetain = false;
        };
        /// <summary>
        /// Permanently removes an instance from the Pool
        /// </summary>
        /// In the event that the removed Instance is in use, it is removed from instancesInUse.
        /// Otherwise, it is presumed inactive, and the next available object is popped from
        /// instancesAvailable.
        /// <param name="value">An instance to remove permanently from the Pool.</param>
        Pool.prototype.removeInstance = function (value) {
            this.failIf(value != this.poolType, "Attempt to remove a instance from a pool that is of the wrong Type:\n\t\tPool type: " + this.poolType.toString() + "\n\t\tInstance type: " + value.toString());
            if (this.instancesInUse.has(value)) {
                this.instancesInUse.delete(value);
            }
            else {
                this.instancesAvailable.pop();
            }
        };
        Pool.prototype.failIf = function (condition, message) {
            if (condition) {
                throw new Error(message);
            }
        };
        __decorate([
            ioc.inject(NInstanceProvider)
        ], Pool.prototype, "instanceProvider", void 0);
        return Pool;
    }());
    ioc.Pool = Pool;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,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LENBQUMsQ0FBQztZQUNwTSxJQUFJLElBQUksQ0FBQyxjQUFjLENBQUMsR0FBRyxDQUFDLEtBQUssQ0FBQyxFQUFFO2dCQUNoQyxJQUFJLENBQUMsY0FBYyxDQUFDLE1BQU0sQ0FBQyxLQUFLLENBQUMsQ0FBQzthQUNyQztpQkFBTTtnQkFDSCxJQUFJLENBQUMsa0JBQWtCLENBQUMsR0FBRyxFQUFFLENBQUM7YUFDakM7UUFDTCxDQUFDO1FBRVMscUJBQU0sR0FBaEIsVUFBaUIsU0FBa0IsRUFBRSxPQUFlO1lBQ2hELElBQUksU0FBUyxFQUFFO2dCQUNYLE1BQU0sSUFBSSxLQUFLLENBQUMsT0FBTyxDQUFDLENBQUM7YUFDNUI7UUFDTCxDQUFDO1FBckxEO1lBREMsSUFBQSxNQUFNLENBQUMsaUJBQWlCLENBQUM7c0RBQ2dCO1FBc0w5QyxXQUFDO0tBekxELEFBeUxDLElBQUE7SUF6TFksUUFBSSxPQXlMaEIsQ0FBQTtBQUNMLENBQUMsRUF0VVMsR0FBRyxLQUFILEdBQUcsUUFzVVoiLCJmaWxlIjoiUG9vbC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8vLyA8cmVmZXJlbmNlIHBhdGg9XCJJbmplY3Rvci9JbmplY3REZWNvcmF0b3IudHNcIiAvPlxyXG5cclxubmFtZXNwYWNlIGlvYyB7XHJcblxyXG4gICAgZXhwb3J0IGVudW0gUG9vbE92ZXJmbG93QmVoYXZpb3Ige1xyXG4gICAgICAgIC8vLyBSZXF1ZXN0aW5nIG1vcmUgdGhhbiB0aGUgZml4ZWQgc2l6ZSB3aWxsIHRocm93IGFuIGV4Y2VwdGlvbi5cclxuICAgICAgICBFWENFUFRJT04sXHJcblxyXG4gICAgICAgIC8vLyBSZXF1ZXN0aW5nIG1vcmUgdGhhbiB0aGUgZml4ZWQgc2l6ZSB3aWxsIHRocm93IGEgd2FybmluZy5cclxuICAgICAgICBXQVJOSU5HLFxyXG5cclxuICAgICAgICAvLy8gUmVxdWVzdGluZyBtb3JlIHRoYW4gdGhlIGZpeGVkIHNpemUgd2lsbCByZXR1cm4gbnVsbCBhbmQgbm90IHRocm93IGFuIGVycm9yLlxyXG4gICAgICAgIElHTk9SRVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGVudW0gQmluZGluZ0NvbnN0cmFpbnRUeXBlIHtcclxuICAgICAgICAvLy8gQ29uc3RyYWlucyBhIFNlbWlCaW5kaW5nIHRvIGNhcnJ5IG5vIG1vcmUgdGhhbiBvbmUgaXRlbSBpbiBpdHMgVmFsdWVcclxuICAgICAgICBPTkUsXHJcbiAgICAgICAgLy8vIENvbnN0cmFpbnMgYSBTZW1pQmluZGluZyB0byBjYXJyeSBhIGxpc3Qgb2YgaXRlbXMgaW4gaXRzIFZhbHVlXHJcbiAgICAgICAgTUFOWSxcclxuICAgICAgICAvLy8gSW5zdHJ1Y3RzIHRoZSBCaW5kaW5nIHRvIGFwcGx5IGEgUG9vbCBpbnN0ZWFkIG9mIGEgU2VtaUJpbmRpbmdcclxuICAgICAgICBQT09MLFxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGVudW0gUG9vbEluZmxhdGlvblR5cGUge1xyXG4gICAgICAgIC8vLyBXaGVuIGEgZHluYW1pYyBwb29sIGluZmxhdGVzLCBhZGQgb25lIHRvIHRoZSBwb29sLlxyXG4gICAgICAgIElOQ1JFTUVOVCxcclxuXHJcbiAgICAgICAgLy8vIFdoZW4gYSBkeW5hbWljIHBvb2wgaW5mbGF0ZXMsIGRvdWJsZSB0aGUgc2l6ZSBvZiB0aGUgcG9vbFxyXG4gICAgICAgIERPVUJMRVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGludGVyZmFjZSBJUG9vbGFibGUge1xyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gQ2xlYW4gdXAgdGhpcyBpbnN0YW5jZSBmb3IgcmV1c2UuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICAvLy8gUmVzdG9yZSBtZXRob2RzIHNob3VsZCBjbGVhbiB1cCB0aGUgaW5zdGFuY2Ugc3VmZmljaWVudGx5IHRvIHJlbW92ZSBwcmlvciBzdGF0ZS5cclxuICAgICAgICByZXN0b3JlKCk7XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gS2VlcCB0aGlzIGluc3RhbmNlIGZyb20gYmVpbmcgcmV0dXJuZWQgdG8gdGhlIHBvb2wgXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICByZXRhaW4oKTtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBSZWxlYXNlIHRoaXMgaW5zdGFuY2UgYmFjayB0byB0aGUgcG9vbC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBSZWxlYXNlIG1ldGhvZHMgc2hvdWxkIGNsZWFuIHVwIHRoZSBpbnN0YW5jZSBzdWZmaWNpZW50bHkgdG8gcmVtb3ZlIHByaW9yIHN0YXRlLlxyXG4gICAgICAgIHJlbGVhc2UoKTtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJcyB0aGlzIGluc3RhbmNlIHJldGFpbmVkP1xyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgLy8vIDx2YWx1ZT48Yz50cnVlPC9jPiBpZiByZXRhaW5lZDsgb3RoZXJ3aXNlLCA8Yz5mYWxzZTwvYz4uPC92YWx1ZT5cclxuICAgICAgICBpc1JldGFpbjogYm9vbGVhbjtcclxuICAgIH1cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUluc3RhbmNlUHJvdmlkZXIge1xyXG4gICAgICAgIC8vLyBSZXRyaWV2ZSBhbiBJbnN0YW5jZSBiYXNlZCBvbiB0aGUga2V5LlxyXG4gICAgICAgIC8vLyBleC4gYGluamVjdGlvbkJpbmRlci5HZXQ8Y0lTb21lSW50ZXJmYWNlPigpO2BcclxuICAgICAgICAvL2dldEluc3RhbmNlPFQ+KCkgOiBUO1xyXG5cclxuICAgICAgICAvLy8gUmV0cmlldmUgYW4gSW5zdGFuY2UgYmFzZWQgb24gdGhlIGtleS5cclxuICAgICAgICAvLy8gZXguIGBpbmplY3Rpb25CaW5kZXIuR2V0KHR5cGVvZihJU29tZUludGVyZmFjZSkpO2BcclxuICAgICAgICBnZXRJbnN0YW5jZShrZXk6IG9iamVjdCk6IG9iamVjdDtcclxuICAgIH1cclxuICAgIGV4cG9ydCBjbGFzcyBOSW5zdGFuY2VQcm92aWRlciBpbXBsZW1lbnRzIElDb25zdHJ1Y3Rvck5hbWUge1xyXG4gICAgICAgIC8vZ2V0SW5zdGFuY2U8VD4oKSA6IFR7cmV0dXJuO30gXHJcbiAgICAgICAgZ2V0IGNvbnN0cnVjdG9yTmFtZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiSUluc3RhbmNlUHJvdmlkZXJcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElNYW5hZ2VkTGlzdCB7XHJcbiAgICAgICAgLy8vIEFkZCBhIHZhbHVlIHRvIHRoaXMgTGlzdC4gXHJcbiAgICAgICAgYWRkKHZhbHVlOiBvYmplY3QpOiBJTWFuYWdlZExpc3Q7XHJcblxyXG4gICAgICAgIC8vLyBBZGQgYSBzZXQgb2YgdmFsdWVzIHRvIHRoaXMgTGlzdC4gXHJcbiAgICAgICAgYWRkKGxpc3Q6IG9iamVjdFtdKTogSU1hbmFnZWRMaXN0O1xyXG5cclxuICAgICAgICAvLy8gUmVtb3ZlIGEgdmFsdWUgZnJvbSB0aGlzIExpc3QuIFxyXG4gICAgICAgIHJlbW92ZSh2YWx1ZTogb2JqZWN0KTogSU1hbmFnZWRMaXN0O1xyXG5cclxuICAgICAgICAvLy8gUmVtb3ZlIGEgc2V0IG9mIHZhbHVlcyBmcm9tIHRoaXMgTGlzdC4gXHJcbiAgICAgICAgcmVtb3ZlKGxpc3Q6IG9iamVjdFtdKTogSU1hbmFnZWRMaXN0O1xyXG5cclxuICAgICAgICAvLy8gUmV0cmlldmUgdGhlIHZhbHVlIG9mIHRoaXMgTGlzdC5cclxuICAgICAgICAvLy8gSWYgdGhlIGNvbnN0cmFpbnQgaXMgTUFOWSwgdGhlIHZhbHVlIHdpbGwgYmUgYW4gQXJyYXkuXHJcbiAgICAgICAgLy8vIElmIHRoZSBjb25zdHJhaW50IGlzIFBPT0wsIHRoaXMgYmVjb21lcyBhIHN5bm9ueW0gZm9yIEdldEluc3RhbmNlKCkuXHJcbiAgICAgICAgdmFsdWU6IG9iamVjdDtcclxuICAgIH1cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSVBvb2wgZXh0ZW5kcyBJTWFuYWdlZExpc3Qge1xyXG4gICAgICAgIC8vLyBBIGNsYXNzIHRoYXQgcHJvdmlkZXMgaW5zdGFuY2VzIHRvIHRoZSBwb29sIHdoZW4gaXQgbmVlZHMgdGhlbS5cclxuICAgICAgICAvLy8gVGhpcyBjYW4gYmUgdGhlIEluamVjdGlvbkJpbmRlciwgb3IgYW55IGNsYXNzIHlvdSB3cml0ZSB0aGF0IHNhdGlzZmllcyB0aGUgSUluc3RhbmNlUHJvdmlkZXJcclxuICAgICAgICAvLy8gaW50ZXJmYWNlLlxyXG4gICAgICAgIGluc3RhbmNlUHJvdmlkZXI6IElJbnN0YW5jZVByb3ZpZGVyO1xyXG5cclxuICAgICAgICAvLy8gVGhlIG9iamVjdCBUeXBlIG9mIHRoZSBmaXJzdCBvYmplY3QgYWRkZWQgdG8gdGhlIHBvb2wuXHJcbiAgICAgICAgLy8vIFBvb2wgb2JqZWN0cyBtdXN0IGJlIG9mIHRoZSBzYW1lIGNvbmNyZXRlIHR5cGUuIFRoaXMgcHJvcGVydHkgZW5mb3JjZXMgdGhhdCByZXF1aXJlbWVudC4gXHJcbiAgICAgICAgcG9vbFR5cGU6IG9iamVjdDtcclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEdldHMgYW4gaW5zdGFuY2UgZnJvbSB0aGUgcG9vbCBpZiBvbmUgaXMgYXZhaWxhYmxlLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgLy8vIDxyZXR1cm5zPlRoZSBpbnN0YW5jZS48L3JldHVybnM+XHJcbiAgICAgICAgZ2V0SW5zdGFuY2UoKTogb2JqZWN0O1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIFJldHVybnMgYW4gaW5zdGFuY2UgdG8gdGhlIHBvb2wuXHJcbiAgICAgICAgLy8vIDwvc3VtbWFyeT5cclxuICAgICAgICAvLy8gSWYgdGhlIGluc3RhbmNlIGJlaW5nIHJlbGVhc2VkIGltcGxlbWVudHMgSVBvb2xhYmxlLCB0aGUgUmVsZWFzZSgpIG1ldGhvZCB3aWxsIGJlIGNhbGxlZC5cclxuICAgICAgICAvLy8gPHBhcmFtIG5hbWU9XCJ2YWx1ZVwiPlRoZSBpbnN0YW5jZSB0byBiZSByZXR1cm4gdG8gdGhlIHBvb2wuPC9wYXJhbT5cclxuICAgICAgICByZXR1cm5JbnN0YW5jZSh2YWx1ZTogb2JqZWN0KTtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBSZW1vdmUgYWxsIGluc3RhbmNlIHJlZmVyZW5jZXMgZnJvbSB0aGUgUG9vbC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIGNsZWFuKCk7XHJcblxyXG4gICAgICAgIC8vLyA8c3VtbWFyeT5cclxuICAgICAgICAvLy8gUmV0dXJucyB0aGUgY291bnQgb2Ygbm9uLWNvbW1pdHRlZCBpbnN0YW5jZXNcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIGF2YWlsYWJsZTogbnVtYmVyO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEdldHMgb3Igc2V0cyB0aGUgc2l6ZSBvZiB0aGUgcG9vbC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIC8vLyA8dmFsdWU+VGhlIHBvb2wgc2l6ZS4gJzAnIGlzIGEgc3BlY2lhbCB2YWx1ZSBpbmRpY2F0aW5nIGluZmluaXRlIHNpemUuIEluZmluaXRlIHBvb2xzIGV4cGFuZCBhcyBuZWNlc3NhcnkgdG8gYWNjb21vZGF0ZSByZXF1aXJlbWVudC48L3ZhbHVlPlxyXG4gICAgICAgIHNpemU6IG51bWJlcjtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBSZXR1cm5zIHRoZSB0b3RhbCBudW1iZXIgb2YgaW5zdGFuY2VzIGN1cnJlbnRseSBtYW5hZ2VkIGJ5IHRoaXMgcG9vbC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIGluc3RhbmNlQ291bnQ6IG51bWJlcjtcclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBHZXRzIG9yIHNldHMgdGhlIG92ZXJmbG93IGJlaGF2aW9yIG9mIHRoaXMgcG9vbC5cclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIC8vLyA8dmFsdWU+QSBQb29sT3ZlcmZsb3dCZWhhdmlvciB2YWx1ZS48L3ZhbHVlPlxyXG4gICAgICAgIG92ZXJmbG93QmVoYXZpb3I6IFBvb2xPdmVyZmxvd0JlaGF2aW9yO1xyXG5cclxuICAgICAgICAvLy8gPHN1bW1hcnk+XHJcbiAgICAgICAgLy8vIEdldHMgb3Igc2V0cyB0aGUgdHlwZSBvZiBpbmZsYXRpb24gZm9yIGluZmluaXRlLXNpemVkIHBvb2xzLlxyXG4gICAgICAgIC8vLyA8L3N1bW1hcnk+XHJcbiAgICAgICAgLy8vIEJ5IGRlZmF1bHQsIGEgcG9vbCBkb3VibGVzIGl0cyBJbnN0YW5jZUNvdW50LlxyXG4gICAgICAgIC8vLyA8dmFsdWU+QSBQb29sSW5mbGF0aW9uVHlwZSB2YWx1ZS48L3ZhbHVlPlxyXG4gICAgICAgIGluZmxhdGlvblR5cGU6IFBvb2xJbmZsYXRpb25UeXBlO1xyXG4gICAgfVxyXG4gICAgZXhwb3J0IGNsYXNzIFBvb2wgaW1wbGVtZW50cyBJUG9vbCwgSVBvb2xhYmxlIHtcclxuXHJcbiAgICAgICAgQGluamVjdChOSW5zdGFuY2VQcm92aWRlcilcclxuICAgICAgICBwdWJsaWMgaW5zdGFuY2VQcm92aWRlcjogSUluc3RhbmNlUHJvdmlkZXJcclxuXHJcbiAgICAgICAgLy8vIFN0YWNrIG9mIGluc3RhbmNlcyBzdGlsbCBpbiB0aGUgUG9vbC5cclxuICAgICAgICBwcm90ZWN0ZWQgaW5zdGFuY2VzQXZhaWxhYmxlOiBTdGFjayA8IGFueSA+ID0gbmV3IFN0YWNrIDwgYW55ID4gKCk7XHJcblxyXG4gICAgICAgIC8vLyBBIEhhc2hTZXQgb2YgdGhlIG9iamVjdHMgY2hlY2tlZCBvdXQgb2YgdGhlIFBvb2wuXHJcbiAgICAgICAgcHJvdGVjdGVkIGluc3RhbmNlc0luVXNlOiBTZXQgPCBvYmplY3QgPj0gbmV3IFNldCA8IG9iamVjdCA+ICgpO1xyXG5cclxuICAgICAgICBwcm90ZWN0ZWQgX2luc3RhbmNlQ291bnQ6IG51bWJlcjtcclxuXHJcbiAgICAgICAgcHVibGljIHNpemU6IG51bWJlcjtcclxuXHJcbiAgICAgICAgcHVibGljIG92ZXJmbG93QmVoYXZpb3I6IFBvb2xPdmVyZmxvd0JlaGF2aW9yO1xyXG5cclxuICAgICAgICBwdWJsaWMgaW5mbGF0aW9uVHlwZTogUG9vbEluZmxhdGlvblR5cGU7XHJcblxyXG4gICAgICAgIHB1YmxpYyB1bmlxdWVWYWx1ZXM6IGJvb2xlYW47XHJcblxyXG4gICAgICAgIHB1YmxpYyBjb25zdHJhaW50OiBhbnk7XHJcblxyXG4gICAgICAgIHB1YmxpYyBwb29sVHlwZTogb2JqZWN0O1xyXG5cclxuICAgICAgICBwdWJsaWMgaXNSZXRhaW46IGJvb2xlYW47XHJcblxyXG4gICAgICAgIHB1YmxpYyBQb29sKCkge1xyXG4gICAgICAgICAgICB0aGlzLnNpemUgPSAwO1xyXG4gICAgICAgICAgICB0aGlzLmNvbnN0cmFpbnQgPSBCaW5kaW5nQ29uc3RyYWludFR5cGUuUE9PTDtcclxuICAgICAgICAgICAgdGhpcy51bmlxdWVWYWx1ZXMgPSB0cnVlO1xyXG5cclxuICAgICAgICAgICAgdGhpcy5vdmVyZmxvd0JlaGF2aW9yID0gUG9vbE92ZXJmbG93QmVoYXZpb3IuRVhDRVBUSU9OO1xyXG4gICAgICAgICAgICB0aGlzLmluZmxhdGlvblR5cGUgPSBQb29sSW5mbGF0aW9uVHlwZS5ET1VCTEU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBiaW5kKHR5cGUpIHtcclxuICAgICAgICAgICAgdGhpcy5wb29sVHlwZSA9IHR5cGU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgYWRkKHZhbHVlOiBvYmplY3QpOiBJTWFuYWdlZExpc3Qge1xyXG4gICAgICAgICAgICAvL+ajgOafpeWvueixoeWOn+Wei+aYr+WQpuebuOWQjFxyXG4gICAgICAgICAgICB0aGlzLmZhaWxJZighUHJvdG90eXBlLmlzUHJvdGV0eXBlKHZhbHVlLCB0aGlzLnBvb2xUeXBlKSwgXCIgUG9vbCBUeXBlIG1pc21hdGNoLiBQb29scyBtdXN0IGNvbnNpc3Qgb2YgYSBjb21tb24gY29uY3JldGUgdHlwZS5cXG5cXHRcXHRQb29sIHR5cGU6IFwiICsgdGhpcy5wb29sVHlwZSArIFwiXFxuXFx0XFx0TWlzbWF0Y2ggdHlwZTogXCIgKyB2YWx1ZSk7XHJcbiAgICAgICAgICAgIHRoaXMuX2luc3RhbmNlQ291bnQrKztcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNBdmFpbGFibGUucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgYWRkTGlzdChsaXN0OiBvYmplY3RbXSk6IElNYW5hZ2VkTGlzdCB7XHJcbiAgICAgICAgICAgIGlmIChsaXN0ICYmIGxpc3QubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGlzdC5mb3JFYWNoKChpdGVtOiBvYmplY3QpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFkZChpdGVtKTtcclxuICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgcmVtb3ZlKHZhbHVlOiBvYmplY3QpOiBJTWFuYWdlZExpc3Qge1xyXG4gICAgICAgICAgICB0aGlzLl9pbnN0YW5jZUNvdW50LS07XHJcbiAgICAgICAgICAgIHRoaXMucmVtb3ZlSW5zdGFuY2UodmFsdWUpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyByZW1vdmVMaXN0KGxpc3Q6IG9iamVjdFtdKTogSU1hbmFnZWRMaXN0IHtcclxuICAgICAgICAgICAgaWYgKGxpc3QgJiYgbGlzdC5sZW5ndGggPiAwKSB7XHJcbiAgICAgICAgICAgICAgICBsaXN0LmZvckVhY2goKGl0ZW06IG9iamVjdCkgPT4ge1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMucmVtb3ZlKGl0ZW0pO1xyXG4gICAgICAgICAgICAgICAgfSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IHZhbHVlKCk6IG9iamVjdCB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICAvLy8gVGhlIG9iamVjdCBUeXBlIG9mIHRoZSBmaXJzdCBvYmplY3QgYWRkZWQgdG8gdGhlIHBvb2wuXHJcbiAgICAgICAgLy8vIFBvb2wgb2JqZWN0cyBtdXN0IGJlIG9mIHRoZSBzYW1lIGNvbmNyZXRlIHR5cGUuIFRoaXMgcHJvcGVydHkgZW5mb3JjZXMgdGhhdCByZXF1aXJlbWVudC4gXHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQgaW5zdGFuY2VDb3VudCgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faW5zdGFuY2VDb3VudDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXRJbnN0YW5jZSgpOiBvYmplY3Qge1xyXG4gICAgICAgICAgICAvLyBJcyBhbiBpbnN0YW5jZSBhdmFpbGFibGU/XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlc0F2YWlsYWJsZS5zaXplID4gMCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHJldHY6IG9iamVjdCA9IHRoaXMuaW5zdGFuY2VzQXZhaWxhYmxlLnBvcCgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNJblVzZS5hZGQocmV0dik7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gcmV0djtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgbGV0IGluc3RhbmNlc1RvQ3JlYXRlOiBudW1iZXIgPSAwO1xyXG5cclxuICAgICAgICAgICAgLy9OZXcgZml4ZWQtc2l6ZSBwb29sLiBQb3B1bGF0ZS5cclxuICAgICAgICAgICAgaWYgKHRoaXMuc2l6ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlQ291bnQgPT0gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vTmV3IHBvb2wuIEFkZCBpbnN0YW5jZXMuXHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VzVG9DcmVhdGUgPSB0aGlzLnNpemU7XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8vSWxsZWdhbCBvdmVyZmxvdy4gUmVwb3J0IGFuZCByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuZmFpbElmKHRoaXMub3ZlcmZsb3dCZWhhdmlvciA9PSBQb29sT3ZlcmZsb3dCZWhhdmlvci5FWENFUFRJT04sXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIFwiQSBwb29sIGhhcyBvdmVyZmxvd2VkIGl0cyBsaW1pdC5cXG5cXHRcXHRQb29sIHR5cGU6IFwiICsgdGhpcy5wb29sVHlwZSk7XHJcblxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0aGlzLm92ZXJmbG93QmVoYXZpb3IgPT0gUG9vbE92ZXJmbG93QmVoYXZpb3IuV0FSTklORykge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAvL2NvbnNvbGUud2FybiAoXCJXQVJOSU5HOiBBIHBvb2wgaGFzIG92ZXJmbG93ZWQgaXRzIGxpbWl0LlxcblxcdFxcdFBvb2wgdHlwZTogXCIgKyB0aGlzLnBvb2xUeXBlKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL1plcm8tc2l6ZWQgcG9vbHMgd2lsbCBleHBhbmQuXHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZUNvdW50ID09IDAgfHwgdGhpcy5pbmZsYXRpb25UeXBlID09IFBvb2xJbmZsYXRpb25UeXBlLklOQ1JFTUVOVCkge1xyXG4gICAgICAgICAgICAgICAgICAgIGluc3RhbmNlc1RvQ3JlYXRlID0gMTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAgICAgaW5zdGFuY2VzVG9DcmVhdGUgPSB0aGlzLmluc3RhbmNlQ291bnQ7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIGlmIChpbnN0YW5jZXNUb0NyZWF0ZSA+IDApIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuZmFpbElmKHRoaXMuaW5zdGFuY2VQcm92aWRlciA9PSBudWxsLCBcIkEgUG9vbCBvZiB0eXBlOiBcIiArIHRoaXMucG9vbFR5cGUgKyBcIiBoYXMgbm8gaW5zdGFuY2UgcHJvdmlkZXIuXCIpO1xyXG5cclxuICAgICAgICAgICAgICAgIGZvciAobGV0IGEgPSAwOyBhIDwgaW5zdGFuY2VzVG9DcmVhdGU7IGErKykge1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBuZXdJbnN0YW5jZTogb2JqZWN0ID0gdGhpcy5pbnN0YW5jZVByb3ZpZGVyLmdldEluc3RhbmNlKHRoaXMucG9vbFR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWRkKG5ld0luc3RhbmNlKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLmdldEluc3RhbmNlKCk7XHJcbiAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgIC8vSWYgbm90LCByZXR1cm4gbnVsbFxyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyByZXR1cm5JbnN0YW5jZSh2YWx1ZTogb2JqZWN0KSB7XHJcbiAgICAgICAgICAgIGlmICh0aGlzLmluc3RhbmNlc0luVXNlLmhhcyh2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIC8qIGlmICh2YWx1ZSBleHRlbmRzIElQb29sYWJsZSlcclxuICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAodmFsdWUgYXMgSVBvb2xhYmxlKS5SZXN0b3JlICgpO1xyXG4gICAgICAgICAgICAgICAgfSAqL1xyXG4gICAgICAgICAgICAgICAgKHZhbHVlIGFzIElQb29sYWJsZSkucmVzdG9yZSgpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNJblVzZS5kZWxldGUodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNBdmFpbGFibGUucHVzaCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyBjbGVhbigpIHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNBdmFpbGFibGUuY2xlYXIoKTtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW5jZXNJblVzZSA9IG5ldyBTZXQgPCBvYmplY3QgPiAoKTtcclxuICAgICAgICAgICAgdGhpcy5faW5zdGFuY2VDb3VudCA9IDA7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGF2YWlsYWJsZSgpOiBudW1iZXIge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5pbnN0YW5jZXNBdmFpbGFibGUuc2l6ZTtcclxuXHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcmVzdG9yZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5jbGVhbigpO1xyXG4gICAgICAgICAgICB0aGlzLnNpemUgPSAwO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHVibGljIHJldGFpbigpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JldGFpbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5pc1JldGFpbiA9IGZhbHNlO1xyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgLy8vIDxzdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBQZXJtYW5lbnRseSByZW1vdmVzIGFuIGluc3RhbmNlIGZyb20gdGhlIFBvb2xcclxuICAgICAgICAvLy8gPC9zdW1tYXJ5PlxyXG4gICAgICAgIC8vLyBJbiB0aGUgZXZlbnQgdGhhdCB0aGUgcmVtb3ZlZCBJbnN0YW5jZSBpcyBpbiB1c2UsIGl0IGlzIHJlbW92ZWQgZnJvbSBpbnN0YW5jZXNJblVzZS5cclxuICAgICAgICAvLy8gT3RoZXJ3aXNlLCBpdCBpcyBwcmVzdW1lZCBpbmFjdGl2ZSwgYW5kIHRoZSBuZXh0IGF2YWlsYWJsZSBvYmplY3QgaXMgcG9wcGVkIGZyb21cclxuICAgICAgICAvLy8gaW5zdGFuY2VzQXZhaWxhYmxlLlxyXG4gICAgICAgIC8vLyA8cGFyYW0gbmFtZT1cInZhbHVlXCI+QW4gaW5zdGFuY2UgdG8gcmVtb3ZlIHBlcm1hbmVudGx5IGZyb20gdGhlIFBvb2wuPC9wYXJhbT5cclxuICAgICAgICBwcm90ZWN0ZWQgcmVtb3ZlSW5zdGFuY2UodmFsdWU6IG9iamVjdCkge1xyXG4gICAgICAgICAgICB0aGlzLmZhaWxJZih2YWx1ZSAhPSB0aGlzLnBvb2xUeXBlLCBcIkF0dGVtcHQgdG8gcmVtb3ZlIGEgaW5zdGFuY2UgZnJvbSBhIHBvb2wgdGhhdCBpcyBvZiB0aGUgd3JvbmcgVHlwZTpcXG5cXHRcXHRQb29sIHR5cGU6IFwiICsgdGhpcy5wb29sVHlwZS50b1N0cmluZygpICsgXCJcXG5cXHRcXHRJbnN0YW5jZSB0eXBlOiBcIiArIHZhbHVlLnRvU3RyaW5nKCkpO1xyXG4gICAgICAgICAgICBpZiAodGhpcy5pbnN0YW5jZXNJblVzZS5oYXModmFsdWUpKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlc0luVXNlLmRlbGV0ZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLmluc3RhbmNlc0F2YWlsYWJsZS5wb3AoKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuXHJcbiAgICAgICAgcHJvdGVjdGVkIGZhaWxJZihjb25kaXRpb246IGJvb2xlYW4sIG1lc3NhZ2U6IHN0cmluZykge1xyXG4gICAgICAgICAgICBpZiAoY29uZGl0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobWVzc2FnZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbn0iXX0=

var ioc;
(function (ioc) {
    var NCommandBinder = /** @class */ (function () {
        function NCommandBinder() {
        }
        Object.defineProperty(NCommandBinder.prototype, "constructorName", {
            get: function () {
                return "ICommandBinder";
            },
            enumerable: true,
            configurable: true
        });
        return NCommandBinder;
    }());
    ioc.NCommandBinder = NCommandBinder;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21tYW5kL0lDb21tYW5kQmluZGVyLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLElBQVUsR0FBRyxDQVdaO0FBWEQsV0FBVSxHQUFHO0lBTVQ7UUFBQTtRQUlBLENBQUM7UUFIRyxzQkFBSSwyQ0FBZTtpQkFBbkI7Z0JBQ0ksT0FBTyxnQkFBZ0IsQ0FBQztZQUM1QixDQUFDOzs7V0FBQTtRQUNMLHFCQUFDO0lBQUQsQ0FKQSxBQUlDLElBQUE7SUFKWSxrQkFBYyxpQkFJMUIsQ0FBQTtBQUNMLENBQUMsRUFYUyxHQUFHLEtBQUgsR0FBRyxRQVdaIiwiZmlsZSI6IkNvbW1hbmQvSUNvbW1hbmRCaW5kZXIuanMiLCJzb3VyY2VzQ29udGVudCI6WyJuYW1lc3BhY2UgaW9jIHtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElDb21tYW5kQmluZGVyIHtcclxuICAgICAgICBiaW5kKGtleTogYW55KTogQ29tbWFuZEJpbmRpbmc7XHJcbiAgICAgICAgZ2V0UmF3QmluZGluZygpOiBJQmluZGluZztcclxuICAgIH1cclxuICAgIGV4cG9ydCBjbGFzcyBOQ29tbWFuZEJpbmRlciBpbXBsZW1lbnRzIElDb25zdHJ1Y3Rvck5hbWUge1xyXG4gICAgICAgIGdldCBjb25zdHJ1Y3Rvck5hbWUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIklDb21tYW5kQmluZGVyXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19

var ioc;
(function (ioc) {
    //注入状态类型枚举
    var CommandConst;
    (function (CommandConst) {
        /// Temporary marker for any pool instantiated by the CommandBinder
        CommandConst["COMMAND_POOL"] = "COMMAND_POOL";
    })(CommandConst = ioc.CommandConst || (ioc.CommandConst = {}));
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21tYW5kL0NvbW1hbmRDb25zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQSxJQUFVLEdBQUcsQ0FNWjtBQU5ELFdBQVUsR0FBRztJQUNULFVBQVU7SUFDVixJQUFZLFlBR1g7SUFIRCxXQUFZLFlBQVk7UUFDcEIsbUVBQW1FO1FBQ25FLDZDQUE2QixDQUFBO0lBQ2pDLENBQUMsRUFIVyxZQUFZLEdBQVosZ0JBQVksS0FBWixnQkFBWSxRQUd2QjtBQUNMLENBQUMsRUFOUyxHQUFHLEtBQUgsR0FBRyxRQU1aIiwiZmlsZSI6IkNvbW1hbmQvQ29tbWFuZENvbnN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGlvYyB7XHJcbiAgICAvL+azqOWFpeeKtuaAgeexu+Wei+aemuS4vlxyXG4gICAgZXhwb3J0IGVudW0gQ29tbWFuZENvbnN0IHtcclxuICAgICAgICAvLy8gVGVtcG9yYXJ5IG1hcmtlciBmb3IgYW55IHBvb2wgaW5zdGFudGlhdGVkIGJ5IHRoZSBDb21tYW5kQmluZGVyXHJcbiAgICAgICAgQ09NTUFORF9QT09MID0gXCJDT01NQU5EX1BPT0xcIixcclxuICAgIH1cclxufSJdfQ==

var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
/* import { Binding } from "../Bind/Binding"; */
var ioc;
(function (ioc) {
    var CommandBinding = /** @class */ (function (_super) {
        __extends(CommandBinding, _super);
        function CommandBinding() {
            return _super !== null && _super.apply(this, arguments) || this;
        }
        Object.defineProperty(CommandBinding.prototype, "isSequence", {
            get: function () {
                return this._isSequence;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(CommandBinding.prototype, "isOnce", {
            get: function () {
                return this._isOnce;
            },
            enumerable: true,
            configurable: true
        });
        CommandBinding.prototype.to = function (value) {
            return _super.prototype.to.call(this, value);
        };
        CommandBinding.prototype.toName = function (name) {
            return _super.prototype.toName.call(this, name);
        };
        /**
         * 是否进入池
         */
        CommandBinding.prototype.Pooled = function () {
            this.isPooled = true;
            this._resolver(this);
            return this;
        };
        return CommandBinding;
    }(ioc.Binding));
    ioc.CommandBinding = CommandBinding;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21tYW5kL0NvbW1hbmRCaW5kaW5nLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7QUFBQSxnREFBZ0Q7QUFDaEQsSUFBVSxHQUFHLENBOEJaO0FBOUJELFdBQVUsR0FBRztJQUNUO1FBQW9DLGtDQUFPO1FBQTNDOztRQTRCQSxDQUFDO1FBcEJHLHNCQUFXLHNDQUFVO2lCQUFyQjtnQkFDSSxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUE7WUFDM0IsQ0FBQzs7O1dBQUE7UUFDRCxzQkFBVyxrQ0FBTTtpQkFBakI7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsT0FBTyxDQUFDO1lBQ3hCLENBQUM7OztXQUFBO1FBQ00sMkJBQUUsR0FBVCxVQUFVLEtBQUs7WUFDWCxPQUFPLGlCQUFNLEVBQUUsWUFBQyxLQUFLLENBQW1CLENBQUE7UUFDNUMsQ0FBQztRQUNNLCtCQUFNLEdBQWIsVUFBYyxJQUFJO1lBQ2QsT0FBTyxpQkFBTSxNQUFNLFlBQUMsSUFBSSxDQUFtQixDQUFDO1FBQ2hELENBQUM7UUFDRDs7V0FFRztRQUNJLCtCQUFNLEdBQWI7WUFDSSxJQUFJLENBQUMsUUFBUSxHQUFHLElBQUksQ0FBQztZQUNyQixJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ3JCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDTCxxQkFBQztJQUFELENBNUJBLEFBNEJDLENBNUJtQyxJQUFBLE9BQU8sR0E0QjFDO0lBNUJZLGtCQUFjLGlCQTRCMUIsQ0FBQTtBQUNMLENBQUMsRUE5QlMsR0FBRyxLQUFILEdBQUcsUUE4QloiLCJmaWxlIjoiQ29tbWFuZC9Db21tYW5kQmluZGluZy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCB7IEJpbmRpbmcgfSBmcm9tIFwiLi4vQmluZC9CaW5kaW5nXCI7ICovXHJcbm5hbWVzcGFjZSBpb2Mge1xyXG4gICAgZXhwb3J0IGNsYXNzIENvbW1hbmRCaW5kaW5nIGV4dGVuZHMgQmluZGluZyB7XHJcbiAgICAgICAgLy/mmK/lkKblnKjmiafooYzluo/liJfkuK1cclxuICAgICAgICBwcm90ZWN0ZWQgX2lzU2VxdWVuY2U6IGJvb2xlYW47XHJcbiAgICAgICAgLy/mmK/lkKbku4XmiafooYzkuIDmrKFcclxuICAgICAgICBwcm90ZWN0ZWQgX2lzT25jZTogYm9vbGVhbjtcclxuICAgICAgICAvL+aYr+WQpuWcqOWvueixoeaxoOS4rVxyXG4gICAgICAgIHB1YmxpYyBpc1Bvb2xlZDogYm9vbGVhblxyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0IGlzU2VxdWVuY2UoKTogYm9vbGVhbiB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1NlcXVlbmNlXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBnZXQgaXNPbmNlKCk6IGJvb2xlYW4ge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNPbmNlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgdG8odmFsdWUpOiBDb21tYW5kQmluZGluZyB7XHJcbiAgICAgICAgICAgIHJldHVybiBzdXBlci50byh2YWx1ZSkgYXMgQ29tbWFuZEJpbmRpbmdcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHRvTmFtZShuYW1lKTogQ29tbWFuZEJpbmRpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIudG9OYW1lKG5hbWUpIGFzIENvbW1hbmRCaW5kaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvKipcclxuICAgICAgICAgKiDmmK/lkKbov5vlhaXmsaBcclxuICAgICAgICAgKi9cclxuICAgICAgICBwdWJsaWMgUG9vbGVkKCkge1xyXG4gICAgICAgICAgICB0aGlzLmlzUG9vbGVkID0gdHJ1ZTtcclxuICAgICAgICAgICAgdGhpcy5fcmVzb2x2ZXIodGhpcyk7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==

/* import {IBinding,Binding} from "../Bind/Binding"
import {NInjectBinder,IInjectBinder} from "../Injector/InjectBinder";
import {CommandBinding} from "./CommandBinding";
import {ISignal} from "../Signal/Signal"
import {InjectBinding} from "../Injector/InjectBinding";
import {ICommand,NCommand} from "./Command";
import {Pool} from "../Pool";
import {CommandConst} from "./CommandConst"
import {inject} from "../Injector/InjectDecorator";
import {Binder} from "../Bind/Binder";
import {ICommandBinder} from "./ICommandBinder"; */
//全局注入数据绑定器
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ioc;
(function (ioc) {
    /**
     * 指令绑定器
     */
    var CommandBinder = /** @class */ (function (_super) {
        __extends(CommandBinder, _super);
        function CommandBinder() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //指令池
            _this.pools = new Map();
            // Tracker for parallel commands in progress
            _this.activeCommands = new Set();
            // Tracker for sequences in progress
            _this.activeSequences = new Map();
            //是否使用池
            _this.usePooling = false;
            return _this;
        }
        CommandBinder.prototype.getPool = function (type) {
            if (this.pools.has(type))
                return this.pools.get(type);
            return null;
        };
        CommandBinder.prototype.resolver = function (binding) {
            var _this = this;
            _super.prototype.resolver.call(this, binding);
            if (this.usePooling && binding.isPooled) {
                if (binding.value != null) {
                    var that_1 = this;
                    //检查被绑定的值是否有效
                    var values = binding.value;
                    if (values.length === 0) {
                        values = [];
                        values.push(binding.value);
                    }
                    if (values && values.length > 0) {
                        values.forEach(function (value) {
                            //如果找不到对应的池则创建
                            if (that_1.pools.has(value) == false) {
                                var myPool = _this.makePoolFromType(value);
                                that_1.pools.set(value, myPool);
                            }
                        });
                    }
                }
            }
        };
        CommandBinder.prototype.makePoolFromType = function (type) {
            //池构造函数作为类型使用
            var poolType = type;
            //预制实例缓存
            this.injectBinder.bind(type).to(type);
            //获取一个池实例
            this.injectBinder.bind(ioc.Pool).to(ioc.Pool).toName(ioc.CommandConst.COMMAND_POOL);
            var pool = this.injectBinder.getInstance(ioc.Pool, ioc.CommandConst.COMMAND_POOL);
            this.injectBinder.unbind(ioc.Pool, ioc.CommandConst.COMMAND_POOL);
            pool.bind(poolType);
            return pool;
        };
        //绑定状态映射字典
        CommandBinder.prototype.getRawBinding = function () {
            return new ioc.CommandBinding(this.resolver.bind(this));
        };
        CommandBinder.prototype.bind = function (key) {
            return _super.prototype.bind.call(this, key);
        };
        //调用指令
        CommandBinder.prototype.invokeCommand = function (cmd, binding, args, depth) {
            var command = this.createCommand(cmd, args);
            command.sequenceId = depth;
            this.trackCommand(command, binding);
            this.executeCommand(command, args);
            return command;
        };
        //
        CommandBinder.prototype.createCommand = function (cmd, data) {
            var command = this.getCommand(cmd);
            if (command == null) {
                var msg = "A Command ";
                if (data != null) {
                    msg += "tied to data " + data.toString();
                }
                msg += " could not be instantiated.\nThis might be caused by a null pointer during instantiation or failing to override Execute (generally you shouldn't have constructor code in Commands).";
                throw new Error(msg);
            }
            command.data = data;
            return command;
        };
        //获取指令实例
        CommandBinder.prototype.getCommand = function (type) {
            //如果使用池则检查是否已经存在相应的实例
            if (this.usePooling && this.pools.has(type)) {
                var pool = this.pools.get(type);
                var command = pool.getInstance();
                //是否存在对应的实例
                if (command) {
                    //检查是否已经清理
                    if (command.isClean) {
                        this.injectBinder.getInjector().inject(command, false);
                        command.deploy();
                    }
                }
                else {
                    //获取实例
                    command = this.injectBinder.getInstance(type, null);
                    //为池添加实例缓存
                    pool.add(command);
                }
                return command;
            }
            else {
                this.injectBinder.bind(ioc.NCommand).to(type);
                var command = this.injectBinder.getInstance(ioc.NCommand, null);
                this.injectBinder.unbind(ioc.NCommand, null);
                return command;
            }
        };
        CommandBinder.prototype.trackCommand = function (command, binding) {
            if (binding.isSequence) {
                this.activeSequences.set(command, binding);
            }
            else {
                this.activeCommands.add(command);
            }
        };
        //执行指令
        CommandBinder.prototype.executeCommand = function (command, args) {
            if (command == null) {
                return;
            }
            command.execute.apply(command, args);
        };
        /**
         * 信号调用回掉函数
         * @param trigger 触发的信号
         * @param data 数据
         */
        CommandBinder.prototype.onDispose = function (trigger) {
            var args = [];
            for (var _i = 1; _i < arguments.length; _i++) {
                args[_i - 1] = arguments[_i];
            }
            //尝试获取绑定状态
            var binding = this.getBinding(trigger, null);
            if (binding != null) {
                //是否处于执行序列中
                if (binding.isSequence) {
                    //加入执行队列
                    this.next(binding, args, 0);
                }
                else {
                    //获取被绑定的指令对象
                    var values = binding.value;
                    var aa = values.length + 1;
                    for (var a = 0; a < aa; a++) {
                        this.next(binding, args, a);
                    }
                }
            }
        };
        //下一次即将执行的指令
        CommandBinder.prototype.next = function (binding, args, depth) {
            var values = binding.value;
            if (values.length === 0) {
                values = [];
                values.push(binding.value);
            }
            if (depth < values.length) {
                var cmd = values[depth];
                var command = this.invokeCommand(cmd, binding, args, depth);
                this.releaseCommand(command);
            }
            else {
                this.disposeOfSequencedData(args);
                //是否仅执行一次
                if (binding.isOnce) {
                    //解除绑定
                    this.unbind(binding, null);
                }
            }
        };
        //EventCommandBinder (and perhaps other sub-classes) use this method to dispose of the data in sequenced commands
        CommandBinder.prototype.disposeOfSequencedData = function (data) {
            //No-op. Override if necessary.
        };
        //释放指令，使其进入池
        CommandBinder.prototype.releaseCommand = function (command) {
            //有时会需要执行一些耗时的异步操作，如果指令被用户保持则不进行释放，默认情况下都是自动释放的
            if (!command.isRetain) {
                //使用构造函数作为类型
                var t = command.constructor;
                if (this.usePooling && this.pools.has(t)) {
                    this.pools.get(t).returnInstance(command);
                }
                if (this.activeCommands.has(command)) {
                    this.activeCommands.delete(command);
                }
                else if (this.activeSequences.has(command)) {
                    var binding = this.activeSequences.get(command);
                    var data = command.data;
                    this.activeSequences.delete(command);
                    this.next(binding, data, command.sequenceId + 1);
                }
            }
        };
        __decorate([
            ioc.inject(ioc.NInjectBinder)
        ], CommandBinder.prototype, "injectBinder", void 0);
        return CommandBinder;
    }(ioc.Binder));
    ioc.CommandBinder = CommandBinder;
    var SignalCommandBinder = /** @class */ (function (_super) {
        __extends(SignalCommandBinder, _super);
        function SignalCommandBinder() {
            var _this = _super !== null && _super.apply(this, arguments) || this;
            //启用池
            _this.usePooling = true;
            return _this;
        }
        //重写解析绑定状态函数
        SignalCommandBinder.prototype.resolveBinding = function (binding, key) {
            _super.prototype.resolveBinding.call(this, binding, key);
            //如果已经存在了则不能再次绑定
            if (this._bindings.has(key)) {
                var signal = key;
                signal.addListener(this.onDispose.bind(this)); //Do normal bits, then assign the commandlistener to be reactTo
            }
        };
        //重写绑定方法
        SignalCommandBinder.prototype.bind = function (value) {
            //获取绑定状态
            var binding = this.injectBinder.getBinding(value, null);
            var signal = null;
            //检查参数值是否为构造函数
            if (ioc.Binding.isConstructor(value)) {
                //如果尚未进行注入则注入一个单例
                if (binding == null) {
                    binding = this.injectBinder.bind(value);
                    binding.toSingleton();
                }
                signal = this.injectBinder.getInstance(value, null);
            }
            //如果信号存在则绑定信号，否则直接绑定值
            if (signal) {
                return _super.prototype.bind.call(this, signal);
            }
            else {
                return _super.prototype.bind.call(this, value);
            }
        };
        //重写获取绑定状态方法
        SignalCommandBinder.prototype.getBinding = function (key, name) {
            var signal;
            //检查键值是否为构造函数
            if (ioc.Binding.isConstructor(key)) {
                //参数应该是一个信号或信号的构造函数，而不是其他的值
                signal = this.injectBinder.getInstance(key, name);
            }
            else {
                //信号是一个实例
                signal = key;
            }
            return _super.prototype.getBinding.call(this, signal, name);
        };
        SignalCommandBinder.prototype.invokeCommand = function (cmd, binding, args, depth) {
            var signal = binding.key;
            var command = this.createCommandForSignal(cmd, args); //Special signal-only command creation
            command.sequenceId = depth;
            this.trackCommand(command, binding);
            this.executeCommand(command, args);
            return command;
        };
        // Create a Command and bind its injectable parameters to the Signal types
        SignalCommandBinder.prototype.createCommandForSignal = function (cmd, args) {
            var that = this;
            if (args != null) {
                var signalData = args;
                //Iterate each signal type, in order. 
                //Iterate values and find a match
                //If we cannot find a match, throw an error
                var injectedTypes = new Set();
                var values = [signalData];
                /* if(signalTypes&&signalTypes.length>0){
                signalTypes.forEach((type)=>{
                    if (!injectedTypes.has(type)) // Do not allow more than one injection of the same Type
                    {
                        let foundValue : boolean= false;
                        for(let i = 0;i<values.length;i++){
                            if (values[i] != null)
                            {
                                that.injectBinder.bind(type).toValue(values[i]).toInject(false);
                                injectedTypes.add(type);
                                //values[i]=null;
                                foundValue = true;
                                break;
                            }
                            else //Do not allow null injections
                            {
                                throw new Error("SignalCommandBinder attempted to bind a null value from a signal to Command: " + cmd.GetType() + " to type: " + type);
                            }
                        }
                        if (!foundValue)
                        {
                            throw new Error("Could not find an unused injectable value to inject in to Command: " + cmd.GetType() + " for Type: " + type);
                        }
                    }
                    else
                    {
                        throw new Error("SignalCommandBinder: You have attempted to map more than one value of type: " + type +
                            " in Command: " + cmd.GetType() + ". Only the first value of a type will be injected. You may want to place your values in a VO, instead.");
                    }
                })
                }*/
            }
            var command = that.getCommand(cmd);
            command.data = args;
            /*         if (signalTypes && signalTypes.length > 0) {
                        signalTypes.forEach((typeToRemove) => {
                            that.injectBinder.unbind(typeToRemove, null);
                        })
                    } */
            return command;
        };
        return SignalCommandBinder;
    }(CommandBinder));
    ioc.SignalCommandBinder = SignalCommandBinder;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21tYW5kL0NvbW1hbmRCaW5kZXIudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7Ozs7Ozs7bURBVW1EO0FBQ25ELFdBQVc7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O0FBRVgsSUFBVSxHQUFHLENBeVRaO0FBelRELFdBQVUsR0FBRztJQUNUOztPQUVHO0lBQ0g7UUFBbUMsaUNBQU07UUFBekM7WUFBQSxxRUFzTUM7WUFqTUcsS0FBSztZQUNLLFdBQUssR0FBd0IsSUFBSSxHQUFHLEVBQW9CLENBQUM7WUFFbkUsNENBQTRDO1lBQ2xDLG9CQUFjLEdBQW9CLElBQUksR0FBRyxFQUFnQixDQUFDO1lBQ3BFLG9DQUFvQztZQUMxQixxQkFBZSxHQUFxQyxJQUFJLEdBQUcsRUFBZ0MsQ0FBQztZQUN0RyxPQUFPO1lBQ0EsZ0JBQVUsR0FBWSxLQUFLLENBQUM7O1FBeUx2QyxDQUFDO1FBdkxVLCtCQUFPLEdBQWQsVUFBZSxJQUFZO1lBQ3ZCLElBQUksSUFBSSxDQUFDLEtBQUssQ0FBQyxHQUFHLENBQUMsSUFBSSxDQUFDO2dCQUNwQixPQUFPLElBQUksQ0FBQyxLQUFLLENBQUMsR0FBRyxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQ2hDLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFFTSxnQ0FBUSxHQUFmLFVBQWdCLE9BQWlCO1lBQWpDLGlCQXVCQztZQXRCRyxpQkFBTSxRQUFRLFlBQUMsT0FBTyxDQUFDLENBQUM7WUFDeEIsSUFBSSxJQUFJLENBQUMsVUFBVSxJQUFLLE9BQTBCLENBQUMsUUFBUSxFQUFFO2dCQUN6RCxJQUFJLE9BQU8sQ0FBQyxLQUFLLElBQUksSUFBSSxFQUFFO29CQUN2QixJQUFJLE1BQUksR0FBRyxJQUFJLENBQUM7b0JBQ2hCLGFBQWE7b0JBQ2IsSUFBSSxNQUFNLEdBQWEsT0FBTyxDQUFDLEtBQWlCLENBQUM7b0JBQ2pELElBQUksTUFBTSxDQUFDLE1BQU0sS0FBSyxDQUFDLEVBQUU7d0JBQ3JCLE1BQU0s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Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OzttQkE4Qkc7YUFDTjtZQUNELElBQUksT0FBTyxHQUFhLElBQUksQ0FBQyxVQUFVLENBQUMsR0FBRyxDQUFDLENBQUM7WUFDN0MsT0FBTyxDQUFDLElBQUksR0FBRyxJQUFJLENBQUM7WUFDcEI7Ozs7d0JBSVk7WUFDWixPQUFPLE9BQU8sQ0FBQztRQUNuQixDQUFDO1FBQ0wsMEJBQUM7SUFBRCxDQTdHQSxBQTZHQyxDQTdHd0MsYUFBYSxHQTZHckQ7SUE3R1ksdUJBQW1CLHNCQTZHL0IsQ0FBQTtBQUNMLENBQUMsRUF6VFMsR0FBRyxLQUFILEdBQUcsUUF5VFoiLCJmaWxlIjoiQ29tbWFuZC9Db21tYW5kQmluZGVyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW1wb3J0IHtJQmluZGluZyxCaW5kaW5nfSBmcm9tIFwiLi4vQmluZC9CaW5kaW5nXCJcclxuaW1wb3J0IHtOSW5qZWN0QmluZGVyLElJbmplY3RCaW5kZXJ9IGZyb20gXCIuLi9JbmplY3Rvci9JbmplY3RCaW5kZXJcIjtcclxuaW1wb3J0IHtDb21tYW5kQmluZGluZ30gZnJvbSBcIi4vQ29tbWFuZEJpbmRpbmdcIjtcclxuaW1wb3J0IHtJU2lnbmFsfSBmcm9tIFwiLi4vU2lnbmFsL1NpZ25hbFwiXHJcbmltcG9ydCB7SW5qZWN0QmluZGluZ30gZnJvbSBcIi4uL0luamVjdG9yL0luamVjdEJpbmRpbmdcIjtcclxuaW1wb3J0IHtJQ29tbWFuZCxOQ29tbWFuZH0gZnJvbSBcIi4vQ29tbWFuZFwiO1xyXG5pbXBvcnQge1Bvb2x9IGZyb20gXCIuLi9Qb29sXCI7XHJcbmltcG9ydCB7Q29tbWFuZENvbnN0fSBmcm9tIFwiLi9Db21tYW5kQ29uc3RcIlxyXG5pbXBvcnQge2luamVjdH0gZnJvbSBcIi4uL0luamVjdG9yL0luamVjdERlY29yYXRvclwiO1xyXG5pbXBvcnQge0JpbmRlcn0gZnJvbSBcIi4uL0JpbmQvQmluZGVyXCI7XHJcbmltcG9ydCB7SUNvbW1hbmRCaW5kZXJ9IGZyb20gXCIuL0lDb21tYW5kQmluZGVyXCI7ICovXHJcbi8v5YWo5bGA5rOo5YWl5pWw5o2u57uR5a6a5ZmoXHJcblxyXG5uYW1lc3BhY2UgaW9jIHtcclxuICAgIC8qKlxyXG4gICAgICog5oyH5Luk57uR5a6a5ZmoXHJcbiAgICAgKi9cclxuICAgIGV4cG9ydCBjbGFzcyBDb21tYW5kQmluZGVyIGV4dGVuZHMgQmluZGVyIGltcGxlbWVudHMgSUNvbW1hbmRCaW5kZXIge1xyXG4gICAgICAgIC8v5rOo5YWl57uR5a6a5ZmoXHJcbiAgICAgICAgQGluamVjdChOSW5qZWN0QmluZGVyKVxyXG4gICAgICAgIHB1YmxpYyBpbmplY3RCaW5kZXI6IElJbmplY3RCaW5kZXI7XHJcblxyXG4gICAgICAgIC8v5oyH5Luk5rGgXHJcbiAgICAgICAgcHJvdGVjdGVkIHBvb2xzOiBNYXAgPCBvYmplY3QsIFBvb2wgPj0gbmV3IE1hcCA8IG9iamVjdCwgUG9vbCA+ICgpO1xyXG5cclxuICAgICAgICAvLyBUcmFja2VyIGZvciBwYXJhbGxlbCBjb21tYW5kcyBpbiBwcm9ncmVzc1xyXG4gICAgICAgIHByb3RlY3RlZCBhY3RpdmVDb21tYW5kczogU2V0IDwgSUNvbW1hbmQgPj0gbmV3IFNldCA8IElDb21tYW5kID4gKCk7XHJcbiAgICAgICAgLy8gVHJhY2tlciBmb3Igc2VxdWVuY2VzIGluIHByb2dyZXNzXHJcbiAgICAgICAgcHJvdGVjdGVkIGFjdGl2ZVNlcXVlbmNlczogTWFwIDwgSUNvbW1hbmQsIENvbW1hbmRCaW5kaW5nID4gPSBuZXcgTWFwIDwgSUNvbW1hbmQsIENvbW1hbmRCaW5kaW5nID4gKCk7XHJcbiAgICAgICAgLy/mmK/lkKbkvb/nlKjmsaBcclxuICAgICAgICBwdWJsaWMgdXNlUG9vbGluZzogYm9vbGVhbiA9IGZhbHNlO1xyXG5cclxuICAgICAgICBwdWJsaWMgZ2V0UG9vbCh0eXBlOiBvYmplY3QpOiBQb29sIHtcclxuICAgICAgICAgICAgaWYgKHRoaXMucG9vbHMuaGFzKHR5cGUpKVxyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMucG9vbHMuZ2V0KHR5cGUpO1xyXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcclxuICAgICAgICB9XHJcblxyXG4gICAgICAgIHB1YmxpYyByZXNvbHZlcihiaW5kaW5nOiBJQmluZGluZykge1xyXG4gICAgICAgICAgICBzdXBlci5yZXNvbHZlcihiaW5kaW5nKTtcclxuICAgICAgICAgICAgaWYgKHRoaXMudXNlUG9vbGluZyAmJiAoYmluZGluZyBhcyBDb21tYW5kQmluZGluZykuaXNQb29sZWQpIHtcclxuICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nLnZhbHVlICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mo4Dmn6Xooqvnu5HlrprnmoTlgLzmmK/lkKbmnInmlYhcclxuICAgICAgICAgICAgICAgICAgICBsZXQgdmFsdWVzOiBvYmplY3RbXSA9IGJpbmRpbmcudmFsdWUgYXMgb2JqZWN0W107XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlcy5sZW5ndGggPT09IDApIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdmFsdWVzID0gW107XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHZhbHVlcy5wdXNoKGJpbmRpbmcudmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuXHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHZhbHVlcyAmJiB2YWx1ZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB2YWx1ZXMuZm9yRWFjaCgodmFsdWUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8v5aaC5p6c5om+5LiN5Yiw5a+55bqU55qE5rGg5YiZ5Yib5bu6XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodGhhdC5wb29scy5oYXModmFsdWUpID09IGZhbHNlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbGV0IG15UG9vbCA9IHRoaXMubWFrZVBvb2xGcm9tVHlwZSh2YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5wb29scy5zZXQodmFsdWUsIG15UG9vbCk7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgbWFrZVBvb2xGcm9tVHlwZSh0eXBlKTogUG9vbCB7XHJcbiAgICAgICAgICAgIC8v5rGg5p6E6YCg5Ye95pWw5L2c5Li657G75Z6L5L2/55SoXHJcbiAgICAgICAgICAgIGxldCBwb29sVHlwZSA9IHR5cGU7XHJcbiAgICAgICAgICAgIC8v6aKE5Yi25a6e5L6L57yT5a2YXHJcbiAgICAgICAgICAgIHRoaXMuaW5qZWN0QmluZGVyLmJpbmQodHlwZSkudG8odHlwZSk7XHJcblxyXG4gICAgICAgICAgICAvL+iOt+WPluS4gOS4quaxoOWunuS+i1xyXG4gICAgICAgICAgICB0aGlzLmluamVjdEJpbmRlci5iaW5kKFBvb2wpLnRvKFBvb2wpLnRvTmFtZShDb21tYW5kQ29uc3QuQ09NTUFORF9QT09MKTtcclxuICAgICAgICAgICAgbGV0IHBvb2w6IFBvb2wgPSB0aGlzLmluamVjdEJpbmRlci5nZXRJbnN0YW5jZShQb29sLCBDb21tYW5kQ29uc3QuQ09NTUFORF9QT09MKSBhcyBQb29sO1xyXG4gICAgICAgICAgICB0aGlzLmluamVjdEJpbmRlci51bmJpbmQoUG9vbCwgQ29tbWFuZENvbnN0LkNPTU1BTkRfUE9PTCk7XHJcbiAgICAgICAgICAgIHBvb2wuYmluZChwb29sVHlwZSk7XHJcblxyXG4gICAgICAgICAgICByZXR1cm4gcG9vbDtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/nu5HlrprnirbmgIHmmKDlsITlrZflhbhcclxuICAgICAgICBnZXRSYXdCaW5kaW5nKCk6IElCaW5kaW5nIHtcclxuICAgICAgICAgICAgcmV0dXJuIG5ldyBDb21tYW5kQmluZGluZyh0aGlzLnJlc29sdmVyLmJpbmQodGhpcykpO1xyXG4gICAgICAgIH1cclxuICAgICAgICBiaW5kKGtleTogYW55KTogQ29tbWFuZEJpbmRpbmcge1xyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuYmluZChrZXkpIGFzIENvbW1hbmRCaW5kaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+iwg+eUqOaMh+S7pFxyXG4gICAgICAgIHByb3RlY3RlZCBpbnZva2VDb21tYW5kKGNtZDogb2JqZWN0LCBiaW5kaW5nOiBDb21tYW5kQmluZGluZywgYXJncywgZGVwdGg6IG51bWJlcik6IElDb21tYW5kIHtcclxuICAgICAgICAgICAgbGV0IGNvbW1hbmQ6IElDb21tYW5kID0gdGhpcy5jcmVhdGVDb21tYW5kKGNtZCwgYXJncyk7XHJcbiAgICAgICAgICAgIGNvbW1hbmQuc2VxdWVuY2VJZCA9IGRlcHRoO1xyXG4gICAgICAgICAgICB0aGlzLnRyYWNrQ29tbWFuZChjb21tYW5kLCBiaW5kaW5nKTtcclxuICAgICAgICAgICAgdGhpcy5leGVjdXRlQ29tbWFuZChjb21tYW5kLCBhcmdzKTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8vXHJcbiAgICAgICAgcHJvdGVjdGVkIGNyZWF0ZUNvbW1hbmQoY21kOiBvYmplY3QsIGRhdGE6IG9iamVjdCk6IElDb21tYW5kIHtcclxuICAgICAgICAgICAgbGV0IGNvbW1hbmQ6IElDb21tYW5kID0gdGhpcy5nZXRDb21tYW5kKGNtZCk7XHJcblxyXG4gICAgICAgICAgICBpZiAoY29tbWFuZCA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgbXNnOiBzdHJpbmcgPSBcIkEgQ29tbWFuZCBcIjtcclxuICAgICAgICAgICAgICAgIGlmIChkYXRhICE9IG51bGwpIHtcclxuICAgICAgICAgICAgICAgICAgICBtc2cgKz0gXCJ0aWVkIHRvIGRhdGEgXCIgKyBkYXRhLnRvU3RyaW5nKCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBtc2cgKz0gXCIgY291bGQgbm90IGJlIGluc3RhbnRpYXRlZC5cXG5UaGlzIG1pZ2h0IGJlIGNhdXNlZCBieSBhIG51bGwgcG9pbnRlciBkdXJpbmcgaW5zdGFudGlhdGlvbiBvciBmYWlsaW5nIHRvIG92ZXJyaWRlIEV4ZWN1dGUgKGdlbmVyYWxseSB5b3Ugc2hvdWxkbid0IGhhdmUgY29uc3RydWN0b3IgY29kZSBpbiBDb21tYW5kcykuXCI7XHJcbiAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IobXNnKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgY29tbWFuZC5kYXRhID0gZGF0YTtcclxuICAgICAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v6I635Y+W5oyH5Luk5a6e5L6LXHJcbiAgICAgICAgcHJvdGVjdGVkIGdldENvbW1hbmQodHlwZTogb2JqZWN0KTogSUNvbW1hbmQge1xyXG4gICAgICAgICAgICAvL+WmguaenOS9v+eUqOaxoOWImeajgOafpeaYr+WQpuW3sue7j+WtmOWcqOebuOW6lOeahOWunuS+i1xyXG4gICAgICAgICAgICBpZiAodGhpcy51c2VQb29saW5nICYmIHRoaXMucG9vbHMuaGFzKHR5cGUpKSB7XHJcbiAgICAgICAgICAgICAgICBsZXQgcG9vbDogUG9vbCA9IHRoaXMucG9vbHMuZ2V0KHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbW1hbmQ6IElDb21tYW5kID0gcG9vbC5nZXRJbnN0YW5jZSgpIGFzIElDb21tYW5kO1xyXG4gICAgICAgICAgICAgICAgLy/mmK/lkKblrZjlnKjlr7nlupTnmoTlrp7kvotcclxuICAgICAgICAgICAgICAgIGlmIChjb21tYW5kKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mo4Dmn6XmmK/lkKblt7Lnu4/muIXnkIZcclxuICAgICAgICAgICAgICAgICAgICBpZiAoY29tbWFuZC5pc0NsZWFuKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0QmluZGVyLmdldEluamVjdG9yKCkuaW5qZWN0KGNvbW1hbmQsIGZhbHNlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgY29tbWFuZC5kZXBsb3koKTtcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6I635Y+W5a6e5L6LXHJcbiAgICAgICAgICAgICAgICAgICAgY29tbWFuZCA9IHRoaXMuaW5qZWN0QmluZGVyLmdldEluc3RhbmNlKHR5cGUsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5Li65rGg5re75Yqg5a6e5L6L57yT5a2YXHJcbiAgICAgICAgICAgICAgICAgICAgcG9vbC5hZGQoY29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gY29tbWFuZDtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuaW5qZWN0QmluZGVyLmJpbmQoTkNvbW1hbmQpLnRvKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgbGV0IGNvbW1hbmQ6IElDb21tYW5kID0gdGhpcy5pbmplY3RCaW5kZXIuZ2V0SW5zdGFuY2UoTkNvbW1hbmQsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5pbmplY3RCaW5kZXIudW5iaW5kKE5Db21tYW5kLCBudWxsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBjb21tYW5kO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCB0cmFja0NvbW1hbmQoY29tbWFuZDogSUNvbW1hbmQsIGJpbmRpbmc6IENvbW1hbmRCaW5kaW5nKSB7XHJcbiAgICAgICAgICAgIGlmIChiaW5kaW5nLmlzU2VxdWVuY2UpIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2VxdWVuY2VzLnNldChjb21tYW5kLCBiaW5kaW5nKTtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlQ29tbWFuZHMuYWRkKGNvbW1hbmQpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5omn6KGM5oyH5LukXHJcbiAgICAgICAgcHJvdGVjdGVkIGV4ZWN1dGVDb21tYW5kKGNvbW1hbmQ6IElDb21tYW5kLCBhcmdzKSB7XHJcbiAgICAgICAgICAgIGlmIChjb21tYW5kID09IG51bGwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybjtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBjb21tYW5kLmV4ZWN1dGUoLi4uYXJncyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOS/oeWPt+iwg+eUqOWbnuaOieWHveaVsFxyXG4gICAgICAgICAqIEBwYXJhbSB0cmlnZ2VyIOinpuWPkeeahOS/oeWPt1xyXG4gICAgICAgICAqIEBwYXJhbSBkYXRhIOaVsOaNrlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHB1YmxpYyBvbkRpc3Bvc2UodHJpZ2dlcjogb2JqZWN0LCAuLi5hcmdzKSB7XHJcbiAgICAgICAgICAgIC8v5bCd6K+V6I635Y+W57uR5a6a54q25oCBXHJcbiAgICAgICAgICAgIGxldCBiaW5kaW5nOiBDb21tYW5kQmluZGluZyA9IHRoaXMuZ2V0QmluZGluZyh0cmlnZ2VyLCBudWxsKSBhcyBDb21tYW5kQmluZGluZztcclxuICAgICAgICAgICAgaWYgKGJpbmRpbmcgIT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgLy/mmK/lkKblpITkuo7miafooYzluo/liJfkuK1cclxuICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nLmlzU2VxdWVuY2UpIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+WKoOWFpeaJp+ihjOmYn+WIl1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMubmV4dChiaW5kaW5nLCBhcmdzLCAwLCApO1xyXG4gICAgICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgICAgICAvL+iOt+WPluiiq+e7keWumueahOaMh+S7pOWvueixoVxyXG4gICAgICAgICAgICAgICAgICAgIGxldCB2YWx1ZXM6IG9iamVjdFtdID0gYmluZGluZy52YWx1ZSBhcyBvYmplY3RbXTtcclxuICAgICAgICAgICAgICAgICAgICBsZXQgYWEgPSB2YWx1ZXMubGVuZ3RoICsgMTtcclxuICAgICAgICAgICAgICAgICAgICBmb3IgKGxldCBhID0gMDsgYSA8IGFhOyBhKyspIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5uZXh0KGJpbmRpbmcsIGFyZ3MsIGEsICk7XHJcbiAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiL5LiA5qyh5Y2z5bCG5omn6KGM55qE5oyH5LukXHJcbiAgICAgICAgcHJvdGVjdGVkIG5leHQoYmluZGluZzogQ29tbWFuZEJpbmRpbmcsIGFyZ3MsIGRlcHRoOiBudW1iZXIpIHtcclxuICAgICAgICAgICAgbGV0IHZhbHVlczogb2JqZWN0W10gPSBiaW5kaW5nLnZhbHVlIGFzIG9iamVjdFtdO1xyXG4gICAgICAgICAgICBpZiAodmFsdWVzLmxlbmd0aCA9PT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdmFsdWVzID0gW107XHJcbiAgICAgICAgICAgICAgICB2YWx1ZXMucHVzaChiaW5kaW5nLnZhbHVlKTtcclxuICAgICAgICAgICAgfVxyXG5cclxuICAgICAgICAgICAgaWYgKGRlcHRoIDwgdmFsdWVzLmxlbmd0aCkge1xyXG4gICAgICAgICAgICAgICAgbGV0IGNtZCA9IHZhbHVlc1tkZXB0aF07XHJcbiAgICAgICAgICAgICAgICBsZXQgY29tbWFuZDogSUNvbW1hbmQgPSB0aGlzLmludm9rZUNvbW1hbmQoY21kLCBiaW5kaW5nLCBhcmdzLCBkZXB0aCk7XHJcbiAgICAgICAgICAgICAgICB0aGlzLnJlbGVhc2VDb21tYW5kKGNvbW1hbmQpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5kaXNwb3NlT2ZTZXF1ZW5jZWREYXRhKGFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgLy/mmK/lkKbku4XmiafooYzkuIDmrKFcclxuICAgICAgICAgICAgICAgIGlmIChiaW5kaW5nLmlzT25jZSkge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v6Kej6Zmk57uR5a6aXHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy51bmJpbmQoYmluZGluZywgbnVsbCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy9FdmVudENvbW1hbmRCaW5kZXIgKGFuZCBwZXJoYXBzIG90aGVyIHN1Yi1jbGFzc2VzKSB1c2UgdGhpcyBtZXRob2QgdG8gZGlzcG9zZSBvZiB0aGUgZGF0YSBpbiBzZXF1ZW5jZWQgY29tbWFuZHNcclxuICAgICAgICBwcm90ZWN0ZWQgZGlzcG9zZU9mU2VxdWVuY2VkRGF0YShkYXRhOiBvYmplY3QpIHtcclxuICAgICAgICAgICAgLy9Oby1vcC4gT3ZlcnJpZGUgaWYgbmVjZXNzYXJ5LlxyXG4gICAgICAgIH1cclxuICAgICAgICAvL+mHiuaUvuaMh+S7pO+8jOS9v+WFtui/m+WFpeaxoFxyXG4gICAgICAgIHB1YmxpYyByZWxlYXNlQ29tbWFuZChjb21tYW5kOiBJQ29tbWFuZCkge1xyXG4gICAgICAgICAgICAvL+acieaXtuS8mumcgOimgeaJp+ihjOS4gOS6m+iAl+aXtueahOW8guatpeaTjeS9nO+8jOWmguaenOaMh+S7pOiiq+eUqOaIt+S/neaMgeWImeS4jei/m+ihjOmHiuaUvu+8jOm7mOiupOaDheWGteS4i+mDveaYr+iHquWKqOmHiuaUvueahFxyXG4gICAgICAgICAgICBpZiAoIWNvbW1hbmQuaXNSZXRhaW4pIHtcclxuICAgICAgICAgICAgICAgIC8v5L2/55So5p6E6YCg5Ye95pWw5L2c5Li657G75Z6LXHJcbiAgICAgICAgICAgICAgICBsZXQgdCA9IGNvbW1hbmQuY29uc3RydWN0b3I7XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy51c2VQb29saW5nICYmIHRoaXMucG9vbHMuaGFzKHQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5wb29scy5nZXQodCkucmV0dXJuSW5zdGFuY2UoY29tbWFuZCk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAodGhpcy5hY3RpdmVDb21tYW5kcy5oYXMoY29tbWFuZCkpIHtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLmFjdGl2ZUNvbW1hbmRzLmRlbGV0ZShjb21tYW5kKTtcclxuICAgICAgICAgICAgICAgIH0gZWxzZSBpZiAodGhpcy5hY3RpdmVTZXF1ZW5jZXMuaGFzKGNvbW1hbmQpKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgbGV0IGJpbmRpbmc6IENvbW1hbmRCaW5kaW5nID0gdGhpcy5hY3RpdmVTZXF1ZW5jZXMuZ2V0KGNvbW1hbmQpO1xyXG4gICAgICAgICAgICAgICAgICAgIGxldCBkYXRhID0gY29tbWFuZC5kYXRhO1xyXG4gICAgICAgICAgICAgICAgICAgIHRoaXMuYWN0aXZlU2VxdWVuY2VzLmRlbGV0ZShjb21tYW5kKTtcclxuICAgICAgICAgICAgICAgICAgICB0aGlzLm5leHQoYmluZGluZywgZGF0YSwgY29tbWFuZC5zZXF1ZW5jZUlkICsgMSk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgY2xhc3MgU2lnbmFsQ29tbWFuZEJpbmRlciBleHRlbmRzIENvbW1hbmRCaW5kZXIge1xyXG4gICAgICAgIC8v5ZCv55So5rGgXHJcbiAgICAgICAgcHVibGljIHVzZVBvb2xpbmc6IGJvb2xlYW4gPSB0cnVlO1xyXG4gICAgICAgIC8v6YeN5YaZ6Kej5p6Q57uR5a6a54q25oCB5Ye95pWwXHJcbiAgICAgICAgcmVzb2x2ZUJpbmRpbmcoYmluZGluZzogSUJpbmRpbmcsIGtleTogYW55KSB7XHJcbiAgICAgICAgICAgIHN1cGVyLnJlc29sdmVCaW5kaW5nKGJpbmRpbmcsIGtleSk7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5bey57uP5a2Y5Zyo5LqG5YiZ5LiN6IO95YaN5qyh57uR5a6aXHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9iaW5kaW5ncy5oYXMoa2V5KSkge1xyXG4gICAgICAgICAgICAgICAgbGV0IHNpZ25hbDogSVNpZ25hbCA9IGtleTtcclxuICAgICAgICAgICAgICAgIHNpZ25hbC5hZGRMaXN0ZW5lcih0aGlzLm9uRGlzcG9zZS5iaW5kKHRoaXMpKTsgLy9EbyBub3JtYWwgYml0cywgdGhlbiBhc3NpZ24gdGhlIGNvbW1hbmRsaXN0ZW5lciB0byBiZSByZWFjdFRvXHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ph43lhpnnu5Hlrprmlrnms5VcclxuICAgICAgICBwdWJsaWMgYmluZCh2YWx1ZTogb2JqZWN0KTogQ29tbWFuZEJpbmRpbmcge1xyXG4gICAgICAgICAgICAvL+iOt+WPlue7keWumueKtuaAgVxyXG4gICAgICAgICAgICBsZXQgYmluZGluZzogSW5qZWN0QmluZGluZyA9IHRoaXMuaW5qZWN0QmluZGVyLmdldEJpbmRpbmcodmFsdWUsIG51bGwpO1xyXG4gICAgICAgICAgICBsZXQgc2lnbmFsOiBJU2lnbmFsID0gbnVsbDtcclxuICAgICAgICAgICAgLy/mo4Dmn6Xlj4LmlbDlgLzmmK/lkKbkuLrmnoTpgKDlh73mlbBcclxuICAgICAgICAgICAgaWYgKEJpbmRpbmcuaXNDb25zdHJ1Y3Rvcih2YWx1ZSkpIHtcclxuICAgICAgICAgICAgICAgIC8v5aaC5p6c5bCa5pyq6L+b6KGM5rOo5YWl5YiZ5rOo5YWl5LiA5Liq5Y2V5L6LXHJcbiAgICAgICAgICAgICAgICBpZiAoYmluZGluZyA9PSBudWxsKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYmluZGluZyA9IHRoaXMuaW5qZWN0QmluZGVyLmJpbmQodmFsdWUpO1xyXG4gICAgICAgICAgICAgICAgICAgIGJpbmRpbmcudG9TaW5nbGV0b24oKTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIHNpZ25hbCA9IHRoaXMuaW5qZWN0QmluZGVyLmdldEluc3RhbmNlKHZhbHVlLCBudWxsKSBhcyBJU2lnbmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5L+h5Y+35a2Y5Zyo5YiZ57uR5a6a5L+h5Y+377yM5ZCm5YiZ55u05o6l57uR5a6a5YC8XHJcbiAgICAgICAgICAgIGlmIChzaWduYWwpIHtcclxuICAgICAgICAgICAgICAgIHJldHVybiBzdXBlci5iaW5kKHNpZ25hbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gc3VwZXIuYmluZCh2YWx1ZSk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ph43lhpnojrflj5bnu5HlrprnirbmgIHmlrnms5VcclxuICAgICAgICBwdWJsaWMgZ2V0QmluZGluZyhrZXk6IGFueSwgbmFtZTogYW55KTogQ29tbWFuZEJpbmRpbmcge1xyXG4gICAgICAgICAgICBsZXQgc2lnbmFsO1xyXG4gICAgICAgICAgICAvL+ajgOafpemUruWAvOaYr+WQpuS4uuaehOmAoOWHveaVsFxyXG4gICAgICAgICAgICBpZiAoQmluZGluZy5pc0NvbnN0cnVjdG9yKGtleSkpIHtcclxuICAgICAgICAgICAgICAgIC8v5Y+C5pWw5bqU6K+l5piv5LiA5Liq5L+h5Y+35oiW5L+h5Y+355qE5p6E6YCg5Ye95pWw77yM6ICM5LiN5piv5YW25LuW55qE5YC8XHJcbiAgICAgICAgICAgICAgICBzaWduYWwgPSB0aGlzLmluamVjdEJpbmRlci5nZXRJbnN0YW5jZShrZXksIG5hbWUpO1xyXG4gICAgICAgICAgICB9IGVsc2Uge1xyXG4gICAgICAgICAgICAgICAgLy/kv6Hlj7fmmK/kuIDkuKrlrp7kvotcclxuICAgICAgICAgICAgICAgIHNpZ25hbCA9IGtleTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICByZXR1cm4gc3VwZXIuZ2V0QmluZGluZyhzaWduYWwsIG5hbWUpIGFzIENvbW1hbmRCaW5kaW5nO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgaW52b2tlQ29tbWFuZChjbWQsIGJpbmRpbmc6IENvbW1hbmRCaW5kaW5nLCBhcmdzLCBkZXB0aDogbnVtYmVyKTogSUNvbW1hbmQge1xyXG4gICAgICAgICAgICBsZXQgc2lnbmFsOiBJU2lnbmFsID0gYmluZGluZy5rZXk7XHJcbiAgICAgICAgICAgIGxldCBjb21tYW5kOiBJQ29tbWFuZCA9IHRoaXMuY3JlYXRlQ29tbWFuZEZvclNpZ25hbChjbWQsIGFyZ3MpOyAvL1NwZWNpYWwgc2lnbmFsLW9ubHkgY29tbWFuZCBjcmVhdGlvblxyXG4gICAgICAgICAgICBjb21tYW5kLnNlcXVlbmNlSWQgPSBkZXB0aDtcclxuICAgICAgICAgICAgdGhpcy50cmFja0NvbW1hbmQoY29tbWFuZCwgYmluZGluZyk7XHJcbiAgICAgICAgICAgIHRoaXMuZXhlY3V0ZUNvbW1hbmQoY29tbWFuZCwgYXJncyk7XHJcbiAgICAgICAgICAgIHJldHVybiBjb21tYW5kO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvLyBDcmVhdGUgYSBDb21tYW5kIGFuZCBiaW5kIGl0cyBpbmplY3RhYmxlIHBhcmFtZXRlcnMgdG8gdGhlIFNpZ25hbCB0eXBlc1xyXG4gICAgICAgIHByb3RlY3RlZCBjcmVhdGVDb21tYW5kRm9yU2lnbmFsKGNtZCwgYXJncyk6IElDb21tYW5kIHtcclxuICAgICAgICAgICAgbGV0IHRoYXQgPSB0aGlzO1xyXG5cclxuICAgICAgICAgICAgaWYgKGFyZ3MgIT0gbnVsbCkge1xyXG5cclxuICAgICAgICAgICAgICAgIGxldCBzaWduYWxEYXRhOiBbXSA9IGFyZ3MgYXNbXTtcclxuXHJcbiAgICAgICAgICAgICAgICAvL0l0ZXJhdGUgZWFjaCBzaWduYWwgdHlwZSwgaW4gb3JkZXIuIFxyXG4gICAgICAgICAgICAgICAgLy9JdGVyYXRlIHZhbHVlcyBhbmQgZmluZCBhIG1hdGNoXHJcbiAgICAgICAgICAgICAgICAvL0lmIHdlIGNhbm5vdCBmaW5kIGEgbWF0Y2gsIHRocm93IGFuIGVycm9yXHJcbiAgICAgICAgICAgICAgICBsZXQgaW5qZWN0ZWRUeXBlcyA9IG5ldyBTZXQgPCBhbnkgPiAoKTtcclxuICAgICAgICAgICAgICAgIGxldCB2YWx1ZXMgPSBbc2lnbmFsRGF0YV07XHJcblxyXG4gICAgICAgICAgICAgICAgLyogaWYoc2lnbmFsVHlwZXMmJnNpZ25hbFR5cGVzLmxlbmd0aD4wKXtcclxuICAgICAgICAgICAgICAgIHNpZ25hbFR5cGVzLmZvckVhY2goKHR5cGUpPT57XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKCFpbmplY3RlZFR5cGVzLmhhcyh0eXBlKSkgLy8gRG8gbm90IGFsbG93IG1vcmUgdGhhbiBvbmUgaW5qZWN0aW9uIG9mIHRoZSBzYW1lIFR5cGVcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBmb3VuZFZhbHVlIDogYm9vbGVhbj0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7aTx2YWx1ZXMubGVuZ3RoO2krKyl7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAodmFsdWVzW2ldICE9IG51bGwpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhhdC5pbmplY3RCaW5kZXIuYmluZCh0eXBlKS50b1ZhbHVlKHZhbHVlc1tpXSkudG9JbmplY3QoZmFsc2UpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGluamVjdGVkVHlwZXMuYWRkKHR5cGUpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vdmFsdWVzW2ldPW51bGw7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRWYWx1ZSA9IHRydWU7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBlbHNlIC8vRG8gbm90IGFsbG93IG51bGwgaW5qZWN0aW9uc1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIlNpZ25hbENvbW1hbmRCaW5kZXIgYXR0ZW1wdGVkIHRvIGJpbmQgYSBudWxsIHZhbHVlIGZyb20gYSBzaWduYWwgdG8gQ29tbWFuZDogXCIgKyBjbWQuR2V0VHlwZSgpICsgXCIgdG8gdHlwZTogXCIgKyB0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgICAgICBpZiAoIWZvdW5kVmFsdWUpXHJcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRocm93IG5ldyBFcnJvcihcIkNvdWxkIG5vdCBmaW5kIGFuIHVudXNlZCBpbmplY3RhYmxlIHZhbHVlIHRvIGluamVjdCBpbiB0byBDb21tYW5kOiBcIiArIGNtZC5HZXRUeXBlKCkgKyBcIiBmb3IgVHlwZTogXCIgKyB0eXBlKTtcclxuICAgICAgICAgICAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgICAgICBlbHNlXHJcbiAgICAgICAgICAgICAgICAgICAge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB0aHJvdyBuZXcgRXJyb3IoXCJTaWduYWxDb21tYW5kQmluZGVyOiBZb3UgaGF2ZSBhdHRlbXB0ZWQgdG8gbWFwIG1vcmUgdGhhbiBvbmUgdmFsdWUgb2YgdHlwZTogXCIgKyB0eXBlICtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFwiIGluIENvbW1hbmQ6IFwiICsgY21kLkdldFR5cGUoKSArIFwiLiBPbmx5IHRoZSBmaXJzdCB2YWx1ZSBvZiBhIHR5cGUgd2lsbCBiZSBpbmplY3RlZC4gWW91IG1heSB3YW50IHRvIHBsYWNlIHlvdXIgdmFsdWVzIGluIGEgVk8sIGluc3RlYWQuXCIpO1xyXG4gICAgICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgICAgICB9Ki9cclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICBsZXQgY29tbWFuZDogSUNvbW1hbmQgPSB0aGF0LmdldENvbW1hbmQoY21kKTtcclxuICAgICAgICAgICAgY29tbWFuZC5kYXRhID0gYXJncztcclxuICAgICAgICAgICAgLyogICAgICAgICBpZiAoc2lnbmFsVHlwZXMgJiYgc2lnbmFsVHlwZXMubGVuZ3RoID4gMCkge1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBzaWduYWxUeXBlcy5mb3JFYWNoKCh0eXBlVG9SZW1vdmUpID0+IHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoYXQuaW5qZWN0QmluZGVyLnVuYmluZCh0eXBlVG9SZW1vdmUsIG51bGwpO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICB9KVxyXG4gICAgICAgICAgICAgICAgICAgIH0gKi9cclxuICAgICAgICAgICAgcmV0dXJuIGNvbW1hbmQ7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19

var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var ioc;
(function (ioc) {
    var NCommand = /** @class */ (function () {
        function NCommand() {
        }
        Object.defineProperty(NCommand.prototype, "constructorName", {
            get: function () {
                return "ICommand";
            },
            enumerable: true,
            configurable: true
        });
        return NCommand;
    }());
    ioc.NCommand = NCommand;
    var Command = /** @class */ (function () {
        function Command() {
            this._clean = false;
            this._retain = false;
        }
        Command.prototype.deploy = function () {
            this._clean = false;
        };
        Command.prototype.clean = function () {
            this._clean = true;
        };
        Object.defineProperty(Command.prototype, "isClean", {
            get: function () {
                return this._clean;
            },
            enumerable: true,
            configurable: true
        });
        ;
        //保持指令
        Command.prototype.retain = function () {
            this._retain = true;
        };
        Command.prototype.release = function () {
            this._retain = false;
        };
        Object.defineProperty(Command.prototype, "isRetain", {
            get: function () {
                return this._retain;
            },
            enumerable: true,
            configurable: true
        });
        //重新释放
        Command.prototype.restore = function () {
            this.injectBinder.getInjector().uninject(this);
            this.clean();
        };
        //执行指令
        Command.prototype.execute = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
        };
        __decorate([
            ioc.inject(ioc.NInjectBinder)
        ], Command.prototype, "injectBinder", void 0);
        __decorate([
            ioc.inject(ioc.NCommandBinder)
        ], Command.prototype, "commandBinder", void 0);
        return Command;
    }());
    ioc.Command = Command;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db21tYW5kL0NvbW1hbmQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7O0FBQUEsSUFBVSxHQUFHLENBaUVaO0FBakVELFdBQVUsR0FBRztJQW1CVDtRQUFBO1FBSUEsQ0FBQztRQUhHLHNCQUFJLHFDQUFlO2lCQUFuQjtnQkFDSSxPQUFPLFVBQVUsQ0FBQztZQUN0QixDQUFDOzs7V0FBQTtRQUNMLGVBQUM7SUFBRCxDQUpBLEFBSUMsSUFBQTtJQUpZLFlBQVEsV0FJcEIsQ0FBQTtJQUNEO1FBQUE7WUFVWSxXQUFNLEdBQUcsS0FBSyxDQUFDO1lBVWYsWUFBTyxHQUFHLEtBQUssQ0FBQztRQW9CNUIsQ0FBQztRQTdCVSx3QkFBTSxHQUFiO1lBQ0ksSUFBSSxDQUFDLE1BQU0sR0FBRyxLQUFLLENBQUM7UUFDeEIsQ0FBQztRQUNNLHVCQUFLLEdBQVo7WUFDSSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQztRQUN2QixDQUFDO1FBQ0Qsc0JBQVcsNEJBQU87aUJBQWxCO2dCQUNJLE9BQU8sSUFBSSxDQUFDLE1BQU0sQ0FBQztZQUN2QixDQUFDOzs7V0FBQTtRQUFBLENBQUM7UUFFRixNQUFNO1FBQ0Msd0JBQU0sR0FBYjtZQUNJLElBQUksQ0FBQyxPQUFPLEdBQUcsSUFBSSxDQUFDO1FBQ3hCLENBQUM7UUFDTSx5QkFBTyxHQUFkO1lBQ0ksSUFBSSxDQUFDLE9BQU8sR0FBRyxLQUFLLENBQUE7UUFDeEIsQ0FBQztRQUNELHNCQUFXLDZCQUFRO2lCQUFuQjtnQkFDSSxPQUFPLElBQUksQ0FBQyxPQUFPLENBQUM7WUFDeEIsQ0FBQzs7O1dBQUE7UUFDRCxNQUFNO1FBQ0MseUJBQU8sR0FBZDtZQUNJLElBQUksQ0FBQyxZQUFZLENBQUMsV0FBVyxFQUFFLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxDQUFDO1lBQy9DLElBQUksQ0FBQyxLQUFLLEVBQUUsQ0FBQztRQUNqQixDQUFDO1FBQ0QsTUFBTTtRQUNDLHlCQUFPLEdBQWQ7WUFBZSxjQUFPO2lCQUFQLFVBQU8sRUFBUCxxQkFBTyxFQUFQLElBQU87Z0JBQVAseUJBQU87O1FBRXRCLENBQUM7UUFwQ0Q7WUFEQyxJQUFBLE1BQU0sQ0FBQyxJQUFBLGFBQWEsQ0FBQztxREFDYTtRQUduQztZQURDLElBQUEsTUFBTSxDQUFDLElBQUEsY0FBYyxDQUFDO3NEQUNjO1FBa0N6QyxjQUFDO0tBeENELEFBd0NDLElBQUE7SUF4Q1ksV0FBTyxVQXdDbkIsQ0FBQTtBQUNMLENBQUMsRUFqRVMsR0FBRyxLQUFILEdBQUcsUUFpRVoiLCJmaWxlIjoiQ29tbWFuZC9Db21tYW5kLmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGlvYyB7XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElDb21tYW5kIHtcclxuICAgICAgICBjb21tYW5kQmluZGVyOiBJQ29tbWFuZEJpbmRlcjtcclxuICAgICAgICBpbmplY3RCaW5kZXI6IElJbmplY3RCaW5kZXI7XHJcbiAgICAgICAgLy/miafooYzmjIfku6RcclxuICAgICAgICBleGVjdXRlKC4uLmFyZ3MpO1xyXG4gICAgICAgIC8v5pys5p2h5oyH5Luk55qE5pON5L2cSUTvvIznlKjkuo7lnKjpmJ/liJfkuK3lr7vmib7kuIvkuIDmnaHmjIfku6RcclxuICAgICAgICBzZXF1ZW5jZUlkOiBudW1iZXI7XHJcbiAgICAgICAgZGF0YTogYW55O1xyXG4gICAgICAgIGFyZ3M6IGFueTtcclxuICAgICAgICBkZXBsb3koKTtcclxuICAgICAgICBjbGVhbigpO1xyXG4gICAgICAgIGlzQ2xlYW46IGJvb2xlYW47XHJcbiAgICAgICAgaXNSZXRhaW46IGJvb2xlYW47XHJcbiAgICAgICAgLy/miafooYzlvILmraXmk43kvZzml7blj6/ku6Xkvb/nlKjkv53nlZnmjIfku6RcclxuICAgICAgICByZXRhaW4oKTtcclxuICAgICAgICAvL+mHiuaUvuiiq+W8guatpeaTjeS9nOmUgeWumueahOaMh+S7pFxyXG4gICAgICAgIHJlbGVhc2UoKTtcclxuICAgIH1cclxuICAgIGV4cG9ydCBjbGFzcyBOQ29tbWFuZCBpbXBsZW1lbnRzIElDb25zdHJ1Y3Rvck5hbWUge1xyXG4gICAgICAgIGdldCBjb25zdHJ1Y3Rvck5hbWUoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiBcIklDb21tYW5kXCI7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgZXhwb3J0IGNsYXNzIENvbW1hbmQgaW1wbGVtZW50cyBJQ29tbWFuZCB7XHJcbiAgICAgICAgLy8gVGhlIEluamVjdGlvbkJpbmRlciBmb3IgdGhpcyBDb250ZXh0XHJcbiAgICAgICAgQGluamVjdChOSW5qZWN0QmluZGVyKVxyXG4gICAgICAgIHB1YmxpYyBpbmplY3RCaW5kZXI6IElJbmplY3RCaW5kZXI7XHJcbiAgICAgICAgLy8gQmFjayByZWZlcmVuY2UgdG8gdGhlIENvbW1hbmRCaW5kZXIgdGhhdCBpbnN0YW50aWF0ZWQgdGhpcyBDb21tbWFuZFxyXG4gICAgICAgIEBpbmplY3QoTkNvbW1hbmRCaW5kZXIpXHJcbiAgICAgICAgcHVibGljIGNvbW1hbmRCaW5kZXI6IElDb21tYW5kQmluZGVyO1xyXG4gICAgICAgIHB1YmxpYyBzZXF1ZW5jZUlkO1xyXG4gICAgICAgIHB1YmxpYyBkYXRhO1xyXG4gICAgICAgIHB1YmxpYyBhcmdzO1xyXG4gICAgICAgIHByaXZhdGUgX2NsZWFuID0gZmFsc2U7XHJcbiAgICAgICAgcHVibGljIGRlcGxveSgpIHtcclxuICAgICAgICAgICAgdGhpcy5fY2xlYW4gPSBmYWxzZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGNsZWFuKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9jbGVhbiA9IHRydWU7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHB1YmxpYyBnZXQgaXNDbGVhbigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2NsZWFuO1xyXG4gICAgICAgIH07XHJcbiAgICAgICAgcHJpdmF0ZSBfcmV0YWluID0gZmFsc2U7XHJcbiAgICAgICAgLy/kv53mjIHmjIfku6RcclxuICAgICAgICBwdWJsaWMgcmV0YWluKCkge1xyXG4gICAgICAgICAgICB0aGlzLl9yZXRhaW4gPSB0cnVlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5fcmV0YWluID0gZmFsc2VcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGdldCBpc1JldGFpbigpOiBib29sZWFuIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3JldGFpbjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ph43mlrDph4rmlL5cclxuICAgICAgICBwdWJsaWMgcmVzdG9yZSgpIHtcclxuICAgICAgICAgICAgdGhpcy5pbmplY3RCaW5kZXIuZ2V0SW5qZWN0b3IoKS51bmluamVjdCh0aGlzKTtcclxuICAgICAgICAgICAgdGhpcy5jbGVhbigpO1xyXG4gICAgICAgIH1cclxuICAgICAgICAvL+aJp+ihjOaMh+S7pFxyXG4gICAgICAgIHB1YmxpYyBleGVjdXRlKC4uLmFyZ3MpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19

/* import {IRoot} from "./IRoot"
import {NInjectBinder,InjectBinder, IInjectBinder} from "../Injector/InjectBinder";
import {CommandBinder , SignalCommandBinder } from "../Command/CommandBinder";
import {IocError, IConstructorName} from "../IocConst"
import { NCommandBinder } from "../Command/ICommandBinder"; */
var ioc;
(function (ioc) {
    var NContext = /** @class */ (function () {
        function NContext() {
        }
        Object.defineProperty(NContext.prototype, "constructorName", {
            get: function () {
                return "IContext";
            },
            enumerable: true,
            configurable: true
        });
        return NContext;
    }());
    ioc.NContext = NContext;
    var Context = /** @class */ (function () {
        function Context(root) {
            if (Context.firstContext == null || Context.firstContext.getRoot() == null) {
                Context.firstContext = this;
                this.crossContextBinder = this.injectBinder;
            }
            else {
                Context.firstContext.addCrossContext(this);
            }
            //设置根节点
            this.setRoot(root);
            //添加核心
            this.addCore();
            //启动环境容器
            this.start();
        }
        Object.defineProperty(Context.prototype, "injectBinder", {
            //注入绑定器
            get: function () {
                if (!this._injectBinder) {
                    this._injectBinder = new ioc.InjectBinder();
                }
                return this._injectBinder;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Context.prototype, "crossContextBinder", {
            //这里使用注入绑定器代替全局绑定器
            get: function () {
                return this._crossContextBinder;
            },
            //设置全局注入绑定器
            set: function (value) {
                this._crossContextBinder = value;
            },
            enumerable: true,
            configurable: true
        });
        Object.defineProperty(Context.prototype, "commandBinder", {
            //指令绑定器
            get: function () {
                /*         //指令绑定器应该由注入产生
                        if(!this._commandBinder){
                            this._commandBinder = new CommandBinder();
                        } */
                return this._commandBinder;
            },
            enumerable: true,
            configurable: true
        });
        //获取根节点
        Context.prototype.getRoot = function () {
            return this.root;
        };
        //添加全局环境容器
        Context.prototype.addCrossContext = function (context) {
            //共用注入绑定器
            context.crossContextBinder = this.injectBinder;
            return this;
        };
        //移除全局环境容器
        Context.prototype.removeCrossContext = function (childContext) {
            /*         if (childContext.crossContextBinder != null)
                    {
                        childContext.crossContextBinder = null;
                    } */
        };
        /**
         * 设置根节点，只有构造类时可以指定根节点
         * @param root 根节点
         */
        Context.prototype.setRoot = function (root) {
            this.root = root;
            return this;
        };
        Context.prototype.restart = function () {
            this.addCore();
            this.start();
            //console.info("[重启Ioc容器]");
            return this;
        };
        Context.prototype.start = function () {
            this.instantiateCore();
            this.mapBindings();
            this.postBindings();
            this.launch();
            return this;
        };
        //启动容器
        Context.prototype.launch = function () {
            //console.info("Ioc容器启动");
        };
        /**
         * 初始化核心组件
         */
        Context.prototype.instantiateCore = function () {
            //实例化信号绑定器
            this._commandBinder = this.injectBinder.getInstance(ioc.NCommandBinder, null);
        };
        Context.prototype.mapBindings = function () {
        };
        Context.prototype.postBindings = function () {
        };
        Context.prototype.addCore = function () {
            //注入注入绑定器
            this.injectBinder.bind(ioc.NInjectBinder).toValue(this.injectBinder);
            //注入信号绑定器
            this.injectBinder.bind(ioc.NCommandBinder).to(ioc.SignalCommandBinder).toSingleton();
            //绑定环境容器
            this.injectBinder.bind(ioc.CommonEnum.Context).toValue(this);
            //绑定根节点
            this.injectBinder.bind(ioc.CommonEnum.Root).toValue(this.root);
        };
        return Context;
    }());
    ioc.Context = Context;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db250ZXh0L0NvbnRleHQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7Ozs7OERBSThEO0FBQzlELElBQVUsR0FBRyxDQXdJWjtBQXhJRCxXQUFVLEdBQUc7SUFlVDtRQUFBO1FBSUEsQ0FBQztRQUhHLHNCQUFJLHFDQUFlO2lCQUFuQjtnQkFDSSxPQUFPLFVBQVUsQ0FBQztZQUN0QixDQUFDOzs7V0FBQTtRQUNMLGVBQUM7SUFBRCxDQUpBLEFBSUMsSUFBQTtJQUpZLFlBQVEsV0FJcEIsQ0FBQTtJQUVEO1FBcUNJLGlCQUFZLElBQVc7WUFDbkIsSUFBSSxPQUFPLENBQUMsWUFBWSxJQUFJLElBQUksSUFBSSxPQUFPLENBQUMsWUFBWSxDQUFDLE9BQU8sRUFBRSxJQUFJLElBQUksRUFBRTtnQkFDeEUsT0FBTyxDQUFDLFlBQVksR0FBRyxJQUFJLENBQUM7Z0JBQzVCLElBQUksQ0FBQyxrQkFBa0IsR0FBRyxJQUFJLENBQUMsWUFBWSxDQUFDO2FBQy9DO2lCQUFNO2dCQUNILE9BQU8sQ0FBQyxZQUFZLENBQUMsZUFBZSxDQUFDLElBQUksQ0FBQyxDQUFDO2FBQzlDO1lBQ0QsT0FBTztZQUNQLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDbkIsTUFBTTtZQUNOLElBQUksQ0FBQyxPQUFPLEVBQUUsQ0FBQztZQUNmLFFBQVE7WUFDUixJQUFJLENBQUMsS0FBSyxFQUFFLENBQUM7UUFDakIsQ0FBQztRQTNDRCxzQkFBVyxpQ0FBWTtZQUR2QixPQUFPO2lCQUNQO2dCQUNJLElBQUksQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFO29CQUNyQixJQUFJLENBQUMsYUFBYSxHQUFHLElBQUksSUFBQSxZQUFZLEVBQUUsQ0FBQztpQkFDM0M7Z0JBQ0QsT0FBTyxJQUFJLENBQUMsYUFBYSxDQUFDO1lBQzlCLENBQUM7OztXQUFBO1FBRUQsc0JBQVcsdUNBQWtCO1lBRzdCLGtCQUFrQjtpQkFDbEI7Z0JBQ0ksT0FBTyxJQUFJLENBQUMsbUJBQW1CLENBQUM7WUFDcEMsQ0FBQztZQVBELFdBQVc7aUJBQ1gsVUFBOEIsS0FBSztnQkFDL0IsSUFBSSxDQUFDLG1CQUFtQixHQUFHLEtBQUssQ0FBQztZQUNyQyxDQUFDOzs7V0FBQTtRQU9ELHNCQUFXLGtDQUFhO1lBRHhCLE9BQU87aUJBQ1A7Z0JBQ0k7Ozs0QkFHWTtnQkFDWixPQUFPLElBQUksQ0FBQyxjQUFjLENBQUM7WUFDL0IsQ0FBQzs7O1dBQUE7UUFHRCxPQUFPO1FBQ1AseUJBQU8sR0FBUDtZQUNJLE9BQU8sSUFBSSxDQUFDLElBQUksQ0FBQztRQUNyQixDQUFDO1FBZ0JELFVBQVU7UUFDSCxpQ0FBZSxHQUF0QixVQUF1QixPQUFpQjtZQUNwQyxTQUFTO1lBQ1QsT0FBTyxDQUFDLGtCQUFrQixHQUFHLElBQUksQ0FBQyxZQUFZLENBQUM7WUFDL0MsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELFVBQVU7UUFDSCxvQ0FBa0IsR0FBekIsVUFBMEIsWUFBc0I7WUFDNUM7Ozt3QkFHWTtRQUNoQixDQUFDO1FBQ0Q7OztXQUdHO1FBQ0sseUJBQU8sR0FBZixVQUFnQixJQUFXO1lBQ3ZCLElBQUksQ0FBQyxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2pCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDTSx5QkFBTyxHQUFkO1lBQ0ksSUFBSSxDQUFDLE9BQU8sRUFBRSxDQUFDO1lBQ2YsSUFBSSxDQUFDLEtBQUssRUFBRSxDQUFDO1lBQ2IsNEJBQTRCO1lBQzVCLE9BQU8sSUFBSSxDQUFDO1FBQ2hCLENBQUM7UUFDTSx1QkFBSyxHQUFaO1lBQ0ksSUFBSSxDQUFDLGVBQWUsRUFBRSxDQUFDO1lBQ3ZCLElBQUksQ0FBQyxXQUFXLEVBQUUsQ0FBQztZQUNuQixJQUFJLENBQUMsWUFBWSxFQUFFLENBQUM7WUFDcEIsSUFBSSxDQUFDLE1BQU0sRUFBRSxDQUFDO1lBRWQsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNELE1BQU07UUFDQyx3QkFBTSxHQUFiO1lBQ0ksMEJBQTBCO1FBQzlCLENBQUM7UUFDRDs7V0FFRztRQUNPLGlDQUFlLEdBQXpCO1lBQ0ksVUFBVTtZQUNWLElBQUksQ0FBQyxjQUFjLEdBQUcsSUFBSSxDQUFDLFlBQVksQ0FBQyxXQUFXLENBQUMsSUFBQSxjQUFjLEVBQUUsSUFBSSxDQUFDLENBQUM7UUFDOUUsQ0FBQztRQUNTLDZCQUFXLEdBQXJCO1FBRUEsQ0FBQztRQUNTLDhCQUFZLEdBQXRCO1FBRUEsQ0FBQztRQUNTLHlCQUFPLEdBQWpCO1lBQ0ksU0FBUztZQUNULElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUEsYUFBYSxDQUFDLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxZQUFZLENBQUMsQ0FBQztZQUNqRSxTQUFTO1lBQ1QsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLENBQUMsSUFBQSxjQUFjLENBQUMsQ0FBQyxFQUFFLENBQUMsSUFBQSxtQkFBbUIsQ0FBQyxDQUFDLFdBQVcsRUFBRSxDQUFDO1lBQzdFLFFBQVE7WUFDUixJQUFJLENBQUMsWUFBWSxDQUFDLElBQUksQ0FBQyxJQUFBLFVBQVUsQ0FBQyxPQUFPLENBQUMsQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLENBQUM7WUFDekQsT0FBTztZQUNQLElBQUksQ0FBQyxZQUFZLENBQUMsSUFBSSxDQUFDLElBQUEsVUFBVSxDQUFDLElBQUksQ0FBQyxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsSUFBSSxDQUFDLENBQUM7UUFDL0QsQ0FBQztRQUVMLGNBQUM7SUFBRCxDQWxIQSxBQWtIQyxJQUFBO0lBbEhZLFdBQU8sVUFrSG5CLENBQUE7QUFDTCxDQUFDLEVBeElTLEdBQUcsS0FBSCxHQUFHLFFBd0laIiwiZmlsZSI6IkNvbnRleHQvQ29udGV4dC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCB7SVJvb3R9IGZyb20gXCIuL0lSb290XCJcclxuaW1wb3J0IHtOSW5qZWN0QmluZGVyLEluamVjdEJpbmRlciwgSUluamVjdEJpbmRlcn0gZnJvbSBcIi4uL0luamVjdG9yL0luamVjdEJpbmRlclwiO1xyXG5pbXBvcnQge0NvbW1hbmRCaW5kZXIgLCBTaWduYWxDb21tYW5kQmluZGVyIH0gZnJvbSBcIi4uL0NvbW1hbmQvQ29tbWFuZEJpbmRlclwiO1xyXG5pbXBvcnQge0lvY0Vycm9yLCBJQ29uc3RydWN0b3JOYW1lfSBmcm9tIFwiLi4vSW9jQ29uc3RcIlxyXG5pbXBvcnQgeyBOQ29tbWFuZEJpbmRlciB9IGZyb20gXCIuLi9Db21tYW5kL0lDb21tYW5kQmluZGVyXCI7ICovXHJcbm5hbWVzcGFjZSBpb2Mge1xyXG5cclxuICAgIGV4cG9ydCBpbnRlcmZhY2UgSUNvbnRleHQge1xyXG4gICAgICAgIHN0YXJ0KCk6IElDb250ZXh0O1xyXG4gICAgICAgIHJlc3RhcnQoKTogSUNvbnRleHQ7XHJcbiAgICAgICAgLy/lkK/liqhcclxuICAgICAgICBsYXVuY2goKTtcclxuICAgICAgICAvLy8gR2V0IHRoZSBDb250ZXh0Vmlld1xyXG4gICAgICAgIGdldFJvb3QoKTogYW55O1xyXG4gICAgICAgIC8vIFJlZ2lzdGVyIGEgbmV3IGNvbnRleHQgdG8gdGhpcyBvbmVcclxuICAgICAgICBhZGRDcm9zc0NvbnRleHQoY29udGV4dDogSUNvbnRleHQpOiBJQ29udGV4dDtcclxuICAgICAgICByZW1vdmVDcm9zc0NvbnRleHQoY29udGV4dDogSUNvbnRleHQpO1xyXG4gICAgICAgIC8v5YWx55So57uR5a6a5ZmoXHJcbiAgICAgICAgY3Jvc3NDb250ZXh0QmluZGVyOiBJSW5qZWN0QmluZGVyO1xyXG4gICAgfVxyXG4gICAgZXhwb3J0IGNsYXNzIE5Db250ZXh0IGltcGxlbWVudHMgSUNvbnN0cnVjdG9yTmFtZSB7XHJcbiAgICAgICAgZ2V0IGNvbnN0cnVjdG9yTmFtZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiSUNvbnRleHRcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIENvbnRleHQgaW1wbGVtZW50cyBJQ29udGV4dCB7XHJcbiAgICAgICAgLy/nrKzkuIDkuKrooqvliJvlu7rlh7rmnaXnmoTnjq/looPlrrnlmahcclxuICAgICAgICBwdWJsaWMgc3RhdGljIGZpcnN0Q29udGV4dDogSUNvbnRleHQ7XHJcbiAgICAgICAgLy/lupTor6Xku6Xms6jlhaXnmoTmlrnlvI/ojrflj5ZcclxuICAgICAgICBwcml2YXRlIF9pbmplY3RCaW5kZXI6IEluamVjdEJpbmRlcjtcclxuICAgICAgICBwcml2YXRlIF9jcm9zc0NvbnRleHRCaW5kZXI6IEluamVjdEJpbmRlcjtcclxuICAgICAgICAvL+azqOWFpee7keWumuWZqFxyXG4gICAgICAgIHB1YmxpYyBnZXQgaW5qZWN0QmluZGVyKCk6IEluamVjdEJpbmRlciB7XHJcbiAgICAgICAgICAgIGlmICghdGhpcy5faW5qZWN0QmluZGVyKSB7XHJcbiAgICAgICAgICAgICAgICB0aGlzLl9pbmplY3RCaW5kZXIgPSBuZXcgSW5qZWN0QmluZGVyKCk7XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2luamVjdEJpbmRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/orr7nva7lhajlsYDms6jlhaXnu5HlrprlmahcclxuICAgICAgICBwdWJsaWMgc2V0IGNyb3NzQ29udGV4dEJpbmRlcih2YWx1ZSkge1xyXG4gICAgICAgICAgICB0aGlzLl9jcm9zc0NvbnRleHRCaW5kZXIgPSB2YWx1ZTtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/ov5nph4zkvb/nlKjms6jlhaXnu5Hlrprlmajku6Pmm7/lhajlsYDnu5HlrprlmahcclxuICAgICAgICBwdWJsaWMgZ2V0IGNyb3NzQ29udGV4dEJpbmRlcigpIHtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2Nyb3NzQ29udGV4dEJpbmRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHJpdmF0ZSBfY29tbWFuZEJpbmRlcjogQ29tbWFuZEJpbmRlcjtcclxuICAgICAgICAvL+aMh+S7pOe7keWumuWZqFxyXG4gICAgICAgIHB1YmxpYyBnZXQgY29tbWFuZEJpbmRlcigpOiBDb21tYW5kQmluZGVyIHtcclxuICAgICAgICAgICAgLyogICAgICAgICAvL+aMh+S7pOe7keWumuWZqOW6lOivpeeUseazqOWFpeS6p+eUn1xyXG4gICAgICAgICAgICAgICAgICAgIGlmKCF0aGlzLl9jb21tYW5kQmluZGVyKXtcclxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fY29tbWFuZEJpbmRlciA9IG5ldyBDb21tYW5kQmluZGVyKCk7XHJcbiAgICAgICAgICAgICAgICAgICAgfSAqL1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fY29tbWFuZEJpbmRlcjtcclxuICAgICAgICB9XHJcbiAgICAgICAgLy/moLnoioLngrlcclxuICAgICAgICByb290OiBJUm9vdDtcclxuICAgICAgICAvL+iOt+WPluagueiKgueCuVxyXG4gICAgICAgIGdldFJvb3QoKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJvb3Q7XHJcbiAgICAgICAgfVxyXG5cclxuICAgICAgICBjb25zdHJ1Y3Rvcihyb290OiBJUm9vdCkge1xyXG4gICAgICAgICAgICBpZiAoQ29udGV4dC5maXJzdENvbnRleHQgPT0gbnVsbCB8fCBDb250ZXh0LmZpcnN0Q29udGV4dC5nZXRSb290KCkgPT0gbnVsbCkge1xyXG4gICAgICAgICAgICAgICAgQ29udGV4dC5maXJzdENvbnRleHQgPSB0aGlzO1xyXG4gICAgICAgICAgICAgICAgdGhpcy5jcm9zc0NvbnRleHRCaW5kZXIgPSB0aGlzLmluamVjdEJpbmRlcjtcclxuICAgICAgICAgICAgfSBlbHNlIHtcclxuICAgICAgICAgICAgICAgIENvbnRleHQuZmlyc3RDb250ZXh0LmFkZENyb3NzQ29udGV4dCh0aGlzKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+iuvue9ruagueiKgueCuVxyXG4gICAgICAgICAgICB0aGlzLnNldFJvb3Qocm9vdCk7XHJcbiAgICAgICAgICAgIC8v5re75Yqg5qC45b+DXHJcbiAgICAgICAgICAgIHRoaXMuYWRkQ29yZSgpO1xyXG4gICAgICAgICAgICAvL+WQr+WKqOeOr+Wig+WuueWZqFxyXG4gICAgICAgICAgICB0aGlzLnN0YXJ0KCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5re75Yqg5YWo5bGA546v5aKD5a655ZmoXHJcbiAgICAgICAgcHVibGljIGFkZENyb3NzQ29udGV4dChjb250ZXh0OiBJQ29udGV4dCk6IElDb250ZXh0IHtcclxuICAgICAgICAgICAgLy/lhbHnlKjms6jlhaXnu5HlrprlmahcclxuICAgICAgICAgICAgY29udGV4dC5jcm9zc0NvbnRleHRCaW5kZXIgPSB0aGlzLmluamVjdEJpbmRlcjtcclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v56e76Zmk5YWo5bGA546v5aKD5a655ZmoXHJcbiAgICAgICAgcHVibGljIHJlbW92ZUNyb3NzQ29udGV4dChjaGlsZENvbnRleHQ6IElDb250ZXh0KSB7XHJcbiAgICAgICAgICAgIC8qICAgICAgICAgaWYgKGNoaWxkQ29udGV4dC5jcm9zc0NvbnRleHRCaW5kZXIgIT0gbnVsbClcclxuICAgICAgICAgICAgICAgICAgICB7XHJcbiAgICAgICAgICAgICAgICAgICAgICAgIGNoaWxkQ29udGV4dC5jcm9zc0NvbnRleHRCaW5kZXIgPSBudWxsO1xyXG4gICAgICAgICAgICAgICAgICAgIH0gKi9cclxuICAgICAgICB9XHJcbiAgICAgICAgLyoqXHJcbiAgICAgICAgICog6K6+572u5qC56IqC54K577yM5Y+q5pyJ5p6E6YCg57G75pe25Y+v5Lul5oyH5a6a5qC56IqC54K5XHJcbiAgICAgICAgICogQHBhcmFtIHJvb3Qg5qC56IqC54K5XHJcbiAgICAgICAgICovXHJcbiAgICAgICAgcHJpdmF0ZSBzZXRSb290KHJvb3Q6IElSb290KTogSUNvbnRleHQge1xyXG4gICAgICAgICAgICB0aGlzLnJvb3QgPSByb290O1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHJlc3RhcnQoKTogSUNvbnRleHQge1xyXG4gICAgICAgICAgICB0aGlzLmFkZENvcmUoKTtcclxuICAgICAgICAgICAgdGhpcy5zdGFydCgpO1xyXG4gICAgICAgICAgICAvL2NvbnNvbGUuaW5mbyhcIlvph43lkK9Jb2PlrrnlmahdXCIpO1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHN0YXJ0KCk6IElDb250ZXh0IHtcclxuICAgICAgICAgICAgdGhpcy5pbnN0YW50aWF0ZUNvcmUoKTtcclxuICAgICAgICAgICAgdGhpcy5tYXBCaW5kaW5ncygpO1xyXG4gICAgICAgICAgICB0aGlzLnBvc3RCaW5kaW5ncygpO1xyXG4gICAgICAgICAgICB0aGlzLmxhdW5jaCgpO1xyXG5cclxuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5ZCv5Yqo5a655ZmoXHJcbiAgICAgICAgcHVibGljIGxhdW5jaCgpIHtcclxuICAgICAgICAgICAgLy9jb25zb2xlLmluZm8oXCJJb2PlrrnlmajlkK/liqhcIik7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8qKlxyXG4gICAgICAgICAqIOWIneWni+WMluaguOW/g+e7hOS7tlxyXG4gICAgICAgICAqL1xyXG4gICAgICAgIHByb3RlY3RlZCBpbnN0YW50aWF0ZUNvcmUoKSB7XHJcbiAgICAgICAgICAgIC8v5a6e5L6L5YyW5L+h5Y+357uR5a6a5ZmoXHJcbiAgICAgICAgICAgIHRoaXMuX2NvbW1hbmRCaW5kZXIgPSB0aGlzLmluamVjdEJpbmRlci5nZXRJbnN0YW5jZShOQ29tbWFuZEJpbmRlciwgbnVsbCk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCBtYXBCaW5kaW5ncygpIHtcclxuXHJcbiAgICAgICAgfVxyXG4gICAgICAgIHByb3RlY3RlZCBwb3N0QmluZGluZ3MoKSB7XHJcblxyXG4gICAgICAgIH1cclxuICAgICAgICBwcm90ZWN0ZWQgYWRkQ29yZSgpIHtcclxuICAgICAgICAgICAgLy/ms6jlhaXms6jlhaXnu5HlrprlmahcclxuICAgICAgICAgICAgdGhpcy5pbmplY3RCaW5kZXIuYmluZChOSW5qZWN0QmluZGVyKS50b1ZhbHVlKHRoaXMuaW5qZWN0QmluZGVyKTtcclxuICAgICAgICAgICAgLy/ms6jlhaXkv6Hlj7fnu5HlrprlmahcclxuICAgICAgICAgICAgdGhpcy5pbmplY3RCaW5kZXIuYmluZChOQ29tbWFuZEJpbmRlcikudG8oU2lnbmFsQ29tbWFuZEJpbmRlcikudG9TaW5nbGV0b24oKTtcclxuICAgICAgICAgICAgLy/nu5Hlrprnjq/looPlrrnlmahcclxuICAgICAgICAgICAgdGhpcy5pbmplY3RCaW5kZXIuYmluZChDb21tb25FbnVtLkNvbnRleHQpLnRvVmFsdWUodGhpcyk7XHJcbiAgICAgICAgICAgIC8v57uR5a6a5qC56IqC54K5XHJcbiAgICAgICAgICAgIHRoaXMuaW5qZWN0QmluZGVyLmJpbmQoQ29tbW9uRW51bS5Sb290KS50b1ZhbHVlKHRoaXMucm9vdCk7XHJcbiAgICAgICAgfVxyXG5cclxuICAgIH1cclxufSJdfQ==

/* import { IContext } from "./Context"
import { IConstructorName } from "../IocConst"; */
var ioc;
(function (ioc) {
    var NRoot = /** @class */ (function () {
        function NRoot() {
        }
        Object.defineProperty(NRoot.prototype, "constructorName", {
            get: function () {
                return "IRoot";
            },
            enumerable: true,
            configurable: true
        });
        return NRoot;
    }());
    ioc.NRoot = NRoot;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9Db250ZXh0L0lSb290LnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBO2tEQUNrRDtBQUNsRCxJQUFVLEdBQUcsQ0FVWjtBQVZELFdBQVUsR0FBRztJQUVUO1FBQUE7UUFJQSxDQUFDO1FBSEcsc0JBQUksa0NBQWU7aUJBQW5CO2dCQUNJLE9BQU8sT0FBTyxDQUFDO1lBQ25CLENBQUM7OztXQUFBO1FBQ0wsWUFBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBSlksU0FBSyxRQUlqQixDQUFBO0FBSUwsQ0FBQyxFQVZTLEdBQUcsS0FBSCxHQUFHLFFBVVoiLCJmaWxlIjoiQ29udGV4dC9JUm9vdC5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCB7IElDb250ZXh0IH0gZnJvbSBcIi4vQ29udGV4dFwiXHJcbmltcG9ydCB7IElDb25zdHJ1Y3Rvck5hbWUgfSBmcm9tIFwiLi4vSW9jQ29uc3RcIjsgKi9cclxubmFtZXNwYWNlIGlvYyB7XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIE5Sb290IGltcGxlbWVudHMgSUNvbnN0cnVjdG9yTmFtZSB7XHJcbiAgICAgICAgZ2V0IGNvbnN0cnVjdG9yTmFtZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiSVJvb3RcIjtcclxuICAgICAgICB9XHJcbiAgICB9XHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElSb290IHtcclxuICAgICAgICBjb250ZXh0OiBJQ29udGV4dDtcclxuICAgIH1cclxufSJdfQ==

/* import { DecoratorClassBinding } from "./DecoratorClassBinding"; */
var ioc;
(function (ioc) {
    /**
     * 存储装饰器获取的信息
     */
    var DecoratorClass = /** @class */ (function () {
        function DecoratorClass() {
        }
        Object.defineProperty(DecoratorClass.prototype, "list", {
            get: function () {
                return this._list;
            },
            set: function (value) {
                this._list = value;
            },
            enumerable: true,
            configurable: true
        });
        return DecoratorClass;
    }());
    ioc.DecoratorClass = DecoratorClass;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9EZWNvcmF0b3IvRGVjb3JhdG9yQ2xhc3MudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUEsc0VBQXNFO0FBQ3RFLElBQVUsR0FBRyxDQWVaO0FBZkQsV0FBVSxHQUFHO0lBRVQ7O09BRUc7SUFDSDtRQUFBO1FBU0EsQ0FBQztRQU5HLHNCQUFXLGdDQUFJO2lCQUFmO2dCQUNJLE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztZQUN0QixDQUFDO2lCQUNELFVBQWdCLEtBQThCO2dCQUMxQyxJQUFJLENBQUMsS0FBSyxHQUFHLEtBQUssQ0FBQztZQUN2QixDQUFDOzs7V0FIQTtRQUlMLHFCQUFDO0lBQUQsQ0FUQSxBQVNDLElBQUE7SUFUWSxrQkFBYyxpQkFTMUIsQ0FBQTtBQUNMLENBQUMsRUFmUyxHQUFHLEtBQUgsR0FBRyxRQWVaIiwiZmlsZSI6IkRlY29yYXRvci9EZWNvcmF0b3JDbGFzcy5qcyIsInNvdXJjZXNDb250ZW50IjpbIi8qIGltcG9ydCB7IERlY29yYXRvckNsYXNzQmluZGluZyB9IGZyb20gXCIuL0RlY29yYXRvckNsYXNzQmluZGluZ1wiOyAqL1xyXG5uYW1lc3BhY2UgaW9jIHtcclxuXHJcbiAgICAvKipcclxuICAgICAqIOWtmOWCqOijhemlsOWZqOiOt+WPlueahOS/oeaBr1xyXG4gICAgICovXHJcbiAgICBleHBvcnQgY2xhc3MgRGVjb3JhdG9yQ2xhc3Mge1xyXG4gICAgICAgIC8v5rOo5YWl5YiX6KGoXHJcbiAgICAgICAgcHJpdmF0ZSBfbGlzdDogRGVjb3JhdG9yQ2xhc3NCaW5kaW5nW107XHJcbiAgICAgICAgcHVibGljIGdldCBsaXN0KCkge1xyXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fbGlzdDtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIHNldCBsaXN0KHZhbHVlOiBEZWNvcmF0b3JDbGFzc0JpbmRpbmdbXSkge1xyXG4gICAgICAgICAgICB0aGlzLl9saXN0ID0gdmFsdWU7XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG59Il19



//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9JbmplY3Rvci9JbmplY3RDb25zdC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiIiwiZmlsZSI6IkluamVjdG9yL0luamVjdENvbnN0LmpzIiwic291cmNlc0NvbnRlbnQiOlsibmFtZXNwYWNlIGlvYyB7XHJcbiAgICBleHBvcnQgbW9kdWxlIEluamVjdENvbnN0IHtcclxuICAgICAgICAvL+azqOWFpeeKtuaAgeexu+Wei+aemuS4vlxyXG4gICAgICAgIGV4cG9ydCBjb25zdCBlbnVtIEJpbmRpbmdUeXBlIHtcclxuICAgICAgICAgICAgLy8g5q+P5qyh6YO95Lya5Yib5bu65LiA5Liq5paw55qE5a+56LGhXHJcbiAgICAgICAgICAgIERFRkFVTFQgPSBcIkRlZmF1bHRcIixcclxuXHJcbiAgICAgICAgICAgIC8vIOaAu+aYr+S9v+eUqOWQjOS4gOS4quWvueixoeWNleS+i1xyXG4gICAgICAgICAgICBTSU5HTEVUT04gPSBcIlNpbmdsZXRvblwiLFxyXG5cclxuICAgICAgICAgICAgLy8g5oC75piv55u45ZCM55qE5a+56LGh5L2G5Y+C5pWw5LiN5ZCMXHJcbiAgICAgICAgICAgIFZBTFVFID0gXCJWYWx1ZVwiLFxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==

/* import {IocError, IConstructorName} from "../IocConst" */
var ioc;
(function (ioc) {
    var NSignal = /** @class */ (function () {
        function NSignal() {
        }
        Object.defineProperty(NSignal.prototype, "constructorName", {
            get: function () {
                return "ISignal";
            },
            enumerable: true,
            configurable: true
        });
        ;
        return NSignal;
    }());
    ioc.NSignal = NSignal;
    var Signal = /** @class */ (function () {
        function Signal() {
            //回调监听
            this._listener = [];
            this._onceListener = [];
        }
        //执行信号
        Signal.prototype.dispatch = function () {
            var args = [];
            for (var _i = 0; _i < arguments.length; _i++) {
                args[_i] = arguments[_i];
            }
            var that = this;
            //如果存在回调函数
            if (that._listener && that._listener.length != 0) {
                this._listener.forEach(function (action) {
                    action.apply(void 0, [that].concat(args));
                });
            }
            //如果存在单次回调
            if (that._onceListener && that._onceListener.length != 0)
                this._listener.forEach(function (action) {
                    action.apply(void 0, [that].concat(args));
                });
            //清空单次执行的监听
            this._onceListener.length = 0;
        };
        Signal.prototype.addListener = function (callback) {
            this._listener = this.addUnique(this._listener, callback);
        };
        Signal.prototype.addOnceListener = function (callback) {
            this._onceListener = this.addUnique(this._onceListener, callback);
        };
        //清空监听
        Signal.prototype.removeAllListeners = function () {
            this._listener.length = 0;
            this._onceListener.length = 0;
        };
        //不重复添加
        Signal.prototype.addUnique = function (listeners, callback) {
            //检查监听回调是否存在
            if (listeners) {
                var isUnique = false;
                for (var i = 0; i < listeners.length; i++) {
                    //检查是否存在重复项
                    if (listeners[i] === callback) {
                        isUnique = true;
                        break;
                    }
                }
                if (!isUnique) {
                    //放入回调
                    listeners.push(callback);
                }
            }
            return listeners;
        };
        Signal.prototype.getTypes = function () {
            var retv = [];
            //retv.push(this);
            return retv;
        };
        return Signal;
    }());
    ioc.Signal = Signal;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TaWduYWwvU2lnbmFsLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQUFBLDREQUE0RDtBQUM1RCxJQUFVLEdBQUcsQ0EyRVo7QUEzRUQsV0FBVSxHQUFHO0lBV1Q7UUFBQTtRQUlBLENBQUM7UUFIRyxzQkFBSSxvQ0FBZTtpQkFBbkI7Z0JBQ0ksT0FBTyxTQUFTLENBQUM7WUFDckIsQ0FBQzs7O1dBQUE7UUFBQSxDQUFDO1FBQ04sY0FBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBSlksV0FBTyxVQUluQixDQUFBO0lBRUQ7UUFBQTtZQUVJLE1BQU07WUFDQyxjQUFTLEdBQWUsRUFBRSxDQUFDO1lBQzNCLGtCQUFhLEdBQWUsRUFBRSxDQUFDO1FBcUQxQyxDQUFDO1FBcERHLE1BQU07UUFDQyx5QkFBUSxHQUFmO1lBQWdCLGNBQU87aUJBQVAsVUFBTyxFQUFQLHFCQUFPLEVBQVAsSUFBTztnQkFBUCx5QkFBTzs7WUFDbkIsSUFBSSxJQUFJLEdBQUcsSUFBSSxDQUFDO1lBQ2hCLFVBQVU7WUFDVixJQUFJLElBQUksQ0FBQyxTQUFTLElBQUksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLElBQUksQ0FBQyxFQUFFO2dCQUM5QyxJQUFJLENBQUMsU0FBUyxDQUFDLE9BQU8sQ0FBQyxVQUFVLE1BQU07b0JBQ25DLE1BQU0sZ0JBQUMsSUFBSSxTQUFLLElBQUksR0FBRTtnQkFDMUIsQ0FBQyxDQUFDLENBQUE7YUFDTDtZQUNELFVBQVU7WUFDVixJQUFJLElBQUksQ0FBQyxhQUFhLElBQUksSUFBSSxDQUFDLGFBQWEsQ0FBQyxNQUFNLElBQUksQ0FBQztnQkFDcEQsSUFBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsVUFBVSxNQUFNO29CQUNuQyxNQUFNLGdCQUFDLElBQUksU0FBSyxJQUFJLEdBQUU7Z0JBQzFCLENBQUMsQ0FBQyxDQUFBO1lBQ04sV0FBVztZQUNYLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBQ00sNEJBQVcsR0FBbEIsVUFBbUIsUUFBa0I7WUFDakMsSUFBSSxDQUFDLFNBQVMsR0FBRyxJQUFJLENBQUMsU0FBUyxDQUFDLElBQUksQ0FBQyxTQUFTLEVBQUUsUUFBUSxDQUFDLENBQUM7UUFDOUQsQ0FBQztRQUNNLGdDQUFlLEdBQXRCLFVBQXVCLFFBQWtCO1lBQ3JDLElBQUksQ0FBQyxhQUFhLEdBQUcsSUFBSSxDQUFDLFNBQVMsQ0FBQyxJQUFJLENBQUMsYUFBYSxFQUFFLFFBQVEsQ0FBQyxDQUFDO1FBQ3RFLENBQUM7UUFDRCxNQUFNO1FBQ0MsbUNBQWtCLEdBQXpCO1lBQ0ksSUFBSSxDQUFDLFNBQVMsQ0FBQyxNQUFNLEdBQUcsQ0FBQyxDQUFDO1lBQzFCLElBQUksQ0FBQyxhQUFhLENBQUMsTUFBTSxHQUFHLENBQUMsQ0FBQztRQUNsQyxDQUFDO1FBQ0QsT0FBTztRQUNDLDBCQUFTLEdBQWpCLFVBQWtCLFNBQXFCLEVBQUUsUUFBa0I7WUFDdkQsWUFBWTtZQUNaLElBQUksU0FBUyxFQUFFO2dCQUNYLElBQUksUUFBUSxHQUFHLEtBQUssQ0FBQztnQkFDckIsS0FBSyxJQUFJLENBQUMsR0FBRyxDQUFDLEVBQUUsQ0FBQyxHQUFHLFNBQVMsQ0FBQyxNQUFNLEVBQUUsQ0FBQyxFQUFFLEVBQUU7b0JBQ3ZDLFdBQVc7b0JBQ1gsSUFBSSxTQUFTLENBQUMsQ0FBQyxDQUFDLEtBQUssUUFBUSxFQUFFO3dCQUMzQixRQUFRLEdBQUcsSUFBSSxDQUFDO3dCQUNoQixNQUFNO3FCQUNUO2lCQUNKO2dCQUNELElBQUksQ0FBQyxRQUFRLEVBQUU7b0JBQ1gsTUFBTTtvQkFDTixTQUFTLENBQUMsSUFBSSxDQUFDLFFBQVEsQ0FBQyxDQUFDO2lCQUM1QjthQUNKO1lBQ0QsT0FBTyxTQUFTLENBQUM7UUFDckIsQ0FBQztRQUNNLHlCQUFRLEdBQWY7WUFDSSxJQUFJLElBQUksR0FBRyxFQUFFLENBQUM7WUFDZCxrQkFBa0I7WUFDbEIsT0FBTyxJQUFJLENBQUM7UUFDaEIsQ0FBQztRQUNMLGFBQUM7SUFBRCxDQXpEQSxBQXlEQyxJQUFBO0lBekRZLFVBQU0sU0F5RGxCLENBQUE7QUFDTCxDQUFDLEVBM0VTLEdBQUcsS0FBSCxHQUFHLFFBMkVaIiwiZmlsZSI6IlNpZ25hbC9TaWduYWwuanMiLCJzb3VyY2VzQ29udGVudCI6WyIvKiBpbXBvcnQge0lvY0Vycm9yLCBJQ29uc3RydWN0b3JOYW1lfSBmcm9tIFwiLi4vSW9jQ29uc3RcIiAqL1xyXG5uYW1lc3BhY2UgaW9jIHtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTaWduYWwge1xyXG4gICAgICAgIG5hbWU7XHJcbiAgICAgICAgZGlzcGF0Y2goLi4uYXJncyk7XHJcbiAgICAgICAgYWRkTGlzdGVuZXIoY2FsbGJhY2s6IEZ1bmN0aW9uKTtcclxuICAgICAgICBhZGRPbmNlTGlzdGVuZXIoY2FsbGJhY2s6IEZ1bmN0aW9uKTtcclxuICAgICAgICByZW1vdmVBbGxMaXN0ZW5lcnMoKTtcclxuICAgICAgICAvLy8gUmV0dXJucyBhIExpc3Q8U3lzdGVtLlR5cGU+IHJlcHJlc2VudGluZyB0aGUgVHlwZXMgYmluZGFibGUgdG8gdGhpcyBTaWduYWxcclxuICAgICAgICBnZXRUeXBlcygpOiBvYmplY3RbXTtcclxuICAgIH1cclxuICAgIGV4cG9ydCBjbGFzcyBOU2lnbmFsIGltcGxlbWVudHMgSUNvbnN0cnVjdG9yTmFtZSB7XHJcbiAgICAgICAgZ2V0IGNvbnN0cnVjdG9yTmFtZSgpIHtcclxuICAgICAgICAgICAgcmV0dXJuIFwiSVNpZ25hbFwiO1xyXG4gICAgICAgIH07XHJcbiAgICB9XHJcblxyXG4gICAgZXhwb3J0IGNsYXNzIFNpZ25hbCBpbXBsZW1lbnRzIElTaWduYWwge1xyXG4gICAgICAgIHB1YmxpYyBuYW1lO1xyXG4gICAgICAgIC8v5Zue6LCD55uR5ZCsXHJcbiAgICAgICAgcHVibGljIF9saXN0ZW5lcjogRnVuY3Rpb25bXSA9IFtdO1xyXG4gICAgICAgIHB1YmxpYyBfb25jZUxpc3RlbmVyOiBGdW5jdGlvbltdID0gW107XHJcbiAgICAgICAgLy/miafooYzkv6Hlj7dcclxuICAgICAgICBwdWJsaWMgZGlzcGF0Y2goLi4uYXJncykge1xyXG4gICAgICAgICAgICBsZXQgdGhhdCA9IHRoaXM7XHJcbiAgICAgICAgICAgIC8v5aaC5p6c5a2Y5Zyo5Zue6LCD5Ye95pWwXHJcbiAgICAgICAgICAgIGlmICh0aGF0Ll9saXN0ZW5lciAmJiB0aGF0Ll9saXN0ZW5lci5sZW5ndGggIT0gMCkge1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXIuZm9yRWFjaChmdW5jdGlvbiAoYWN0aW9uKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgYWN0aW9uKHRoYXQsIC4uLmFyZ3MpO1xyXG4gICAgICAgICAgICAgICAgfSlcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvL+WmguaenOWtmOWcqOWNleasoeWbnuiwg1xyXG4gICAgICAgICAgICBpZiAodGhhdC5fb25jZUxpc3RlbmVyICYmIHRoYXQuX29uY2VMaXN0ZW5lci5sZW5ndGggIT0gMClcclxuICAgICAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVyLmZvckVhY2goZnVuY3Rpb24gKGFjdGlvbikge1xyXG4gICAgICAgICAgICAgICAgICAgIGFjdGlvbih0aGF0LCAuLi5hcmdzKTtcclxuICAgICAgICAgICAgICAgIH0pXHJcbiAgICAgICAgICAgIC8v5riF56m65Y2V5qyh5omn6KGM55qE55uR5ZCsXHJcbiAgICAgICAgICAgIHRoaXMuX29uY2VMaXN0ZW5lci5sZW5ndGggPSAwO1xyXG4gICAgICAgIH1cclxuICAgICAgICBwdWJsaWMgYWRkTGlzdGVuZXIoY2FsbGJhY2s6IEZ1bmN0aW9uKSB7XHJcbiAgICAgICAgICAgIHRoaXMuX2xpc3RlbmVyID0gdGhpcy5hZGRVbmlxdWUodGhpcy5fbGlzdGVuZXIsIGNhbGxiYWNrKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGFkZE9uY2VMaXN0ZW5lcihjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgdGhpcy5fb25jZUxpc3RlbmVyID0gdGhpcy5hZGRVbmlxdWUodGhpcy5fb25jZUxpc3RlbmVyLCBjYWxsYmFjayk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5riF56m655uR5ZCsXHJcbiAgICAgICAgcHVibGljIHJlbW92ZUFsbExpc3RlbmVycygpIHtcclxuICAgICAgICAgICAgdGhpcy5fbGlzdGVuZXIubGVuZ3RoID0gMDtcclxuICAgICAgICAgICAgdGhpcy5fb25jZUxpc3RlbmVyLmxlbmd0aCA9IDA7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIC8v5LiN6YeN5aSN5re75YqgXHJcbiAgICAgICAgcHJpdmF0ZSBhZGRVbmlxdWUobGlzdGVuZXJzOiBGdW5jdGlvbltdLCBjYWxsYmFjazogRnVuY3Rpb24pIHtcclxuICAgICAgICAgICAgLy/mo4Dmn6Xnm5HlkKzlm57osIPmmK/lkKblrZjlnKhcclxuICAgICAgICAgICAgaWYgKGxpc3RlbmVycykge1xyXG4gICAgICAgICAgICAgICAgbGV0IGlzVW5pcXVlID0gZmFsc2U7XHJcbiAgICAgICAgICAgICAgICBmb3IgKGxldCBpID0gMDsgaSA8IGxpc3RlbmVycy5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICAgICAgICAgIC8v5qOA5p+l5piv5ZCm5a2Y5Zyo6YeN5aSN6aG5XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKGxpc3RlbmVyc1tpXSA9PT0gY2FsbGJhY2spIHtcclxuICAgICAgICAgICAgICAgICAgICAgICAgaXNVbmlxdWUgPSB0cnVlO1xyXG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcclxuICAgICAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgICAgICBpZiAoIWlzVW5pcXVlKSB7XHJcbiAgICAgICAgICAgICAgICAgICAgLy/mlL7lhaXlm57osINcclxuICAgICAgICAgICAgICAgICAgICBsaXN0ZW5lcnMucHVzaChjYWxsYmFjayk7XHJcbiAgICAgICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgcmV0dXJuIGxpc3RlbmVycztcclxuICAgICAgICB9XHJcbiAgICAgICAgcHVibGljIGdldFR5cGVzKCk6IG9iamVjdFtdIHtcclxuICAgICAgICAgICAgbGV0IHJldHYgPSBbXTtcclxuICAgICAgICAgICAgLy9yZXR2LnB1c2godGhpcyk7XHJcbiAgICAgICAgICAgIHJldHVybiByZXR2O1xyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==

/* import { IConstructorName } from "../IocConst"
import { NSignal , Signal, ISignal } from "./Signal" */
var ioc;
(function (ioc) {
    var NSignalManager = /** @class */ (function () {
        function NSignalManager() {
        }
        Object.defineProperty(NSignalManager.prototype, "constructorName", {
            get: function () {
                return "ISignalManager";
            },
            enumerable: true,
            configurable: true
        });
        return NSignalManager;
    }());
    ioc.NSignalManager = NSignalManager;
    var SignalManager = /** @class */ (function () {
        function SignalManager() {
            //维护一个信号指令映射表，注意不再使用的信号应该及时释放掉
            this._signal_dic = new Map();
            this.info = "this is a signal manager";
        }
        SignalManager.prototype.get = function (symbol) {
            //检查全局信号字典内是否存在对应的信号名称或枚举
            if (this._signal_dic.has(symbol)) {
                //获取标志对应的信号
                return this._signal_dic.get(symbol);
            }
            else {
                //创建一个信号
                var _signal = new ioc.Signal();
                //如果使用字符串作为信号识别名，则将其绑定给信号
                if (typeof symbol == "string")
                    _signal.name = symbol;
                //设置根环境
                //_signal.setRoot(this._context.getRoot);
                //建立全局信号与标志值的映射关系
                this._signal_dic.set(symbol, _signal);
                return _signal;
            }
        };
        ;
        SignalManager.prototype.delete = function (symbol) {
            //检查全局信号字典内是否存在对应的信号名称或枚举
            if (this._signal_dic.has(symbol)) {
                //获取标志对应的信号
                return this._signal_dic.delete(symbol);
            }
        };
        return SignalManager;
    }());
    ioc.SignalManager = SignalManager;
})(ioc || (ioc = {}));

//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4uLy4uL3NyYy9TaWduYWwvU2lnbmFsTWFuYWdlci50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFBQTt1REFDdUQ7QUFDdkQsSUFBVSxHQUFHLENBNkNaO0FBN0NELFdBQVUsR0FBRztJQU9UO1FBQUE7UUFJQSxDQUFDO1FBSEcsc0JBQUksMkNBQWU7aUJBQW5CO2dCQUNJLE9BQU8sZ0JBQWdCLENBQUM7WUFDNUIsQ0FBQzs7O1dBQUE7UUFDTCxxQkFBQztJQUFELENBSkEsQUFJQyxJQUFBO0lBSlksa0JBQWMsaUJBSTFCLENBQUE7SUFDRDtRQUFBO1lBQ0ksOEJBQThCO1lBQzlCLGdCQUFXLEdBQ0EsSUFBSSxHQUFHLEVBQ04sQ0FBQztZQUNiLFNBQUksR0FBVywwQkFBMEIsQ0FBQztRQTJCOUMsQ0FBQztRQXpCVSwyQkFBRyxHQUFWLFVBQVcsTUFBTTtZQUNiLHlCQUF5QjtZQUN6QixJQUFJLElBQUksQ0FBQyxXQUFXLENBQUMsR0FBRyxDQUFDLE1BQU0sQ0FBQyxFQUFFO2dCQUM5QixXQUFXO2dCQUNYLE9BQU8sSUFBSSxDQUFDLFdBQVcsQ0FBQyxHQUFHLENBQUMsTUFBTSxDQUFDLENBQUM7YUFDdkM7aUJBQU07Z0JBQ0gsUUFBUTtnQkFDUixJQUFJLE9BQU8sR0FBRyxJQUFJLElBQUEsTUFBTSxFQUFFLENBQUM7Z0JBQzNCLHlCQUF5QjtnQkFDekIsSUFBSSxPQUFPLE1BQU0sSUFBSSxRQUFRO29CQUFFLE9BQU8sQ0FBQyxJQUFJLEdBQUcsTUFBTSxDQUFDO2dCQUNyRCxPQUFPO2dCQUNQLHlDQUF5QztnQkFDekMsaUJBQWlCO2dCQUNqQixJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLEVBQUUsT0FBTyxDQUFDLENBQUM7Z0JBQ3RDLE9BQU8sT0FBTyxDQUFDO2FBQ2xCO1FBQ0wsQ0FBQztRQUFBLENBQUM7UUFFSyw4QkFBTSxHQUFiLFVBQWMsTUFBTTtZQUNoQix5QkFBeUI7WUFDekIsSUFBSSxJQUFJLENBQUMsV0FBVyxDQUFDLEdBQUcsQ0FBQyxNQUFNLENBQUMsRUFBRTtnQkFDOUIsV0FBVztnQkFDWCxPQUFPLElBQUksQ0FBQyxXQUFXLENBQUMsTUFBTSxDQUFDLE1BQU0sQ0FBQyxDQUFDO2FBQzFDO1FBQ0wsQ0FBQztRQUNMLG9CQUFDO0lBQUQsQ0FoQ0EsQUFnQ0MsSUFBQTtJQWhDWSxpQkFBYSxnQkFnQ3pCLENBQUE7QUFDTCxDQUFDLEVBN0NTLEdBQUcsS0FBSCxHQUFHLFFBNkNaIiwiZmlsZSI6IlNpZ25hbC9TaWduYWxNYW5hZ2VyLmpzIiwic291cmNlc0NvbnRlbnQiOlsiLyogaW1wb3J0IHsgSUNvbnN0cnVjdG9yTmFtZSB9IGZyb20gXCIuLi9Jb2NDb25zdFwiXHJcbmltcG9ydCB7IE5TaWduYWwgLCBTaWduYWwsIElTaWduYWwgfSBmcm9tIFwiLi9TaWduYWxcIiAqL1xyXG5uYW1lc3BhY2UgaW9jIHtcclxuXHJcbiAgICBleHBvcnQgaW50ZXJmYWNlIElTaWduYWxNYW5hZ2VyIHtcclxuICAgICAgICBnZXQoc3ltYm9sKTogSVNpZ25hbDtcclxuICAgICAgICBkZWxldGUoc3ltYm9sKTtcclxuICAgICAgICBpbmZvOiBzdHJpbmc7XHJcbiAgICB9XHJcbiAgICBleHBvcnQgY2xhc3MgTlNpZ25hbE1hbmFnZXIgaW1wbGVtZW50cyBJQ29uc3RydWN0b3JOYW1lIHtcclxuICAgICAgICBnZXQgY29uc3RydWN0b3JOYW1lKCkge1xyXG4gICAgICAgICAgICByZXR1cm4gXCJJU2lnbmFsTWFuYWdlclwiO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGV4cG9ydCBjbGFzcyBTaWduYWxNYW5hZ2VyIGltcGxlbWVudHMgSVNpZ25hbE1hbmFnZXIge1xyXG4gICAgICAgIC8v57u05oqk5LiA5Liq5L+h5Y+35oyH5Luk5pig5bCE6KGo77yM5rOo5oSP5LiN5YaN5L2/55So55qE5L+h5Y+35bqU6K+l5Y+K5pe26YeK5pS+5o6JXHJcbiAgICAgICAgX3NpZ25hbF9kaWM6IE1hcCA8IGFueSxcclxuICAgICAgICBJU2lnbmFsID49IG5ldyBNYXAgPCBhbnksXHJcbiAgICAgICAgSVNpZ25hbCA+ICgpO1xyXG4gICAgICAgIGluZm86IHN0cmluZyA9IFwidGhpcyBpcyBhIHNpZ25hbCBtYW5hZ2VyXCI7XHJcblxyXG4gICAgICAgIHB1YmxpYyBnZXQoc3ltYm9sKTogSVNpZ25hbCB7XHJcbiAgICAgICAgICAgIC8v5qOA5p+l5YWo5bGA5L+h5Y+35a2X5YW45YaF5piv5ZCm5a2Y5Zyo5a+55bqU55qE5L+h5Y+35ZCN56ew5oiW5p6a5Li+XHJcbiAgICAgICAgICAgIGlmICh0aGlzLl9zaWduYWxfZGljLmhhcyhzeW1ib2wpKSB7XHJcbiAgICAgICAgICAgICAgICAvL+iOt+WPluagh+W/l+WvueW6lOeahOS/oeWPt1xyXG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3NpZ25hbF9kaWMuZ2V0KHN5bWJvbCk7XHJcbiAgICAgICAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgICAgICAgICAvL+WIm+W7uuS4gOS4quS/oeWPt1xyXG4gICAgICAgICAgICAgICAgbGV0IF9zaWduYWwgPSBuZXcgU2lnbmFsKCk7XHJcbiAgICAgICAgICAgICAgICAvL+WmguaenOS9v+eUqOWtl+espuS4suS9nOS4uuS/oeWPt+ivhuWIq+WQje+8jOWImeWwhuWFtue7keWumue7meS/oeWPt1xyXG4gICAgICAgICAgICAgICAgaWYgKHR5cGVvZiBzeW1ib2wgPT0gXCJzdHJpbmdcIikgX3NpZ25hbC5uYW1lID0gc3ltYm9sO1xyXG4gICAgICAgICAgICAgICAgLy/orr7nva7moLnnjq/looNcclxuICAgICAgICAgICAgICAgIC8vX3NpZ25hbC5zZXRSb290KHRoaXMuX2NvbnRleHQuZ2V0Um9vdCk7XHJcbiAgICAgICAgICAgICAgICAvL+W7uueri+WFqOWxgOS/oeWPt+S4juagh+W/l+WAvOeahOaYoOWwhOWFs+ezu1xyXG4gICAgICAgICAgICAgICAgdGhpcy5fc2lnbmFsX2RpYy5zZXQoc3ltYm9sLCBfc2lnbmFsKTtcclxuICAgICAgICAgICAgICAgIHJldHVybiBfc2lnbmFsO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfTtcclxuXHJcbiAgICAgICAgcHVibGljIGRlbGV0ZShzeW1ib2wpIHtcclxuICAgICAgICAgICAgLy/mo4Dmn6XlhajlsYDkv6Hlj7flrZflhbjlhoXmmK/lkKblrZjlnKjlr7nlupTnmoTkv6Hlj7flkI3np7DmiJbmnprkuL5cclxuICAgICAgICAgICAgaWYgKHRoaXMuX3NpZ25hbF9kaWMuaGFzKHN5bWJvbCkpIHtcclxuICAgICAgICAgICAgICAgIC8v6I635Y+W5qCH5b+X5a+55bqU55qE5L+h5Y+3XHJcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5fc2lnbmFsX2RpYy5kZWxldGUoc3ltYm9sKTtcclxuICAgICAgICAgICAgfVxyXG4gICAgICAgIH1cclxuICAgIH1cclxufSJdfQ==
