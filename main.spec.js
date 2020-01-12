describe("main.js",function(){
    describe("calculate()",function(){
        it("validates expression when first first number is invalid",function() {
            spyOn(window, "updateResult");

            calculate("a+3");

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith("operation is not recognized")
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        })
        it("validates expression when second number is invalid",function() {
            spyOn(window, "updateResult");

            calculate("3+a");

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith("operation is not recognized")
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        })
        it("validates expression when operation in invalid",function() {
            spyOn(window, "updateResult");

            calculate("3_4");

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith("operation is not recognized")
            expect(window.updateResult).toHaveBeenCalledTimes(1);
        })

        it("calls add", function() {
            spyOn(Calculator.prototype, "add")

            calculate("3+4");
            
            expect(Calculator.prototype.add).toHaveBeenCalledTimes(2)        
        });
        it("calls subtract",function() {
            spyOn(Calculator.prototype, "subtract")

            calculate("3-4");
            
            expect(Calculator.prototype.subtract).toHaveBeenCalledTimes(1)        
        });
        it("calls multiply",function() {
            spyOn(Calculator.prototype, "multiply")

            calculate("3*4");
            
            expect(Calculator.prototype.multiply).toHaveBeenCalledTimes(1)        
        });
        it("calls divide",function() {
            spyOn(Calculator.prototype, "divide")

            calculate("3/4");
            
            expect(Calculator.prototype.divide).toHaveBeenCalledTimes(1)        
        }); 
        it("calls updateResult using(callThrough)", function() {
            spyOn(window , "updateResult");
            spyOn(Calculator.prototype, "multiply").and.callThrough();

            calculate("5*5");

            expect(window.updateResult).toHaveBeenCalled();
            expect(window.updateResult).toHaveBeenCalledWith(25);

        });
            
     
    });
    describe("updateResult",function(){
        afterAll(function() {
            const element = document.getElementById("result");

            document.body.removeChild(element)

        })
        it("add result to the DOM element",function() {
            const element = document.createElement("div");
            element.setAttribute("id", "result");

            document.body.appendChild(element)
            updateResult("5");

            expect(element.innerText).toBe("5");
        });
    })
    describe("showVersion", function() {
        it("calls document.version", function() {
            spyOn(document, "getElementById").and.returnValue({
                innerText : null
                
            });
           const spy =  spyOnProperty(Calculator.prototype, "version", "get").and.returnValue(
           Promise.resolve()
           )
            showVersion();
            expect(spy).toHaveBeenCalled();
        });
        
    });

});