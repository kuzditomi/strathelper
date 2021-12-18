import { Choice } from "./choice.models";

const directionalChoice = new Choice('Irány elképzelés', '');
const levelChoice: Choice = new Choice('Szint tartó', '');
const nonDirectional: Choice = new Choice('Iránymentes', '');

directionalChoice
    .addNextChoice(
        new Choice('Emelkedés', '')
            .addNextChoice(new Choice('Alacsony vola', 'Bull call spread', [
                'ATM long call',
                'OTM short call',
            ]))
            .addNextChoice(new Choice('Magas vola', 'Ilyet inkább ne'))
    )
    .addNextChoice(
        new Choice('Esés', '')
            .addNextChoice(new Choice('Alacsony vola', 'Bear put spread', [
                'ATM long put',
                'OTM short put',
            ]))
            .addNextChoice(new Choice('Magas vola', 'Ilyet inkább ne'))
    );

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
