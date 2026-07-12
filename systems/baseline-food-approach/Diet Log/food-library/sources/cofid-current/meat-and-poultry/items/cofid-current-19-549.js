/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe",
  "id": "cofid-current-19-549",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, beef, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 25.0,
    "carbs_g": 1.2,
    "energy_kcal": 209.0,
    "fat_g": 15.4,
    "fibre_g": 0.0,
    "folate_ug": 20.0,
    "iron_mg": 1.95,
    "magnesium_mg": 26.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 164.0,
    "potassium_mg": 318.0,
    "protein_g": 17.7,
    "salt_g": 0.1425,
    "sat_fat_g": 2.61,
    "sodium_mg": 57.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 17.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 2.41,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-549",
  "state": "Unspecified",
  "subcategory": "MR",
  "tags": [
    "meat-and-poultry",
    "mr",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
