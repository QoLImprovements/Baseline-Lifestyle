/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Diet sport and energy drinks",
  "id": "usda-fndds-2710763",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 480.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 252.0,
      "key": "1-can-8-4-fl-oz",
      "kind": "unit",
      "label": "1 can (8.4 fl oz)"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 600.0,
      "key": "1-can-20-fl-oz",
      "kind": "unit",
      "label": "1 can (20 fl oz)"
    },
    {
      "gramsPerUnit": 507.0,
      "key": "1-can-16-9-fl-oz",
      "kind": "unit",
      "label": "1 can (16.9 fl oz)"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-can-12-fl-oz",
      "kind": "unit",
      "label": "1 can (12 fl oz)"
    }
  ],
  "name": "Energy drink, sugar-free (Red Bull)",
  "nutritionPerBasis": {
    "calcium_mg": 13.0,
    "carbs_g": 0.7,
    "energy_kcal": 5.0,
    "fat_g": 0.08,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.02,
    "magnesium_mg": 3.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 3.0,
    "protein_g": 0.25,
    "salt_g": 0.2075,
    "sat_fat_g": 0.0,
    "sodium_mg": 83.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710763",
  "state": "Unspecified",
  "subcategory": "Diet sport and energy drinks",
  "tags": [
    "beverages",
    "diet-sport-and-energy-drinks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
