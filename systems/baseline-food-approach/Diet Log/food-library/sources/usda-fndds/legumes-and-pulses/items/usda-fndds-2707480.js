/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "quantity-not-specified",
  "description": "Bean, pea, legume dishes",
  "id": "usda-fndds-2707480",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 94.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 134.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    },
    {
      "gramsPerUnit": 466.0,
      "key": "1-box-3-2-oz-dry-yields",
      "kind": "unit",
      "label": "1 box (3.2 oz), dry, yields"
    },
    {
      "gramsPerUnit": 125.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    }
  ],
  "name": "Vegetarian stroganoff",
  "nutritionPerBasis": {
    "calcium_mg": 82.0,
    "carbs_g": 11.8,
    "energy_kcal": 167.0,
    "fat_g": 10.0,
    "fibre_g": 2.6,
    "folate_ug": 55.0,
    "iron_mg": 1.25,
    "magnesium_mg": 28.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 120.0,
    "potassium_mg": 207.0,
    "protein_g": 7.69,
    "salt_g": 1.15,
    "sat_fat_g": 3.35,
    "sodium_mg": 460.0,
    "sugar_g": 1.79,
    "vitamin_a_ug": 32.0,
    "vitamin_c_mg": 2.3,
    "vitamin_e_mg": 0.76,
    "vitamin_k_ug": 9.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707480",
  "state": "Unspecified",
  "subcategory": "Bean, pea, legume dishes",
  "tags": [
    "bean-pea-legume-dishes",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
