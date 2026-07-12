/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710245",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "guideline-amount-per-cup-of-vegetable",
      "kind": "unit",
      "label": "Guideline amount per cup of vegetable"
    }
  ],
  "name": "Gravy, for use with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 11.2,
    "energy_kcal": 57.0,
    "fat_g": 1.05,
    "fibre_g": 0.1,
    "folate_ug": 1.0,
    "iron_mg": 0.08,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 9.0,
    "potassium_mg": 18.0,
    "protein_g": 0.31,
    "salt_g": 2.33,
    "sat_fat_g": 0.256,
    "sodium_mg": 932.0,
    "sugar_g": 0.12,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.04,
    "vitamin_k_ug": 0.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710245",
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
