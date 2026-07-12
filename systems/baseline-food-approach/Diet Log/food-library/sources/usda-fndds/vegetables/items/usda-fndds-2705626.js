/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-individual-container",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2705626",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
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
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Spinach dip, light",
  "nutritionPerBasis": {
    "calcium_mg": 84.0,
    "carbs_g": 11.4,
    "energy_kcal": 165.0,
    "fat_g": 12.4,
    "fibre_g": 0.3,
    "folate_ug": 15.0,
    "iron_mg": 0.22,
    "magnesium_mg": 12.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 50.0,
    "potassium_mg": 134.0,
    "protein_g": 2.2,
    "salt_g": 1.22,
    "sat_fat_g": 3.87,
    "sodium_mg": 488.0,
    "sugar_g": 6.52,
    "vitamin_a_ug": 89.0,
    "vitamin_c_mg": 0.5,
    "vitamin_e_mg": 1.18,
    "vitamin_k_ug": 59.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705626",
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
