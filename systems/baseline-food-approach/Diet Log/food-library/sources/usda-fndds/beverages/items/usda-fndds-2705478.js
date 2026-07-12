/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Beverages",
  "defaultMeasure": "quantity-not-specified",
  "description": "Plant-based milk",
  "id": "usda-fndds-2705478",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 248.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 31.0,
      "key": "1-fl-oz",
      "kind": "unit",
      "label": "1 fl oz"
    }
  ],
  "name": "Chocolate milk, Nesquik, made with non-dairy milk",
  "nutritionPerBasis": {
    "calcium_mg": 172.0,
    "carbs_g": 8.41,
    "energy_kcal": 54.0,
    "fat_g": 1.64,
    "fibre_g": 0.4,
    "folate_ug": 4.0,
    "iron_mg": 0.3,
    "magnesium_mg": 13.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 38.0,
    "potassium_mg": 66.0,
    "protein_g": 1.35,
    "salt_g": 0.14,
    "sat_fat_g": 0.289,
    "sodium_mg": 56.0,
    "sugar_g": 6.94,
    "vitamin_a_ug": 33.0,
    "vitamin_c_mg": 1.7,
    "vitamin_e_mg": 1.95,
    "vitamin_k_ug": 0.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2705478",
  "state": "Unspecified",
  "subcategory": "Plant-based milk",
  "tags": [
    "beverages",
    "plant-based-milk",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
