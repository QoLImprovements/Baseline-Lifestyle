/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Prepared Meals & Mixed Dishes",
  "defaultMeasure": "1-single-serving-container",
  "description": "Oatmeal",
  "id": "usda-fndds-2708388",
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
      "gramsPerUnit": 240.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "1-packet-dry-yields",
      "kind": "unit",
      "label": "1 packet, dry, yields"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-microwave-cup-prepared",
      "kind": "unit",
      "label": "1 microwave cup, prepared"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-keurig-cup",
      "kind": "unit",
      "label": "1 Keurig cup"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Oatmeal, instant, plain, made with water, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 67.0,
    "carbs_g": 12.7,
    "energy_kcal": 88.0,
    "fat_g": 3.72,
    "fibre_g": 1.8,
    "folate_ug": 6.0,
    "iron_mg": 4.53,
    "magnesium_mg": 24.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 78.0,
    "potassium_mg": 68.0,
    "protein_g": 2.2,
    "salt_g": 0.1575,
    "sat_fat_g": 1.31,
    "sodium_mg": 63.0,
    "sugar_g": 0.29,
    "vitamin_a_ug": 167.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.33,
    "vitamin_k_ug": 1.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708388",
  "state": "Unspecified",
  "subcategory": "Oatmeal",
  "tags": [
    "oatmeal",
    "prepared-meals-and-mixed-dishes",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
