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
  "id": "usda-fndds-2709752",
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
  "name": "Steak sauce",
  "nutritionPerBasis": {
    "calcium_mg": 19.0,
    "carbs_g": 22.0,
    "energy_kcal": 95.0,
    "fat_g": 0.23,
    "fibre_g": 1.5,
    "folate_ug": 8.0,
    "iron_mg": 1.37,
    "magnesium_mg": 17.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 33.0,
    "potassium_mg": 312.0,
    "protein_g": 1.25,
    "salt_g": 4.125,
    "sat_fat_g": 0.0,
    "sodium_mg": 1650.0,
    "sugar_g": 9.82,
    "vitamin_a_ug": 15.0,
    "vitamin_c_mg": 6.8,
    "vitamin_e_mg": 1.16,
    "vitamin_k_ug": 2.2
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709752",
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
