/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-tablespoon",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2710175",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Pesto sauce",
  "nutritionPerBasis": {
    "calcium_mg": 207.0,
    "carbs_g": 5.67,
    "energy_kcal": 580.0,
    "fat_g": 59.2,
    "fibre_g": 1.0,
    "folate_ug": 19.0,
    "iron_mg": 1.87,
    "magnesium_mg": 61.0,
    "omega3_g": 0.005,
    "phosphorus_mg": 230.0,
    "potassium_mg": 199.0,
    "protein_g": 8.61,
    "salt_g": 2.47,
    "sat_fat_g": 10.3,
    "sodium_mg": 988.0,
    "sugar_g": 0.7,
    "vitamin_a_ug": 91.0,
    "vitamin_c_mg": 3.6,
    "vitamin_e_mg": 10.6,
    "vitamin_k_ug": 95.5
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710175",
  "state": "Unspecified",
  "subcategory": "Dips, gravies, other sauces",
  "tags": [
    "condiments-and-sauces",
    "dips-gravies-other-sauces",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
