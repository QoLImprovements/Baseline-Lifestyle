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
  "id": "usda-sr-legacy-170079",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, mung, mature seeds, sprouted, canned, drained solids",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 2.14,
    "energy_kcal": 48.0,
    "fat_g": 0.06,
    "fibre_g": 0.8,
    "folate_ug": 10.0,
    "iron_mg": 0.43,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 32.0,
    "potassium_mg": 27.0,
    "protein_g": 1.4,
    "salt_g": 0.105,
    "sat_fat_g": 0.016,
    "sodium_mg": 42.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 13.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170079",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "legumes-and-pulses",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
