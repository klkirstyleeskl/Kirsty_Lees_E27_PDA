
require('minitest/autorun')
require('minitest/rg')
require_relative('../card_game')
require_relative('../card')


class TestCardGame < MiniTest::Test

  def setup()

    @card1 = Card.new('Hearts', 1)
    @card2 = Card.new('Spades', 7)

    @cards = [@card1, @card2]

    @card_game = CardGame.new()

  end

  def test_check_for_ace__false()
    assert_equal(false, @card_game.check_for_ace(@card2))
  end
  # 
  # def test_check_for_ace__true()
  #   assert_equal(true, @card_game.check_for_ace(@card1))
  # end

  def test_highest_card_value()
    assert_equal(@card2, @card_game.highest_card(@card1, @card2))
  end

  def test_cards_total()
    assert_equal("You have a total of 8", CardGame.cards_total(@cards))
  end

end
