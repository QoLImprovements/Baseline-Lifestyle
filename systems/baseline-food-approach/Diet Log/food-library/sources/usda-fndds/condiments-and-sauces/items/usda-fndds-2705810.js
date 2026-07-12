/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Dips, gravies, other sauces",
  "id": "usda-fndds-2705810",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 65.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 260.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Alfredo sauce with added vegetables",
  "nutritionPerBasis": {
    "calcium_mg": 53.0,
    "carbs_g": 2.65,
    "energy_kcal": 122.0,
    "fat_g": 11.5,
    "fibre_g": 0.4,
    "folate_ug": 8.0,
    "iron_mg": 0.11,
    "magnesium_mg": 7.0,
    "omega3_g": 0.009,
    "phosphorus_mg": 52.0,
    "potassium_mg": 102.0,
    "protein_g": 2.07,
    "salt_g": 1.0575,
    "sat_fat_g": 6.53,
    "sodium_mg": 423.0,
    "sugar_g": 1.44,
    "vitamin_a_ug": 113.0,
    "vitamin_c_mg": 10.7,
    "vitamin_e_mg": 0.34,
    "vitamin_k_ug": 2.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705810",
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
