function $(selector) 
{
    const self =
    {
        element: document.querySelector(selector),
        html: ()=> self.element,

        on: (event,callback)=>{
            document.addEventListener(event, callback );
        },
        hide: ()=>{
            self.element.style.dispaly = "none"
        },
        attr: (name, value)=>{
            if (value == null){
                self.element.getAttribute(name);
            }
            else{
                self.element.setAttribute(name,value);
        }
        // return self;
        
        }
    };
    return self;   
}

$('h5').on("click",function(){
    alert("Clicked");
});
