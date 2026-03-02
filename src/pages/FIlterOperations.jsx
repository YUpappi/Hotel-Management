import Filter from "../ui/Filter";
import SortBy from "../ui/SortBy";
import TableOperations from "../ui/TableOperations";

function FIlterOperations() {
  return (
    <TableOperations>
      <Filter
        filterField="discount"
        options={[
          { value: "all", label: "All" },
          { value: "with-discount", label: "With discount" },
          { value: "no-discount", label: "No discount" },
        ]}
      />
      <SortBy
        options={[
          { value: "name-asc", label: "Sorty By name (A-Z)" },
          { value: "name-dsc", label: "Sorty By name (Z-A)" },
          { value: "regularPrice-asc", label: "Sort by Price(low )" },
          { value: "regularPrice-dsc", label: "Sort by Price(high )" },
          { value: "maxCapacity-asc", label: "Sort by capacity(low )" },
          { value: "maxCapacity-dsc", label: "Sort by capacity(high )" },
        ]}
      />
    </TableOperations>
  );
}

export default FIlterOperations;
