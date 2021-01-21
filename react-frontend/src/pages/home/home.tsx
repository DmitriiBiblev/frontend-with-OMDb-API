import React from 'react';
import { Pagination } from '@material-ui/lab';
import { IRootState } from '../../store/reducers';
import { Dispatch } from 'redux';
import { GetMovies, MoviesActions } from '../../store/actions/movies.actions';
import { connect } from 'react-redux';
import { movies, pageCount } from '../../store/selectors/movies.selectors';
import { IMovieCard } from '../../interfaces/movie-card.interface';

interface IProps {
  movies: IMovieCard[]
  pageCount: number

  getMovies(): void
}

interface IState {
  currentPage: number
}

class Home extends React.Component<IProps, IState> {

  constructor(props: IProps) {
    super(props);

    this.state = {
      currentPage: 1,
    };
  }

  componentDidMount(): void {
    this.props.getMovies();
  }

  render(): React.ReactElement {
    const { pageCount } = this.props;

    return (
      <div>
        Home
        <Pagination count={pageCount} color="primary"/>
      </div>
    );
  }
}

const mapStateToProps = (state: IRootState) => ({
  movies: movies(state),
  pageCount: pageCount(state),
});

const mapDispatchToProps = (dispatch: Dispatch<MoviesActions>) => ({
  getMovies: () => dispatch(new GetMovies()),
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
