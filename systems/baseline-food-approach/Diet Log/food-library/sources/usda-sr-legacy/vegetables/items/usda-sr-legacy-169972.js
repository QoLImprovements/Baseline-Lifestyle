/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "0-33-package-10-oz",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169972",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "0-33-package-10-oz",
      "kind": "unit",
      "label": "0.33 package (10 oz)"
    },
    {
      "gramsPerUnit": 907.0,
      "key": "package-2-lb",
      "kind": "unit",
      "label": "package (2 lb)"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    }
  ],
  "name": "Brussels sprouts, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 26.0,
    "carbs_g": 7.86,
    "energy_kcal": 170.0,
    "fat_g": 0.41,
    "fibre_g": 3.8,
    "folate_ug": 123.0,
    "iron_mg": 0.93,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 370.0,
    "protein_g": 3.78,
    "salt_g": 0.025,
    "sat_fat_g": 0.084,
    "sodium_mg": 10.0,
    "sugar_g": 2.03,
    "vitamin_a_ug": 31.0,
    "vitamin_c_mg": 74.1,
    "vitamin_e_mg": 0.5,
    "vitamin_k_ug": 189.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169972",
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
