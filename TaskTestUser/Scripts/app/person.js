function AppViewModel() {
    self = this;

    self.user = ko.validatedObservable({
        firstName: ko.observable("").extend({required: true}),
        lastName: ko.observable("").extend({ required: true }),
        middleName: ko.observable("").extend({ required: true })
    });

    self.submitHandler = function () {
        if (self.user.isValid()) {
            var userInfo = ko.toJS(self.user);
            $.ajax({
                url: 'http://localhost:43696/users/create',
                data: userInfo,
                type: 'POST',
                contentType: 'application/x-www-form-urlencoded'
            }).success(self.successHandler).error(self.errorHandler);
        }
        else {
            alert("Fill all fields!");
        }  
    };

    self.successHandler = function (data) {
        alert("Hello " + data.FirstName + "!");
    };

    self.errorHandler = function () {
        alert("Error!");
    };
};

ko.applyBindings(new AppViewModel());