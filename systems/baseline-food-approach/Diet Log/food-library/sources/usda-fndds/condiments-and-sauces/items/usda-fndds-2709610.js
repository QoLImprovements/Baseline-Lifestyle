/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "quantity-not-specified",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709610",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 75.0,
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
  "name": "Mustard greens, fresh, cooked, fat added",
  "nutritionPerBasis": {
    "calcium_mg": 120.0,
    "carbs_g": 4.87,
    "energy_kcal": 53.0,
    "fat_g": 3.18,
    "fibre_g": 3.3,
    "folate_ug": 9.0,
    "iron_mg": 1.71,
    "magnesium_mg": 33.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 61.0,
    "potassium_mg": 400.0,
    "protein_g": 2.99,
    "salt_g": 0.3775,
    "sat_fat_g": 0.727,
    "sodium_mg": 151.0,
    "sugar_g": 1.38,
    "vitamin_a_ug": 162.0,
    "vitamin_c_mg": 51.0,
    "vitamin_e_mg": 2.5,
    "vitamin_k_ug": 270.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709610",
  "state": "Cooked",
  "subcategory": "Other dark green vegetables",
  "tags": [
    "condiments-and-sauces",
    "cooked",
    "other-dark-green-vegetables"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
