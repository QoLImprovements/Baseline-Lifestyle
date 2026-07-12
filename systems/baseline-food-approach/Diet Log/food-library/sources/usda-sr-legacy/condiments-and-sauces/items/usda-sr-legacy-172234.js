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
  "id": "usda-sr-legacy-172234",
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
      "gramsPerUnit": 5.0,
      "key": "tsp-or-1-packet",
      "kind": "unit",
      "label": "tsp or 1 packet"
    }
  ],
  "name": "Mustard, prepared, yellow",
  "nutritionPerBasis": {
    "calcium_mg": 63.0,
    "carbs_g": 5.83,
    "energy_kcal": 253.0,
    "fat_g": 3.34,
    "fibre_g": 4.0,
    "folate_ug": 7.0,
    "iron_mg": 1.61,
    "magnesium_mg": 48.0,
    "omega3_g": 0.373,
    "phosphorus_mg": 108.0,
    "potassium_mg": 152.0,
    "protein_g": 3.74,
    "salt_g": 2.75,
    "sat_fat_g": 0.214,
    "sodium_mg": 1100.0,
    "sugar_g": 0.92,
    "vitamin_a_ug": 5.0,
    "vitamin_c_mg": 0.3,
    "vitamin_e_mg": 0.36,
    "vitamin_k_ug": 1.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172234",
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
