describe('pingPong', function(){
  it("is pingpong for a number divisible by 15", function(){
    expect(pingPong(15)).to.equal('pingpong');
  });
});
