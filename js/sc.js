var Imployee = function() {
  this.name = 'xxx';
  this.lName = 'yyy';
};

Imployee.prototype.setName = function(name) {
  this.name = name;
  return this;
};


Imployee.prototype.setLastName = function(lname) {
  this.lName = lname;
  return this;
};

Imployee.prototype.save = function() {
  console.log(
    'saving ' + this.name + ' ' + this.lName + ' in  employee table...'
  );
  // save to database here...
  return this;
};

new Imployee().setName('Anas')
              .setLastName('Alpue')
              .save();