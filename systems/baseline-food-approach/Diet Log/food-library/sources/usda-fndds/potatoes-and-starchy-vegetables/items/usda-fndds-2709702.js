/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Potatoes & Starchy Vegetables",
  "defaultMeasure": "1-oz-raw-yields",
  "description": "Other red and orange vegetables",
  "id": "usda-fndds-2709702",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-oz-raw-yields",
      "kind": "unit",
      "label": "1 oz, raw, yields"
    },
    {
      "gramsPerUnit": 100.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 235.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 250.0,
      "key": "1-cup-mashed",
      "kind": "unit",
      "label": "1 cup, mashed"
    }
  ],
  "name": "Sweet potato, boiled, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 23.0,
    "carbs_g": 18.0,
    "energy_kcal": 82.0,
    "fat_g": 0.39,
    "fibre_g": 3.1,
    "folate_ug": 10.0,
    "iron_mg": 0.42,
    "magnesium_mg": 20.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 504.0,
    "protein_g": 1.64,
    "salt_g": 0.385,
    "sat_fat_g": 0.019,
    "sodium_mg": 154.0,
    "sugar_g": 6.29,
    "vitamin_a_ug": 699.0,
    "vitamin_c_mg": 13.1,
    "vitamin_e_mg": 0.27,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709702",
  "state": "Boiled",
  "subcategory": "Other red and orange vegetables",
  "tags": [
    "boiled",
    "other-red-and-orange-vegetables",
    "potatoes-and-starchy-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
