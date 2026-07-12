/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-173772",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 243.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "SILK Light Vanilla, soymilk",
  "nutritionPerBasis": {
    "calcium_mg": 123.0,
    "carbs_g": 4.12,
    "energy_kcal": 33.0,
    "fat_g": 0.82,
    "fibre_g": 0.4,
    "folate_ug": 10.0,
    "iron_mg": 0.44,
    "magnesium_mg": 16.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 0.0,
    "potassium_mg": 123.0,
    "protein_g": 2.47,
    "salt_g": 0.0975,
    "sat_fat_g": 0.0,
    "sodium_mg": 39.0,
    "sugar_g": 2.88,
    "vitamin_a_ug": 206.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173772",
  "state": "Unspecified",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "legumes-and-legume-products",
    "legumes-and-pulses",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
