import {defineStore} from 'pinia'
import {useStorage} from "@vueuse/core";

export const useStore = defineStore('main', {
    state: () => {
        return {
            products: [
                {
                    id: 1,
                    name: "Pashmina Hitam",
                    price: 30000,
                    description: "",
                    image: "https://down-id.img.susercontent.com/file/id-11134207-7qul0-lkg58v9ykyf661"
                },
                {
                    id: 2,
                    name: "Pashmina Biru",
                    description: "",
                    price: 30000,
                    image: "https://down-id.img.susercontent.com/file/id-11134207-7qul5-lkg58v9ymczmd3"
                },
                {
                    id: 3,
                    name: "Pashmina Abu-abu",
                    description: "",
                    price: 30000,
                    image: "https://down-id.img.susercontent.com/file/id-11134207-7qul1-lkhi0l94g0wk9b"
                },
                {
                    id: 4,
                    name: "Pashmina Hijau",
                    description: "",
                    price: 30000,
                    image: "https://down-id.img.susercontent.com/file/id-11134207-7qul5-lkg5abfkhqgae2"
                },
                {
                    id: 5,
                    name: "Pashmina Merah",
                    description: "",
                    price: 30000,
                    image: "https://down-id.img.susercontent.com/file/id-11134207-7qul7-lkg5d0j27haa84"
                },
                {
                    id: 6,
                    name: "Pashmina Pink",
                    description: "",
                    price: 30000,
                    image: "https://down-id.img.susercontent.com/file/id-11134207-7qul7-lkg5d0j2aaf6c4"
                },
                {
                    id: 7,
                    name: "Pashmina Ungu",
                    description: "",
                    price: 30000,
                    image: "https://down-id.img.susercontent.com/file/id-11134207-7qul8-lkg5d0j2ei4i57"
                },
                {
                    id: 8,
                    name: "Pashmina Orange",
                    description: "",
                    price: 30000,
                    image: "https://down-id.img.susercontent.com/file/id-11134207-7qul7-lkg5egx9ro9g17"
                },
                {
                    id: 9,
                    name: "Pashmina Coklat",
                    description: "",
                    price: 30000,
                    image: "https://down-id.img.susercontent.com/file/id-11134207-7quky-lkg5d0j2bozmc5"
                },
                {
                    id: 10,
                    name: "Pashmina Putih",
                    description: "",
                    price: 30000,
                    image: "https://down-id.img.susercontent.com/file/id-11134207-7qukx-lkg58v9yz03m24"
                }
            ],
            cart: useStorage('shoppingCart', [])
        }
    },
    actions: {
        addCart(product) {
            let itemIndex = this.cart.findIndex(item => item.id === product.id)
            if (itemIndex !== -1) {
                this.cart[itemIndex].quantity += product.quantity
            } else {
                this.cart.push(product)
            }
        },
        increaseCart(id) {
            let itemIndex = this.cart.findIndex(item => item.id === id)
            this.cart[itemIndex].quantity += 1
        },
        decreaseCart(id) {
            let itemIndex = this.cart.findIndex(item => item.id === id)
            if (this.cart[itemIndex].quantity <= 1) {
                this.removeCart(id)
            } else {
                this.cart[itemIndex].quantity -= 1
            }
        },
        removeCart(id) {
            let itemIndex = this.cart.findIndex(item => item.id === id)
            this.cart.splice(itemIndex, 1)
        }
    }
})
