 /*
 to test the files, .spec.js extension is used. 
 spec means test the files
 for javascript files .spec.js and
 for typescript files .spec.ts
*/

 /*
 suits?
 group of specs
 group of test!

 we can organize our specs in suits.
 */ 

 /*
 describe is glbally acceptable. we dont need to write jasmine.describe
 describe("discription of suits", function() { 
     it("title of the spec", function() {

     })
 })
 */

 /*
 disabled specs means it is reported as pending specs and if any changes occurs in code
 it won't show any error or changes.
 if we wanna disabled any specs in suits, it is represented as "xit".
There can be hundreds of specs in suits so we wanna disabled all specs then
use "xdescribe". 
*/
/*
beforeEach: anything under this block executes before every specs.
*/
describe("calculator.js", function() {

    describe("calculator", function() {
        let calculator;
        let calculator2;
        beforeEach(function() {
            calculator = new Calculator();
            calculator2 = new Calculator();
        });
        afterEach(function() {
            /*anything under this block executes after every specs run */
        })
        it("instantiate the unique object", function() {
            const calculator = new Calculator();
            const calculator2 = new Calculator();
    
            expect(calculator).not.toBe(calculator2);
        });
        /*
        -> undefined
        1.A data that in not an object and has no methods.
        2.A value that is automatically assigned to the
         varialbe which has been just created.
        */
       it("opearations are defined", function() {
          
    
           expect(calculator.add).toBeDefined(); //not.toBeUndefined();
           expect(calculator.subtract).toBeDefined();
           expect(calculator.multiply).toBeDefined();
           expect(calculator.divide).toBeDefined(); 
           });
    
           /*
           -> null: intentional absence of value
           */
          it("can overwrite the total", function() {
            
    
              calculator.total = null;
              expect(calculator.total).toBeNull();
          })
    
          it("NaN", function() {
                
                calculator.total = 20;
                calculator.multiply("a");
    
                expect(calculator.total).toBeNaN();
           });
           describe("add()", function() {
            it("should add the numbers to the total", function() {
                
                calculator.add(5);
        
                expect(calculator.total).toBe(5);
        
            });
    
        })
        describe("subtract()", function() {

            it("should subtract from the total", function() {
                
                calculator.total =10;
                calculator.subtract(5);
        
                expect(calculator.total).toBe(5);
        
            });
        })    
        
        describe("multiply()",function() {
            it("should multiply total to the number", function() {
                
                calculator.total = 100;
                calculator.multiply(2);
        
                expect(calculator.total).toBe(200);
            });
        })
        
        describe("divide()",function() {
            it("should divide total by the numbers", function() {
                
                calculator.total = 100;
                calculator.divide(2);
        
                expect(calculator.total).toBe(50);
            });
        
        });
        describe("get version",  function() {
            it("fetch version from external sorce",async function(done) {
                spyOn(window, "fetch").and.returnValue(Promise.resolve(
                    new Response('{ "version": "0.1" }')
                ));
               const version= await calculator.version
                    expect(version).toBe("0.1");
                    done();
                
            })
           
        })
        
    }); 

    
        
    
        
    });
    