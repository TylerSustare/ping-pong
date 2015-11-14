describe('pingPong', function(){
  it("return is 'pingpong' for a number divisible by 15", function(){
    expect(pingPong(15)).to.equal('pingpong');
  });

  it("return is 'pong' for a number divisible by 5", function(){
    expect(pingPong(5)).to.equal('pong');
  });

  it("return is 'ping' for a number divisible by 3", function(){
    expect(pingPong(3)).to.equal('ping');
  });

  it("return is just the number passed in for all other numbers", function(){
    expect(pingPong(2)).to.equal(2);
  });
});
