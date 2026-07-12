/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Containing beef, onions, flour, stock and seasoning. Recipe",
  "id": "cofid-current-19-664",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Beef, minced, stewed with onions, extra lean",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 2.5,
    "energy_kcal": 113.0,
    "fat_g": 3.6,
    "fibre_g": 0.3,
    "folate_ug": 5.0,
    "iron_mg": 0.88,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 103.0,
    "potassium_mg": 179.0,
    "protein_g": 12.1,
    "salt_g": 0.72,
    "sat_fat_g": 1.24,
    "sodium_mg": 288.0,
    "sugar_g": 0.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 0.0
  },
  "source": "UK CoFID 2021",
  "sourceId": "19-664",
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
