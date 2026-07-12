/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "package-10-oz",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170412",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "0-33-package-10-oz",
      "kind": "unit",
      "label": "0.33 package (10 oz)"
    }
  ],
  "name": "Onions, frozen, whole, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 36.0,
    "carbs_g": 8.45,
    "energy_kcal": 148.0,
    "fat_g": 0.06,
    "fibre_g": 1.7,
    "folate_ug": 21.0,
    "iron_mg": 0.46,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 142.0,
    "protein_g": 0.89,
    "salt_g": 0.025,
    "sat_fat_g": 0.011,
    "sodium_mg": 10.0,
    "sugar_g": 3.81,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 8.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170412",
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
