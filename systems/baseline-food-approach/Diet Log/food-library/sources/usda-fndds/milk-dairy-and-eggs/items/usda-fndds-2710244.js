/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Not included in a food category",
  "id": "usda-fndds-2710244",
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
  "name": "Cheese sauce, for use with vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 145.0,
    "carbs_g": 9.62,
    "energy_kcal": 120.0,
    "fat_g": 6.8,
    "fibre_g": 0.1,
    "folate_ug": 4.0,
    "iron_mg": 0.08,
    "magnesium_mg": 6.0,
    "omega3_g": 0.006,
    "phosphorus_mg": 93.0,
    "potassium_mg": 16.0,
    "protein_g": 4.69,
    "salt_g": 2.27,
    "sat_fat_g": 3.84,
    "sodium_mg": 908.0,
    "sugar_g": 0.07,
    "vitamin_a_ug": 63.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.15,
    "vitamin_k_ug": 0.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710244",
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
