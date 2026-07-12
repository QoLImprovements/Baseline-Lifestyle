/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "package-10-oz",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169962",
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
      "gramsPerUnit": 121.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, snap, green, frozen, all styles, unprepared (Includes foods for USDA's Food Distribution Program)",
  "nutritionPerBasis": {
    "calcium_mg": 42.0,
    "carbs_g": 7.54,
    "energy_kcal": 138.0,
    "fat_g": 0.21,
    "fibre_g": 2.6,
    "folate_ug": 15.0,
    "iron_mg": 0.85,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 186.0,
    "protein_g": 1.79,
    "salt_g": 0.0075,
    "sat_fat_g": 0.047,
    "sodium_mg": 3.0,
    "sugar_g": 2.21,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 12.9,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 44.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169962",
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
