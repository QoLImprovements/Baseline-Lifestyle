/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Olives, pickles, pickled vegetables",
  "id": "usda-fndds-2710101",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Vegetables, pickled",
  "nutritionPerBasis": {
    "calcium_mg": 21.0,
    "carbs_g": 10.2,
    "energy_kcal": 46.0,
    "fat_g": 0.21,
    "fibre_g": 1.6,
    "folate_ug": 32.0,
    "iron_mg": 0.22,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 29.0,
    "potassium_mg": 219.0,
    "protein_g": 0.94,
    "salt_g": 2.4575,
    "sat_fat_g": 0.058,
    "sodium_mg": 983.0,
    "sugar_g": 7.48,
    "vitamin_a_ug": 194.0,
    "vitamin_c_mg": 40.7,
    "vitamin_e_mg": 0.57,
    "vitamin_k_ug": 11.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710101",
  "state": "Unspecified",
  "subcategory": "Olives, pickles, pickled vegetables",
  "tags": [
    "olives-pickles-pickled-vegetables",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
