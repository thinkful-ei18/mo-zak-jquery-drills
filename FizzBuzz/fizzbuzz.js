// your code here

function click()
{
    $('#number-chooser').on('submit',function(event){
        event.preventDefault();
        
        const num = $(this).find('#number-choice').val();


        for (let i = 1; i <= num; i++)
        {

        if (i % 15 === 0) 
        { 
            $('.js-results').append(`<div class="fizz-buzz-item fizzbuzz">
            <span>fizzbuzz</span></div>`);
        } 
        else if (i % 3 === 0) 
        { 
            $('.js-results').append(`<div class="fizz-buzz-item fizz">
            <span>fizz</span></div>`);
        } 
        else if (i % 5 === 0) 
        { 
            $('.js-results').append(`<div class="fizz-buzz-item buzz">
            <span>Buzz</span></div>`);
        }
        else
        {
            $('.js-results').append(`<div class="fizz-buzz-item">
            <span>${i}</span></div>`);
        }
    }
    })
}

$(function () {
    click();
  });