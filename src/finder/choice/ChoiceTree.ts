import { Choice } from "./choice.models";

const directionalChoice = new Choice('Irány elképzelés', '');
const levelChoice: Choice = new Choice('Szint tartó', '');
const nonDirectional: Choice = new Choice('Iránymentes', '');

directionalChoice
    .addNextChoice(new Choice('Emelkedés', '',)
        .addNextChoice(new Choice('Alacsony vola', '')
            .addNextChoice(new Choice('Call debit spread', '', [
                '60-90 nap',
                'alacsony ivr, várhatóan marad is',
                'kis méret <= 1%',
                '25-50% cél profit',
                'ITM long Call',
                'OTM short Call',
            ], 'call-debit-spread'))
            .addNextChoice(new Choice('Call calendar spread', '', [
                '20-30 nap front month',
                'alacsony ivr front month, magasabb back month',
                'kis méret <= 1%',
                '25-50% cél profit',
                'ITM long Call',
                'OTM short Call',
            ]))
        )
        .addNextChoice(new Choice('Magas vola', 'Bull call spread', [
            'alacsony vola',
            'ATM long call',
            'OTM short call',
        ]))
    )
    .addNextChoice(new Choice('Esés', 'Bear put spread', [
        'alacsony vola',
        'ATM long put',
        'OTM short put',
    ]));

levelChoice
    .addNextChoice(new Choice('Emelkedés', ''))
    .addNextChoice(new Choice('Esés', ''))

nonDirectional
    .addNextChoice(new Choice('Inkább emelkedik', 'Jade lizard', [
        'OTM short put',
        'OTM bear call spread',
    ]))

new Choice('faketop', '')
    .addNextChoice(directionalChoice)
    .addNextChoice(levelChoice)
    .addNextChoice(nonDirectional);

const mainChoices = [
    directionalChoice,
    levelChoice,
    nonDirectional
];


export class ChoiceTree {
    readonly topChoices: Choice[];

    constructor() {
        this.topChoices = mainChoices;
    }
}
