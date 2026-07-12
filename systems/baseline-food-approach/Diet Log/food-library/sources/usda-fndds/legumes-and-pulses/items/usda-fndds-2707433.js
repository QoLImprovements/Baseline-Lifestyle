/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "1-large-single-serving-bag",
  "description": "Beans, peas, legumes",
  "id": "usda-fndds-2707433",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 85.0,
      "key": "1-large-single-serving-bag",
      "kind": "unit",
      "label": "1 large single serving bag"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 57.0,
      "key": "1-medium-single-serving-bag",
      "kind": "unit",
      "label": "1 medium single serving bag"
    },
    {
      "gramsPerUnit": 28.0,
      "key": "1-small-single-serving-bag",
      "kind": "unit",
      "label": "1 small single serving bag"
    },
    {
      "gramsPerUnit": 95.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Soy nuts",
  "nutritionPerBasis": {
    "calcium_mg": 138.0,
    "carbs_g": 30.2,
    "energy_kcal": 469.0,
    "fat_g": 25.4,
    "fibre_g": 17.7,
    "folate_ug": 211.0,
    "iron_mg": 3.9,
    "magnesium_mg": 145.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 363.0,
    "potassium_mg": 1470.0,
    "protein_g": 38.6,
    "salt_g": 0.4075,
    "sat_fat_g": 3.67,
    "sodium_mg": 163.0,
    "sugar_g": 4.2,
    "vitamin_a_ug": 10.0,
    "vitamin_c_mg": 2.2,
    "vitamin_e_mg": 0.91,
    "vitamin_k_ug": 50.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707433",
  "state": "Unspecified",
  "subcategory": "Beans, peas, legumes",
  "tags": [
    "beans-peas-legumes",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
