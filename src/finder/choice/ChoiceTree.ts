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
            .addNextChoice(new Choice('Call calendar spread', 'debit', [
                '20-30 nap front month',
                'alacsony ivr front month, magasabb back month',
                'kis méret <= 1%',
                '25-50% cél profit',
                'OTM short Call front month',
                'OTM long Call back month same strike',
            ], 'call-calendar-spread'))
            .addNextChoice(new Choice('Call (Ratio) backspread', 'nagy mozgást várok', [
                '60-90 nap front month',
                'alacsony ivr front month, magasabb back month',
                'kis méret <= 1%',
                'early profit 25-50%',
                '1 ATM short Call',
                '2 OTM long Call higher strike',
            ], 'call-ratio-backspread'))
            .addNextChoice(new Choice('Put diagonal spread', 'debit', [
                '20+ nap front month',
                'alacsony ivr front month, még alacsonyabb back month',
                'kis méret <= 1%',
                'early profit 25-50%',
                '1 OTP short Put front month',
                '1 OTM long Put back month lower price',
            ], 'put-diagonal-spread'))
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
