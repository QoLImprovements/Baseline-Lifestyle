/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Fish & Seafood",
  "defaultMeasure": "quantity-not-specified",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2705784",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 60.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
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
    }
  ],
  "name": "Seafood dip",
  "nutritionPerBasis": {
    "calcium_mg": 119.0,
    "carbs_g": 4.2,
    "energy_kcal": 337.0,
    "fat_g": 32.8,
    "fibre_g": 0.2,
    "folate_ug": 7.0,
    "iron_mg": 0.41,
    "magnesium_mg": 12.0,
    "omega3_g": 0.088,
    "phosphorus_mg": 113.0,
    "potassium_mg": 102.0,
    "protein_g": 6.18,
    "salt_g": 1.7875,
    "sat_fat_g": 8.47,
    "sodium_mg": 715.0,
    "sugar_g": 1.95,
    "vitamin_a_ug": 71.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 1.39,
    "vitamin_k_ug": 54.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705784",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "dips-gravies-other-sauces",
    "fish-and-seafood",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
