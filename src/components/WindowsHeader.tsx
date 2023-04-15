import { Window } from "@/components/Window";
import Delayed from "@/components/Delayed";
import { DndContext, DragEndEvent } from "@dnd-kit/core";
import { useCallback, useState } from "react";

export const WindowsHeader: React.FC = () => {
  const windowsQuantity = 12;
  const windowsShowMsDelay = new Array(windowsQuantity)
    .fill(null)
    .map((_value, index) => index * 100);
  const windowsInitialSpacingPxValues = new Array(windowsQuantity)
    .fill(null)
    .map((_value, index) => index * 16);
  const [windows, setWindows] = useState(
    new Array(windowsQuantity).fill(null).map((value, index) => ({
      id: `window-${index}`,
      top: windowsInitialSpacingPxValues[index],
      left: windowsInitialSpacingPxValues[index],
    }))
  );

  const windowsComponents = windows.map((_value, index) => {
    const waitBeforeShow = windowsShowMsDelay[index];

    return (
      <Delayed key={`window-${index}`} waitBeforeShow={waitBeforeShow}>
        <Window
          id={`window-${index}`}
          style={{ marginTop: windows[index].top, left: windows[index].left }}
        />
      </Delayed>
    );
  });

  const handleDragEnd = useCallback(
    (ev: DragEndEvent) => {
      // What to do here??
      // It's not a sortable, it's a free drag and drop
      const window = windows.find((x) => x.id === ev.active.id);

      if (window) {
        window.left += ev.delta.x;
        window.top += ev.delta.y;
        const _windows = windows.map((x) => {
          if (x.id === window.id) return window;
          return x;
        });

        setWindows(_windows);
      }
    },
    [windows]
  );

  return <DndContext onDragEnd={handleDragEnd}>{windowsComponents}</DndContext>;
};
