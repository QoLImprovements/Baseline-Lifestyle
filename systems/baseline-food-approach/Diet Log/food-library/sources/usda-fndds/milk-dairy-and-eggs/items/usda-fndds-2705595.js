/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "guideline-amount-per-fl-oz-of-beverage",
  "description": "Cream and cream substitutes",
  "id": "usda-fndds-2705595",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-individual-container-5-fl-oz",
      "kind": "unit",
      "label": "1 individual container (.5 fl oz)"
    },
    {
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cream, half and half, flavored",
  "nutritionPerBasis": {
    "calcium_mg": 105.0,
    "carbs_g": 4.5,
    "energy_kcal": 130.0,
    "fat_g": 11.3,
    "fibre_g": 0.0,
    "folate_ug": 3.0,
    "iron_mg": 0.05,
    "magnesium_mg": 10.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 93.0,
    "potassium_mg": 129.0,
    "protein_g": 3.07,
    "salt_g": 0.15,
    "sat_fat_g": 6.89,
    "sodium_mg": 60.0,
    "sugar_g": 4.33,
    "vitamin_a_ug": 95.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.24,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705595",
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
