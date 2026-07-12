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
  "id": "usda-fndds-2709292",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 75.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Fruit mixture, frozen",
  "nutritionPerBasis": {
    "calcium_mg": 10.0,
    "carbs_g": 11.3,
    "energy_kcal": 48.0,
    "fat_g": 0.23,
    "fibre_g": 1.4,
    "folate_ug": 20.0,
    "iron_mg": 0.34,
    "magnesium_mg": 11.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 14.0,
    "potassium_mg": 146.0,
    "protein_g": 0.69,
    "salt_g": 0.0225,
    "sat_fat_g": 0.035,
    "sodium_mg": 9.0,
    "sugar_g": 9.18,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 30.2,
    "vitamin_e_mg": 0.4,
    "vitamin_k_ug": 2.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709292",
  "state": "Frozen",
  "subcategory": "Other fruits and fruit salads",
  "tags": [
    "frozen",
    "fruit",
    "other-fruits-and-fruit-salads"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
