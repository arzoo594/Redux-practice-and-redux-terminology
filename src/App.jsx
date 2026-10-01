import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/counter/counterSlice";

const App = () => {
  const value = useSelector((state) => {
    return state.counter.value;
  });
  const disPatch = useDispatch();
  return (
    <div className="min-h-screen bg-gray-100 flex items-center justify-center">
      <div className="bg-white shadow-xl rounded-2xl p-8 text-center w-80">
        <h1 className="text-2xl font-bold text-gray-800 mb-6">
          Counter: {value}
        </h1>

        <div className="flex justify-center gap-3">
          <button
            onClick={() => disPatch(increment())}
            className="bg-green-500 hover:bg-green-600 text-white font-semibold px-5 py-2.5 rounded-lg transition"
          >
            Increment
          </button>

          <button
            onClick={() => disPatch(decrement())}
            className="bg-red-500 hover:bg-red-600 text-white font-semibold px-5 py-2.5 rounded-lg transition"
          >
            Decrement
          </button>
        </div>
      </div>
    </div>
  );
};

export default App;

// const App = () => {
//   return (
//     <div className="min-h-screen bg-muted/40">
//       <main className="container mx-auto max-w-3xl px-4 py-8 space-y-5">
//         {/* Header */}
//         <header className="flex items-center justify-between gap-3">
//           <div>
//             <h1 className="text-2xl font-semibold tracking-tight">
//               Redux Todo
//             </h1>

//             <p className="text-sm text-muted-foreground">
//               State managed using Redux Toolkit
//             </p>
//           </div>

//           <button className="bg-primary text-primary-foreground px-4 py-2 rounded-md text-sm font-medium hover:opacity-90 transition">
//             + New Task
//           </button>
//         </header>

//         {/* Stats */}
//         <div className="grid grid-cols-3 gap-3">
//           <div className="bg-background border rounded-lg p-4">
//             <p className="text-sm text-muted-foreground">Total</p>
//             <h2 className="text-2xl font-semibold mt-1">0</h2>
//           </div>

//           <div className="bg-background border rounded-lg p-4">
//             <p className="text-sm text-muted-foreground">Completed</p>
//             <h2 className="text-2xl font-semibold mt-1">0</h2>
//           </div>

//           <div className="bg-background border rounded-lg p-4">
//             <p className="text-sm text-muted-foreground">Pending</p>
//             <h2 className="text-2xl font-semibold mt-1">0</h2>
//           </div>
//         </div>

//         {/* Filter */}
//         <div className="bg-background border rounded-lg p-3 flex items-center gap-2">
//           <button className="px-3 py-1.5 rounded-md bg-primary text-primary-foreground text-sm">
//             All
//           </button>

//           <button className="px-3 py-1.5 rounded-md text-sm hover:bg-muted">
//             Active
//           </button>

//           <button className="px-3 py-1.5 rounded-md text-sm hover:bg-muted">
//             Completed
//           </button>
//         </div>

//         {/* Todo List */}
//         <div className="bg-background border rounded-lg overflow-hidden">
//           <div className="p-4 border-b">
//             <h2 className="font-semibold">Tasks</h2>
//             <p className="text-sm text-muted-foreground">
//               Manage your daily tasks
//             </p>
//           </div>

//           <div className="p-8 text-center">
//             <p className="text-sm text-muted-foreground">No tasks yet</p>

//             <button className="mt-3 text-sm font-medium text-primary hover:underline">
//               Create your first task
//             </button>
//           </div>
//         </div>
//       </main>
//     </div>
//   );
// };

// export default App;
