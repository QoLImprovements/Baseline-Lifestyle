/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-fennel-bulb",
  "description": "Other vegetables and combinations",
  "id": "usda-fndds-2709779",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "1-fennel-bulb",
      "kind": "unit",
      "label": "1 fennel bulb"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fennel bulb, raw",
  "nutritionPerBasis": {
    "calcium_mg": 49.0,
    "carbs_g": 7.3,
    "energy_kcal": 31.0,
    "fat_g": 0.2,
    "fibre_g": 3.1,
    "folate_ug": 27.0,
    "iron_mg": 0.73,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 50.0,
    "potassium_mg": 414.0,
    "protein_g": 1.24,
    "salt_g": 0.13,
    "sat_fat_g": 0.09,
    "sodium_mg": 52.0,
    "sugar_g": 3.93,
    "vitamin_a_ug": 48.0,
    "vitamin_c_mg": 12.0,
    "vitamin_e_mg": 0.58,
    "vitamin_k_ug": 62.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709779",
  "state": "Raw",
  "subcategory": "Other vegetables and combinations",
  "tags": [
    "other-vegetables-and-combinations",
    "raw",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
