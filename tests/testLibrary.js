(function(exports) {

  function Assert () {

    this.isTrue = function (assertionToCheck) {
      if (!assertionToCheck) {
        throw new Error("Assertion failed: " + assertionToCheck + " is not truthy");
      }
      else {
        console.log("SUCCESS!");
      }
    };
  }

  exports.evaluation = new Assert();
  //console.log(exports.testing.isTrue(5 === 5));

})(this);