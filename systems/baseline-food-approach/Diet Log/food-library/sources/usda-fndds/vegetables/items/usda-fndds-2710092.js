/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Vegetables",
  "defaultMeasure": "1-tablespoon",
  "description": "Olives, pickles, pickled vegetables",
  "id": "usda-fndds-2710092",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 16.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    },
    {
      "gramsPerUnit": 32.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Olive tapenade",
  "nutritionPerBasis": {
    "calcium_mg": 60.0,
    "carbs_g": 4.17,
    "energy_kcal": 282.0,
    "fat_g": 30.0,
    "fibre_g": 1.8,
    "folate_ug": 1.0,
    "iron_mg": 3.4,
    "magnesium_mg": 5.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 3.0,
    "potassium_mg": 17.0,
    "protein_g": 0.73,
    "salt_g": 2.0875,
    "sat_fat_g": 4.85,
    "sodium_mg": 835.0,
    "sugar_g": 0.16,
    "vitamin_a_ug": 14.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 6.14,
    "vitamin_k_ug": 6.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710092",
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
