const baseUrl = 'https://warm-garden-17574.herokuapp.com/api/products';

const [data, setData] = useState([]);
const requestGet = async () => {
  try {
    await axios.get(baseUrl)
      .then(response => {
        setData(response.data);
      })
  }
  catch (err) {
    console.log(err);
  }

}
useEffect(async () => {
  await requestGet();
}, [])


//Status for show data
const [select, setSelect] = useState({
  product_name: '',
  provider: '',
  date_entry: '',
  description: '',

})
//sync typing with fields
const handleChange = (e) => {

  const { name, value } = e.target;
  setSelect({ ...select, [name]: value })
}


//request POST
const resquestPost = async () => {
  await axios.post(baseUrl, select)
    .then(response => {
      setData(data.concat(response.data))
    }

    )
}