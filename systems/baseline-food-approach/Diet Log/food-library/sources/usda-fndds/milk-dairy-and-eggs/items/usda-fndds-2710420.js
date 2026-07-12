/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-large",
  "description": "Coffee",
  "id": "usda-fndds-2710420",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 620.0,
      "key": "1-large",
      "kind": "unit",
      "label": "1 large"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup-8-fl-oz",
      "kind": "unit",
      "label": "1 cup (8 fl oz)"
    },
    {
      "gramsPerUnit": 372.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 372.0,
      "key": "1-small",
      "kind": "unit",
      "label": "1 small"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 496.0,
      "key": "1-medium",
      "kind": "unit",
      "label": "1 medium"
    }
  ],
  "name": "Frozen mocha coffee drink, nonfat, with whipped cream",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 12.6,
    "energy_kcal": 74.0,
    "fat_g": 1.91,
    "fibre_g": 0.0,
    "folate_ug": 1.0,
    "iron_mg": 0.02,
    "magnesium_mg": 20.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 54.0,
    "potassium_mg": 103.0,
    "protein_g": 1.56,
    "salt_g": 0.085,
    "sat_fat_g": 1.08,
    "sodium_mg": 34.0,
    "sugar_g": 11.8,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 0.1,
    "vitamin_e_mg": 0.05,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710420",
  "state": "Frozen",
  "subcategory": "Coffee",
  "tags": [
    "coffee",
    "frozen",
    "milk-dairy-and-eggs"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
