/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Oatmeal",
  "id": "usda-fndds-2708392",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
      "gramsPerUnit": 148.0,
      "key": "1-packet-dry-yields",
      "kind": "unit",
      "label": "1 packet, dry, yields"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-keurig-cup",
      "kind": "unit",
      "label": "1 Keurig cup"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-microwave-cup-prepared",
      "kind": "unit",
      "label": "1 microwave cup, prepared"
    },
    {
      "gramsPerUnit": 210.0,
      "key": "1-single-serving-container",
      "kind": "unit",
      "label": "1 single serving container"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    }
  ],
  "name": "Oatmeal, instant, plain, made with non-dairy milk, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 185.0,
    "carbs_g": 15.1,
    "energy_kcal": 113.0,
    "fat_g": 4.98,
    "fibre_g": 1.9,
    "folate_ug": 9.0,
    "iron_mg": 4.78,
    "magnesium_mg": 31.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 106.0,
    "potassium_mg": 109.0,
    "protein_g": 3.09,
    "salt_g": 0.2475,
    "sat_fat_g": 1.43,
    "sodium_mg": 99.0,
    "sugar_g": 1.88,
    "vitamin_a_ug": 195.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.96,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708392",
  "state": "Unspecified",
  "subcategory": "Oatmeal",
  "tags": [
    "beverages",
    "oatmeal",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
