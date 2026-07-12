/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fungi",
  "defaultMeasure": "g",
  "description": "Mushroom and onion. Recipe from review of recipe collection",
  "id": "cofid-current-15-681",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Bhaji, mushroom, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 4.1,
    "energy_kcal": 168.0,
    "fat_g": 16.6,
    "fibre_g": 1.5,
    "folate_ug": 14.0,
    "iron_mg": 0.55,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 68.0,
    "potassium_mg": 309.0,
    "protein_g": 1.2,
    "salt_g": 0.0225,
    "sat_fat_g": 1.11,
    "sodium_mg": 9.0,
    "sugar_g": 3.2,
    "vitamin_a_ug": 18.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 3.76,
    "vitamin_k_ug": 18.48
  },
  "source": "UK CoFID 2021",
  "sourceId": "15-681",
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
