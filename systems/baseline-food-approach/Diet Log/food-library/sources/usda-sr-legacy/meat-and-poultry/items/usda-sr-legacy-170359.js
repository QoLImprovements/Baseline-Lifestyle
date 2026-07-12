/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "thigh-bone-and-skin-removed",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170359",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 66.0,
      "key": "thigh-bone-and-skin-removed",
      "kind": "unit",
      "label": "thigh bone and skin removed"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "thigh-without-skin",
      "kind": "unit",
      "label": "thigh without skin"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "thigh-with-skin",
      "kind": "unit",
      "label": "thigh with skin"
    }
  ],
  "name": "Fast Foods, Fried Chicken, Thigh, meat and skin and breading",
  "nutritionPerBasis": {
    "calcium_mg": 54.0,
    "carbs_g": 8.68,
    "energy_kcal": 1150.0,
    "fat_g": 18.1,
    "fibre_g": 0.1,
    "folate_ug": 25.0,
    "iron_mg": 1.0,
    "magnesium_mg": 22.0,
    "omega3_g": 0.011,
    "phosphorus_mg": 210.0,
    "potassium_mg": 240.0,
    "protein_g": 19.2,
    "salt_g": 1.8675,
    "sat_fat_g": 4.83,
    "sodium_mg": 747.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.61,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170359",
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
