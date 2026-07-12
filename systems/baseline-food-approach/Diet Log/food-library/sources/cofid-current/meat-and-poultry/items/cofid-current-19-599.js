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
  "id": "cofid-current-19-599",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, lamb vindaloo, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 55.0,
    "carbs_g": 2.7,
    "energy_kcal": 199.0,
    "fat_g": 12.9,
    "fibre_g": 0.9,
    "folate_ug": 3.0,
    "iron_mg": 2.75,
    "magnesium_mg": 30.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 160.0,
    "potassium_mg": 343.0,
    "protein_g": 19.8,
    "salt_g": 0.1475,
    "sat_fat_g": 5.06,
    "sodium_mg": 59.0,
    "sugar_g": 1.8,
    "vitamin_a_ug": 24.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.55,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-599",
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
