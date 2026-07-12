/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "g",
  "description": "Recipe from review of recipe collection",
  "id": "cofid-current-15-701",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Broccoli in cheese sauce, made with skimmed milk, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 170.0,
    "carbs_g": 5.9,
    "energy_kcal": 114.0,
    "fat_g": 6.9,
    "fibre_g": 2.5,
    "folate_ug": 33.0,
    "iron_mg": 0.75,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 151.0,
    "potassium_mg": 318.0,
    "protein_g": 7.3,
    "salt_g": 0.325,
    "sat_fat_g": 4.18,
    "sodium_mg": 130.0,
    "sugar_g": 3.0,
    "vitamin_a_ug": 135.0,
    "vitamin_c_mg": 24.0,
    "vitamin_e_mg": 1.17,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-701",
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
