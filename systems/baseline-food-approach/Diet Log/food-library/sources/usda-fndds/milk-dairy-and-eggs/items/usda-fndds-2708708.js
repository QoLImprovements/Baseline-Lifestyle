/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Egg rolls, dumplings, sushi",
  "id": "usda-fndds-2708708",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Wonton, dumpling or pot sticker, steamed",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 11.1,
    "energy_kcal": 113.0,
    "fat_g": 4.6,
    "fibre_g": 1.2,
    "folate_ug": 15.0,
    "iron_mg": 0.62,
    "magnesium_mg": 18.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 106.0,
    "potassium_mg": 237.0,
    "protein_g": 6.9,
    "salt_g": 0.92,
    "sat_fat_g": 1.44,
    "sodium_mg": 368.0,
    "sugar_g": 2.3,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 6.9,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 45.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708708",
  "state": "Steamed",
  "subcategory": "Egg rolls, dumplings, sushi",
  "tags": [
    "egg-rolls-dumplings-sushi",
    "milk-dairy-and-eggs",
    "steamed"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
