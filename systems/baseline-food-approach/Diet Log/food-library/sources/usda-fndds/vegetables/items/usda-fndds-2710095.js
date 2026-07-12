/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-cup",
  "description": "Olives, pickles, pickled vegetables",
  "id": "usda-fndds-2710095",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 2.0,
      "key": "1-slice",
      "kind": "unit",
      "label": "1 slice"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-whole",
      "kind": "unit",
      "label": "1 whole"
    }
  ],
  "name": "Peppers, hot, pickled",
  "nutritionPerBasis": {
    "calcium_mg": 61.0,
    "carbs_g": 4.56,
    "energy_kcal": 22.0,
    "fat_g": 0.4,
    "fibre_g": 2.6,
    "folate_ug": 13.0,
    "iron_mg": 0.32,
    "magnesium_mg": 6.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 13.0,
    "potassium_mg": 113.0,
    "protein_g": 0.8,
    "salt_g": 3.575,
    "sat_fat_g": 0.061,
    "sodium_mg": 1430.0,
    "sugar_g": 1.6,
    "vitamin_a_ug": 43.0,
    "vitamin_c_mg": 12.3,
    "vitamin_e_mg": 0.9,
    "vitamin_k_ug": 21.9
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710095",
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
