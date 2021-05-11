/* eslint-disable jsx-a11y/alt-text */
import React from 'react'
import $ from 'jquery'
import LinkIcon from '@material-ui/icons/Link'
class UserGithub extends React.Component {
        constructor(props) {
            super(props);
            this.state = {
                username: '',
                githubtUrl: '',
                avatarUrl: '',
                subscriptions_url:'',
                location:'',
                bio:'',
            }
        }
        componentDidMount() {
            $.get(this.props.source, (result) => {
                console.log(result);
                const data = result;
                if (data) {
                    this.setState({
                        username: data.name,
                        githubUrl: data.html_url,
                        avatarUrl: data.avatar_url,
                        bio:data.bio,
                        location:data.location,
                        repos:data.public_repos,
                    });
                }
            });
        }
        render() {
            return (
                <div>

                    <img src={this.state.avatarUrl} /><br></br>
                    <h3>Name:{this.state.username}</h3>
                    <h3>Location:{this.state.location}</h3>
                    <h3>Bio:{this.state.bio}</h3>
                    <LinkIcon></LinkIcon><a href={this.state.githubtUrl}>https://github.com/Andrew513</a>
                    <h3>Amount of repositories:{this.state.repos}</h3>
                </div>
            );
        }
    }
    export default UserGithub;
    // ReactDOM.render(
    //     <UserGithub source="https://api.github.com/users/Andrew513" />,
    //     document.getElementById('root')
    //    );
