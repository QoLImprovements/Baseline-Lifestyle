/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-egg-roll",
  "description": "Egg rolls, dumplings, sushi",
  "id": "usda-fndds-2708700",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 64.0,
      "key": "1-egg-roll",
      "kind": "unit",
      "label": "1 egg roll"
    },
    {
      "gramsPerUnit": 13.0,
      "key": "1-miniature-egg-roll",
      "kind": "unit",
      "label": "1 miniature egg roll"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Egg roll, meatless",
  "nutritionPerBasis": {
    "calcium_mg": 47.0,
    "carbs_g": 30.0,
    "energy_kcal": 270.0,
    "fat_g": 14.1,
    "fibre_g": 2.3,
    "folate_ug": 67.0,
    "iron_mg": 1.86,
    "magnesium_mg": 22.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 68.0,
    "potassium_mg": 210.0,
    "protein_g": 5.62,
    "salt_g": 1.1575,
    "sat_fat_g": 2.08,
    "sodium_mg": 463.0,
    "sugar_g": 5.63,
    "vitamin_a_ug": 46.0,
    "vitamin_c_mg": 6.3,
    "vitamin_e_mg": 2.14,
    "vitamin_k_ug": 44.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708700",
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
