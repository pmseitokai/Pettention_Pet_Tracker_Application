pettention.service('Session', function(localStorageFactory) {
    this.create = function(username, password, firstname, lastname, nickname, gender, email, address, phone, picture) {
        console.log("service create Session");
        localStorageFactory.set('userdata', {
            username: username,
            password: password,
            firstname: firstname,
            lastname: lastname,
            nickname: nickname,
            gender: gender,
            email: email,
            address: address,
            phone: phone,
            picture: picture,
            login: true
        });
        // $localStorage.Userdata = {
        //     userId: userId,
        //     username: username,
        //     firstname: firstname,
        //     email: email,
        //     userRole: userRole,
        //     genrationid: genrationid,
        //     apikey: apikey,
        //     login: true
        // };
        return true;
        // console.log($sessionStorage);
    };
    this.destroy = function() {
        console.log("service destroy Session");
        localStorageFactory.remove('userdata');
        // delete $localStorage.Userdata;
        return true;
    };
});
pettention.factory('Scopes', function($rootScope) {
    var mem = {};

    return {
        store: function(key, value) {
            $rootScope.$emit('scope.stored', key);
            mem[key] = value;
        },
        get: function(key) {
            return mem[key];
        },
        getAll: function() {
            return mem;
        },
        removeFromKey: function(key) {
            delete mem[key];
        },
        destroy: function() {
            mem = {};
        }
    };
});
pettention.factory('localStorageFactory', function($rootScope) {

    return {
        add: function(storageName, key, value) { // for lst
            if (localStorage) {
                if (localStorage.getItem(storageName)) {
                    var object = JSON.parse(localStorage.getItem(storageName));

                    if (!object.index[key]) {
                        object[storageName].push(
                            value
                        );
                        object.index[key] = key;
                        localStorage.setItem(storageName, JSON.stringify(object));
                    }

                } else {
                    var object = {};
                    object[storageName] = [value];
                    object.index = {};
                    object.index[key] = key;
                    localStorage.setItem(storageName, JSON.stringify(object));
                }
            }
        },
        removeFromKey: function(storageName, key, value) { // for lst
            if (localStorage) {
                var object = JSON.parse(localStorage.getItem(storageName));
                if (object.index[value]) {
                    delete object.index[value];
                    object[storageName] = jQuery.grep(
                        object[storageName],
                        function(_item, index) {
                            return _item[key] != value;
                        }
                    );
                    localStorage.setItem(storageName, JSON.stringify(object));
                }

            }
        },
        isFromKey: function(storageName, key) { // for lst
            if (localStorage && localStorage.getItem(storageName)) {
                var object = JSON.parse(localStorage.getItem(storageName));
                if (object.index[key]) {
                    return true;
                }
            }
            return false;
        },
        isKey: function(storageName) {
            if (localStorage && localStorage.getItem(storageName)) {
                return true;
            }
            return false;
        },
        set: function(storageName, value) {
            if (localStorage) {
                localStorage.setItem(storageName, JSON.stringify(value));
            }
        },
        get: function(storageName) {
            if (localStorage && localStorage.getItem(storageName)) {
                var object = JSON.parse(localStorage.getItem(storageName));
                return object;
            }
            return {};
        },
        remove: function(storageName) {
            if (localStorage && localStorage.getItem(storageName)) {
                localStorage.removeItem(storageName);
            }
        }
    };
});
