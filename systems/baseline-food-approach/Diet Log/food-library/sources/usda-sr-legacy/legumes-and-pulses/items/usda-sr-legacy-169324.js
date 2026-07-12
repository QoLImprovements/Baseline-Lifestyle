/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169324",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 121.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 284.0,
      "key": "package-10-oz",
      "kind": "unit",
      "label": "package (10 oz)"
    }
  ],
  "name": "Beans, snap, yellow, frozen, all styles, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 7.58,
    "energy_kcal": 139.0,
    "fat_g": 0.21,
    "fibre_g": 2.8,
    "folate_ug": 15.0,
    "iron_mg": 0.86,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 186.0,
    "protein_g": 1.8,
    "salt_g": 0.0075,
    "sat_fat_g": 0.047,
    "sodium_mg": 3.0,
    "sugar_g": 2.22,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 12.9,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 45.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169324",
  "state": "Frozen",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "frozen",
    "legumes-and-pulses",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
