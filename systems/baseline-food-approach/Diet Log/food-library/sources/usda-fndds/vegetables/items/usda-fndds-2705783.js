/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-tablespoon",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2705783",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 70.0,
      "key": "1-individual-container",
      "kind": "unit",
      "label": "1 individual container"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Spinach and artichoke dip",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 5.07,
    "energy_kcal": 329.0,
    "fat_g": 32.8,
    "fibre_g": 1.2,
    "folate_ug": 32.0,
    "iron_mg": 0.44,
    "magnesium_mg": 22.0,
    "omega3_g": 0.01,
    "phosphorus_mg": 99.0,
    "potassium_mg": 148.0,
    "protein_g": 4.21,
    "salt_g": 1.55,
    "sat_fat_g": 8.48,
    "sodium_mg": 620.0,
    "sugar_g": 1.52,
    "vitamin_a_ug": 151.0,
    "vitamin_c_mg": 1.6,
    "vitamin_e_mg": 1.74,
    "vitamin_k_ug": 128.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705783",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "dips-gravies-other-sauces",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
