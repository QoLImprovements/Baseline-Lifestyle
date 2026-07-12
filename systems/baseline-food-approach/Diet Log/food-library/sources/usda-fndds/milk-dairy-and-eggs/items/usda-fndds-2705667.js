/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-small",
  "description": "Ice cream and frozen dairy desserts",
  "id": "usda-fndds-2705667",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 300.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 500.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 400.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    },
    {
      "gramsPerUnit": 215.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 215.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Soft serve, blended with candy or cookies, from fast food",
  "nutritionPerBasis": {
    "calcium_mg": 132.0,
    "carbs_g": 26.2,
    "energy_kcal": 176.0,
    "fat_g": 6.06,
    "fibre_g": 0.2,
    "folate_ug": 6.0,
    "iron_mg": 0.44,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 114.0,
    "potassium_mg": 203.0,
    "protein_g": 4.0,
    "salt_g": 0.16,
    "sat_fat_g": 3.19,
    "sodium_mg": 64.0,
    "sugar_g": 22.8,
    "vitamin_a_ug": 28.0,
    "vitamin_c_mg": 0.8,
    "vitamin_e_mg": 0.08,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705667",
  "state": "Unspecified",
  "subcategory": "Ice cream and frozen dairy desserts",
  "tags": [
    "ice-cream-and-frozen-dairy-desserts",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
