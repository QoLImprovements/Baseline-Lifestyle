/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "1-cup-ice",
  "description": "Tap water",
  "id": "usda-fndds-2710707",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 110.0,
      "key": "1-cup-ice",
      "kind": "unit",
      "label": "1 cup ice"
    },
    {
      "gramsPerUnit": 720.0,
      "key": "1-bottle-24-fl-oz-filled-with-tap-water",
      "kind": "unit",
      "label": "1 bottle (24 fl oz) filled with tap water"
    },
    {
      "gramsPerUnit": 507.0,
      "key": "1-bottle-16-9-fl-oz-filled-with-tap-water",
      "kind": "unit",
      "label": "1 bottle (16.9 fl oz) filled with tap water"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "1-ice-cube",
      "kind": "unit",
      "label": "1 ice cube"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "guideline-amount-if-from-a-water-fountain",
      "kind": "unit",
      "label": "Guideline amount if from a water fountain"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Water, tap",
  "nutritionPerBasis": {
    "calcium_mg": 3.0,
    "carbs_g": 0.0,
    "energy_kcal": 0.0,
    "fat_g": 0.0,
    "fibre_g": 0.0,
    "folate_ug": 0.0,
    "iron_mg": 0.0,
    "magnesium_mg": 1.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 0.0,
    "protein_g": 0.0,
    "salt_g": 0.01,
    "sat_fat_g": 0.0,
    "sodium_mg": 4.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710707",
  "state": "Unspecified",
  "subcategory": "Tap water",
  "tags": [
    "beverages",
    "tap-water",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
