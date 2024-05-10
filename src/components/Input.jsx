const InputField = ({ placeholder, type, id, text }) => {
  return (
    <div className="input-field  my-3">
      <div className="input-group flex-nowrap d-flex flex-column ">
        <div className="label">
          <label for={id} className="form-label fw-bolder">
            {text}
          </label>
        </div>
        <div className="input">
          <input
            type={type}
            className="form-control border-secondary "
            placeholder={placeholder}
            aria-label={placeholder}
            id={id}
            aria-describedby="addon-wrapping"
          />
        </div>
      </div>
    </div>
  );
};

export default InputField;
