import React from "react";
import styled from "@emotion/styled";
import { Classes } from "types/classes";

export const Banner = ({ classes }: { classes: Classes }) => {
  return (
    <Main>
      <ImgBody src={classes.icon} />
      <div style={{ display: "inline-block", paddingLeft: "20px" }}>
        <div style={{ fontSize: "1.8rem", fontWeight: "600" }}>
          {classes.classname}
        </div>
        <div style={{ fontSize: "1.2rem" }}>{classes.description}</div>
      </div>
      <RightCount>
        <div style={{ fontSize: "2.2rem", fontWeight: "600" }}>
          {classes.topicCount}
        </div>
        <div style={{ fontSize: "1.2rem" }}>发布</div>
      </RightCount>
    </Main>
  );
};

const Main = styled.div`
  width: 1120px;
  height: 160px;
  margin: 20px 0;
  background-image: url(data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAABGAAAACgCAMAAAB0d+o8AAAAVFBMVEX/9PH/9e3/6+oAAAD+8u3+7+3+7e3+6Ob+5uD+5N/+6OL+5uL+5+T+6eP+6+n+6uf+7er+7+f+4Nr+8en+7uX+7OT+6+L+6eD93tf+8uv+4tv93NUpZlWbAAAABHRSTlMmra0A/MOa7wAAF4lJREFUeNrsnNu6mjAQhW0LEhNQdNe9lb7/ezZZJF3ocBRKrWZNMjMB24te/N8kGbr5sfl2TKbo4+N6vX780fEId6OfVnBe5/MZzuuT+vqyU0h9qVpJ1Byl1jC8C9EqRDiqWFXaGoZ3f6Jm1CFC6tRQxVQ+0Vrn+kbiyeD7HA/KdGvNORG3jNsooey7xcvmmEzT9Z4wcIIwcAIwJMzZE6Z2t3zBjICZqZSRhHEDrl3FP1SO4aNGuDetgZHLaVBV3iNjTD7+/TaFABUSxqWRK0PKNptvyUQ5tsgS5mNqCQPnwAJ/I1Xj5WsXATOXMGQKsdIRoUOxsgJHQi2TaxcAE+s0zS7cT6vTGF0ImNk6pH9YwgjdxYibFn3fHCcDRpQwx1ElDDwBw01Ss4RRjWgRk0TNwgvIIiNYwphSZbGaNBxjTuLoosGZ3Hv8VKvTOKl8EZk8L1MrYEVEj5U04qVT2SZ5ADCeMLKEoUaewgAtn7AmWtzYfUXALLRJAkwAFz+tnm+PBKzU0+U2Q+HiXa7xRFc8bOlR5fY4GnOugJMGVBDtjEQp9/v9wSpr6HDYW22pBwADtkw852UJI2sYUcIAL84VSdS805dUnL6kIiILOherKocHQ5ATL3XmXmCtoULr3WmMKg0ZTOeQIfjpxByJkw7TCnEvznc9Yhrx7fZIDixZvw7AzKOAsYLz6ihhrKN6SphbwpAx6pxEzbhB6oMMFi0qi5XloOEjhjVIxKDTGO3MUgJZ0jvIvCNUyJZsvPb7BwAzuoQ5jt0kfWrn5U3SzyRqmVJGWCdjBoHQ/1hr7Rzpwachu13xqYvhPTNxj1ydLjA7pIWgjF5E5hDoEiItUOZ9GAO4TNQmmaxrxynMUDOMBAwJA0e0OLf7Usckap0+GOqg11NurY4GC7dGzBkxjMECUqcAksYgXJBUZimVgStuvHUfDOAyXY9VMGDL/BKGhCk8X0gYN65J1F/rg4GTKnVL+4kVV4+9b30MMZIwHi6tqrorl5AtBpjM/ovEPpgGXVaqYOQmyc0JV9Wy244lDAkTAbNaHwyjY0V9c8PoLOQy4jWfyoj3HX8tiGLND6g/qovT6dIjtZRKT5a37oMBXdYEDCROYeAfvqou7jZJbov0mUTNwgvcuD4YxoPOa2wwFkgwGMEU/9wakvZfYSC/jRrODjCGER5R4AWqgBdMFC4cXie1kDJXsLx3H0wJuqwFGBKmv593+iZJ1DBW8RJprmQfDGeXSh1w4oOHAkagReHR4p+zgpG/8gNPQoCjck24jOhfMR4lPlDh6U4ps4i4OXJ6wz4Y4mX1Cmb4FIaEGQaMtULskeIZ7xzJK+refhjK84RD535gIsPTJoKIlCL3OVvlxMiJFp66YI1Z4wU5IteY+VAvzEJ48VdI79sHs8+olSuYKd12FAEjCVOIft54xrtqH8zY75E0E2shMtPI7AQwEGo1MswZqnovqSuzjPCZ4/v2wVi8PDtgBk9hKHkKE49gllMKQ/S2dK+dZir6YBih3j6YwKh+CKlLn3ZqpnjCyz3Su/XBEC8rA4aEmf5V9bn7q2p5CBN3SOv0wUjMFFqoEJl8P13GGqJf+DUi1sZHPIR8Vl26dVJSj2+Q3rMPxuLl3wPmet9td4R7/KvqgohRcYf0N/pgGPs2SaX+92qwx3DFrOeWupI4Uc4mSqNsecs+mDKj5gNmrRJm+IOB5hcDKu6QluqDSab1waCEWVWmCRLDtHYsZ8LKZWpKE4ypbZrKFOrug3nVfhjcHD1FBSMJM+aDgfM9YM4tHwzEHdJf7YNJOvtgoL1eUYbhljNYMiKQNzvA5Bd8SOEq1aqdm7CQ0O6eQHvipXYDfTCvgpetxcs/B8xwCUNN6IUpPgsSRscd0lK6b7Lzs0d6bREumKQM7T6tfrVr184XmB9wHNbEMkuhrj6Yl+2FKbPsGQBzhR66qhanMPxg4KaEiV9Sr98Hg7jiF4+G0TCKogXDZzR1auXLycOk6WAG8AjGgVfM65B7prT2wXT2w/z/uDlkzwGYmxLmOrHbbrgZJjbBLNwHE6KACSO13imMPM0N2c29kmkz006YS4CJcDZ4U2LWnu8DX96sD6bMsmcBzCIlDCQ/qv6MBYzQ4n0wA/ukg15VBoZIM5g9UhcgxZr1PjspiY3b+kXShak34/kitL2xV+uDcXfTzwIYUcJ4jbuqPneWMPUpTCxgVu6DkazRyksj80tmXNOvr0vbCczObYpmiBdI4/tgXuDKur48ehrAXKHF/2+7wvlYwCzfB5OM6oOhDkpDyhoCxIxr+smajaZd2wkMAAPvp7GGYU0x9zEYE/JlqA/mhZrsygx6GsD0ljAfM755RB0TC5hF9GAfDEsYDVPehwQyXMNTfN8n8wdd/OW0Pw9dWq+Qdt4jcehQTTOOO0ANMkwOUb+EPpj0lftgwvboeQAzsYQZTZjCutgD85u9M9xuFISC8B89itjEpO3mtO//oJuM0FERlQgGDYNyRdP9t9+5XEZ8lQ+GasrH/34JxDw6XXbtJSvdx04CWCpiRF9JqSLP6ed9wtADo7DCU7LWgivWZqRAa5HE9aO38sGcC6V4APOHGKcqDAljfkmWVZhk4vXNGjcfDPRB58nQlgJx2D53UfdfXaPBWhJNvICI2bisZP4AOQ34YhXgckQfDHkQEWAcUhiXve2qe/jMknwVeR19MFQjK3uD9EAFB3VB5ZEwv2KtCvLF7oM52r4wTUFFBJgsW1Pn/bLvbVelCZIf2X0wy/aFUbMi9nTByY5HxZkXBJUfCV3hFStVnkbhQsjkhMwRCi8j5ZcYAfOzADDzdV4S5jtVeKmNfTDzbjtpjF0lJS8fIr+ALUUgjhgt0oUYsVKyyWcEriDqtv95Up8vUQEm+/H5VvW3dvMmvgRw86Kb9MOYarD8fMN6zw1xQZMTY6lO/7p6mCAVOeXqg9nvkvWAL1ECxvJWteuXZNHfbqkAQ4X8UjW6aZ1hUyEcvDTTSeND4v6SgKvs6YvdB8OKzDF8MEO+xAWYEBvDpAJMFoUPBqoABL/tflAqqfGhQqxRkU/ouD4YY3k6TsCgCrN+A/BHlyy8kfhgoAZA8N8obxOmJm9q8azqJqcW+2DQ79oHY+YvsQHGdwrzlQowSi/3weg3BoI0JTX0kMKcwcPaI15MdeFyCB/MCF+iA4yFMI/Tfak6LSAFAAvrust9MNRHWYVpD0k1WK9Kp1y1X7ywyHtAH8wYX+IDTNYBDOWewqT8JYxAFmcfDBUKMMCCtwJMQxgUpbDot7xanHXTOqgPZpQvEQImm3DbuXzDJPGlr9f7YKCmHBUpsfh5xYjHiF40MMidagWUTlde29cbMdK366Gx7p18MOP+3RgBk9lTGJeNYf5dEl/uisgHo8sw0eucD3Ua5DF41+gqr527xWK6KKoczAdTjCpKwGT2FMZhkpTWpw2F/D7SXYjz+ii3Erf856FGaDjMWI2nXuda4QRowY+16nOTuwqQOY4PphhXnICxEebyufyt6uSvC6RnfTBUVQYVsYKgeh7c1HIYVcjtOp2K+vFzpVLWxWmcLW/mg7EZYCIFTLY2hUnlF/9a6INhtBd6g0v0L6VoDxAEOCFqEHGrbbJxqNFa9WY+GGuBN1bAZFmfMGCLuZBEwvQBk8ovpqLwwbDQu4VamCDi1EnKyIcCuLfLKQ8usuYgPhh7gTdewGTPbwzzlaZHVGQ+GBJmEwmerL5IjHTPD5BgFJovpg8m370PZoIvEQMGiHlie96EF1PBfDA62qGy/VKSUL2K6tA3pc5VdOOlFGHzF/u+MDuEysICTNSAUbVeFz9vmh2FFilj98G4E0ZO5yDzzzk01Hve4qX7t70753yd3tIHM1WAiRswQIzTK0kJLyFFrsx/H2khYThxMfMNUoDPjV/glvH3vSj+omDEMVSRh5XdB2P6YXazZD05QYodMFm2ZGOYhJd5BffBILrlMEKQBd0maUzRjSN9CKJD8jlZM0oYDRdKqmNDvti/j7TLj64VU4ofMGTMzFL15TPhJbRIGLBk3g8zn8MIqXuByOKrLryqYRvoV2HXfY6zn9Og759GwoN72/LlKD6Y6QLMLgDzh5iLdW+7RBe7gvpgGE0fjGulV4pJU4tU0BiOhHEHwsgu0SsDh62/uPtgGCPHy9wEaSeAUQXf8RTmDpdEl9Cy+2AQ1emocxlYggARZpO9uJQvyQfjMkHaD2A0ZUgY0CZlLvOKzwcT3A8jGHH0YIMLyYir7fx1AMtRfDBzE6SdASbp5frP3rklJw4DAfAHM2Yhkqr2/nfdLZWTcSzAGkuOJafbiUUC+e3SowkrHUwDTe9tMU7ty9Tv6jjNXuL3PQwG6ncw09iHVCwLJAQDJQdJ82s+hcnH6Ayt6JTbu+enE6c4xkf3+IuvPeR4jQa/0MFYJjAIBkzU6mCUP5qljF+P9GucPT1dOnz+sPyKf5JPzvyFDqaJCQyCOT91OhjFz1Sx8MizH9NXz1+mksrHDwZ272CGjjoYWQXBwEEdjOISh7z1jD6I4/MJjQE3HMT1u1P662CcrIJgwETFDkYJ4y11io7zIXFQ+oTNL0dsv6QdjI49dTCyDoKBgkVSYQej+HSyspTNQiTpL/UyKEaGA0g7mHjvrYVxsg6CAatYKnYwSkgWQOlEJf0pfalt/mKoX+hgmpjAIJizY+hgbHzMTaG3OOh9qZ0XS6U8HoMVOhjjBAbBQHkHo5d2MHZCsgbSh+lv3m4Ftzx9eWEZvT4t07pjJAcEA8d1MOkk5gf5GA5nmroMXXYwTnJAMFC5g4m3jYT7rZg227rzdTCSBYKBXTsYHbObmCJab18Whum3gwmSBYKBjW+pzuhgdDTg91eMDFugg9nwLiQEAxtIOxj9Lsff5pxQL4tFUo8dTJA8EAwYSY+o13oYO3LbDbkOh3ON9647GC95IBhopIN5ulA68+yl6w5GMkEwUMAw+cbQwRy23dtE+JJOZfrsYIJkgmBgpw6mXDOhahfzOP5g+jwdjJdMEAzU6WAuSQdTA18pjLn7oTl67mAkFwQDWzuYi6GD2U4o340ZfXuTl3kH09/nIznJBcFAtQ4m3os7mJRQMo+5N2oXfUv1+w6mQb1YVkgIBjazjOym711wH+PNzkdz27orHUwnLYxkg2Bg9w6mknb+OstM5i5ty+XJEfXLHqY13TjJBsFAQQdzedHB6Fib4PyflbnM+PCu0WXRSToYL9kgGKjaweg6aU9C8F4ej3H8cs3/h4+HeB/aV8sL2+jVfAcj+SAY2K+DiSMUdDBNHlkHyQfBQFEHc1HDIJVqHUzTkZ1pCwbBgB1bB4Nx3ncwQ28djJd8EAw038Gck347GDGAYKDENYsOBptsIsqlmw4miAEEAwWbvCsdDJMYUwfTyf+FcWIAwYCZtINBKmUdzKCSaXXjRfFCBwOvOUMHczaiV771MA2vk0x6QTBQVPPG29MehiPrCh1Mi0fWCAZ+gigZOphKHYzuyLTewQThmBqeQgfTHv11ME7Yg4EldDDN8bqDifdmOxjnvXjhUwXgFXQwrTGTS/sdTJQLggEbdrHovi4dTMEmb3cdjEzzl1zJIBjYepJEB1NEnx2MF/EqmTUQDNDBHE5HHUyIbsleJyEYoIM5iMkqfXUwYZq/RMVkOAbBQL3PR5qkglesx0n9dDDOiy6S1v2CYGAjdDC/soNxX1phiQS7kNPB6IheztXBOPH/ibOX6Jd1zSAYoIM5lOvQTwfjPvd3OaaGb9DBNMf3DmboooPRI+rMHgbBQHkHM41Ipez/wjQqlTl+0cFk6AXBQIll6GB+Uwfj5fPKnMIgGCjsYC50MNU6mLSHaezI2i86mLUeBsFA3Q7mQgdT/PlI7X7o2tUvOxj2YECpbZi5U+hgNtFZB+OTDoYlEig7dTA60sHU7GB0bEMv16skHcxaD4NgoLiDiXdamJ46mH/tnWGumzAQBtM2yKZ2wc0vxP0PWlhZLC9rgjHrhOp9Q4vVHmC0mMEJE13XkS5m+pnpP0J4LZh1B4NvkQCDDuZqkFje38HMYuln4sKTyELfhZ0ORvQwvCaAYAA6mMPodzBx1ZcKu4XoGZ5ghB76hGUMOhjwLsgxsoOJdzjmWh0MyaWPgpETjPCLn5CS6c1yoYMB1UAH8391MDS5CMG8nGD8BC2mC/sdDDZ5wQw6mMux0cHEVe/BiGHB7E4wtJBj0MGALNDBXI3FJbs9zHm79GWCIceIDmZnFUAwIBd0MArIDoZXpQ4mdIJCwTjv+yDPg+F1Xy8QDCh5SEIHo9nB0Br/6qQu5RMMLYxzvuvQwYCasFjQwVy7gwmE5gTjvHPWZnQwtEogGIAOJovrdzAhkvZLvmDYL87NSzuO1qCDAbnodzB3dDDlluFrPcIU6eXkBONnaGUcCYYUwyUMOhiwBh3M5eCjM3U6mLDilV9YMMkMJv2INBLWiA4mrttAMECpg4FctDuYYr8o7cGwYcaIQwcDasIdDH4f6bRhFDuYwOTvwWyHvGalFxYM8RsdDKhHE287HQz08tYOJjzRZQjGEBmPSPSiemRaYww6GFAd7mDQwpx4SFLoYAKRuwezIxi5xzvPMO24wqGDARVIdzCbPQx0syMWpQ4mCDY7OyLjW0exyevWgnk8WoMOBiygg7kcih1MSNDlTjDT+scwYoKhDkYK5jE6Q+xLBYIBpTR03dHBlI8y5zuYEAomGN7k/ZPeg/FMHGHWgplp0cEAwZs6GBzdoNXBnBIMc/g4GOEXIZhx9OhgAFO3g7mjg9HvYOpOMIaghZETjJv+SMGQYZzJAYIBJR3MHR3MmzuYRmuCObQHEwcY1z4LJu71ooMBRPUOhu7oYA5+Up3dwTQJtRycYKRg5B6MDHnpJgVDy4gOBtRiLRd0MLodTJP1bBQXgdJpDewYusQEQzdvdoFgwJkOBufCHCXdwez0MNIvGxOM7nlTbtmFkYIhHDoYUKmDubNksPHy1g6GBRPOCoZWJt3BzFf7RTC0ENa8BoIBah0MnpOKbCOvmeaIYPQfkRg34+2X0O5BS5ZhIBig3MHglbVeB9O8XTDGJPZgJqRgIi06GFCng7mjg6nUwdCt5gRjiP0Jxi2Kec5gHivDvAKCAYdAB6PZwTSFHczOHq/KBMMhL90Sm7xsGHQwAB3MdTjewShMMPLEzIy3SHQjw2xNMMNkGHQwQJvmjg5GA5LL4Q6G/JInmP70md+eZpjtCWZ48ZQEwYDjm7zoYD7QwTQlgpEH2u2/pZZH8nLMKyaYYbomLDoYoILsYCCVcx1MIzsYsRLqezBSMDNf/MJfI3krOxhmsCYJBAPQwXwW8gqtfGl1MLKz6zIyGFoZ5zxdK7+ICWZ4OJMGggGlNS/d8PtI1TuY5tQE0+f/qMCfVAezvEdqhWCYYXh4kwCCAcVbvOhglDoY3pEp7GD0vxSQHYx39ulj6vUEM99NCggGoIP5BIc7GO0JJucRiTsYP63J19TsmdGkgGAAOphy9DuYJqODCUc2ecv3YMgr3NrZ9Fuk5d6aBBAMQAfzOdZyye9gQvEEk3GgndyDodtEOoOZ5TLQZc0zEAwoEQvv66KDObHJW9zBkF9KBENr9oF2/Jaabq6VghmiXgb6l9zohWBA2ZskdDCnKO1g6p/WIDoYHmGs3OSNDPEyAggGoIPRpX4HEybqnpjJxC8FiHZ5Tb12C9cwg9yGgWAAOpj3E61S2MGwX2oLJk4v0TCWBDNOJPdghmEQvR0EA3R+Hwk/unamh5EdzCUmmOURKdImOxieYORDEgQDjoMO5qMdTP0JRn5M7Qi7+RaJ/kw81zAQDDhATgfDK/Si2MGUCqYvFYyjPzTBMO3WBEPLjDPq3P7ewXcDHYyWa8o7mCMDzKk9GHaMTXyKNMSLBFPhIcndftzBdwEdTI0OpjnewehPMD79FkmMMNt7MERrlPl5wwjzvfjawcQVUjl3LkxSKgrfOmaf+S0/pnZ84tSC3epgSDCEN6q0t9uv2w8o5rtBakEH874O5sQEkz7Q7sAj0oK1bexgWCy8ELr7vO7n7dc/yGqWgox0mJAAAAAASUVORK5CYII=);
  background-size: 100% 100%;
`;

const ImgBody = styled.img`
  width: 120px;
  height: 120px;
  border-radius: 12px;
  margin: 20px;
  display: inline-block;
`;

const RightCount = styled.div`
  float: right;
  display: inline-block;
  margin: 50px;
  text-align: center;
`;
