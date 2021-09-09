describe("Tests", () => {
    it("test", () => {
  Test.assertDeepEquals(divisors(15), [3, 5]);
  Test.assertDeepEquals(divisors(12), [2, 3, 4, 6]);
  Test.assertDeepEquals(divisors(13), "13 is prime");
    });
  });
  

function divisors(integer) {
  
    let div = []
    var j = 2
    for (var i = 0; i < integer; i++){
       if (integer %j == 0){
         div.push[i]
         j++
        }
      
    } 
    return div;
  };