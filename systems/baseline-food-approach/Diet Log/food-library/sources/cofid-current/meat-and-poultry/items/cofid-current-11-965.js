/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Recipe from University of North London survey of commercial sandwiches",
  "id": "cofid-current-11-965",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sandwich, white bread, ham salad",
  "nutritionPerBasis": {
    "calcium_mg": 98.0,
    "carbs_g": 25.0,
    "energy_kcal": 163.0,
    "fat_g": 4.1,
    "fibre_g": 1.6,
    "folate_ug": 24.0,
    "iron_mg": 1.04,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 126.0,
    "potassium_mg": 190.0,
    "protein_g": 8.2,
    "salt_g": 1.0125,
    "sat_fat_g": 0.94,
    "sodium_mg": 405.0,
    "sugar_g": 2.5,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 1.21,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-965",
  "state": "Unspecified",
  "subcategory": "AB",
  "tags": [
    "ab",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
