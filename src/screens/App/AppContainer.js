import { connect } from 'react-redux';
import App from './App';
import { isUserFetching } from 'src/selectors/authorization';
import { isConnected } from 'src/components/HOC/withNetwork/selectors';

const mapStateToProps = state => {
    return {
        isLoading: isUserFetching(state),
        navigationState: state.navigation,
        isConnected: isConnected(state)
    };
};

export default connect(mapStateToProps)(App);
