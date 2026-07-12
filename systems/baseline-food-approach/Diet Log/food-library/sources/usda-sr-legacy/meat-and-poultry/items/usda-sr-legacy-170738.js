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
  "id": "usda-sr-legacy-170738",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    }
  ],
  "name": "KFC, Fried Chicken, ORIGINAL RECIPE, Skin and Breading",
  "nutritionPerBasis": {
    "calcium_mg": 117.0,
    "carbs_g": 18.8,
    "energy_kcal": 1610.0,
    "fat_g": 28.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.88,
    "magnesium_mg": 25.0,
    "omega3_g": 0.775,
    "phosphorus_mg": 252.0,
    "potassium_mg": 244.0,
    "protein_g": 14.2,
    "salt_g": 2.6,
    "sat_fat_g": 6.34,
    "sodium_mg": 1040.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 20.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.2,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170738",
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
