import { Choice } from "./choice.models";

const directionalChoice = new Choice('Irány elképzelés', '');
const nonDirectional: Choice = new Choice('Iránymentes', '');

directionalChoice
    .addNextChoice(new Choice('Emelkedés', '',)
        .addNextChoice(new Choice('Alacsony IV', '')
            .addNextChoice(new Choice('Call debit spread', '', [
                '60-90 nap',
                'alacsony ivr, várhatóan marad is',
                'kis méret <= 1%',
                '25-50% cél profit',
                'ITM long Call',
                'OTM short Call',
            ], 'vertical-bull-spread'))
            .addNextChoice(new Choice('Call calendar spread', 'debit', [
                '20-30 nap front month',
                'alacsony ivr front month, magasabb back month',
                'kis méret <= 1%',
                '25-50% cél profit',
                'OTM short Call front month',
                'OTM long Call back month same strike',
                'összehasonlítottam a PUT változattal',
                'SPY-ra inkább PUT-ot',
            ], 'calendar-spread'))
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
        .addNextChoice(new Choice('Magas IV', '')
            .addNextChoice(new Choice('Put credit spread', '', [
                '30-60 nap',
                'közép-magas IV',
                'lehet magasabb 2-5% balance',
                '50% cél',
                'OTM short Put',
                'OTM long Put lower price',
            ], 'vertical-bull-spread'))
            .addNextChoice(new Choice('Short naked put', '!!!!!!!!!!! fedezetlen !!!!!!!!!!', [
                'nem baj, ha kapok ilyen stockot',
                '30-60 nap',
                'magas IV (érdemes HV-t hozzá nézni)',
                'óvatos 1-2% kezdő margin',
                'OTM short Put',
                '50%-nál elhozni, vagy rollolni'
            ], 'short-put'))
            .addNextChoice(new Choice('Put Broken Wing Butterfly', 'credit with no risk to the upside', [
                '30-60 nap',
                'some credit at least',
                'magas IV',
                'lehet bátrabb 3-5%',
                '50-75% cél profit, inkább hamarabb lezárni ha lehet',
                '1 ITM long Put',
                '2 OTM short Put near ATM',
                '1 OTM long Put (skip 1 strike)'
            ], 'put-broken-butterfly'))
            .addNextChoice(new Choice('Jade lizard', 'eső IV, emelkedő stock', [
                '30-60nap',
                'óvatos 1-2% initial margin',
                '50% körüli cél profit',
                'OTM short Put',
                'OTM short call',
                'OTM long call higher price',
            ], 'jade-lizzard'))
        )
    )
    .addNextChoice(new Choice('Esés', '')
        .addNextChoice(new Choice('Alacsony IV', '')
            .addNextChoice(new Choice('Put debit spread', '', [
                '60-90 nap',
                'nem csökken tovább IV',
                '1% balance',
                '25-50% target profit',
                'ITM long Put',
                'OTM short Put'
            ], 'vertical-bear-spread'))
            .addNextChoice(new Choice('Put calendar spread', 'debit', [
                'ATM vagy kicsit magasabb strike',
                '20+ front month',
                '1% balance',
                'front month magasabb IV mint back month',
                'korai profit cél 25-50%',
                'OTM short Put front month',
                'OTM long Put back month same strike',
            ], 'calendar-spread'))
            .addNextChoice(new Choice('Put (Ratio) backspread', '1:2 vagy 2:3', [
                '60-90 nap',
                'alacsonyabb IV',
                '1% balance',
                '25% profit elég, ha nem hoz hamar többet',
                '1 ATM short Put',
                '2 OTM long Put lower strike',
            ], 'put-ratio-backspread'))
            .addNextChoice(new Choice('Call diagonal spread', '', [
                '20+ nap front month',
                '1% balance',
                '25-50% cél',
                'front month magasbb IV mint back month',
                '1 OTM short Call front month',
                '1 OTM long Call back month higher strike',
            ], 'call-diagonal-spread'))
        )
        .addNextChoice(new Choice('Magas IV', '')
            .addNextChoice(new Choice('Call credit spread', '', [
                'magasabb vola',
                '30-60nap',
                '3-5% balance',
                '50% cél elég az irány riziko miatt',
                'OTM short call',
                'OTM long call higher strike'
            ], 'vertical-bear-spread'))
            .addNextChoice(new Choice('Short naked call', '!!!!!!!!!!!!!!! fedezetlen !!!!!!!!!!!!!!!', [
                'OTM short call (lehetőleg távolabb)',
                '30-60 nap',
                '1-2% initial margin',
                '50% már elég'
            ], 'short-call'))
            .addNextChoice(new Choice('Call broken wing butterfly', 'credit with no downside risk', [
                '30-60nap',
                '3-5% balance',
                '75% célár, had dolgozzon',
                '1 ITM long Call',
                '2 OTM short Call near ATM',
                '1 long OTM Call (skip 1 strike)'
            ], 'call-broken-butterfly'))
            .addNextChoice(new Choice('Reverse jade lizzard', '!!!! fedezetlen. eső IV, eső stock', [
                'IV esik ha a papir is',
                '30-60nap',
                '1-2% initial margin',
                '50% célár',
                'OTM short Call',
                'OTM short Put',
                'OTM long Put lower price'
            ], 'reverse-jade-lizard'))
        )
    )


nonDirectional
    .addNextChoice(new Choice('Inkább emelkedik', 'Jade lizard', [
        'OTM short put',
        'OTM bear call spread',
    ]))

new Choice('faketop', '')
    .addNextChoice(directionalChoice)
    .addNextChoice(nonDirectional);

const mainChoices = [
    directionalChoice,
    nonDirectional
];


export class ChoiceTree {
    readonly topChoices: Choice[];

    constructor() {
        this.topChoices = mainChoices;
    }
}
