/*
 * A function runs to do its job, then it's removed from the stack 
 * so memory is freed and the program can keep going.
*/

/*
 NestJs:
 @Get('profile/:id')
  getUserProfile(@Param('id') id: string) {
  return this.userService.getUserProfile(id);
}

 async getUserProfile(id: string): Promise<UserProfileDto> {
   const user = await this.userRepository.findById(id);
   const activity = await this.activityService.getRecentActivity(id);
   return { ...user, activity };
}*/

function makeSandwich(): void {
  getBread();
  addFilling();
  serve();
}

function getBread(): void {
  console.log("Getting bread...");
}

function addFilling(): void {
  getCheese();
  getTomato();
  console.log("Adding filling...");
}

function getCheese(): void {
  console.log("Getting cheese...");
}

function getTomato(): void {
  console.log("Getting tomato...");
}

function serve(): void {
  console.log("Serving the sandwich! ");
}

makeSandwich();