import React from "react";

const ListItem = (props) => {
  const data = props.data;
  const getItem = props.getItem;

  const HandleItem = (id) => {
    getItem(id);
  };

  return (
    <div style={{ marginTop: 15 }}>
      {/* <ul className="list-group list-group-horizontal"> */}
      {data.map((d) => (
        <button
          key={d.id}
          style={{ marginRight: 5, marginBottom: 10 }}
          type="button"
          className="btn btn-success"
          onClick={() => HandleItem(d.id)}
        >
          {d.label}
        </button>
      ))}
    </div>
  );
};

export default ListItem;
