/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "guideline-amount-per-cup-of-vegetable",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710243",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "guideline-amount-per-cup-of-vegetable",
      "kind": "unit",
      "label": "Guideline amount per cup of vegetable"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cream sauce, for use with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 27.0,
    "carbs_g": 10.6,
    "energy_kcal": 175.0,
    "fat_g": 14.2,
    "fibre_g": 0.1,
    "folate_ug": 2.0,
    "iron_mg": 0.05,
    "magnesium_mg": 3.0,
    "omega3_g": 0.012,
    "phosphorus_mg": 24.0,
    "potassium_mg": 39.0,
    "protein_g": 0.83,
    "salt_g": 2.34,
    "sat_fat_g": 8.13,
    "sodium_mg": 936.0,
    "sugar_g": 1.16,
    "vitamin_a_ug": 130.0,
    "vitamin_c_mg": 0.2,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 1.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710243",
  "state": "Unspecified",
  "subcategory": "Not included in a food category",
  "tags": [
    "milk-dairy-and-eggs",
    "not-included-in-a-food-category",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
