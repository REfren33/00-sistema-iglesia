import {
  Table,
  TableBody,
  TableCell,
  TableHeader,
  TableRow,
} from "../../ui/table";

import Badge from "../../ui/badge/Badge";

interface Order {
  id: number;
  user: {
    name: string;
    role: string;
  };
  address: string;
  team: {
    members: number;
  };
  status: string;
  budget: string;
}

// Define la data de la tabla sin imágenes
const tableData: Order[] = [
  {
    id: 1,
    user: {
      name: "Juan Pérez",
      role: "Casado",
    },
    address: "6a Avenida 4-32, Zona 1, Mazatenango",
    team: {
      members: 3,
    },
    budget: "3900",
    status: "Active",
  },
  {
    id: 2,
    user: {
      name: "María López",
      role: "Soltera",
    },
    address: "3a Calle 7-15, Colonia El Progreso, Mazatenango",
    team: {
      members: 2,
    },
    budget: "24900",
    status: "Pending",
  },
  {
    id: 3,
    user: {
      name: "Carlos Méndez",
      role: "Casado",
    },
    address: "8a Avenida 12-08, Barrio San Sebastián, Mazatenango",
    team: {
      members: 1,
    },
    budget: "12700",
    status: "Active",
  },
  {
    id: 4,
    user: {
      name: "Ana González",
      role: "Divorciada",
    },
    address: "5a Calle 2-19, Zona 2, Mazatenango",
    team: {
      members: 3,
    },
    budget: "2800",
    status: "Cancel",
  },
  {
    id: 5,
    user: {
      name: "Luis Ramírez",
      role: "Soltero",
    },
    address: "10a Avenida 6-55, Colonia La Florida, Mazatenango",
    team: {
      members: 3,
    },
    budget: "4500",
    status: "Active",
  },
];


export default function BasicTableNoImages() {
  return (
    <div className="overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-white/[0.05] dark:bg-white/[0.03]">
      <div className="max-w-full overflow-x-auto">
        <Table>
          {/* Encabezado */}
          <TableHeader className="border-b border-gray-100 dark:border-white/[0.05]">
            <TableRow>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Usuario
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Nombre del proyecto
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Dato
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Estado
              </TableCell>
              <TableCell
                isHeader
                className="px-5 py-3 font-medium text-gray-500 text-start text-theme-xs dark:text-gray-400"
              >
                Dato
              </TableCell>
            </TableRow>
          </TableHeader>

          {/* Cuerpo */}
          <TableBody className="divide-y divide-gray-100 dark:divide-white/[0.05]">
            {tableData.map((order) => (
              <TableRow key={order.id}>
                <TableCell className="px-5 py-4 sm:px-6 text-start">
                  <span className="block font-medium text-gray-800 text-theme-sm dark:text-white/90">
                    {order.user.name}
                  </span>
                  <span className="block text-gray-500 text-theme-xs dark:text-gray-400">
                    {order.user.role}
                  </span>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.address}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  {order.team.members}
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-start text-theme-sm dark:text-gray-400">
                  <Badge
                    size="sm"
                    color={
                      order.status === "Active"
                        ? "success"
                        : order.status === "Pending"
                        ? "warning"
                        : "error"
                    }
                  >
                    {order.status}
                  </Badge>
                </TableCell>
                <TableCell className="px-4 py-3 text-gray-500 text-theme-sm dark:text-gray-400">
                  {order.budget}
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </div>
    </div>
  );
}
