const Bottle = ({ data, buttonHandle }) => {
  let { name, img, price } = data;
  return (
    <div className="flex flex-col border-2 items-center gap-2 py-5">
      <h1 className="text-3xl font-extrabold">{name}</h1>
      <img src={img} alt="" className="w-[200px]" />
      <h1 className="font-extrabold">$ {price}</h1>
      <button
        className="bg-slate-400 px-10 my-5 py-3 rounded-xl"
        onClick={() => buttonHandle(data)}
      >
        Buy
      </button>
    </div>
  );
};

export default Bottle;
