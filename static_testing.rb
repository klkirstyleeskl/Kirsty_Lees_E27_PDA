class CardGame


  def checkforAce(card)
    if card.value = 1
      return true
    else
      return false
    end
  end

  dif highest_card(card1 card2)
  # 'dif' here should say 'def'
  if card1.value > card2.value
    return card
    #which card? card1 or card2?
  else
    return card2
  end
end

end #What is this for??, extra end or end in the wrong place

def self.cards_total(cards) #dont think this is right but unsure why 
  total
  # total here is undefined?
  for card in cards
    total += card.value
  return "You have a total of" + total
  end

en #missing 'd' on end to close the CardGame class
