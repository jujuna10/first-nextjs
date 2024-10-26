const getPredictAge = async (name) => {
  const res = await fetch(`https://api.agify.io/?name=${name}`)
  return res.json()
}

const getPredictGender = async (name) => {
  const res = await fetch(`https://api.genderize.io/?name=${name}`)
  return res.json()
}

const getPredictCountry = async (name) => {
  const res = await fetch(`https://api.nationalize.io/?name=${name}`)
  return res.json()
}


export default async function Page({params}){

  const ageData = getPredictAge(params.name)
  const genderData = getPredictGender(params.name)
  const countryData = getPredictCountry(params.name)

  const [age,gender,country] = await Promise.all([
    ageData,
    genderData,
    countryData
  ])


  return (
    <div className="flex justify-center items-center h-screen w-full bg-[rgb(20,4,80)]">
         <div className="bg-white p-[50px] rounded-[20px] w-[55%] flex justify-center items-center flex-col">
          <p className="text-[25px] font-bold">Personal Info</p>
          <div className="flex flex-col justify-center items-center bg-[rgb(200,221,222)] p-[25px] rounded-[20px]">
            <p>Age:{age?.age}</p>
            <p>Gender:{gender?.gender}</p>
            <p>Country:{country?.country?.[0]?.country_id}</p>
        </div>
         </div>
    </div>
  )
}

