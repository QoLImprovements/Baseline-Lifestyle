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
  "id": "cofid-current-19-472",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Curry, beef, reduced fat, homemade",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 1.3,
    "energy_kcal": 139.0,
    "fat_g": 7.1,
    "fibre_g": 1.0,
    "folate_ug": 22.0,
    "iron_mg": 2.08,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 174.0,
    "potassium_mg": 338.0,
    "protein_g": 18.8,
    "salt_g": 0.16,
    "sat_fat_g": 2.26,
    "sodium_mg": 64.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 13.0,
    "vitamin_c_mg": 1.0,
    "vitamin_e_mg": 0.99,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-472",
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
