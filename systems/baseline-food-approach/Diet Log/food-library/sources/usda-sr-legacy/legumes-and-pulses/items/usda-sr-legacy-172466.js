/* Isolated Diet Log food record. Source of truth for this food. */
(function(){
  "use strict";
  var item={
  "basis": "g",
  "basisGrams": 100.0,
  "basisLabel": "100 g",
  "category": "Legumes & Pulses",
  "defaultMeasure": "tbsp",
  "description": "Legumes and Legume Products",
  "id": "usda-sr-legacy-172466",
  "measures": [
    {
      "gramsPerUnit": 1.0,
      "key": "g",
      "kind": "weight",
      "label": "g"
    },
    {
      "gramsPerUnit": 15.0,
      "key": "tbsp",
      "kind": "unit",
      "label": "tbsp"
    },
    {
      "gramsPerUnit": 233.0,
      "key": "cup",
      "kind": "unit",
      "label": "cup"
    }
  ],
  "name": "Frijoles rojos volteados (Refried beans, red, canned)",
  "nutritionPerBasis": {
    "calcium_mg": 33.0,
    "carbs_g": 15.5,
    "energy_kcal": 604.0,
    "fat_g": 6.93,
    "fibre_g": 4.7,
    "folate_ug": 5.0,
    "iron_mg": 1.95,
    "magnesium_mg": 36.0,
    "omega3_g": 0.426,
    "phosphorus_mg": 91.0,
    "potassium_mg": 310.0,
    "protein_g": 5.0,
    "salt_g": 0.9375,
    "sat_fat_g": 0.926,
    "sodium_mg": 375.0,
    "sugar_g": 0.0,
    "vitamin_a_ug": 0.0,
    "vitamin_c_mg": 0.0,
    "vitamin_e_mg": 1.04,
    "vitamin_k_ug": 0.0
  },
  "source": "USDA SR Legacy April 2018",
  "sourceId": "172466",
  "state": "Fried",
  "subcategory": "Legumes and Legume Products",
  "tags": [
    "fried",
    "legumes-and-legume-products",
    "legumes-and-pulses"
  ]
};
  var list=Array.isArray(window.BASELINE_DIET_FOOD_LIBRARY)?window.BASELINE_DIET_FOOD_LIBRARY:(window.BASELINE_DIET_FOOD_LIBRARY=[]);
  if(!list.some(function(existing){return existing&&existing.id===item.id;})) list.push(item);
})();
