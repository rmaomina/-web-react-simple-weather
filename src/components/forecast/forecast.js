import { Accordion, AccordionItem, AccordionItemButton, AccordionItemHeading, AccordionItemPanel } from "react-accessible-accordion"
import "./forecast.css"

const WEEK_DAYS = ['월요일', '화요일', '수요일', '목요일', '금요일', '토요일', '일요일']

const Forecast = ({data}) => {
  const dayinInAWeek = new Date().getDay()
  const forecastDays = WEEK_DAYS.slice(dayinInAWeek, WEEK_DAYS.length).concat(WEEK_DAYS.slice(0, dayinInAWeek))

  console.log(forecastDays)

  return (
    <div>
      <label className="title">Daily</label>
      <Accordion allowZeroExpanded>
        {data.list.splice(0, 7).map((item, idx) => {
          return (
            <AccordionItem key={idx}>
              <AccordionItemHeading>
                <AccordionItemButton>
                  <div className="daily-item">
                    <img className="icon-small" src={`icons/${item.weather[0].icon}.png`} alt="weather"/>
                    <label className="day">{forecastDays[idx]}</label>
                    <label className="min-max">{item.weather[0].description}</label>
                    <label className="description">
                      {Math.round(item.main.temp_min)}°C / 
                      {Math.round(item.main.temp_max)}°C
                    </label>
                  </div>
                </AccordionItemButton>
              </AccordionItemHeading>
              <AccordionItemPanel>
                <div className="daily-details-grid">
                  <div className="daily-details-grid-item">
                    <label>Pressure</label>
                    <label>{item.main.pressure}hPa</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Humidity</label>
                    <label>{item.main.humidity}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Clouds</label>
                    <label>{item.clouds.all}%</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Wind speed:</label>
                    <label>{item.wind.speed}m/s</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Sea level:</label>
                    <label>{item.main.sea_level}m</label>
                  </div>
                  <div className="daily-details-grid-item">
                    <label>Feels like:</label>
                    <label>{item.main.feels_like}°C</label>
                  </div>
                </div>
              </AccordionItemPanel>
            </AccordionItem>
          )
        })}
      </Accordion>
    </div>
  )
}

export default Forecast