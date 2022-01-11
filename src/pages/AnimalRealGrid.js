import {ValueType} from "realgrid";

export const fields = [
    {
    fieldName: 'name',
    dataType: ValueType.TEXT,
},
    {
        fieldName: 'animalId',
        dataType: ValueType.NUMBER,
        numberFormat: "#,##0.##",
    },
    {
        fieldName: 'animalType',
        dataType: ValueType.TEXT
    },
    {
        fieldName: 'dateTime',
        dataType: "datetime",
        datetimeFormat: "yyyyMMdd"
    },
    {
        fieldName: 'intakeCondition',
        dataType: ValueType.TEXT
    },
    {
        fieldName: 'sexUponIntake',
        dataType: ValueType.TEXT
    },
    {
        fieldName: 'context',
        dataType: ValueType.TEXT
    }
];

export const columns = [{
    name: "name",
    fieldName: "name",
    type: "data",
    width: "80",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Name",
        showTooltip: true,
        tooltip:'<span style="color: red;">이름</span>',
    },
    renderer: {
        type:"text",
        showTooltip: true
    }
},
    {
    name: "animalId",
    fieldName: "animalId",
    type: "data",
    width: "79",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "animalId",
        showTooltip: false,
    },
        renderer: {
            type:"text",
            showTooltip: false
        }

},
    {
    name: "animalType",
    fieldName: "animalType",
    type: "data",
    width: "100",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "Animal Type",
        showTooltip: false,
    },
        renderer: {
            type:"text",
            showTooltip: false
        }
},
    {
    name: "datetime",
    fieldName: "datetime",
    type: "data" ,
    width: "130",
    styles: {
        textAlignment: "center"
    },
        header: "Datetime",
},
    {
    name: "intakeCondition",
    fieldName: "intakeCondition",
    type: "data",
    width: "120",
    styles: {
        textAlignment: "center"
    },
    header: {
        text: "IntakeCondition",
        showTooltip: false,
    },
        renderer: {
            type:"text",
            showTooltip: false
        }
},
    {
        name: "sexUponIntake",
        fieldName: "sexUponIntake",
        type: "data",
        width: "150",
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "sex_UPON_INTAKE",
            showTooltip: false,
        },
        renderer: {
            type:"text",
            showTooltip: false
        }
    },
    {
        name: "context",
        fieldName: "context",
        type: "data",
        width: "300",
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "context",
            showTooltip: false,
        },
        renderer: {
            type:"text",
            showTooltip: false
        }
    }]



