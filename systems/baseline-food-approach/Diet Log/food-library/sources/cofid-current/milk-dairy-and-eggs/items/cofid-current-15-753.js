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
  "id": "cofid-current-15-753",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, egg, with butter, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 39.0,
    "carbs_g": 4.7,
    "energy_kcal": 135.0,
    "fat_g": 10.6,
    "fibre_g": 1.4,
    "folate_ug": 14.0,
    "iron_mg": 1.18,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 85.0,
    "potassium_mg": 190.0,
    "protein_g": 5.4,
    "salt_g": 0.325,
    "sat_fat_g": 5.56,
    "sodium_mg": 130.0,
    "sugar_g": 3.4,
    "vitamin_a_ug": 160.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.08,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-753",
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
