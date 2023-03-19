import useSWR from 'swr'
import Card from '../card'
const fetcher = (...args) => fetch(...args).then((res) => res.json())

export default function PropertiesByDevelopers(props) {
    const { data, error } = useSWR(`http://localhost:3000/properties/by-developer/${props.id}`, fetcher)

    if (error) {
      return <div>Failed to load data</div>
    }
  
    if (!data) {
      return <div>Loading...</div>
    }
    return(
            data.map(property => (
                <Card
                    key={property._id}
                    name={property.projectName}
                    location={property.location}
                    price={property.price}
                    bedrooms={property.details.bedrooms}
                    bathrooms={property.details.bathrooms}
                    size={property.details.propertySize}
                    type={property.details.propertyType}
                    status={property.details.status}
                />
            ))
    )
}
  