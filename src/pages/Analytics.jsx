
import Section1 from '../components/anlytics/Section1'
import Section2 from '../components/anlytics/Section2'
import Section3 from '../components/anlytics/Section3'
import Section4 from '../components/anlytics/Section4'
const Analytics = () => {
  return (
    <div className="flex flex-col ms-2 pe-8 h-fit w-full tablet:w-auto">
        <Section1/>
        <Section2/>
        <Section3/>

        <Section4/>

    </div>
  )
}

export default Analytics