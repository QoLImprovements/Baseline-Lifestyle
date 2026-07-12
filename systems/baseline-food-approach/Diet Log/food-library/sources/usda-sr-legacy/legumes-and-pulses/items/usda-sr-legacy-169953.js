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
  "id": "usda-sr-legacy-169953",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
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
  "name": "Lima beans, immature seeds, frozen, fordhook, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 24.0,
    "carbs_g": 19.8,
    "energy_kcal": 444.0,
    "fat_g": 0.35,
    "fibre_g": 5.5,
    "folate_ug": 32.0,
    "iron_mg": 1.51,
    "magnesium_mg": 38.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 74.0,
    "potassium_mg": 478.0,
    "protein_g": 6.4,
    "salt_g": 0.145,
    "sat_fat_g": 0.081,
    "sodium_mg": 58.0,
    "sugar_g": 1.39,
    "vitamin_a_ug": 11.0,
    "vitamin_c_mg": 19.3,
    "vitamin_e_mg": 0.72,
    "vitamin_k_ug": 5.3
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169953",
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
