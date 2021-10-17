class Contact {
    get id() {
        return this._id;
    }

    set id(id) {
        this._id = id;
    }
    get name() {
        return this._name;
    }

    set name(name) {
        let nameRegex = RegExp('^[A-Z]{1}[a-zA-Z]{3,}$');
        if (nameRegex.test(name)) {
            this._name = name;
        }
        else {
            throw "Name is Incorrect";
        }
    }
    get phoneNumber() {
        return this._phoneNumber;
    }

    set phoneNumber(phoneNumber) {
        const phoneNumberRegex = RegExp('^[0-9]{0,2}[789]{1}[0-9]{9}$');
        if (phoneNumberRegex.test(phoneNumber)) {
            this._phoneNumber = phoneNumber;
        }
        else {
            throw "phonenumber is Incorrect";
        }
    }
    get city() {
        return this._city;
    }

    set city(city) {
        let nameRegex = RegExp('^[a-zA-Z]{4,}$');
        if (nameRegex.test(city)) {
            this._city = city;
        }
        else {
            throw "city name is Incorrect";
        }

    }
    get state() {
        return this._state;
    }

    set state(state) {
        let nameRegex = RegExp('^[a-zA-Z]{4,}$');
        if (nameRegex.test(state)) {
            this._state = state;
        }
        else {
            throw "state name is Incorrect";
        }

    }
    get zip() {
        return this._zip;
    }

    set zip(zip) {
        const pincodeRegex = RegExp('^[0-9]{3}\\s?[0-9]{3}$');
        if (pincodeRegex.test(zip)) {
            this._zip = zip;
        }
        else {
            throw "zip is Incorrect";
        }
    }
    get address() { return this._address; }
    set address(address) {
        this._address = address;
    }
    toString() {
        return "id = " + this.id + " name = " + this.name + " phone number = " + this.phoneNumber + " city = " + this.city + "address = "+this.address+" state = " + this.state + " zip = " + this.zip ;
    }
}