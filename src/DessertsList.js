function DessertsList(props) {
  const filterDesserts = props.data.filter((dessert) => dessert.calories < 501)
  .sort((a,b) => {return a.calories - b.calories })
  .map(dessert => {
    const itemText = `${dessert.name} - ${dessert.calories} cal.`
    return <li>{itemText}</li>
  })
  return (
    <ul>
      {filterDesserts}
    </ul>
    )
}

export default DessertsList;
