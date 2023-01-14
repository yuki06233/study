import "./styles.css";

export default function App() {
  const list = [1, 2, 3, 4];
  const dataList = [
    {
      name: "taro",
      age: 21
    },
    {
      name: "jiro",
      age: 23
    }
  ];
  return (
    <div className="App">
      <h1>Map Practice</h1>
      {list.map((number) => (
        <div>{number * 2}</div>
      ))}
      {dataList.map((data) => (
        <div>
          {data.name}
          <span>{data.age}</span>
        </div>
      ))}
    </div>
  );
}
