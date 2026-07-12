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
  "id": "usda-sr-legacy-173769",
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
  "name": "Soymilk (All flavors), lowfat, with added calcium, vitamins A and D",
  "nutritionPerBasis": {
    "calcium_mg": 82.0,
    "carbs_g": 7.2,
    "energy_kcal": 43.0,
    "fat_g": 0.62,
    "fibre_g": 0.8,
    "folate_ug": 0.0,
    "iron_mg": 0.44,
    "magnesium_mg": 0.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 62.0,
    "potassium_mg": 64.0,
    "protein_g": 1.65,
    "salt_g": 0.0925,
    "sat_fat_g": 0.0,
    "sodium_mg": 37.0,
    "sugar_g": 3.5,
    "vitamin_a_ug": 62.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.0,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "173769",
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
