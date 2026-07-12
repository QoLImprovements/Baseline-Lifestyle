/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "1-pepper",
  "description": "Mustard and other condiments",
  "id": "usda-fndds-2709978",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "1-pepper",
      "kind": "unit",
      "label": "1 pepper"
    },
    {
      "gramsPerUnit": 150.0,
      "key": "1-cup",
      "kind": "unit",
      "label": "1 cup"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "quantity-not-specified",
      "kind": "unit",
      "label": "Quantity not specified"
    }
  ],
  "name": "Peppers, hot, cooked",
  "nutritionPerBasis": {
    "calcium_mg": 14.0,
    "carbs_g": 7.72,
    "energy_kcal": 59.0,
    "fat_g": 3.06,
    "fibre_g": 2.2,
    "folate_ug": 21.0,
    "iron_mg": 0.65,
    "magnesium_mg": 19.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 35.0,
    "potassium_mg": 288.0,
    "protein_g": 1.41,
    "salt_g": 0.33,
    "sat_fat_g": 0.761,
    "sodium_mg": 132.0,
    "sugar_g": 4.76,
    "vitamin_a_ug": 61.0,
    "vitamin_c_mg": 112.0,
    "vitamin_e_mg": 2.55,
    "vitamin_k_ug": 18.6
  },
  "source": "USDA FNDDS 2021-2023",
  "sourceId": "2709978",
  "state": "Cooked",
  "subcategory": "Mustard and other condiments",
  "tags": [
    "condiments-and-sauces",
    "cooked",
    "mustard-and-other-condiments"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
