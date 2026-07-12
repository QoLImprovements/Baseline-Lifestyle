/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Tomato-based condiments",
  "id": "usda-fndds-2709737",
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
      "gramsPerUnit": 240.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Salsa, pico de gallo",
  "nutritionPerBasis": {
    "calcium_mg": 11.0,
    "carbs_g": 3.7,
    "energy_kcal": 17.0,
    "fat_g": 0.14,
    "fibre_g": 1.1,
    "folate_ug": 12.0,
    "iron_mg": 0.23,
    "magnesium_mg": 9.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 19.0,
    "potassium_mg": 157.0,
    "protein_g": 0.71,
    "salt_g": 1.1075,
    "sat_fat_g": 0.023,
    "sodium_mg": 443.0,
    "sugar_g": 2.13,
    "vitamin_a_ug": 25.0,
    "vitamin_c_mg": 10.8,
    "vitamin_e_mg": 0.32,
    "vitamin_k_ug": 6.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709737",
  "state": "Unspecified",
  "subcategory": "Tomato-based condiments",
  "tags": [
    "tomato-based-condiments",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
