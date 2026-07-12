/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "wing-without-skin-bone-and-breading",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170352",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "wing-without-skin-bone-and-breading",
      "kind": "unit",
      "label": "wing without skin, bone and breading"
    }
  ],
  "name": "POPEYES, Fried Chicken, Mild, Wing, meat only, skin and breading removed",
  "nutritionPerBasis": {
    "calcium_mg": 38.0,
    "carbs_g": 2.9,
    "energy_kcal": 212.0,
    "fat_g": 9.42,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.92,
    "magnesium_mg": 26.0,
    "omega3_g": 0.07,
    "phosphorus_mg": 188.0,
    "potassium_mg": 314.0,
    "protein_g": 28.9,
    "salt_g": 2.035,
    "sat_fat_g": 3.08,
    "sodium_mg": 814.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.39,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170352",
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
