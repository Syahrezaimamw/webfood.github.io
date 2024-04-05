export const getCategory= async()=>{
    return await fetch('https://www.themealdb.com/api/json/v1/1/categories.php')
    .then((res)=>res.json())
    .then(data=>data.categories)

}
export const getDataCategory = async (category,setLoading) =>{
    return await fetch('https://www.themealdb.com/api/json/v1/1/filter.php?c='+category)
    .then((res)=>res.json())
    .then((data)=>{
        setLoading(false)
    return    data.meals
})


}