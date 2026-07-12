/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "guideline-amount-per-cup-of-vegetable",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710242",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "guideline-amount-per-cup-of-vegetable",
      "kind": "unit",
      "label": "Guideline amount per cup of vegetable"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Chicken, for use with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 0.0,
    "energy_kcal": 164.0,
    "fat_g": 6.36,
    "fibre_g": 0.0,
    "folate_ug": 10.0,
    "iron_mg": 0.73,
    "magnesium_mg": 23.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 237.0,
    "potassium_mg": 279.0,
    "protein_g": 26.8,
    "salt_g": 0.8625,
    "sat_fat_g": 1.58,
    "sodium_mg": 345.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 8.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.41,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710242",
  "state": "Unspecified",
  "subcategory": "Not included in a food category",
  "tags": [
    "meat-and-poultry",
    "not-included-in-a-food-category",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
