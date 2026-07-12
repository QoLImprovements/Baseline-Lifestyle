/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "g",
  "description": "Recipe, containing cauliflower, onions, carrots, courgettes, tomatoes, flour and fat spread",
  "id": "cofid-current-15-729",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Crumble, vegetable, with tinned tomatoes, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 20.1,
    "energy_kcal": 174.0,
    "fat_g": 9.6,
    "fibre_g": 0.0,
    "folate_ug": 14.0,
    "iron_mg": 0.95,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 48.0,
    "potassium_mg": 288.0,
    "protein_g": 3.1,
    "salt_g": 0.1725,
    "sat_fat_g": 2.31,
    "sodium_mg": 69.0,
    "sugar_g": 4.9,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 9.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-729",
  "state": "Canned",
  "subcategory": "DR",
  "tags": [
    "canned",
    "dr",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
