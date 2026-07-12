/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Milk, Dairy & Eggs",
  "defaultMeasure": "quantity-not-specified",
  "description": "Cheese",
  "id": "usda-fndds-2705781",
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
      "gramsPerUnit": 16.6,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Cheese ball",
  "nutritionPerBasis": {
    "calcium_mg": 391.0,
    "carbs_g": 4.84,
    "energy_kcal": 441.0,
    "fat_g": 38.9,
    "fibre_g": 1.2,
    "folate_ug": 34.0,
    "iron_mg": 0.62,
    "magnesium_mg": 48.0,
    "omega3_g": 0.022,
    "phosphorus_mg": 351.0,
    "potassium_mg": 194.0,
    "protein_g": 17.9,
    "salt_g": 1.385,
    "sat_fat_g": 14.6,
    "sodium_mg": 554.0,
    "sugar_g": 1.74,
    "vitamin_a_ug": 201.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.68,
    "vitamin_k_ug": 1.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705781",
  "state": "Unspecified",
  "subcategory": "Cheese",
  "tags": [
    "cheese",
    "milk-dairy-and-eggs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
