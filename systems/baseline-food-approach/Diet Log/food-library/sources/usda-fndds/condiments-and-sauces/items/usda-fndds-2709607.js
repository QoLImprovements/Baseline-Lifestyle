/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-cup",
  "description": "Other dark green vegetables",
  "id": "usda-fndds-2709607",
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
      "gramsPerUnit": 70.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Mustard greens, fresh, cooked, no added fat",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 5.01,
    "energy_kcal": 29.0,
    "fat_g": 0.45,
    "fibre_g": 3.4,
    "folate_ug": 10.0,
    "iron_mg": 1.76,
    "magnesium_mg": 34.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 412.0,
    "protein_g": 3.07,
    "salt_g": 0.365,
    "sat_fat_g": 0.011,
    "sodium_mg": 146.0,
    "sugar_g": 1.42,
    "vitamin_a_ug": 154.0,
    "vitamin_c_mg": 52.5,
    "vitamin_e_mg": 2.15,
    "vitamin_k_ug": 276.0
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709607",
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
