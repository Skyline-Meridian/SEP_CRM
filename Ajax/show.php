<?php
include 'components/header.php';
include 'components/navbar.php';
?>
	<!-- Search Bar -->

	<div class="container">
		<div class="row justify-content-center">
			<div class="col-md-12">
				<div class="card mt-5">
					<div class="card-header">
						<h4>Search</h4>
					</div>
					<div class="card-body">
						<form action="" method="post">
							<div class="row">
								<div class="col-md-4">
									<div class="form-group">
										<label>Search</label>
										<input type="text" name="Search" id="search" class="form-control" placeholder="Enert the event">
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>Search Type</label>
										<label for=""></label>
										<select class="form-control" name="select" id="select">
											<option value="categoryId">categoryId</option>
											<option value="eventDescription">eventDescription</option>
											<option value="eventAddress">eventAddress</option>
											<option value="eventDuration">eventDuration</option>
										</select>
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>From Date</label>
										<input type="date" name="form_date" id="form_date" class="form-control">
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>To Date</label>
										<input type="date" name="to_date" id="to_date" class="form-control">
									</div>
								</div>
								<div class="col-md-4">
									<div class="form-group">
										<label>Click to Search</label>
										<br>
										<button type="submit" class="btn btn-primary" name="submit" id="searchBar" value="search">Search</button>
									</div>
								</div>
							</div>
						</form>
						<div class="container">
									<div class="row justify-content-center">
										<div class="col-md-12">
											<div class="card mt-5">
												<div class="card-header">
													<div class="row ">
													<h4 class="col-md-10">ALL DATA</h4>
													<div class="col-md-2">
													<a name="" id="" class="btn btn-primary " href="/Ajax/show.php" role="button">Refresh</a>
													</div>
													</div>
												</div>
												<div class="card-body">
													<div class="row justify-content-center" id="allData">

													</div>
													<div class="row justify-content-center" id="all"></div>
													<!-- pagination -->
													<ul class="pagination">

													</ul>
												</div>
											</div>
										</div>
									</div>

					</div>
				</div>
			</div>


		</div>
	</div>

	<?php
include 'components/footer.php';
?>