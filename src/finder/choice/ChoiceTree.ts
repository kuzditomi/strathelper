import { Choice } from "./choice.models";

const directionalChoice = new Choice('irany','Irány elképzelés', '');
const neurtalChoice: Choice = new Choice('mentes','Iránymentes', '');

directionalChoice
    .addNextChoice(new Choice('bull','Emelkedés', '',)
        .addNextChoice(new Choice('bull-low-iw','Alacsony IV', '')
            .addNextChoice(new Choice('call-debit-spread','Call debit spread', '', [
                '60-90 nap',
                'alacsony ivr, várhatóan marad is',
                'kis méret <= 1%',
                '25-50% cél profit',
                'ITM long Call',
                'OTM short Call',
            ], 'vertical-bull-spread'))
            .addNextChoice(new Choice('call-calendar-spread','Call calendar spread', 'debit', [
                '20-30 nap front month',
                'alacsony ivr front month, magasabb back month',
                'kis méret <= 1%',
                '25-50% cél profit',
                'OTM short Call front month',
                'OTM long Call back month same strike',
                'összehasonlítottam a PUT változattal',
                'SPY-ra inkább PUT-ot',
            ], 'calendar-spread'))
            .addNextChoice(new Choice('call-ratio-spread','Call (Ratio) backspread', 'nagy mozgást várok', [
                '60-90 nap front month',
                'alacsony ivr front month, magasabb back month',
                'kis méret <= 1%',
                'early profit 25-50%',
                '1 ATM short Call',
                '2 OTM long Call higher strike',
            ], 'call-ratio-backspread'))
            .addNextChoice(new Choice('put-diagonal-spread','Put diagonal spread', 'debit', [
                '20+ nap front month',
                'alacsony ivr front month, még alacsonyabb back month',
                'kis méret <= 1%',
                'early profit 25-50%',
                '1 OTM short Put front month',
                '1 OTM long Put back month lower price',
            ], 'put-diagonal-spread'))
        )
        .addNextChoice(new Choice('bull-high-iw','Magas IV', '')
            .addNextChoice(new Choice('put-credit-spread','Put credit spread', '', [
                '30-60 nap',
                'közép-magas IV',
                'lehet magasabb 2-5% balance',
                '50% cél',
                'OTM short Put',
                'OTM long Put lower price',
            ], 'vertical-bull-spread'))
            .addNextChoice(new Choice('short-naked-put','Short naked put', '!!!!!!!!!!! fedezetlen !!!!!!!!!!', [
                'nem baj, ha kapok ilyen stockot',
                '30-60 nap',
                'magas IV (érdemes HV-t hozzá nézni)',
                'óvatos 1-2% kezdő margin',
                'OTM short Put',
                '50%-nál elhozni, vagy rollolni'
            ], 'short-put'))
            .addNextChoice(new Choice('put-broker-butterfly','Put Broken Wing Butterfly', 'credit with no risk to the upside', [
                '30-60 nap',
                'some credit at least',
                'magas IV',
                'lehet bátrabb 3-5%',
                '50-75% cél profit, inkább hamarabb lezárni ha lehet',
                '1 ITM long Put',
                '2 OTM short Put near ATM',
                '1 OTM long Put (skip 1 strike)'
            ], 'put-broken-butterfly'))
            .addNextChoice(new Choice('jade-lizard','Jade lizard', 'eső IV, emelkedő stock', [
                '30-60nap',
                'óvatos 1-2% initial margin',
                '50% körüli cél profit',
                'OTM short Put',
                'OTM short call',
                'OTM long call higher price',
            ], 'jade-lizard'))
        )
    )
    .addNextChoice(new Choice('bear','Esés', '')
        .addNextChoice(new Choice('bear-low-iv','Alacsony IV', '')
            .addNextChoice(new Choice('put-debit-spread','Put debit spread', '', [
                '60-90 nap',
                'nem csökken tovább IV',
                '1% balance',
                '25-50% target profit',
                'ITM long Put',
                'OTM short Put'
            ], 'vertical-bear-spread'))
            .addNextChoice(new Choice('put-calendar-spread','Put calendar spread', 'debit', [
                'ATM vagy kicsit magasabb strike',
                '20+ front month',
                '1% balance',
                'front month magasabb IV mint back month',
                'korai profit cél 25-50%',
                'OTM short Put front month',
                'OTM long Put back month same strike',
            ], 'calendar-spread'))
            .addNextChoice(new Choice('put-ratio-backspread','Put (Ratio) backspread', '1:2 vagy 2:3', [
                '60-90 nap',
                'alacsonyabb IV',
                '1% balance',
                '25% profit elég, ha nem hoz hamar többet',
                '1 ATM short Put',
                '2 OTM long Put lower strike',
            ], 'put-ratio-backspread'))
            .addNextChoice(new Choice('call-diagonal-spread','Call diagonal spread', '', [
                '20+ nap front month',
                '1% balance',
                '25-50% cél',
                'front month magasbb IV mint back month',
                '1 OTM short Call front month',
                '1 OTM long Call back month higher strike',
            ], 'call-diagonal-spread'))
        )
        .addNextChoice(new Choice('bear-high-iv','Magas IV', '')
            .addNextChoice(new Choice('call-credit-spread','Call credit spread', '', [
                'magasabb vola',
                '30-60nap',
                '3-5% balance',
                '50% cél elég az irány riziko miatt',
                'OTM short call',
                'OTM long call higher strike'
            ], 'vertical-bear-spread'))
            .addNextChoice(new Choice('short-naked-call','Short naked call', '!!!!!!!!!!!!!!! fedezetlen !!!!!!!!!!!!!!!', [
                'OTM short call (lehetőleg távolabb)',
                '30-60 nap',
                '1-2% initial margin',
                '50% már elég'
            ], 'short-call'))
            .addNextChoice(new Choice('call-broken-butterfly','Call broken wing butterfly', 'credit with no downside risk', [
                '30-60nap',
                '3-5% balance',
                '75% célár, had dolgozzon',
                '1 ITM long Call',
                '2 OTM short Call near ATM',
                '1 long OTM Call (skip 1 strike)'
            ], 'call-broken-butterfly'))
            .addNextChoice(new Choice('reverse-jade-lizard','Reverse jade lizard', '!!!! fedezetlen. eső IV, eső stock', [
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


neurtalChoice
    .addNextChoice(new Choice('neutral-low-iv','Alacsony IV', 'Ilyet ne csinálj inkább :(')
    )
    .addNextChoice(new Choice('neutral-high-iv','Magas IV', '')
        .addNextChoice(new Choice('short-straddle','Short straddle', '!!!!! fedezetlen', [
            'nincs más fedezetlen pozi nyitva',
            'magas IV, ennek az esésére is számítok',
            '30-60nap',
            '1-2% initial margin',
            '25% jó cél',
            'ATM short Put',
            'ATM short Call'
        ], 'short-straddle'))
        .addNextChoice(new Choice('short-strangle','Short strangle', '!!!!! fedezetlen', [
            'nincs más fedezetlen pozi nyitva',
            'tényleg magas IV',
            '2SD inkább',
            'csak nagyon likvid termékre, indexek inkább',
            '40+ nap',
            '1-2% initial margin',
            '50% jó cél, de korábban is lehet, vagy rollolni',
            'ATM short Put',
            'ATM short Call'
        ], 'short-strangle'))
        .addNextChoice(new Choice('iron-condor','Iron Condor', '', [
            'magas de nem túl magas IV',
            '70% körül (1SD)',
            'likvid termékre érdemes',
            '30-60 nap',
            '3-5% balance',
            '50% jó cél',
            'OTM long Put lower price',
            'OTM short Put',
            'OTM short Call',
            'OTM long Call higher price'
        ], 'short-strangle'))
        .addNextChoice(new Choice('iron-butterfly','Iron Butterfly', '', [
            'nincs más fedezetlen pozi nyitva',
            'magas de nem túl magas IV',
            'long lábak 1SD körül',
            'likvid termékre érdemes, indexek inkább',
            '30-60 nap',
            '3-5% balance',
            '25% jó cél',
            'OTM long Put',
            'ATM short Put',
            'ATM short Call',
            'OTM long Call',
        ], 'iron-butterfly'))
    )

const fakeTopChoice = new Choice('fake','faketop', '')
    .addNextChoice(directionalChoice)
    .addNextChoice(neurtalChoice);

const mainChoices = [
    directionalChoice,
    neurtalChoice
];


class ChoiceTree {
    readonly topChoices: Choice[];

    constructor() {
        this.topChoices = mainChoices;
    }

    findChoiceById(id: string): Choice | undefined {
        return this.findChoice(id, fakeTopChoice);
    }

    private findChoice(id: string, parent: Choice): Choice | undefined {
        if (parent.id === id) {
            return parent;
        }

        const choice = parent.nextChoices.reduce((expectedChoice: Choice | undefined, child: Choice) => {
            if (expectedChoice) {
                return expectedChoice;
            }
            return this.findChoice(id, child);
        }, undefined)

        return choice;
    }
}

export const choiceTree = new ChoiceTree();