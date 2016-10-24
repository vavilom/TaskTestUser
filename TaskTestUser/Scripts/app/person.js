function AppViewModel() {
    self = this;
    self.user = {
        FirstName: ko.observable("FirstName"),
        LastName: ko.observable("LastName"),
        MiddleName: ko.observable("MiddleName")
    };

    self.submitHandler = function () {
        alert("test");
        var userInfo = ko.toJS(self.user);
        $.ajax({
            url: 'http://localhost:43696/users/create',
            data: userInfo,
            type: 'POST',
            contentType: 'application/x-www-form-urlencoded'
        }).success(self.successHandler).error(self.errorHandler);
    };

    self.successHandler = function (data) {
        alert("Hello ");
    };

    self.errorHandler = function () {
        alert("Error!");
    };
};

ko.applyBindings(new AppViewModel());