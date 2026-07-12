/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe. Punjabi dish. Egg, onion and tomato.",
  "id": "cofid-current-15-754",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, egg, with rapeseed oil, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 4.7,
    "energy_kcal": 149.0,
    "fat_g": 12.2,
    "fibre_g": 1.4,
    "folate_ug": 14.0,
    "iron_mg": 1.19,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 83.0,
    "potassium_mg": 188.0,
    "protein_g": 5.3,
    "salt_g": 0.1625,
    "sat_fat_g": 1.46,
    "sodium_mg": 65.0,
    "sugar_g": 3.3,
    "vitamin_a_ug": 65.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 2.91,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-754",
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
