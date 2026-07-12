/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "wing-without-skin",
  "description": "Fast Foods",
  "id": "usda-sr-legacy-170347",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 39.0,
      "key": "wing-without-skin",
      "kind": "unit",
      "label": "wing, without skin"
    },
    {
      "gramsPerUnit": 23.0,
      "key": "wing-bone-and-skin-removed",
      "kind": "unit",
      "label": "wing, bone and skin removed"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "wing-with-skin",
      "kind": "unit",
      "label": "wing, with skin"
    }
  ],
  "name": "KFC, Fried Chicken, ORIGINAL RECIPE, Wing, meat and skin with breading",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 9.93,
    "energy_kcal": 1240.0,
    "fat_g": 18.9,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.93,
    "magnesium_mg": 24.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 250.0,
    "potassium_mg": 266.0,
    "protein_g": 21.7,
    "salt_g": 2.21,
    "sat_fat_g": 4.25,
    "sodium_mg": 884.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170347",
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
