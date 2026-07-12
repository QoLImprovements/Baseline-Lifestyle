/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Grits and other cooked cereals",
  "id": "usda-fndds-2708437",
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
      "gramsPerUnit": 195.0,
      "key": "1-packet-1-oz-dry-yields",
      "kind": "unit",
      "label": "1 packet (1 oz), dry, yields"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup-cooked",
      "kind": "unit",
      "label": "1 cup, cooked"
    },
    {
      "gramsPerUnit": 965.0,
      "key": "1-cup-dry-yields",
      "kind": "unit",
      "label": "1 cup, dry, yields"
    }
  ],
  "name": "Cream of wheat, instant, made with water, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 14.1,
    "energy_kcal": 82.0,
    "fat_g": 2.09,
    "fibre_g": 0.5,
    "folate_ug": 50.0,
    "iron_mg": 4.01,
    "magnesium_mg": 6.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 15.0,
    "potassium_mg": 17.0,
    "protein_g": 1.5,
    "salt_g": 0.245,
    "sat_fat_g": 0.844,
    "sodium_mg": 98.0,
    "sugar_g": 3.56,
    "vitamin_a_ug": 207.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.2,
    "vitamin_k_ug": 1.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708437",
  "state": "Unspecified",
  "subcategory": "Grits and other cooked cereals",
  "tags": [
    "grits-and-other-cooked-cereals",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
