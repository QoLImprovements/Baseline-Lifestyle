/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Condiments & Sauces",
  "defaultMeasure": "cup",
  "description": "Spices and Herbs",
  "id": "usda-foundation-326698",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 249.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 6.0,
      "key": "teaspoon",
      "kind": "unit",
      "label": "teaspoon"
    }
  ],
  "name": "Mustard, prepared, yellow",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 5.3,
    "energy_kcal": 254.0,
    "fat_g": 3.38,
    "fibre_g": 4.3,
    "folate_ug": 7.0,
    "iron_mg": 1.59,
    "magnesium_mg": 47.7,
    "omega3_g": 0.444,
    "phosphorus_mg": 108.0,
    "potassium_mg": 150.0,
    "protein_g": 4.25,
    "salt_g": 2.75,
    "sat_fat_g": 0.252,
    "sodium_mg": 1100.0,
    "sugar_g": 1.42,
    "vitamin_a_ug": 4.0,
    "vitamin_c_mg": 0.4,
    "vitamin_e_mg": 0.35,
    "vitamin_k_ug": 1.5
  },
  "source": "USDA Foundation Foods April 2026",
  "sourceId": "326698",
  "state": "Unspecified",
  "subcategory": "Spices and Herbs",
  "tags": [
    "condiments-and-sauces",
    "spices-and-herbs",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
