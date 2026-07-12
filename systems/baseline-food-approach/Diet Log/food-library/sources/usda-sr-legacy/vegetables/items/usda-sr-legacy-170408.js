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
  "id": "usda-sr-legacy-170408",
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
      "gramsPerUnit": 1361.0,
      "key": "package-3-lb",
      "kind": "unit",
      "label": "package (3 lb)"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    }
  ],
  "name": "Collards, frozen, chopped, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 201.0,
    "carbs_g": 6.46,
    "energy_kcal": 137.0,
    "fat_g": 0.37,
    "fibre_g": 3.6,
    "folate_ug": 73.0,
    "iron_mg": 1.07,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 27.0,
    "potassium_mg": 253.0,
    "protein_g": 2.69,
    "salt_g": 0.12,
    "sat_fat_g": 0.048,
    "sodium_mg": 48.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 459.0,
    "vitamin_c_mg": 40.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170408",
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
