export function Food() {
const items = [
"Pizza","Cake","Burger","Noodles","Momo","Biryani","Samosa",
"Kachori","Dosa","Pastry","Tea","Coffee","Vada","Shake",
];


return (
<section className="bg-white py-16 px-10 text-black">
<div className="flex items-center justify-between mb-10">
<h2 className="text-2xl font-bold">Order our best food options</h2>
<div className="flex gap-3">
<button className="w-9 h-9 rounded-full bg-gray-100">←</button>
<button className="w-9 h-9 rounded-full bg-gray-100">→</button>
</div>
</div>


<div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-7 gap-10">
{items.map((item) => (
<div key={item} className="flex flex-col items-center gap-3">
<div className="w-24 h-24 rounded-full bg-gray-100 shadow-sm" />
<p className="text-sm font-medium">{item}</p>
</div>
))}
</div>
</section>
);
}

export default Food;