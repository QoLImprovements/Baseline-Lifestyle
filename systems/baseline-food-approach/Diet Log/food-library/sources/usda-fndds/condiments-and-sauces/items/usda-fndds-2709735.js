/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Tomato-based condiments",
  "id": "usda-fndds-2709735",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 17.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Tomato chili sauce",
  "nutritionPerBasis": {
    "calcium_mg": 20.0,
    "carbs_g": 19.8,
    "energy_kcal": 92.0,
    "fat_g": 0.3,
    "fibre_g": 2.4,
    "folate_ug": 9.0,
    "iron_mg": 0.8,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 52.0,
    "potassium_mg": 370.0,
    "protein_g": 2.5,
    "salt_g": 3.35,
    "sat_fat_g": 0.045,
    "sodium_mg": 1340.0,
    "sugar_g": 13.3,
    "vitamin_a_ug": 34.0,
    "vitamin_c_mg": 16.0,
    "vitamin_e_mg": 1.92,
    "vitamin_k_ug": 5.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709735",
  "state": "Unspecified",
  "subcategory": "Tomato-based condiments",
  "tags": [
    "condiments-and-sauces",
    "tomato-based-condiments",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
