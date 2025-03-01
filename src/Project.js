import React from 'react'
import './Project.css'
import District from './myimage/district.jpg'
import Gym from './myimage/gym.jpg'
import Mahtari_vandan from './myimage/mahtari-vandan.webp'
import Spootify from './myimage/spootify.jpg'
import Weather from './myimage/weather.png'
import Youtube from './myimage/youtube.jpg'


function Project() {
    const project = [
        { image: District, title: 'District Website', description: 'Gariaband District, one of the nine newly formed districts of Chhattisgarh, was officially established on January 1, 2012, after being carved out of Raipur district. With its headquarters in Gariaband town, the district is bordered by Dhamtari and Mahasamund districts and spans an area of 5,822.861 sq. km, rich in natural resources.' },
        { image: Gym, title: 'Gym', description: 'A "gym" may include or describe adjacent open air areas as well. In Western countries, "gyms" often describe places with indoor or outdoor courts for basketball, hockey, tennis, boxing or wrestling, and with equipment and machines used for physical development training, or to do exercises.' },
        { image: Mahtari_vandan, title: 'Mahtari Vandan Yojna', description: 'The Mahtari Vandana Yojana is a scheme by the Chhattisgarh government to help women become financially independent, improve their health and nutrition, and strengthen their role in the family. The scheme provides a monthly financial assistance of ₹1,000 to eligible married women.'},
        { image: Spootify, title: 'Spootify', description: 'Spotify’s mission is to unlock the potential of human creativity by giving a million creative artists the opportunity to live off their art and billions of fans the opportunity to enjoy and be inspired by it. Spotify’s platform revolutionized music listening forever when we launched in 2008.' },
        { image: Weather, title: 'Weather', description: 'A weather app project can involve collecting and analyzing weather data, and displaying it to users in a way that is easy to access. Some objectives of a weather app project might include: Providing accurate weather data, Displaying weather by city, Offering quick access to forecasts and other weather factors, and Covering cities worldwide.' },
        { image: Youtube, title: 'Youtube', description: 'YouTube is an American social media and online video sharing platform owned by Google. YouTube was founded on February 14, 2005, by Steve Chen, Chad Hurley, and Jawed Karim, three former employees of PayPal. Headquartered in San Bruno, California, United States, it is the second-most visited website in the world, after Google Search. In January 2024, YouTube had more than 2.7 billion monthly active users.' },
    ]
    return (
        <div> 
            <div className="container4">
            {project.map(i => (
               
               <div className='sub_container6'>
                   <img src={i.image} />
                   <h3>{i.title}</h3>
                   <p>{i.description}</p>
                   </div>
       ))}
            </div>
           
        </div>
    )
}

export default Project