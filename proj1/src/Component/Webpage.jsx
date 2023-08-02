import './Webpage.css';

function Webpage() {
  const imageUrl = 'https://i0.wp.com/yaleclimateconnections.org/wp-content/uploads/2023/02/22323_ojibwemoose.jpg?fit=1600%2C900&ssl=1';
  return (
    <div className='Web'>
        <div>
              <h1>Sarah's Favorite Animal</h1>
              <table>
                <tr>
                    <th>Home</th>
                    <th>Fun Facts</th>
                </tr>
                <tr>
                   
                    <td> <img className="img"  src={imageUrl} alt="My Image" /></td>
                    <td>The moose (pl: moose; used in North America) or elk (pl: elk or elks; used in Eurasia) (Alces alces) is the only species in the genus Alces. It is the largest and heaviest extant species of deer. Most adult male moose have distinctive broad, palmate ("open-hand shaped") antlers; most other members of the deer family have antlers with a dendritic ("twig-like") configuration. Moose typically inhabit boreal forests and temperate broadleaf and mixed forests of the Northern Hemisphere in temperate to subarctic climates. Hunting and other human activities have caused a reduction in the size of the moose's range over time. It has been reintroduced to some of its former habitats. Currently, most moose occur in Canada, Alaska, New England (with Maine having the most of the lower 48 states), New York State, Fennoscandia, the Baltic states, Poland, Kazakhstan, and Russia.</td>                
                </tr>
              </table>

        <h1>Moose are awesome becuase...</h1>
        
            <p>1. They can swim really well</p>
            <p>2. They can make really funny noises</p>
            <p>3. They can close their nostrils</p>
        
        <h1> If I were a moose,I would...</h1>
       
            <li>Eat lots of lettuce</li>
            <li>Carry little animals on my antlers</li>
            <li>Swim to alaska</li>
            <h1>Moose video...</h1>
            <iframe width="560" height="315" src="https://www.youtube.com/embed/eA-ryQqzKUE" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>
       
        
    </div>
    </div>
  );
}

export default Webpage;
