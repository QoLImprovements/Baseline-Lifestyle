/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "package-9-oz",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-168387",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 255.0,
      "key": "package-9-oz",
      "kind": "unit",
      "label": "package (9 oz)"
    },
    {
      "gramsPerUnit": 84.0,
      "key": "0-33-package",
      "kind": "unit",
      "label": "0.33 package"
    }
  ],
  "name": "Artichokes, (globe or french), frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 7.75,
    "energy_kcal": 158.0,
    "fat_g": 0.43,
    "fibre_g": 3.9,
    "folate_ug": 126.0,
    "iron_mg": 0.5,
    "magnesium_mg": 27.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 58.0,
    "potassium_mg": 248.0,
    "protein_g": 2.63,
    "salt_g": 0.1175,
    "sat_fat_g": 0.099,
    "sodium_mg": 47.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 5.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168387",
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
