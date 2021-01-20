import React from 'react';
import { getMovies } from '../../services/movies.service';
import { Pagination } from '@material-ui/lab';

interface IProps {

}

interface IState {
  movies: any[]
}

class Home extends React.Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);

    this.state = {
      movies: [],
    };
  }

  componentDidMount(): void {
    getMovies().then((movies: any[]) => this.setState({ movies }));
  }

  render(): React.ReactElement {
    console.log(this.state?.movies);

    return (
      <div>
        Home
        <Pagination count={10} color="primary"/>

      </div>
    );
  }
}

export default Home;
