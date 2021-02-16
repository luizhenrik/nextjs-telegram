async function chats(request, response) {
  const data = {
    q2e3r6Zq: {
      name: 'Lorem Ipsum',
      userId: 'oxAhz',
      messages: [
        {
          type: 'sent',
          datetime: 12343545,
          text: 'Mussum Ipsum, cacilds vidis litro abertis. A ordem dos tratores não altera o pão duris. Per aumento de cachacis, eu reclamis. Paisis, filhis, espiritis santis. Detraxit consequat et quo num tendi nada.'
        },
        {
          type: 'received',
          datetime: 12343545,
          text: 'Manduma pindureta quium dia nois paga. Quem num gosta di mé, boa gentis num é. Suco de cevadiss, é um leite divinis, qui tem lupuliz, matis, aguis e fermentis. Mais vale um bebadis conhecidiss, que um alcoolatra anonimis.'
        }
      ]
    },
    q1e2r4Zq: {
      name: 'Lorem Ipsum 2',
      userId: 'mnhzAS',
      messages: [
        {
          type: 'sent',
          datetime: 12343545,
          text: 'Aenean aliquam molestie leo, vitae iaculis nisl. Cevadis im ampola pa arma uma pindureta. Atirei o pau no gatis, per gatis num morreus. Suco de cevadiss deixa as pessoas mais interessantis.'
        },
        {
          type: 'received',
          datetime: 12343545,
          text: 'Interessantiss quisso pudia ce receita de bolis, mais bolis eu num gostis. Nullam volutpat risus nec leo commodo, ut interdum diam laoreet. Sed non consequat odio. Não sou faixa preta cumpadi, sou preto inteiris, inteiris. Mauris nec dolor in eros commodo tempor. Aenean aliquam molestie leo, vitae iaculis nisl.'
        }
      ]
    }
  }

  response.status(200).json(data)
}

export default chats
