/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "can-303-x-406",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-169144",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 439.0,
      "key": "can-303-x-406",
      "kind": "unit",
      "label": "can (303 x 406)"
    },
    {
      "gramsPerUnit": 114.0,
      "key": "0-5-cup",
      "kind": "unit",
      "label": "0.5 cup"
    }
  ],
  "name": "Beans, snap, canned, all styles, seasoned, solids and liquids",
  "nutritionPerBasis": {
    "calcium_mg": 22.0,
    "carbs_g": 3.49,
    "energy_kcal": 67.0,
    "fat_g": 0.2,
    "fibre_g": 1.5,
    "folate_ug": 18.0,
    "iron_mg": 0.47,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 16.0,
    "potassium_mg": 93.0,
    "protein_g": 0.83,
    "salt_g": 0.9325,
    "sat_fat_g": 0.045,
    "sodium_mg": 373.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 3.1,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "169144",
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
