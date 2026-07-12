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
  "id": "usda-sr-legacy-169964",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 111.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Beans, snap, green, frozen, all styles, microwaved",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 6.98,
    "energy_kcal": 33.0,
    "fat_g": 0.41,
    "fibre_g": 3.4,
    "folate_ug": 12.0,
    "iron_mg": 0.8,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 42.0,
    "potassium_mg": 237.0,
    "protein_g": 1.98,
    "salt_g": 0.0075,
    "sat_fat_g": 0.092,
    "sodium_mg": 3.0,
    "sugar_g": 2.6,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 11.0,
    "vitamin_e_mg": 0.42,
    "vitamin_k_ug": 57.7
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169964",
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
