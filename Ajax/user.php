<?php
include 'components/header.php';
include 'components/navbar.php';
?>
    <form action="" method="POST" id="form" enctype="multipart/form-data">
      <div
        class="container-fluid"
        style="
          background-image: linear-gradient(
            to left bottom,
            #baf8d8,
            #a1efe1,
            #8fe4e9,
            #89d8ed,
            #8dcaed,
            #84caf1,
            #7acbf4,
            #6ecbf8,
            #38dbf9,
            #00e8ea,
            #3cf4cf,
            #7dfbaa
          );
        "
      >
        <h1 class="mb-3">Event Entry Form</h1>
        <div class="row">
          <div class="col-6 form-body p-5">
            <div class="mb-3 row">
              <label for="categoryId" class="col-sm-3 col-form-label"
                >Category ID</label
              >
              <?php
function random_strings($length_of_string) {
  return substr(bin2hex(random_bytes($length_of_string)),0, $length_of_string);
}
              ?>
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  name="categoryId"
                  id="categoryId"
                  value="<?php echo  random_strings(4); ?>"
                  required
                />
              </div>

            </div>
            <div class="mb-3 row">
              <label for="eventType" class="col-sm-3 col-form-label"
                >Event Type</label
              >
              <div class="col-sm-9">
                <input
                  class="form-control"
                  list="eventlistOptions"
                  name="eventType"
                  id="eventType"
                  placeholder="Type to search..."
                  required
                />
                <datalist id="eventlistOptions">
                  <option value="Course"></option>
                  <option value="Workshop"></option>
                  <option value="Sports"></option>
                  <option value="Music"></option>
                </datalist>
              </div>
            </div>
            <div class="mb-3 row">
              <div class="col-sm-3"></div>
              <div class="col-sm-9">
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    name="IsActive"
                    id="IsActive"
                    class="custom-control-input"
                  />
                  <label class="custom-control-label" for="IsActive"
                    >Is Active</label
                  >
                </div>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="eventName" class="col-sm-3 col-form-label"
                >Event Name</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  name="eventName"
                  id="eventName"
                  required
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="eventDescription" class="col-sm-3 form-label"
                >Event Description</label
              >
              <div class="col-sm-9">
                <textarea
                  class="form-control"
                  name="eventDescription"
                  id="eventDescription"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="eventAddress" class="col-sm-3 form-label"
                >Address</label
              >
              <div class="col-sm-9">
                <textarea
                  class="form-control"
                  name="eventAddress"
                  id="eventAddress"
                  rows="4"
                  required
                ></textarea>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="startDateTime" class="col-sm-3 col-form-label"
                >Start Date &amp; Time</label
              >
              <div class="col-sm-9">
                <input
                  type="datetime-local"
                  class="form-control"
                  name="startDateTime"
                  id="startDateTime"
                  required
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="endDateTime" class="col-sm-3 col-form-label"
                >End Date &amp; Time</label
              >
              <div class="col-sm-9">
                <input
                  type="datetime-local"
                  class="form-control"
                  name="endDateTime"
                  id="endDateTime"
                  required
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="eventDuration" class="col-sm-3 col-form-label"
                >Duration In Minutes</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  name="eventDuration"
                  id="eventDuration"
                  required
                />
              </div>
            </div>
            <div class="mb-3 row">
              <div class="col-sm-3"></div>
              <div class="col-sm-9">
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    name="isAccessible"
                    id="isAccessible"
                  />
                  <label class="custom-control-label" for="isAccessible"
                    >Is Accessible</label
                  >
                </div>
              </div>
            </div>
            <div class="mb-3 row">
              <div class="col-sm-3"></div>
              <div class="col-sm-9">
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    name="isFreeActivity"
                    id="isFreeActivity"
                  />
                  <label class="custom-control-label" for="isFreeActivity"
                    >Free Activity</label
                  >
                </div>
              </div>
            </div>
            <div class="mb-3 row">
              <div class="col-sm-3"></div>
              <div class="col-sm-9">
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    name="isLocalActivity"
                    id="isLocalActivity"
                  />
                  <label class="custom-control-label" for="isLocalActivity"
                    >Local Activity</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="col-6 form-body p-5">
            <div class="mb-3 row">
              <label for="targetPopulation" class="col-sm-3 col-form-label"
                >Target Population</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  name="targetPopulation"
                  id="targetPopulation"
                  required
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="websitePrices" class="col-sm-3 col-form-label"
                >Website Prices</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  name="websitePrices"
                  id="websitePrices"
                  required
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="eventLocationCode" class="col-sm-3 col-form-label"
                >Event Location Code</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  name="eventLocationCode"
                  id="eventLocationCode"
                  required
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="theaterName" class="col-sm-3 col-form-label"
                >Theater Name</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  name="theaterName"
                  id="theaterName"
                  required
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="providerWebsiteUrl" class="col-sm-3 col-form-label"
                >Providers Website</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  name="providerWebsiteUrl"
                  id="providerWebsiteUrl"
                  required
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="image1" class="col-sm-3 col-form-label"
                >Image 1</label
              >
              <div class="col-sm-9">
                <input
                  type="file"
                  class="form-control"
                  name="image1"
                  id="image1"
                  accept="image/*"
                  required
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="image2" class="col-sm-3 col-form-label"
                >Image 2</label
              >
              <div class="col-sm-9">
                <input
                  type="file"
                  class="form-control"
                  name="image2"
                  id="image2"
                  accept="image/*"
                  required
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="image1Url" class="col-sm-3 col-form-label"
                >Image 1 Url</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  name="image1Url"
                  id="image1Url"
                  required
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="image2Url" class="col-sm-3 col-form-label"
                >Image 2 Url</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  name="image2Url"
                  id="image2Url"
                  required
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="latitude" class="col-sm-3 col-form-label"
                >Latitude</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  name="latitude"
                  id="latitude"
                  required
                />
              </div>
            </div>
            <div class="mb-3 row">
              <label for="longitude" class="col-sm-3 col-form-label"
                >Longitude</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  name="longitude"
                  id="longitude"
                  required
                />
              </div>
            </div>
            <div class="mb-3 row">
              <div class="col-sm-3"></div>
              <div class="col-sm-9">
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    name="isOnlineActivity"
                    id="isOnlineActivity"
                  />
                  <label class="custom-control-label" for="isOnlineActivity"
                    >Online Activity</label
                  >
                </div>
              </div>
            </div>
            <div class="mb-3 row">
              <label for="eventExternalId" class="col-sm-3 col-form-label"
                >Event External Id</label
              >
              <div class="col-sm-9">
                <input
                  type="text"
                  class="form-control"
                  name="eventExternalId"
                  id="eventExternalId"
                  required
                />
              </div>
            </div>
            <div class="mb-3 row">
              <div class="col-sm-3"></div>
              <div class="col-sm-9">
                <div class="custom-control custom-switch">
                  <input
                    type="checkbox"
                    class="custom-control-input"
                    name="isSeniorCitizenActivity"
                    value="Senior Citizen Activity"
                    id="isSeniorCitizenActivity"
                  />
                  
                  <label
                    class="custom-control-label"
                    for="isSeniorCitizenActivity"
                    >Senior Citizen Activity</label
                  >
                </div>
              </div>
            </div>
          </div>
          <div class="container-fluid pb-5">
            <button class="btn btn-success col-12" type="submit" name="submit" id="userInsertData">
              Sumbit Event
            </button>
          </div>
        </div>
      </div>
    </form>
    
<?php
include 'components/footer.php';
?>
