/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Nuts & Seeds",
  "defaultMeasure": "1-small",
  "description": "Doughnuts, sweet rolls, pastries",
  "id": "usda-fndds-2707674",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 56.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 96.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-miniature",
      "kind": "unit",
      "label": "1 miniature"
    },
    {
      "gramsPerUnit": 76.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 76.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pan Dulce, no topping",
  "nutritionPerBasis": {
    "calcium_mg": 86.0,
    "carbs_g": 56.4,
    "energy_kcal": 367.0,
    "fat_g": 11.6,
    "fibre_g": 2.3,
    "folate_ug": 108.0,
    "iron_mg": 2.87,
    "magnesium_mg": 24.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 94.0,
    "potassium_mg": 103.0,
    "protein_g": 9.42,
    "salt_g": 0.57,
    "sat_fat_g": 2.18,
    "sodium_mg": 228.0,
    "sugar_g": 12.5,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 1.2,
    "vitamin_e_mg": 0.29,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707674",
  "state": "Unspecified",
  "subcategory": "Doughnuts, sweet rolls, pastries",
  "tags": [
    "doughnuts-sweet-rolls-pastries",
    "nuts-and-seeds",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
