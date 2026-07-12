/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "recipe from dietary survey records",
  "id": "cofid-current-15-816",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Pie, lentil and cheese, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 143.0,
    "carbs_g": 14.5,
    "energy_kcal": 182.0,
    "fat_g": 9.3,
    "fibre_g": 0.0,
    "folate_ug": 62.0,
    "iron_mg": 2.35,
    "magnesium_mg": 31.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 186.0,
    "potassium_mg": 260.0,
    "protein_g": 11.0,
    "salt_g": 0.4325,
    "sat_fat_g": 3.84,
    "sodium_mg": 173.0,
    "sugar_g": 1.5,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-816",
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
