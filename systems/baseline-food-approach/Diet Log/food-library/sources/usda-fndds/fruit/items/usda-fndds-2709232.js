/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-cup",
  "description": "Other fruits and fruit salads",
  "id": "usda-fndds-2709232",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 7.0,
      "key": "1-cherry",
      "kind": "unit",
      "label": "1 cherry"
    }
  ],
  "name": "Cherries, canned",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 18.8,
    "energy_kcal": 74.0,
    "fat_g": 0.14,
    "fibre_g": 1.4,
    "folate_ug": 4.0,
    "iron_mg": 0.34,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 121.0,
    "protein_g": 0.71,
    "salt_g": 0.0025,
    "sat_fat_g": 0.026,
    "sodium_mg": 1.0,
    "sugar_g": 17.4,
    "vitamin_a_ug": 7.0,
    "vitamin_c_mg": 2.0,
    "vitamin_e_mg": 0.21,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709232",
  "state": "Canned",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "canned",
    "fruit",
    "other-fruits-and-fruit-salads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
