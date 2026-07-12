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
  "id": "usda-fndds-2709982",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 140.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 30.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Sauerkraut",
  "nutritionPerBasis": {
    "calcium_mg": 30.0,
    "carbs_g": 4.16,
    "energy_kcal": 40.0,
    "fat_g": 2.53,
    "fibre_g": 2.8,
    "folate_ug": 22.0,
    "iron_mg": 1.42,
    "magnesium_mg": 13.0,
    "omega3_g": 0.001,
    "phosphorus_mg": 20.0,
    "potassium_mg": 165.0,
    "protein_g": 0.9,
    "salt_g": 1.6475,
    "sat_fat_g": 1.07,
    "sodium_mg": 659.0,
    "sugar_g": 1.73,
    "vitamin_a_ug": 26.0,
    "vitamin_c_mg": 12.8,
    "vitamin_e_mg": 0.37,
    "vitamin_k_ug": 14.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709982",
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
