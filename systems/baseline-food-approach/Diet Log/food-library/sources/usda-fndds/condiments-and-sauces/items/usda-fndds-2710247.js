/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "guideline-amount-per-cup-of-vegetable",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710247",
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
  "name": "Tomato sauce, for use with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 8.0,
    "carbs_g": 12.1,
    "energy_kcal": 104.0,
    "fat_g": 6.15,
    "fibre_g": 0.6,
    "folate_ug": 4.0,
    "iron_mg": 0.4,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 119.0,
    "protein_g": 0.48,
    "salt_g": 2.4125,
    "sat_fat_g": 0.818,
    "sodium_mg": 965.0,
    "sugar_g": 11.4,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 2.8,
    "vitamin_e_mg": 1.72,
    "vitamin_k_ug": 7.1
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710247",
  "state": "Unspecified",
  "subcategory": "Not included in a food category",
  "tags": [
    "condiments-and-sauces",
    "not-included-in-a-food-category",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
