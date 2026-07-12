/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Olives, pickles, pickled vegetables",
  "id": "usda-fndds-2710073",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-tablespoon",
      "kind": "unit",
      "label": "1 tablespoon"
    }
  ],
  "name": "Relish, corn",
  "nutritionPerBasis": {
    "calcium_mg": 4.0,
    "carbs_g": 25.7,
    "energy_kcal": 111.0,
    "fat_g": 0.91,
    "fibre_g": 1.5,
    "folate_ug": 30.0,
    "iron_mg": 0.23,
    "magnesium_mg": 10.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.0,
    "potassium_mg": 114.0,
    "protein_g": 1.7,
    "salt_g": 0.84,
    "sat_fat_g": 0.176,
    "sodium_mg": 336.0,
    "sugar_g": 18.4,
    "vitamin_a_ug": 9.0,
    "vitamin_c_mg": 8.7,
    "vitamin_e_mg": 0.14,
    "vitamin_k_ug": 0.3
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2710073",
  "state": "Unspecified",
  "subcategory": "Olives, pickles, pickled vegetables",
  "tags": [
    "condiments-and-sauces",
    "olives-pickles-pickled-vegetables",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
