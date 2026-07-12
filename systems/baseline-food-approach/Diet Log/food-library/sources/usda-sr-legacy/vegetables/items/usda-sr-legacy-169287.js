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
  "id": "usda-sr-legacy-169287",
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
      "gramsPerUnit": 156.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Spinach, frozen, chopped or leaf, unprepared (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 129.0,
    "carbs_g": 4.21,
    "energy_kcal": 120.0,
    "fat_g": 0.57,
    "fibre_g": 2.9,
    "folate_ug": 145.0,
    "iron_mg": 1.89,
    "magnesium_mg": 75.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 346.0,
    "protein_g": 3.63,
    "salt_g": 0.185,
    "sat_fat_g": 0.041,
    "sodium_mg": 74.0,
    "sugar_g": 0.65,
    "vitamin_a_ug": 586.0,
    "vitamin_c_mg": 5.5,
    "vitamin_e_mg": 2.9,
    "vitamin_k_ug": 372.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169287",
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
