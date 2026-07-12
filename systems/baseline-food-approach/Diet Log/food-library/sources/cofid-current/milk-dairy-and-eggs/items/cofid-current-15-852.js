/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe. Green peppers with mixed vegetable stuffing. Recipe from a review of recipe collection",
  "id": "cofid-current-15-852",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Peppers, green, stuffed with vegetables, cheese topping, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 5.2,
    "energy_kcal": 80.0,
    "fat_g": 5.6,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.43,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 63.0,
    "potassium_mg": 191.0,
    "protein_g": 2.6,
    "salt_g": 0.1125,
    "sat_fat_g": 0.0,
    "sodium_mg": 45.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 58.0,
    "vitamin_c_mg": 31.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 7.43
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-852",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
