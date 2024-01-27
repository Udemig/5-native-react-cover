import { useEffect, useState } from "react";

const LifeCycle = () => {
  const [page, setPage] = useState(0);

  // bileşenin ekrana gelme olayı
  useEffect(() => {
    console.log("Bileşen ekrana geldi");
    // comoponenWillUnMount'ı izlemeye yarar
    // return () => {
    //   console.log("Bileşenin ekrandan gitme olayı");
    // };
  }, []);
  //   render olayını izler
  useEffect(() => {
    console.log("bileşen render oldu");
  });

  // belirli bir state'in değişimini izler
  useEffect(() => {
    console.log("Sayfa statei değişti", page);
  }, [page]);
  return (
    <div className="p-3">
      <p>Sayfa:1</p>
      <button className="btn btn-primary" onClick={() => setPage(page + 1)}>
        Sayfa Değiş
      </button>
    </div>
  );
};

export default LifeCycle;
