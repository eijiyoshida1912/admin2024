import { useContext, useState } from "react";
import Chart from "../../components/chart/Chart";
import Featured from "../../components/featured/Featured";
import Navbar from "../../components/navbar/Navbar";
import Sidebar from "../../components/sidebar/Sidebar";
import Table from "../../components/table/Table";
import Widget from "../../components/widget/Widget";
import "./home.scss";
import { LanguageContext } from "../../context/languageContext";
import text from "../../text.json";
import {
  DndContext,
  closestCenter,
  KeyboardSensor,
  PointerSensor,
  useSensor,
  useSensors,
} from "@dnd-kit/core";
import {
  arrayMove,
  horizontalListSortingStrategy,
  SortableContext,
  sortableKeyboardCoordinates,
  verticalListSortingStrategy,
} from "@dnd-kit/sortable";
import { SortableItem } from "./SortableItem";

const Home = () => {
  const { language } = useContext(LanguageContext);

  const [items, setItems] = useState(["user", "order", "earning", "balance"]);
  const sensors = useSensors(
    useSensor(PointerSensor),
    useSensor(KeyboardSensor, {
      coordinateGetter: sortableKeyboardCoordinates,
    })
  );

  function handleDragEnd(event) {
    const { active, over } = event;

    if (active.id !== over.id) {
      setItems((items) => {
        const oldIndex = items.indexOf(active.id);
        const newIndex = items.indexOf(over.id);

        return arrayMove(items, oldIndex, newIndex);
      });
    }
  }

  return (
    <div className="home">
      <Sidebar />
      <div className="homeContainer">
        <Navbar />

        <div className="widgets">
          <DndContext
            sensors={sensors}
            collisionDetection={closestCenter}
            onDragEnd={handleDragEnd}
          >
            <SortableContext
              items={items}
              strategy={horizontalListSortingStrategy}
            >
              {items.map((id) => (
                <SortableItem key={id} id={id} />
              ))}
            </SortableContext>
          </DndContext>
        </div>
        <div className="charts">
          <Featured />
          <Chart title={text.chart.title[language]} aspect={2 / 1} />
        </div>
        <div className="listContainer">
          <div className="listTitle">
            {text.home.transactiontitle[language]}
          </div>
          <Table />
        </div>
      </div>
    </div>
  );
};

export default Home;
