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
  "id": "usda-sr-legacy-170360",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 37.0,
      "key": "wing-without-skin",
      "kind": "unit",
      "label": "wing, without skin"
    },
    {
      "gramsPerUnit": 58.0,
      "key": "wing-with-skin",
      "kind": "unit",
      "label": "wing, with skin"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "wing-bone-and-skin-removed",
      "kind": "unit",
      "label": "wing, bone and skin removed"
    }
  ],
  "name": "Fast Foods, Fried Chicken, Wing, meat and skin and breading",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 11.2,
    "energy_kcal": 310.0,
    "fat_g": 20.1,
    "fibre_g": 0.1,
    "folate_ug": 25.0,
    "iron_mg": 1.04,
    "magnesium_mg": 24.0,
    "omega3_g": 0.014,
    "phosphorus_mg": 220.0,
    "potassium_mg": 262.0,
    "protein_g": 21.1,
    "salt_g": 2.1675,
    "sat_fat_g": 5.36,
    "sodium_mg": 867.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 16.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.74,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170360",
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
