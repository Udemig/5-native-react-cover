import { useState } from "react";
import Button from "./Button";

const Counter = () => {
  /*
   * Hooks: Özel yetenekli fonksiyonlardır.
   */
  /*
    ! useState dizi içerinde iki değer gönderir
    * 1.count:durumun son halini erişmemizi sağlayacak değişken
    * 2.setCount:durumu değiştirmemizi sağlayacak fonksiyon
  */
  const [count, setCount] = useState(0);
  const Count = () => {
    setCount(count + 1);
  };
  const Azalt = () => {
    setCount(count - 1);
  };
  const Reset = () => {
    setCount(0);
  };

  const [text, setText] = useState("");
  console.log(text);
  return (
    // react fragment
    // kapsayıcı eleman herhangi bir stil almayacaksa
    // boşuna yer kaplamaması için kullanılır
    <>
      <div className="p-3">
        {/* <p>{`Butona ${count} kez tıklanıldı`}</p> */}
        <Button title="Arttır" stil="btn-success" Count={Count} />
        <div className="d-flex align-items-center gap-3 mt-3">
          <Button title={"Arttır"} stil={"btn-success"} Count={Count} />
          <span>{count}</span>
          <Button title={"Azalt"} stil={"btn-secondary"} Count={Azalt} />
          <Button title={"Sıfırla"} stil={"btn-primary"} Count={Reset} />
        </div>
        <input type="text" onChange={(event) => setText(event.target.value)} />
        <p>{text}</p>
      </div>
    </>
  );
};

export default Counter;
