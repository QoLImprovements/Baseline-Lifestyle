/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "quantity-not-specified",
  "description": "Olives, pickles, pickled vegetables",
  "id": "usda-fndds-2710075",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Cabbage, green, pickled",
  "nutritionPerBasis": {
    "calcium_mg": 37.0,
    "carbs_g": 10.2,
    "energy_kcal": 46.0,
    "fat_g": 0.21,
    "fibre_g": 2.1,
    "folate_ug": 30.0,
    "iron_mg": 0.06,
    "magnesium_mg": 12.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 23.0,
    "potassium_mg": 172.0,
    "protein_g": 0.8,
    "salt_g": 2.3925,
    "sat_fat_g": 0.028,
    "sodium_mg": 957.0,
    "sugar_g": 7.52,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 28.4,
    "vitamin_e_mg": 0.12,
    "vitamin_k_ug": 49.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710075",
  "state": "Unspecified",
  "subcategory": "Olives, pickles, pickled vegetables",
  "tags": [
    "olives-pickles-pickled-vegetables",
    "unspecified",
    "vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
