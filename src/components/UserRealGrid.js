import {ValueType} from "realgrid";

export const Userfields = [
    {
        fieldName: 'userId',
        dataType: ValueType.NUMBER,
        numberFormat: "#,##0.##"
    },
    {
        fieldName: 'username',
        dataType: ValueType.TEXT
    },
    {
        fieldName: 'nickname',
        dataType: ValueType.TEXT
    },
    {
        fieldName: 'phone',
        dataType: ValueType.TEXT
    },
    {
        fieldName: 'adress',
        dataType: ValueType.TEXT
    },
    {
        fieldName: 'adressDetail',
        dataType: ValueType.TEXT
    }
    ];
export const Usercolumns = [
    {
        name: "userId",
        fieldName: "userId",
        type: "data",
        width: "40",
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "userId",
        },
    },
    {
        name: "username",
        fieldName: "username",
        type: "data",
        width: "80",
        styles: {
            textAlignment: "username"
        },
        header: {
            text: "username",
            showTooltip: true,
            tooltip:'<span style="color: red;">아이디</span>',
        },
        renderer: {
            type:"text",
            showTooltip: true
        }
    },
    {
        name: "nickname",
        fieldName: "nickname",
        type: "data",
        width: "150",
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "nickname",
            showTooltip: false,
        },
        renderer: {
            type:"text",
            showTooltip: false
        }
    },
    {
        name: "phone",
        fieldName: "phone",
        type: "data",
        width: "150",
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "phone",
            showTooltip: false,
        },
        renderer: {
            type:"text",
            showTooltip: false
        }
    },
    {
        name: "adress",
        fieldName: "adress",
        type: "data",
        width: "150",
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "adress",
            showTooltip: false,
        },
        renderer: {
            type:"text",
            showTooltip: false
        }
    },
    {
        name: "adressDetail",
        fieldName: "adressDetail",
        type: "data",
        width: "150",
        styles: {
            textAlignment: "center"
        },
        header: {
            text: "adressDetail",
            showTooltip: false,
        },
        renderer: {
            type:"text",
            showTooltip: false
        }
    },

    ]
