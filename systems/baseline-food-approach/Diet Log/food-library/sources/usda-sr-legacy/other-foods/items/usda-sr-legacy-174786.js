/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Other Foods",
  "defaultMeasure": "bar",
  "description": "Snacks",
  "id": "usda-sr-legacy-174786",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 80.0,
      "key": "bar",
      "kind": "unit",
      "label": "bar"
    }
  ],
  "name": "Formulated bar, MARS SNACKFOOD US, SNICKERS MARATHON Protein Performance Bar, Caramel Nut Rush",
  "nutritionPerBasis": {
    "calcium_mg": 625.0,
    "carbs_g": 50.5,
    "energy_kcal": 415.0,
    "fat_g": 12.5,
    "fibre_g": 12.5,
    "folate_ug": 500.0,
    "iron_mg": 10.1,
    "magnesium_mg": 175.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 375.0,
    "potassium_mg": 188.0,
    "protein_g": 25.0,
    "salt_g": 0.595,
    "sat_fat_g": 6.25,
    "sodium_mg": 238.0,
    "sugar_g": 28.8,
    "vitamin_a_ug": 652.0,
    "vitamin_c_mg": 75.0,
    "vitamin_e_mg": 16.9,
    "vitamin_k_ug": 10.4
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174786",
  "state": "Unspecified",
  "subcategory": "Snacks",
  "tags": [
    "other-foods",
    "snacks",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
