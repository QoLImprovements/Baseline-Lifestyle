/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "quantity-not-specified",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710241",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 14.0,
      "key": "guideline-amount-per-cup-of-vegetable",
      "kind": "unit",
      "label": "Guideline amount per cup of vegetable"
    }
  ],
  "name": "Beef, for use with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 16.0,
    "carbs_g": 0.0,
    "energy_kcal": 191.0,
    "fat_g": 6.82,
    "fibre_g": 0.0,
    "folate_ug": 8.0,
    "iron_mg": 2.96,
    "magnesium_mg": 23.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 228.0,
    "potassium_mg": 319.0,
    "protein_g": 32.4,
    "salt_g": 0.1675,
    "sat_fat_g": 2.8,
    "sodium_mg": 67.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 1.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710241",
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
