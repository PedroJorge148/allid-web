export function Search() {
  return (
    <div>
      <div className="flex flex-col w-[45%] h-screen m-auto mt-10">
        <label className="font-bold">Buscar</label>
        <div className="flex p-6 bg-zinc-400 rounded-lg border-b-2-cyan-500">
          <form className="flex flex-col gap-3 w-full">
            <div className="flex gap-2">
              <input
                type="text"
                name="allid_cod"
                id="allid_cod"
                className="flex-1 bg-zinc-900 py-3 px-6 rounded text-sm text-zinc-400 placeholder:text-zinc-400"
              />
              <button
                type="submit"
                className="bg-blue-500 px-6 py-4 rounded font-bold text-sm"
              >
                Buscar
              </button>
            </div>
            <span className="text-sm text-gray-900 font-semibold">
              * Código ALL ID
            </span>
          </form>
        </div>
      </div>
    </div>
  )
}
