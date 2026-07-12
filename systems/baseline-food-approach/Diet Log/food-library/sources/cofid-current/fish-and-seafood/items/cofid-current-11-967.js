/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "g",
  "description": "Recipe from University of North London survey of commercial sandwiches",
  "id": "cofid-current-11-967",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sandwich, white bread, tuna mayonnaise",
  "nutritionPerBasis": {
    "calcium_mg": 100.0,
    "carbs_g": 25.3,
    "energy_kcal": 237.0,
    "fat_g": 10.2,
    "fibre_g": 1.4,
    "folate_ug": 15.0,
    "iron_mg": 1.38,
    "magnesium_mg": 21.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 108.0,
    "potassium_mg": 151.0,
    "protein_g": 12.5,
    "salt_g": 0.875,
    "sat_fat_g": 1.29,
    "sodium_mg": 350.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 3.15,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-967",
  "state": "Unspecified",
  "subcategory": "AB",
  "tags": [
    "ab",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
