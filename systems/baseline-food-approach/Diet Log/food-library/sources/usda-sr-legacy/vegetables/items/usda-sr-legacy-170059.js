/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "package-mashed-10-oz",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170059",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-mashed-10-oz",
      "kind": "unit",
      "label": "package, mashed (10 oz)"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "0-33-package-mashed-10-oz",
      "kind": "unit",
      "label": "0.33 package, mashed (10 oz)"
    }
  ],
  "name": "Turnips, frozen, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 2.94,
    "energy_kcal": 67.0,
    "fat_g": 0.16,
    "fibre_g": 1.8,
    "folate_ug": 8.0,
    "iron_mg": 0.7,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 20.0,
    "potassium_mg": 137.0,
    "protein_g": 1.04,
    "salt_g": 0.0625,
    "sat_fat_g": 0.017,
    "sodium_mg": 25.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 4.4,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170059",
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
