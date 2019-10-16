import { connect } from 'react-redux';
import HomeScreen from '../../components/screens/home/homeScreen';
import { search, searchReset } from '../../redux/actions/giphy/searchAction';
import { addFavourite, removeFavourite } from '../../redux/actions/giphy/favouriteAction';

const mapStateToProps = (state) => {
    return {
        searchResult: state.searchResult,
        favouriteItems: state.favouriteItems.favouriteData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        _search: (dataSearch) => {
            dispatch(search(dataSearch))
        },
        _reset: () => {
            dispatch(searchReset())
        },
        _addFavourite: (item) => {
            dispatch(addFavourite(item))
        },
        _removeFavourite: (item) => {
            dispatch(removeFavourite(item))
        }
    };
}

const HomeContainer = connect(mapStateToProps, mapDispatchToProps)(HomeScreen);

export default HomeContainer;
