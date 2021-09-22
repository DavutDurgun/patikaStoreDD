import { StyleSheet, Dimensions } from 'react-native';

export default StyleSheet.create({
    container: {
        flex: 1,
        padding: 10,
    },
    searchBar_content: {
        height: 35,
        marginBottom: 10,

    },
    searchBar: {
        height: 35,
        padding: 10,
        fontSize: 12,
        backgroundColor: "#fff8dc",
        borderWidth: 1,
        borderColor: "#a9a9a9",
        color: "#696969",
        borderRadius: 8,
    },
    flatList_content: {
        flex: 1,
        backgroundColor: "#0022",
        padding: 5,
        flexDirection: 'row',
        flexWrap: 'wrap',
    },
    flatList_item: {
        width: Dimensions.get('window').width / 2 - 25,
        backgroundColor: "#fff8dc",
        marginBottom: 10,
        borderRadius: 8,
        borderWidth: 1,
        borderColor: "#0022",
        overflow: "hidden",
        margin: 5,
        padding: 10,
    },
    flatList_item_image: {
        width: '100%',
        height: 200,
        paddingHorizontal: 5,
        backgroundColor: '#fff',
        borderWidth: 1,
        borderColor: "#0022",
        resizeMode: "contain",

    },
    flatList_item_title: {
        fontSize: 22,
        fontWeight: '700',
    },
    flatList_item_price: {
        fontSize: 22,
        fontWeight: '900',
        color: "#0055"
    },
    flatList_item_no_stok: {
        fontSize: 22,
        fontWeight: '900',
        color: "red"
    }
});
