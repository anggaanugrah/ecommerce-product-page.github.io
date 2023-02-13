const removeCartItems = document.getElementsByClassName('btn-delete')

for(var i = 0; i < removeCartItems.length; i++) {
    const button = removeCartItems[i]
    button.addEventListener('click', function(event) {
        var buttonClicked = event.target
        buttonClicked.parentElement.parentElement.remove()
        removeCheckoutButton()
    })
}

function removeCheckoutButton() {
    const cartItemContainer = document.getElementsByClassName('cart-fill')[0]
    const cartItemList = cartItemContainer.getElementsByClassName('cart-item-list')

    for(var i = 0; i < cartItemList.length; i++) {
        const cartItem = cartItemList[i]
        
    }
    const buttonCheckOut = cartItemContainer.getElementsByClassName('btn-checkout')
    buttonCheckOut[0].remove()
}