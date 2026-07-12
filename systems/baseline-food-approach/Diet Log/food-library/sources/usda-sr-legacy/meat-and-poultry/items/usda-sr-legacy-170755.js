/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "g",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170755",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "Fast Foods, Fried Chicken, Skin and breading from all pieces",
  "nutritionPerBasis": {
    "calcium_mg": 92.0,
    "carbs_g": 19.6,
    "energy_kcal": 398.0,
    "fat_g": 29.2,
    "fibre_g": 0.3,
    "folate_ug": 41.0,
    "iron_mg": 1.12,
    "magnesium_mg": 23.0,
    "omega3_g": 0.602,
    "phosphorus_mg": 215.0,
    "potassium_mg": 230.0,
    "protein_g": 14.1,
    "salt_g": 2.4125,
    "sat_fat_g": 7.86,
    "sodium_mg": 965.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 21.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170755",
  "state": "Fried",
  "subcategory": "Fast Foods",
  "tags": [
    "fast-foods",
    "fried",
    "meat-and-poultry"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
