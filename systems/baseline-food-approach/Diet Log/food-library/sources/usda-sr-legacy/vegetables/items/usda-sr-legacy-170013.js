/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "can-303-x-406",
  "description": "Vegetables and Vegetable Products",
  "id": "usda-sr-legacy-170013",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 313.0,
      "key": "can-303-x-406",
      "kind": "unit",
      "label": "can (303 x 406)"
    },
    {
      "gramsPerUnit": 175.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Peas, green (includes baby and lesuer types), canned, drained solids, unprepared",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 11.4,
    "energy_kcal": 286.0,
    "fat_g": 0.8,
    "fibre_g": 4.9,
    "folate_ug": 31.0,
    "iron_mg": 1.18,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 67.0,
    "potassium_mg": 106.0,
    "protein_g": 4.47,
    "salt_g": 0.6825,
    "sat_fat_g": 0.143,
    "sodium_mg": 273.0,
    "sugar_g": 2.99,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 4.2,
    "vitamin_e_mg": 0.38,
    "vitamin_k_ug": 36.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "170013",
  "state": "Canned",
  "subcategory": "Vegetables and Vegetable Products",
  "tags": [
    "canned",
    "vegetables",
    "vegetables-and-vegetable-products"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
