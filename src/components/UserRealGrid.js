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
        fieldName: 'authorities',
        dataType: ValueType.OBJECT
    }];
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

    ]
