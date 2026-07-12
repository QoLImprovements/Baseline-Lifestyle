/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "g",
  "description": "Recipe adapted from a recipe from Leeds Polytechnic",
  "id": "cofid-current-15-221",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Nut, mushroom and rice roast, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 32.0,
    "carbs_g": 24.3,
    "energy_kcal": 260.0,
    "fat_g": 15.3,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 1.3,
    "magnesium_mg": 72.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 200.0,
    "potassium_mg": 340.0,
    "protein_g": 7.8,
    "salt_g": 0.725,
    "sat_fat_g": 2.2,
    "sodium_mg": 290.0,
    "sugar_g": 2.8,
    "vitamin_a_ug": 134.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 2.5,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-221",
  "state": "Unspecified",
  "subcategory": "DR",
  "tags": [
    "dr",
    "fungi",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
