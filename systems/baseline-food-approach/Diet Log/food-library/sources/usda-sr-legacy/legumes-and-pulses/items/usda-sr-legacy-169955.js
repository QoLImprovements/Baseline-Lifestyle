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
  "id": "usda-sr-legacy-169955",
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
      "gramsPerUnit": 164.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Lima beans, immature seeds, frozen, baby, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 35.0,
    "carbs_g": 25.1,
    "energy_kcal": 132.0,
    "fat_g": 0.44,
    "fibre_g": 6.0,
    "folate_ug": 28.0,
    "iron_mg": 2.21,
    "magnesium_mg": 50.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 104.0,
    "potassium_mg": 452.0,
    "protein_g": 7.59,
    "salt_g": 0.13,
    "sat_fat_g": 0.102,
    "sodium_mg": 52.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 8.3,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169955",
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
