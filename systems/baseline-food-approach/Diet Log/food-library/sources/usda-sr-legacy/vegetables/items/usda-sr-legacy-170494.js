/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "recipe-yield",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170494",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 813.0,
      "key": "recipe-yield",
      "kind": "unit",
      "label": "recipe yield"
    },
    {
      "gramsPerUnit": 136.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Spinach souffle",
  "nutritionPerBasis": {
    "calcium_mg": 165.0,
    "carbs_g": 5.9,
    "energy_kcal": 719.0,
    "fat_g": 13.0,
    "fibre_g": 0.7,
    "folate_ug": 73.0,
    "iron_mg": 1.19,
    "magnesium_mg": 30.0,
    "omega3_g": 0.008,
    "phosphorus_mg": 139.0,
    "potassium_mg": 231.0,
    "protein_g": 7.89,
    "salt_g": 1.415,
    "sat_fat_g": 6.09,
    "sodium_mg": 566.0,
    "sugar_g": 1.85,
    "vitamin_a_ug": 244.0,
    "vitamin_c_mg": 7.3,
    "vitamin_e_mg": 0.93,
    "vitamin_k_ug": 126.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170494",
  "state": "Unspecified",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "unspecified",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
