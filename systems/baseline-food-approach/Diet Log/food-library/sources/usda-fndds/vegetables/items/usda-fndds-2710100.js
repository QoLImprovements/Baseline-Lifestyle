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
  "id": "usda-fndds-2710100",
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
      "gramsPerUnit": 100.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    }
  ],
  "name": "Seaweed, pickled",
  "nutritionPerBasis": {
    "calcium_mg": 109.0,
    "carbs_g": 11.4,
    "energy_kcal": 54.0,
    "fat_g": 0.42,
    "fibre_g": 0.6,
    "folate_ug": 108.0,
    "iron_mg": 1.89,
    "magnesium_mg": 64.0,
    "omega3_g": 0.075,
    "phosphorus_mg": 50.0,
    "potassium_mg": 137.0,
    "protein_g": 2.91,
    "salt_g": 3.15,
    "sat_fat_g": 0.121,
    "sodium_mg": 1260.0,
    "sugar_g": 5.35,
    "vitamin_a_ug": 75.0,
    "vitamin_c_mg": 8.7,
    "vitamin_e_mg": 0.79,
    "vitamin_k_ug": 20.8
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710100",
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
