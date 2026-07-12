/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-packet-dry-yields",
  "description": "Oatmeal",
  "id": "usda-fndds-2708389",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 148.0,
      "key": "1-packet-dry-yields",
      "kind": "unit",
      "label": "1 packet, dry, yields"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
      "gramsPerUnit": 240.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
    },
    {
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    }
  ],
  "name": "Oatmeal, instant, plain, made with milk, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 168.0,
    "carbs_g": 17.1,
    "energy_kcal": 111.0,
    "fat_g": 3.04,
    "fibre_g": 1.9,
    "folate_ug": 7.0,
    "iron_mg": 4.68,
    "magnesium_mg": 34.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 163.0,
    "potassium_mg": 196.0,
    "protein_g": 4.96,
    "salt_g": 0.1825,
    "sat_fat_g": 1.27,
    "sodium_mg": 73.0,
    "sugar_g": 4.24,
    "vitamin_a_ug": 193.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708389",
  "state": "Unspecified",
  "subcategory": "Oatmeal",
  "tags": [
    "milk-dairy-and-eggs",
    "oatmeal",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
