/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-tablespoon",
  "description": "Soy-based condiments",
  "id": "usda-fndds-2707438",
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
      "gramsPerUnit": 16.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Miso sauce",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 14.0,
    "energy_kcal": 429.0,
    "fat_g": 41.0,
    "fibre_g": 1.2,
    "folate_ug": 1.0,
    "iron_mg": 0.67,
    "magnesium_mg": 2.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 41.0,
    "potassium_mg": 152.0,
    "protein_g": 3.43,
    "salt_g": 2.725,
    "sat_fat_g": 5.63,
    "sodium_mg": 1090.0,
    "sugar_g": 12.8,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 4.5,
    "vitamin_k_ug": 51.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2707438",
  "state": "Unspecified",
  "subcategory": "Soy-based condiments",
  "tags": [
    "condiments-and-sauces",
    "soy-based-condiments",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
