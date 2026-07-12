/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-small",
  "description": "White potatoes, baked or boiled",
  "id": "usda-fndds-2709527",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 315.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 315.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 445.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 160.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato, baked, peel eaten, with cheese",
  "nutritionPerBasis": {
    "calcium_mg": 77.0,
    "carbs_g": 17.4,
    "energy_kcal": 153.0,
    "fat_g": 7.69,
    "fibre_g": 1.7,
    "folate_ug": 25.0,
    "iron_mg": 0.87,
    "magnesium_mg": 25.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 101.0,
    "potassium_mg": 444.0,
    "protein_g": 4.09,
    "salt_g": 0.5625,
    "sat_fat_g": 4.32,
    "sodium_mg": 225.0,
    "sugar_g": 1.27,
    "vitamin_a_ug": 70.0,
    "vitamin_c_mg": 7.7,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709527",
  "state": "Baked",
  "subcategory": "White potatoes, baked or boiled",
  "tags": [
    "baked",
    "potatoes-and-starchy-vegetables",
    "white-potatoes-baked-or-boiled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
