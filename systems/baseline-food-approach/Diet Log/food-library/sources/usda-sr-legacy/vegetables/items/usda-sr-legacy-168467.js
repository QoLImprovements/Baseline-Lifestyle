/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "cup-slices",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168467",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 130.0,
      "key": "cup-slices",
      "kind": "unit",
      "label": "cup slices"
    }
  ],
  "name": "Squash, summer, crookneck and straightneck, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 18.0,
    "carbs_g": 4.8,
    "energy_kcal": 84.0,
    "fat_g": 0.14,
    "fibre_g": 1.2,
    "folate_ug": 12.0,
    "iron_mg": 0.48,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.0,
    "potassium_mg": 209.0,
    "protein_g": 0.83,
    "salt_g": 0.0125,
    "sat_fat_g": 0.029,
    "sodium_mg": 5.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 6.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168467",
  "state": "Frozen",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "frozen",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
