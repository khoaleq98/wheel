import "./styles.css";
import WheelComponent from "./WheelComponent";
export default function App() {
  const segments = [
    {
    label: "Happy",
    value: "Not Happy"
  },
  {
    label: "Happy1",
    value: "Not Happy1"
  },
  {
    label: "Happy2",
    value: "Not Happy2"
  },
  {
    label: "Happy3",
    value: "Not Happy3"
  },
];
  const segColors = [
    "#EE4040",
    "#F0CF50",
    "#815CD1",
    "#3DA5E0",
    // "#34A24F",
    // "#F9AA1F",
    // "#EC3F3F",
    "#FF9000"
  ];
  const onFinished = (winner) => {
    console.log(winner);
    window.alert(winner);
  };
  return (
    <div className="App">
      <div id="wheelCircle">
        <WheelComponent
          segments={segments}
          segColors={segColors}
          winningSegment=""
          onFinished={(winner) => onFinished(winner)}
          primaryColor="black"
          primaryColoraround="#ffffffb4"
          contrastColor="white"
          buttonText="Quay"
          isOnlyOnce={false}
          size={190}
          upDuration={50}
          downDuration={2000}
        />
      </div>
    </div>
  );
}
