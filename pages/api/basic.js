async function api_basic(request, response) {
    response.json({
        menuBurger_isOpen: true
    })
}

export default api_basic