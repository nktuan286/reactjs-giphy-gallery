import { connect } from 'react-redux';
import FavouriteScreen from '../../components/screens/favourite/favouriteScreen';
import { removeFavourite  } from '../../redux/actions/giphy/favouriteAction';

const mapStateToProps = (state) => {
    return {
        favouriteItems: state.favouriteItems.favouriteData
    }
};

const mapDispatchToProps = (dispatch) => {
    return {
        _removeFavourite: (item) => {
            dispatch(removeFavourite(item))
        }
    };
}

const FavouriteContainer = connect(mapStateToProps, mapDispatchToProps)(FavouriteScreen);

export default FavouriteContainer;
