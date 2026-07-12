/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-individual-container",
  "description": "Cream and cream substitutes",
  "id": "usda-fndds-2705601",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "guideline-amount-per-fl-oz-of-beverage",
      "kind": "unit",
      "label": "Guideline amount per fl oz of beverage"
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
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Coffee creamer, liquid, flavored",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 35.1,
    "energy_kcal": 251.0,
    "fat_g": 13.5,
    "fibre_g": 1.1,
    "folate_ug": 1.0,
    "iron_mg": 0.59,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 28.0,
    "potassium_mg": 96.0,
    "protein_g": 0.69,
    "salt_g": 0.1675,
    "sat_fat_g": 2.64,
    "sodium_mg": 67.0,
    "sugar_g": 33.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.58,
    "vitamin_k_ug": 3.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705601",
  "state": "Unspecified",
  "subcategory": "Cream and cream substitutes",
  "tags": [
    "cream-and-cream-substitutes",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
