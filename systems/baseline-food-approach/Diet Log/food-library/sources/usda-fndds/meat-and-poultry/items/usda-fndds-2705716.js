/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Meat & Poultry",
  "defaultMeasure": "1-cubic-inch",
  "description": "Cheese",
  "id": "usda-fndds-2705716",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 25.0,
      "key": "1-cubic-inch",
      "kind": "unit",
      "label": "1 cubic inch"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup-crumbled",
      "kind": "unit",
      "label": "1 cup, crumbled"
    },
    {
      "gramsPerUnit": 21.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Cheese, goat",
  "nutritionPerBasis": {
    "calcium_mg": 298.0,
    "carbs_g": 0.12,
    "energy_kcal": 364.0,
    "fat_g": 29.8,
    "fibre_g": 0.0,
    "folate_ug": 2.0,
    "iron_mg": 1.62,
    "magnesium_mg": 29.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 375.0,
    "potassium_mg": 158.0,
    "protein_g": 21.6,
    "salt_g": 1.0375,
    "sat_fat_g": 20.6,
    "sodium_mg": 415.0,
    "sugar_g": 0.12,
    "vitamin_a_ug": 407.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.26,
    "vitamin_k_ug": 2.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705716",
  "state": "Unspecified",
  "subcategory": "Cheese",
  "tags": [
    "cheese",
    "meat-and-poultry",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
