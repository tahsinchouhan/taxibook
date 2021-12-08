<Row
  style={{
    display: "flex",
    justifyContent: "center",
    marginLeft: "10px",
    marginRight: "20px",
  }}
>
  <Col xs={12} md={4} xl={2} className="mt-2">
    <Form.Group className="" controlId="exampleForm.ControlInput1">
      <Form.Label className="dm-ticket">Select Your Location</Form.Label>
      <Autocomplete
        underlineStyle={{ display: "none" }}
        style={{
          backgroundColor: "#f5f5f5",
          border: 0,
          padding: "0px",
        }}
        freeSolo
        value={sendlocation}
        autoComplete
        autoHighlight
        onChange={(e) => {
          setSendlocation(e.target.innerHTML.split(",")[1]);
        }}
        options={myOptions}
        renderInput={(params) => (
          <TextField
            variant="standard"
            required="required"
            style={{ padding: "5px" }}
            {...params}
            onKeyPress={(e) => getDataFromAPI(e.target.value)}
            placeholder="Search Area"
            // InputProps={{ disableUnderline: true }}
          />
        )}
      />
    </Form.Group>
  </Col>
  {/* <Form.Group className="" controlId="exampleForm.ControlInput1">
              <Form.Label className="dm-ticket">
                Select Your Location
              </Form.Label>
              <Autocomplete
                style={{ width: 200 }}
                freeSolo
                autoComplete
                autoHighlight
                onChange={(e) => {
                  setSendlocation(e.target.innerHTML.split(",")[1]);
                }}
                options={myOptions}
                renderInput={(params) => (
                  <TextField
                    {...params}
                    value={sendlocation ? sendlocation : "ddd"}
                    onKeyPress={(e) => getDataFromAPI(e.target.value)}
                    variant="outlined"
                    label="Search Area"
                  />
                )}
              />
            </Form.Group> */}

  <Col xs={12} md={3} className="mt-2">
    <Form.Group className="" controlId="exampleForm.ControlInput1">
      <div>
        <Form.Label className="dm-ticket">Booking Date</Form.Label>
        <br />
        <div>
          <div
            style={{
              backgroundColor: "#f5f5f5",
              padding: "5px",
              paddingLeft: "20px",
              display: "flex",
            }}
          >
            <img
              alt="logo"
              className="location-userdatas-calendar"
              src={calendar}
              style={{
                width: 25,
                height: 25,
                marginRight: "10px",
              }}
            />
            <RangePicker
              disabledDate={disabledDate}
              onChange={(date) => chnageDate(date)}
              minDate={new Date()}
              defaultValue={[
                moment(startDate, dateFormat),
                moment(endDate, dateFormat),
              ]}
              style={{
                backgroundColor: "transparent",
                border: "0",
              }}
            />
          </div>
        </div>
      </div>
    </Form.Group>
  </Col>
  <Col xs={12} md={3} className="mt-2">
    <Form.Group className="" controlId="exampleForm.ControlInput1">
      <Form.Label className="dm-ticket">Number Of Guests</Form.Label>
    </Form.Group>
    <ANTDropdown overlay={menu}>
      <input // onChange={(e) => setEmail(e.target.value)}
        // value={email}
        name="guestRoom"
        type="text"
        id="inputState"
        className="form-control pass_input"
        placeholder={`${noOfRoom} Room ,${noOfGuest} guest`}
        onClick={handleShow}
        style={{
          backgroundColor: "#f5f5f5",
          border: 0,
          height: "47px",
          padding: "10px",
        }}
        readOnly
      />
    </ANTDropdown>
  </Col>
  <Col
    md={2}
    className="mt-2"
    style={{
      display: "flex",
      justifyContent: "center",
      alignItems: "flex-end",
    }}
  >
    <div
      className="dmticket-btn"
      //   style={{ textAlign: "center" }}
    >
      <Button
        type="submit"
        // class="btn btn-success"
        style={{
          width: "138px",
          textAlign: "center",
          height: "47px",
          borderRadius: "5px",
          backgroundColor: "#0fa453",
          border: "none",
        }}
        onClick={onDmTicketShow}
      >
        Search Now
      </Button>
    </div>
  </Col>
</Row>;
