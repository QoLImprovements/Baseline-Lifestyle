/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-packet-dry-yields",
  "description": "Grits and other cooked cereals",
  "id": "usda-fndds-2708368",
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
      "gramsPerUnit": 185.0,
      "key": "1-oz-dry-yields",
      "kind": "unit",
      "label": "1 oz, dry, yields"
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
    }
  ],
  "name": "Grits, with cheese, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 80.0,
    "carbs_g": 11.5,
    "energy_kcal": 97.0,
    "fat_g": 3.92,
    "fibre_g": 0.7,
    "folate_ug": 19.0,
    "iron_mg": 0.43,
    "magnesium_mg": 9.0,
    "omega3_g": 0.003,
    "phosphorus_mg": 64.0,
    "potassium_mg": 27.0,
    "protein_g": 3.6,
    "salt_g": 0.335,
    "sat_fat_g": 2.12,
    "sodium_mg": 134.0,
    "sugar_g": 0.12,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2708368",
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
