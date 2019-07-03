const data = [
    {
        "id": "initiatePaymentV3UsingPOST",
        "title" : "Kunden velger betal med vipps",
        "description": "En kunde ønsker å kjøpe noe i nettbutikken og har valgt “betal med Vipps”. For at dette skal være mulig må nettbutikken ha en gyldig token. Nettbutikken må be om ny token fra Vipps hvert døgn.",
        "img" : ""
   },
   {
       "id": "vippsOvertake",
       "title" : "Nettbutikken overlater betalingen til Vipps",
       "description": "For at Vipps skal kunne ta seg av betalingen trenger nettbutikken bare å sende pris og id på varen, ikke hvem som skal betale.",
       "img": ""
   },
   {
       "id": "customerApproval",
       "title": "Kunde godtar i Vipps-appen",
       "description": "Hvis kunden er på en enhet med Vipps-appen kan Vipps åpnes automagisk med app-switch. Hvis ikke sendes kunden videre på vanlig måte.",
       "img": ""
   },
   {
       "id": "cancelPaymentRequestUsingPUT",
       "title": "Mulig kansellering",
       "description": "Kansellering av transaksjon kan skje dersom kunde ikke godkjenner betalingen i appen.  Hvis det går mer enn 5-10 min uten at kunden gjør noe vil Vipps avbryte av sikkerhetsgrunner.",
       "img": ""
   },
   {
       "id": "transactionUpdateCallbackForRegularPaymentUsingPOST",
       "title": "Vipps reserverer beløpet",
       "description": "Dersom alt går som smurt, blir et beløp reservert på kundens konto. Det betyr at pengene fortsatt er på kundens konto, men kunden kan ikke bruke dem på noe annet siden de er lovet bort til nettbutikken. Ifølge norsk lov har man ikke lov å ta betalt for en vare eller tjeneste før den blir levert, derfor blir beløpet kun reservert i første omgang. Trygg betaling altså ;) Vipps sender bekreftelse til nettbutikken om at reservasjonen har blitt gjort.",
       "img": ""
    },
    {
        "id": "merchantConfirm",
        "title": "Nettbutikken bekrefter ordren til kunden og sender varen",
        "description": "Når kunde mottar ordrebekreftelse har traksaksjonen blitt godtatt og bestillingen blir behandlet i nettbutikkens systemer. ",
        "img": ""
    },
    {
        "id": "capturePaymentUsingPOST",
        "title": "Beløpet trekkes fra kundens konto",
        "description": "At beløp blir trukket kalles å gjøre et “capture”. Dette skjer når varen er sendt eller tjenesten blir levert. Nettbutikken sender en beskjed til Vipps om at bestillingen er ferdig behandlet og at de kan gjøre et capture på beløpet.",
        "img": ""
    },
    {
        "id": "refundPaymentUsingPOST",
        "title": "Mulighet for refundering",
        "description": "Noen ganger vil nettbutikken refundere beløpet kunden har betalt, for eksempel hvis varen sendes i retur. Nettbutikken ber Vipps refundere, og kunden vil motta beløpet etter noen dager.",
        "img": ""
    }
];

export default data;