AFRAME.registerComponent("marker-handler", {
    init: async function(){
        this.el.addEventListener("marker-found", ()=>{
            console.log("Marker Found!")
            handleMarkerFound();
        })
        this.el.addEventListener("marker-lost", ()=>{
            console.log("Marker Lost!")
            handleMarkerLost();
        })
    },
    // When Marker FOUND
    handleMarkerFound: function(){
        // Changing Button Visibility
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "flex"

        var ratingButton = document.getElementById("rating-button")
        var orderButton = document.getElementById("order-button")

        // Handling Click Events
        ratingButton.addEventListener("click", function(){
            swal({
                icon: "warning",
                title: "Rate Dish",
                text: "Work in progress..."
            })
        })

        orderButton.addEventListener("click", function(){
            swal({
                icon: "https://imgur.com/4NZ6uLY.jpg",
                title: "Thanks for order",
                text: "Your order will be served soon at your table"
            })
        })
    },
    // When Marker lOST
    handleMarkerLost: function(){
        // Changing Button Visibility
        var buttonDiv = document.getElementById("button-div")
        buttonDiv.style.display = "none"
    }
})