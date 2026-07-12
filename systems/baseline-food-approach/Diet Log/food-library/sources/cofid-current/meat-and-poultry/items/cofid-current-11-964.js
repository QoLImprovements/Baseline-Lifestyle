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
  "id": "cofid-current-11-964",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Sandwich, white bread, chicken salad",
  "nutritionPerBasis": {
    "calcium_mg": 91.0,
    "carbs_g": 22.5,
    "energy_kcal": 172.0,
    "fat_g": 4.9,
    "fibre_g": 1.4,
    "folate_ug": 22.0,
    "iron_mg": 0.99,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 105.0,
    "potassium_mg": 196.0,
    "protein_g": 10.7,
    "salt_g": 0.5875,
    "sat_fat_g": 1.16,
    "sodium_mg": 235.0,
    "sugar_g": 2.1,
    "vitamin_a_ug": 37.0,
    "vitamin_c_mg": 3.0,
    "vitamin_e_mg": 1.15,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "11-964",
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
