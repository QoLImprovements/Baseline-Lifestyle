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
  "id": "usda-fndds-2710084",
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
      "gramsPerUnit": 13.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "1-piece-slice",
      "kind": "unit",
      "label": "1 piece/slice"
    },
    {
      "gramsPerUnit": 155.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Mushrooms, pickled",
  "nutritionPerBasis": {
    "calcium_mg": 6.0,
    "carbs_g": 8.29,
    "energy_kcal": 46.0,
    "fat_g": 0.3,
    "fibre_g": 1.4,
    "folate_ug": 25.0,
    "iron_mg": 0.19,
    "magnesium_mg": 8.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 77.0,
    "potassium_mg": 308.0,
    "protein_g": 2.4,
    "salt_g": 2.3725,
    "sat_fat_g": 0.041,
    "sodium_mg": 949.0,
    "sugar_g": 6.51,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 1.5,
    "vitamin_e_mg": 0.01,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710084",
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
