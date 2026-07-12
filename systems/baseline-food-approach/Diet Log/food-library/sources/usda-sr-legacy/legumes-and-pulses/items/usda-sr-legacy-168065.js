/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "cup",
  "description": "Restaurant Foods",
  "id": "usda-sr-legacy-168065",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 157.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    },
    {
      "gramsPerUnit": 590.0,
      "key": "serving",
      "kind": "unit",
      "label": "serving"
    }
  ],
  "name": "Restaurant, Latino, Arroz con habichuelas colorados (Rice And Red Beans)",
  "nutritionPerBasis": {
    "calcium_mg": 15.0,
    "carbs_g": 23.7,
    "energy_kcal": 594.0,
    "fat_g": 3.46,
    "fibre_g": 2.6,
    "folate_ug": 0.0,
    "iron_mg": 1.22,
    "magnesium_mg": 21.0,
    "omega3_g": 0.225,
    "phosphorus_mg": 75.0,
    "potassium_mg": 194.0,
    "protein_g": 3.96,
    "salt_g": 0.925,
    "sat_fat_g": 0.502,
    "sodium_mg": 370.0,
    "sugar_g": 0.15,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.23,
    "vitamin_k_ug": 7.8
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "168065",
  "state": "Unspecified",
  "subcategory": "Restaurant Foods",
  "tags": [
    "legumes-and-pulses",
    "restaurant-foods",
    "unspecified"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
