/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "ear-yields",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168400",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "ear-yields",
      "kind": "unit",
      "label": "ear, yields"
    },
    {
      "gramsPerUnit": 165.0,
      "key": "cup-kernels",
      "kind": "unit",
      "label": "cup kernels"
    }
  ],
  "name": "Corn, sweet, yellow, frozen, kernels on cob, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 23.5,
    "energy_kcal": 410.0,
    "fat_g": 0.78,
    "fibre_g": 2.8,
    "folate_ug": 40.0,
    "iron_mg": 0.68,
    "magnesium_mg": 32.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 87.0,
    "potassium_mg": 294.0,
    "protein_g": 3.28,
    "salt_g": 0.0125,
    "sat_fat_g": 0.12,
    "sodium_mg": 5.0,
    "sugar_g": 3.78,
    "vitamin_a_ug": 12.0,
    "vitamin_c_mg": 7.2,
    "vitamin_e_mg": 0.09,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168400",
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
