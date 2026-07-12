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
  "id": "usda-sr-legacy-174288",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 92.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Chickpea flour (besan)",
  "nutritionPerBasis": {
    "calcium_mg": 45.0,
    "carbs_g": 57.8,
    "energy_kcal": 1620.0,
    "fat_g": 6.69,
    "fibre_g": 10.8,
    "folate_ug": 437.0,
    "iron_mg": 4.86,
    "magnesium_mg": 166.0,
    "omega3_g": 0.0,
    "phosphorus_mg": 318.0,
    "potassium_mg": 846.0,
    "protein_g": 22.4,
    "salt_g": 0.16,
    "sat_fat_g": 0.693,
    "sodium_mg": 64.0,
    "sugar_g": 10.8,
    "vitamin_a_ug": 2.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 0.83,
    "vitamin_k_ug": 9.1
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "174288",
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
