/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Tea",
  "id": "usda-fndds-2710506",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 600.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 360.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 480.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    }
  ],
  "name": "Tea, hot, with milk",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 8.95,
    "energy_kcal": 51.0,
    "fat_g": 1.05,
    "fibre_g": 0.1,
    "folate_ug": 3.0,
    "iron_mg": 0.02,
    "magnesium_mg": 7.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 49.0,
    "potassium_mg": 91.0,
    "protein_g": 1.58,
    "salt_g": 0.05,
    "sat_fat_g": 0.604,
    "sodium_mg": 20.0,
    "sugar_g": 8.72,
    "vitamin_a_ug": 27.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.02,
    "vitamin_k_ug": 0.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710506",
  "state": "Unspecified",
  "subcategory": "Tea",
  "tags": [
    "milk-dairy-and-eggs",
    "tea",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
