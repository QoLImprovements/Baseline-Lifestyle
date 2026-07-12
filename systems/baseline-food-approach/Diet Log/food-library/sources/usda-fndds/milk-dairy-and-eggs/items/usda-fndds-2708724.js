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
  "id": "usda-fndds-2708724",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "1-item-any-size",
      "kind": "unit",
      "label": "1 item, any size"
    }
  ],
  "name": "Bao bun",
  "nutritionPerBasis": {
    "calcium_mg": 140.0,
    "carbs_g": 39.8,
    "energy_kcal": 273.0,
    "fat_g": 7.58,
    "fibre_g": 1.2,
    "folate_ug": 47.0,
    "iron_mg": 2.86,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 152.0,
    "potassium_mg": 162.0,
    "protein_g": 11.2,
    "salt_g": 0.885,
    "sat_fat_g": 2.32,
    "sodium_mg": 354.0,
    "sugar_g": 5.86,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708724",
  "state": "Unspecified",
  "subcategory": "Egg rolls, dumplings, sushi",
  "tags": [
    "egg-rolls-dumplings-sushi",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
