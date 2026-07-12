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
  "id": "usda-fndds-2709417",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 97.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 127.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 123.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 189.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 184.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Potato only from Puerto Rican mixed dishes, gravy and other components reported separately",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 19.9,
    "energy_kcal": 85.0,
    "fat_g": 0.1,
    "fibre_g": 1.8,
    "folate_ug": 9.0,
    "iron_mg": 0.31,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 40.0,
    "potassium_mg": 326.0,
    "protein_g": 1.7,
    "salt_g": 0.605,
    "sat_fat_g": 0.026,
    "sodium_mg": 242.0,
    "sugar_g": 0.88,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 7.4,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709417",
  "state": "Unspecified",
  "subcategory": "White potatoes, baked or boiled",
  "tags": [
    "potatoes-and-starchy-vegetables",
    "unspecified",
    "white-potatoes-baked-or-boiled"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
