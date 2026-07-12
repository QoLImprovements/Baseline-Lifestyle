/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "1-cup",
  "description": "Cream and cream substitutes",
  "id": "usda-fndds-2705592",
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
      "gramsPerUnit": 11.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    },
    {
      "gramsPerUnit": 2.5,
      "key": "guideline-amount-per-fl-oz-of-beverage",
      "kind": "unit",
      "label": "Guideline amount per fl oz of beverage"
    },
    {
      "gramsPerUnit": 20.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cream, NS as to light, heavy, or half and half",
  "nutritionPerBasis": {
    "calcium_mg": 107.0,
    "carbs_g": 4.3,
    "energy_kcal": 131.0,
    "fat_g": 11.5,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.05,
    "magnesium_mg": 10.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 95.0,
    "potassium_mg": 132.0,
    "protein_g": 3.13,
    "salt_g": 0.1525,
    "sat_fat_g": 7.03,
    "sodium_mg": 61.0,
    "sugar_g": 4.13,
    "vitamin_a_ug": 97.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.25,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705592",
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
