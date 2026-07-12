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
  "id": "cofid-current-11-955",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sandwich, white bread, bacon, lettuce and tomato",
  "nutritionPerBasis": {
    "calcium_mg": 95.0,
    "carbs_g": 24.1,
    "energy_kcal": 230.0,
    "fat_g": 11.9,
    "fibre_g": 1.5,
    "folate_ug": 23.0,
    "iron_mg": 0.97,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 84.0,
    "potassium_mg": 177.0,
    "protein_g": 8.2,
    "salt_g": 1.1925,
    "sat_fat_g": 2.46,
    "sodium_mg": 477.0,
    "sugar_g": 2.4,
    "vitamin_a_ug": 41.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 2.66,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-955",
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
