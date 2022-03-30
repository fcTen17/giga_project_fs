import React from 'react';
import './feeds.scss';
import UserCard from './user-card';
import { json, checkStatus , readURL } from './utils';

const handleErrors = (response) => {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response.json();
}

const requestUsersAndPost = async () => {
  const response = await fetch ('https://randomuser.me/api/?format=json&results=30&inc=gender,name,email,Picture&nat=br&seed=giga');
  const json = await response.json();
  console.log(json)

  const usersArr = await json.results;

  for (let i = 0; i < usersArr.length; i++ ) {
 
    let userNameTitle = usersArr[i]['name']['title'];
    let userNameFirst = usersArr[i]['name']['first'];
    let userNameLast = usersArr[i]['name']['last'];
    let userGender = usersArr[i]['gender'];
    let userEmail = usersArr[i]['email'];
    let userImageLargeURL = usersArr[i]['picture']['large'];
    let userImageMediumURL = usersArr[i]['picture']['medium'];
    let userImageThumbnailURL = usersArr[i]['picture']['thumbnail'];
    let postResponse = await fetch ('api/users', {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      credentials: 'same-origin',
      body: JSON.stringify({
        user: {
          name_title: userNameTitle,
          name_first: userNameFirst,
          name_last: userNameLast,
          gender: userGender,
          email: userEmail,
          picture_large_url: userImageLargeURL,
          picture_medium_url: userImageMediumURL,
          picture_thumbnail_url: userImageThumbnailURL,
        }
      })
    });
    const postJson = await postResponse.json();
    console.log(postJson);
  }  
}

class Feeds extends React.Component {
  
  constructor(props) {
    super(props);
    this.state = {
      users: { results: [{ id: 0, name: {title: ' ', first: ' ', last: ' '}, email: ' ', picture: {medium: '' }}]},
      userDatabase: { total_pages: 1, next_page: null, users: [{ id: 0, name_title: ' ', name_first: ' ', name_last: ' ', email: ' ', picture_large_url: '', picture_medium_url: ' ', picture_thumbnail_url: ' ', image: ' ' }]},
      total_pages: null,
      next_page: 2,
    };
    this.userCardRenderDatabase = this.userCardRenderDatabase.bind(this);
    this.loadMore = this.loadMore.bind(this);
  }
  
  userCardRenderDatabase = (usersArr) => {
    //let usersArr = usersObj.users;
    console.log(usersArr);
    let listArr =[];
      
    for (let i = 0; i < usersArr.length ; i++) {
      let userIndexId = usersArr[i].id;
      let userNameTitle = usersArr[i]['name_title'];
      let userNameFirst = usersArr[i]['name_first'];
      let userNameLast = usersArr[i]['name_last'];
      let userEmail = usersArr[i]['email'];
      let userImageURL = usersArr[i]['image'];
      
      listArr.push(<UserCard userNameTitle={userNameTitle} userNameFirst={userNameFirst} userNameLast={userNameLast} userAttachedImageURL={userImageURL} userEmail={userEmail} userIndexId={userIndexId} key={`${userNameFirst}+${userNameLast}+${userIndexId}`} />);
    }   
    return listArr;
  }

  componentDidMount() {

    requestUsersAndPost();

    fetch(`api/users`)
    .then(checkStatus)
    .then(json)      
    .then((data) => {
      if (data) {         
        this.setState({ userDatabase: data.users})
        console.log(data)     
      }
    })
    .catch((error) => {
      this.setState({ error: error.message });
      console.log(error); 
    });
  }

  loadMore = () => {
    console.log(this.state.next_page);
    if (this.state.next_page === null) {
      return;
    }
    fetch(`/api/users?page=${this.state.next_page}`)
      .then(handleErrors)
      .then(data => {
        console.log(data.users);
        this.setState({
          userDatabase: this.state.userDatabase.concat(data.users),
          total_pages: data.total_pages,
          next_page: data.next_page,
        })
      })
  }

  render () {
    return (
      <div className="feeds-wrapper container">
        <div className="feeds-box  px-4">
          <div className="row gx-5">           
            {(() => {
                  return this.userCardRenderDatabase( this.state.userDatabase );
            })()}
            <div className="text-center">
              <button className="btn btn-light mb-4"
                onClick={this.loadMore}>
                  load more
              </button>
            </div>            
          </div>          
        </div>
       </div>
    )
  }
}

export default Feeds;

/*

  userCardRender = (usersObj) => {
    let usersArr = usersObj.results;
    console.log(usersArr);
    let listArr =[];
      
    for (let i = 0; i < usersArr.length ; i++) {
      let userIndexId = usersArr[i].id;
      let userNameTitle = usersArr[i]['name']['title'];
      let userNameFirst = usersArr[i]['name']['first'];
      let userNameLast = usersArr[i]['name']['last'];
      let userEmail = usersArr[i]['email'];
      let userImageURL = usersArr[i]['picture']['large'];
      
      listArr.push(<UserCard userNameTitle={userNameTitle} userNameFirst={userNameFirst} userNameLast={userNameLast} userAttachedImageURL={userImageURL} userEmail={userEmail} userIndexId={userIndexId} key={`${userNameFirst}+${userNameLast}+${userIndexId}`} />);
    }   
    return listArr;
  }

 {(() => {
                  return this.userCardRender( this.state.users );
  })()}

 {this.state.loading && <p>loading...</p>}
            {(this.state.loading || this.state.next_page === null) ||
              <div className="text-center">
                <button
                  className="btn btn-light mb-4"
                  onClick={this.loadMore}
                >load more</button>
              </div>
  }




*/