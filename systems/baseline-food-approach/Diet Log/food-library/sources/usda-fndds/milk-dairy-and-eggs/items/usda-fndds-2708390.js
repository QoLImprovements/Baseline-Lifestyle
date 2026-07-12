/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-single-serving-container",
  "description": "Oatmeal",
  "id": "usda-fndds-2708390",
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
      "gramsPerUnit": 28.35,
      "key": "1-oz-cooked",
      "kind": "unit",
      "label": "1 oz, cooked"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 170.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
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
    }
  ],
  "name": "Oatmeal, instant, plain, made with milk, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 163.0,
    "carbs_g": 16.5,
    "energy_kcal": 129.0,
    "fat_g": 5.4,
    "fibre_g": 1.8,
    "folate_ug": 7.0,
    "iron_mg": 4.53,
    "magnesium_mg": 33.0,
    "omega3_g": 0.002,
    "phosphorus_mg": 158.0,
    "potassium_mg": 190.0,
    "protein_g": 4.81,
    "salt_g": 0.225,
    "sat_fat_g": 2.29,
    "sodium_mg": 90.0,
    "sugar_g": 4.11,
    "vitamin_a_ug": 212.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708390",
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
