/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Herbs, Spices & Seasonings",
  "defaultMeasure": "guideline-amount-per-fl-oz-of-beverage",
  "description": "Sugars and honey",
  "id": "usda-fndds-2710261",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 1.4,
      "key": "guideline-amount-per-fl-oz-of-beverage",
      "kind": "unit",
      "label": "Guideline amount per fl oz of beverage"
    },
    {
      "gramsPerUnit": 8.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 200.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 4.2,
      "key": "1-teaspoon",
      "kind": "unit",
      "label": "1 teaspoon"
    }
  ],
  "name": "Sugar, cinnamon",
  "nutritionPerBasis": {
    "calcium_mg": 71.0,
    "carbs_g": 98.3,
    "energy_kcal": 390.0,
    "fat_g": 0.38,
    "fibre_g": 3.7,
    "folate_ug": 0.0,
    "iron_mg": 0.63,
    "magnesium_mg": 4.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 4.0,
    "potassium_mg": 32.0,
    "protein_g": 0.28,
    "salt_g": 0.005,
    "sat_fat_g": 0.024,
    "sodium_mg": 2.0,
    "sugar_g": 93.0,
    "vitamin_a_ug": 1.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.16,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710261",
  "state": "Unspecified",
  "subcategory": "Sugars and honey",
  "tags": [
    "herbs-spices-and-seasonings",
    "sugars-and-honey",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
