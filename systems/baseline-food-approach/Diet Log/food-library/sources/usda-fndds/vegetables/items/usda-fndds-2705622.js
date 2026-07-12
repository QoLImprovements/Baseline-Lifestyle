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
  "id": "usda-fndds-2705622",
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
  "name": "Onion dip, light",
  "nutritionPerBasis": {
    "calcium_mg": 74.0,
    "carbs_g": 11.9,
    "energy_kcal": 166.0,
    "fat_g": 12.4,
    "fibre_g": 0.1,
    "folate_ug": 7.0,
    "iron_mg": 0.1,
    "magnesium_mg": 7.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 49.0,
    "potassium_mg": 125.0,
    "protein_g": 2.0,
    "salt_g": 1.2025,
    "sat_fat_g": 3.87,
    "sodium_mg": 481.0,
    "sugar_g": 6.85,
    "vitamin_a_ug": 44.0,
    "vitamin_c_mg": 0.9,
    "vitamin_e_mg": 0.92,
    "vitamin_k_ug": 19.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705622",
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
