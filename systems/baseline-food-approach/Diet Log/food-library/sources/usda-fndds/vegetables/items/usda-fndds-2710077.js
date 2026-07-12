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
  "id": "usda-fndds-2710077",
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
  "name": "Kimchi",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 2.4,
    "energy_kcal": 15.0,
    "fat_g": 0.5,
    "fibre_g": 1.6,
    "folate_ug": 52.0,
    "iron_mg": 2.5,
    "magnesium_mg": 14.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 24.0,
    "potassium_mg": 151.0,
    "protein_g": 1.1,
    "salt_g": 1.245,
    "sat_fat_g": 0.067,
    "sodium_mg": 498.0,
    "sugar_g": 1.06,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.11,
    "vitamin_k_ug": 43.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710077",
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
