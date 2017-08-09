 $('#search-beer-container button').on('click', function(e) {
                    e.preventDefault();
                    var beerName = $('#search-beer-container input').val()
                    var urlSearchBeer = 'https://quiet-inlet-67115.herokuapp.com/api/search/all?q=' + beerName
                    console.log(urlSearchBeer)
                    $.ajax({
                        url: urlSearchBeer,
                        success: function(data) {
                            var aBeerFound = data
                            var optionTpl = '<option value="<%BEER_ID%>"><%BEER_NAME%></option>'
                            // se agrega el mensaje disable selected para que no escoga la primera selección de los resultados en el option
                            var beerOptionsHtml = '<option disabled selected>Select your beer </option>'
                            console.log(aBeerFound)
                            aBeerFound.forEach(function(oDataBeer) {
                                var currentOption = optionTpl
                                    .replace('<%BEER_NAME%>', oDataBeer.name)
                                    .replace('<%BEER_ID%>', oDataBeer.id)
                                beerOptionsHtml += currentOption
                            })
                            $('#beer-selection').html(beerOptionsHtml)
                            $('#select-container').removeClass('hidden')
                            $('.description-container').addClass('hidden')

                        }
                    })
                })

                $('#beer-selection').on('change', function() {
                    var idBeer = $(this).val()
                    var urlBeerDescription = 'https://quiet-inlet-67115.herokuapp.com/api/beer/' + idBeer
                    console.log(urlBeerDescription)
                    $.ajax({
                        url: urlBeerDescription,
                        success: function(data) {
                            var aDescriptionFound = data.style.description
                            var pDescription = '<p>' + aDescriptionFound + '</p>'
                            if (data.labels) {
                                var beerImage = data.labels.medium
                            } else {
                                $(errorimage).html('<p>Upss!!, no image has found</p>')
                            }
                            console.log(beerImage)
                            //  console.log(aDescriptionFound) mirar si esta entrando a la api para mirar la info
                            $('#beer-description').html(pDescription)
                            $('.beer-image-html').attr('src', beerImage)
                            $('.description-container').removeClass('hidden')
                        }
                    })

                })



