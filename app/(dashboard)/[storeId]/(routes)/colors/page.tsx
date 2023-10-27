import { format } from "date-fns";

import { prismadbPLSC } from "@/lib/prismadb";

import { ColorClient } from "./components/ColorClient";
import { ColorColumn } from "./components/ColorColumns";

const ColorPage = async ({ params }: { params: { storeId: string } }) => {
  const colors = await prismadbPLSC.color.findMany({
    where: {
      storeId: params.storeId,
    },
    orderBy: {
      createdAt: "desc",
    },
  });
  const formattedColors: ColorColumn[] = colors.map((item) => ({
    id    : item.id,
    name  : item.name,
    value : item.value,
    createdAt: format(item.createdAt, "MMMM do, yyyy"),
  }));

  return (
    <div className="flex-col">
      <div className="flex-1 space-y-4 p-8 pt-6">
        <ColorClient data={formattedColors} />
      </div>
    </div>
  );
};

export default ColorPage;
