/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fruit",
  "defaultMeasure": "1-single-serving-container",
  "description": "Oatmeal",
  "id": "usda-fndds-2708395",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-single-serving-container",
      "kind": "unit",
      "label": "1 single serving container"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-keurig-cup",
      "kind": "unit",
      "label": "1 Keurig cup"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 163.0,
      "key": "1-packet-dry-yields",
      "kind": "unit",
      "label": "1 packet, dry, yields"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-microwave-cup-prepared",
      "kind": "unit",
      "label": "1 microwave cup, prepared"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Oatmeal, instant, fruit flavored, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 20.1,
    "energy_kcal": 100.0,
    "fat_g": 1.19,
    "fibre_g": 1.9,
    "folate_ug": 37.0,
    "iron_mg": 2.62,
    "magnesium_mg": 24.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 77.0,
    "potassium_mg": 96.0,
    "protein_g": 2.34,
    "salt_g": 0.3275,
    "sat_fat_g": 0.196,
    "sodium_mg": 131.0,
    "sugar_g": 8.32,
    "vitamin_a_ug": 174.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.4
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708395",
  "state": "Unspecified",
  "subcategory": "Oatmeal",
  "tags": [
    "fruit",
    "oatmeal",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
