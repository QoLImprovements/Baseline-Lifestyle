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
  "id": "usda-fndds-2709741",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Enchilada sauce, red",
  "nutritionPerBasis": {
    "calcium_mg": 7.0,
    "carbs_g": 4.87,
    "energy_kcal": 30.0,
    "fat_g": 0.91,
    "fibre_g": 0.5,
    "folate_ug": 5.0,
    "iron_mg": 0.67,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 11.0,
    "potassium_mg": 101.0,
    "protein_g": 0.62,
    "salt_g": 1.3675,
    "sat_fat_g": 0.111,
    "sodium_mg": 547.0,
    "sugar_g": 1.83,
    "vitamin_a_ug": 36.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.7,
    "vitamin_k_ug": 2.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709741",
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
