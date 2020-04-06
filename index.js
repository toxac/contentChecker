"use strict";
const fkra = require('./algorithms/fkra');
const fre = require('./algorithms/fre')

function contentChecker(text) {
    var result = { fkra: null, fre: null }
    result.fkra = fkra(text);
    result.fre = fre(text)
    return result
}

const test = `
HOW TO CREATE A GOOD SLEEP ENVIRONMENT.

With the current Covid19 crisis that the world is facing, getting a good night’s sleep could be even harder than ever, given the additional stress you might be facing. Keep in mind however, that a good night’s rest goes a long way in helping you strengthen your immunity. So paying attention to it matters now more than ever. 

Today we bring you a few tips to help you create an optimum sleep environment - subtle changes that could help you sleep soundly through the night and wake up stronger - both mentally and physically - to cope with tomorrow’s problems.
The Impact of Temperature on Good Sleep.
The reason temperature plays an important role in the quality of your sleep is that as you get sleepy towards the end of the day, your body’s temperature naturally begins to drop, assisting it to go into ‘deep sleep’ mode. If the temperature of your sleep environment doesn’t support this natural phenomenon, you might not get the best quality of sleep, or worse, you might not be able to fall asleep at all!

Make sure the temperature in your bedroom is optimal for a good night’s sleep. Feeling too hot or too cold can keep you awake, dehydrate you and cause restless sleep.

The temperature recommended for good quality sleep is between 15 to 19 degrees Celcius, (59 to 66 degrees Fahrenheit) according to the National Sleep Foundation. However, since each person’s body is built differently, take cues from your body’s comfort levels and turn on a fan, remove or add blankets, or open or shut a window, to ensure that your body reaches the optimum temperature for a deep sleep. 
The Impact of Light on Good Sleep.
Because of the inbuilt clock our bodies have, light plays an important part in ensuring a good night’s sleep. Here’s how: When Melatonin, a hormone that induces sleep, is released, it sends a signal to your brain that it is time for your body to begin relaxing and getting ready to rest. 
Melatonin naturally begins to be secreted when sunlight begins to fade; however, if your body is exposed to light during the latter part of the evening, or at night, it can hamper the production of Melatonin, and subsequently affect your sleep as well. 
This is why sleeping with lights on is not recommended. As part of your bedtime routine, you could even try dimming the lights for a whole hour before you intend to sleep, to give your body’s natural way of getting ready for bed a helping hand. 

Shut off your TV and keep other screens like your phone, laptop or tablet away a full hour before you sleep. These gadgets emit a blue light that is particularly detrimental to sleep. Also ensure that your curtains or blinds are closed, so that light from outside doesn’t filter in, and if required, invest in ‘black out’ material to make sure that nothing gets through the fabric. Alternatively you could try out an eye mask made out of soft, flexible material.

If you are one of those people who simply cannot sleep in complete darkness, or you require some light at night to guide you should you wake up, choose a red or orange coloured night light - recommended as the best colours for inducing sleep.
`

console.log(contentChecker(test))