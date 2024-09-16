import React, { useState } from "react";
import { initialColumns } from "./taskData";

const DragDropTask = () => {
  const [columns, setColumns] = useState(initialColumns);
  const [draggedTaskId, setDraggedTaskId] = useState(null);
  const [sourceColumnId, setSourceColumnId] = useState(null);

  const onDragStart = (event, columnId, taskId) => {
    setDraggedTaskId(taskId);
    setSourceColumnId(columnId);
  };

  const onDragOver = (event) => {
    event.preventDefault(); // Required to allow a drop
  };

  const onDrop = (event, destColumnId) => {
    if (!draggedTaskId || !sourceColumnId || sourceColumnId === destColumnId)
      return;

    const sourceColumn = columns[sourceColumnId];
    const destColumn = columns[destColumnId];

    const taskToMove = sourceColumn.tasks.find(
      (task) => task.id === draggedTaskId
    );
    const updatedSourceTasks = sourceColumn.tasks.filter(
      (task) => task.id !== draggedTaskId
    );

    const updatedDestTasks = [...destColumn.tasks, taskToMove];

    setColumns({
      ...columns,
      [sourceColumnId]: {
        ...sourceColumn,
        tasks: updatedSourceTasks,
      },
      [destColumnId]: {
        ...destColumn,
        tasks: updatedDestTasks,
      },
    });

    setDraggedTaskId(null);
    setSourceColumnId(null);
  };

  return (
    <div className="drag-drop-container">
      <div style={{ display: "flex", justifyContent: "space-around" }}>
        {Object.entries(columns).map(([columnId, column]) => (
          <div
            key={columnId}
            style={{
              margin: "8px",
              padding: "16px",
              backgroundColor: "#84549c",
              width: "250px",
              minHeight: "500px",
              borderRadius: "8px",
              boxShadow: "0px 4px 8px rgba(0, 0, 0, 0.1)",
              transition: "background-color 0.3s ease",
            }}
            onDragOver={(event) => onDragOver(event)}
            onDrop={(event) => onDrop(event, columnId)}
          >
            <h3 style={{ textAlign: "center", color: "#c084fc" }}>
              {column.name}
            </h3>
            {column.tasks.map((task) => (
              <div
                key={task.id}
                draggable
                onDragStart={(event) =>
                  onDragStart(event, columnId, task.id)
                }
                style={{
                  userSelect: "none",
                  padding: "16px",
                  margin: "8px 0",
                  backgroundColor: "#b0a9a2",
                  color: "#6b21a8",
                  borderRadius: "5px",
                  cursor: "grab",
                  boxShadow: "0px 2px 4px rgba(0, 0, 0, 0.1)",
                  transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.backgroundColor = "#91d9c8";
                  e.currentTarget.style.boxShadow =
                    "0px 4px 8px rgba(0, 0, 0, 0.2)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.backgroundColor = "#f9a8d4";
                  e.currentTarget.style.boxShadow =
                    "0px 2px 4px rgba(0, 0, 0, 0.1)";
                }}
              >
                {task.content}
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
};

export default DragDropTask;
